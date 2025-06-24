
"use client";

import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useFormContextData = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    category: [],
    languages: [],
    feeRange: "",
    location: "",
    profileImage: null,
    imagePreview: null,
  });

  const updateFormData = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};
