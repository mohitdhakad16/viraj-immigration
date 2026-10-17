"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  isOpen: boolean;
  preselectedVisa: string;
  preselectedCountry: string;
  openModal: (visa?: string, country?: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedVisa, setPreselectedVisa] = useState("");
  const [preselectedCountry, setPreselectedCountry] = useState("");

  const openModal = (visa: string = "", country: string = "") => {
    setPreselectedVisa(visa);
    setPreselectedCountry(country);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        preselectedVisa,
        preselectedCountry,
        openModal,
        closeModal
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useConsultationModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useConsultationModal must be used within a ModalProvider");
  }
  return context;
}
