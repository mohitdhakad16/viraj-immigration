"use client";

import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import type { DestinationHub } from "./InteractiveGlobalMap";

interface RealLeafletMapProps {
  selectedHub: DestinationHub;
  onSelectHub: (hub: DestinationHub) => void;
  hubs: DestinationHub[];
}

const HUB_GEO: Record<string, { lat: number; lng: number; flag: string }> = {
  canada: { lat: 45.4215, lng: -75.6972, flag: "🇨🇦" }, // Toronto / Ottawa
  australia: { lat: -37.8136, lng: 144.9631, flag: "🇦🇺" }, // Melbourne
  uk: { lat: 51.5074, lng: -0.1278, flag: "🇬🇧" }, // London
  germany: { lat: 52.5200, lng: 13.4050, flag: "🇩🇪" }, // Berlin
  usa: { lat: 40.7128, lng: -74.0060, flag: "🇺🇸" }, // New York
  uae: { lat: 25.2048, lng: 55.2708, flag: "🇦🇪" } // Dubai
};

const ORIGIN_GEO = { lat: 28.6139, lng: 77.2090, label: "HQ: New Delhi", flag: "🇮🇳" };

// Calculate curved flight corridor path between two geo coordinates
function getFlightCurve(
  start: [number, number],
  end: [number, number],
  numPoints: number = 35
): [number, number][] {
  const [lat1, lng1] = start;
  const [lat2, lng2] = end;

  // Arc altitude offset based on distance
  const distance = Math.sqrt(Math.pow(lat2 - lat1, 2) + Math.pow(lng2 - lng1, 2));
  const arcHeight = Math.min(Math.max(distance * 0.15, 8), 24);

  const midLat = (lat1 + lat2) / 2 + arcHeight;
  const midLng = (lng1 + lng2) / 2;

  const points: [number, number][] = [];
  for (let i = 0; i <= numPoints; i++) {
    const t = i / numPoints;
    const lat = (1 - t) * (1 - t) * lat1 + 2 * (1 - t) * t * midLat + t * t * lat2;
    const lng = (1 - t) * (1 - t) * lng1 + 2 * (1 - t) * t * midLng + t * t * lng2;
    points.push([lat, lng]);
  }
  return points;
}

export default function RealLeafletMap({
  selectedHub,
  onSelectHub,
  hubs
}: RealLeafletMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());
  const polylineRef = useRef<L.Polyline | null>(null);

  // Helper to create HTML string for marker
  const createMarkerHtml = (name: string, flag: string, isSelected: boolean) => {
    return `
      <div style="
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 5px 12px;
        border-radius: 9999px;
        background: ${isSelected ? "linear-gradient(135deg, #E20935 0%, #990022 100%)" : "rgba(22, 23, 26, 0.94)"};
        color: #ffffff;
        border: ${isSelected ? "2px solid #ffffff" : "1px solid rgba(255, 255, 255, 0.25)"};
        box-shadow: ${isSelected ? "0 0 20px rgba(226, 9, 53, 0.8), 0 4px 12px rgba(0, 0, 0, 0.6)" : "0 4px 12px rgba(0, 0, 0, 0.45)"};
        white-space: nowrap;
        font-family: inherit;
        transform: ${isSelected ? "scale(1.08)" : "scale(1)"};
        transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      ">
        <span style="font-size: 15px; line-height: 1;">${flag}</span>
        <span style="font-size: 12px; font-weight: 800; letter-spacing: 0.3px; color: #ffffff;">${name}</span>
        ${
          isSelected
            ? `<span style="width: 7px; height: 7px; border-radius: 50%; background: #ffffff; box-shadow: 0 0 6px #ffffff;"></span>`
            : ""
        }
      </div>
    `;
  };

  // 1. Initialize Map
  useEffect(() => {
    if (!containerRef.current || mapInstanceRef.current) return;

    // Create Map instance
    const map = L.map(containerRef.current, {
      center: [28, 25],
      zoom: 2,
      minZoom: 2,
      maxZoom: 6,
      worldCopyJump: true,
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: true
    });

    // CartoDB Dark Matter tiles (real globe, coastlines, country boundaries)
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution:
        '&copy; <a href="https://carto.com/" target="_blank" rel="noopener noreferrer">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OSM</a>',
      subdomains: "abcd",
      maxZoom: 19
    }).addTo(map);

    // Origin Marker: New Delhi HQ
    const originIcon = L.divIcon({
      className: "origin-leaflet-marker",
      html: `
        <div style="
          cursor: default;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border-radius: 9999px;
          background: rgba(14, 15, 18, 0.95);
          color: #ffffff;
          border: 1.5px solid #10b981;
          box-shadow: 0 0 14px rgba(16, 185, 129, 0.6);
          white-space: nowrap;
          font-family: inherit;
        ">
          <span style="font-size: 13px;">${ORIGIN_GEO.flag}</span>
          <span style="font-size: 11px; font-weight: 800; color: #34d399; letter-spacing: 0.5px;">NEW DELHI HQ</span>
        </div>
      `,
      iconSize: [130, 32],
      iconAnchor: [65, 16]
    });

    L.marker([ORIGIN_GEO.lat, ORIGIN_GEO.lng], { icon: originIcon }).addTo(map);

    // Destination Markers
    hubs.forEach((hub) => {
      const geo = HUB_GEO[hub.id];
      if (!geo) return;

      const isSel = hub.id === selectedHub.id;
      const icon = L.divIcon({
        className: `hub-marker-${hub.id}`,
        html: createMarkerHtml(hub.name, geo.flag, isSel),
        iconSize: [130, 34],
        iconAnchor: [65, 17]
      });

      const marker = L.marker([geo.lat, geo.lng], { icon }).addTo(map);
      marker.on("click", () => {
        onSelectHub(hub);
      });

      markersRef.current.set(hub.id, marker);
    });

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
      markersRef.current.clear();
      polylineRef.current = null;
    };
  }, []);

  // 2. React to selectedHub changes: update icons, draw flight path, smooth camera
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Update marker icons
    hubs.forEach((hub) => {
      const marker = markersRef.current.get(hub.id);
      const geo = HUB_GEO[hub.id];
      if (!marker || !geo) return;

      const isSel = hub.id === selectedHub.id;
      const updatedIcon = L.divIcon({
        className: `hub-marker-${hub.id}`,
        html: createMarkerHtml(hub.name, geo.flag, isSel),
        iconSize: [130, 34],
        iconAnchor: [65, 17]
      });
      marker.setIcon(updatedIcon);
    });

    // Redraw flight curve polyline
    if (polylineRef.current) {
      polylineRef.current.remove();
      polylineRef.current = null;
    }

    const destGeo = HUB_GEO[selectedHub.id];
    if (destGeo) {
      const curveCoords = getFlightCurve(
        [ORIGIN_GEO.lat, ORIGIN_GEO.lng],
        [destGeo.lat, destGeo.lng]
      );

      const flightPath = L.polyline(curveCoords, {
        color: "#E20935",
        weight: 3,
        opacity: 0.95,
        dashArray: "8, 8",
        lineCap: "round",
        lineJoin: "round"
      }).addTo(map);

      polylineRef.current = flightPath;

      // Smooth camera pan to show both origin and destination
      const bounds = L.latLngBounds([
        [ORIGIN_GEO.lat, ORIGIN_GEO.lng],
        [destGeo.lat, destGeo.lng]
      ]);
      map.flyToBounds(bounds, {
        padding: [60, 60],
        maxZoom: 4,
        duration: 1.2
      });
    }
  }, [selectedHub, hubs]);

  return (
    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] min-h-[360px] sm:min-h-[420px] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}
