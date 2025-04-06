"use client";

import contactFormData from "@/app/getData/contactDataForm"; // Importar datos del sitio web
import { FormData, FormErrors } from "@/app/getData/interfacesDataForm"; // Importar interfaces
import validationsDataForm from "@/app/getData/validationsDataForm"; // Importar validaciones
import { motion } from "motion/react";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { FaWhatsapp } from "react-icons/fa";
import DropdownPhoneCodes from "./DropdownPhoneCodes";

const WhatsAppForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    message: "",
    countryCode: "", // Sin país preseleccionado
    flag: "", // Sin bandera preseleccionada
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    phone: "",
    message: "",
    countryCode: "", // Validación añadida para el país
  });

  const [resetDropdown, setResetDropdown] = useState(false); // Estado para reiniciar el dropdown

  // Manejar cambios en el país seleccionado desde DropdownPhoneCodes
  const handleCountryChange = (selectedCountry: { name: string; code: string; phoneCode: string; flagEmoji: string } | null) => {
    setFormData((prev) => ({
      ...prev,
      countryCode: selectedCountry ? selectedCountry.phoneCode : "",
      flag: selectedCountry ? selectedCountry.flagEmoji : "",
    }));
    if (selectedCountry) {
      setErrors((prev) => ({
        ...prev,
        countryCode: "", // Eliminar error si selecciona un país
      }));
    }
  };

  // Manejar cambios en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateField(name as keyof FormErrors, value);
  };

  // Validar campo individualmente
  const validateField = (name: keyof FormErrors, value: string) => {
    const rule = validationsDataForm[name];
    if (!rule) return;

    let error = "";
    if (rule.required && !value.trim()) {
      error = rule.errorMessage;
    } else if (rule.minLength && value.trim().length < rule.minLength) {
      error = rule.errorMessage;
    } else if (rule.regex && !rule.regex.test(value)) {
      error = rule.errorMessage;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  // Validar todos los campos antes de enviar
  const validateForm = () => {
    let isValid = true;
    const newErrors: FormErrors = {
      name: "",
      phone: "",
      message: "",
      countryCode: "", // Validación para el país
    };

    Object.keys(formData).forEach((field) => {
      const value = formData[field as keyof FormData];
      const rule = validationsDataForm[field as keyof typeof validationsDataForm];
      if (rule && rule.required && !value.trim()) {
        newErrors[field as keyof FormErrors] = rule.errorMessage;
        isValid = false;
      } else if (rule?.minLength && value.trim().length < rule.minLength) {
        newErrors[field as keyof FormErrors] = rule.errorMessage;
        isValid = false;
      } else if (rule?.regex && !rule.regex.test(value)) {
        newErrors[field as keyof FormErrors] = rule.errorMessage;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  // Manejar envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Por favor corrige los errores en el formulario.");
      return;
    }

    // Construir el mensaje dinámicamente usando la plantilla de siteData
    const messageText = contactFormData.messageTemplate
      .replace("{{ownerName}}", contactFormData.ownerName)
      .replace("{{mainService}}", contactFormData.mainService)
      .replace("{{name}}", formData.name)
      .replace("{{countryCode}}", formData.countryCode)
      .replace("{{phone}}", formData.phone)
      .replace("{{message}}", formData.message);

    const whatsappUrl = `https://wa.me/${contactFormData.ownerNumber}?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, "_blank");
    toast.success("Mensaje enviado correctamente.");

    resetForm();
  };

  // Reiniciar el formulario, incluyendo sanitización del dropdown
  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      message: "",
      countryCode: "", // Reiniciar país seleccionado
      flag: "", // Reiniciar bandera seleccionada
    });
    setErrors({
      name: "",
      phone: "",
      message: "",
      countryCode: "", // Reiniciar errores
    });
    setResetDropdown(true); // Reiniciar el dropdown visualmente
    setTimeout(() => setResetDropdown(false), 0); // Resetear estado para futuros reinicios
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Toaster position="top-right" />
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Contáctame por WhatsApp</h3>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            className={`w-full px-4 py-2 border rounded-lg ${errors.name ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="flex items-center space-x-2">
          {/* Dropdown para seleccionar el país */}
          <DropdownPhoneCodes
            onCountryChange={handleCountryChange}
            resetDropdown={resetDropdown} // Prop para manejar el reset visual
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Tu teléfono"
            className={`flex-1 px-4 py-2 border rounded-lg ${errors.phone ? "border-red-500" : "border-gray-300"}`}
          />
        </div>
        {errors.countryCode && <p className="text-red-500 text-sm mt-1">{errors.countryCode}</p>}
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tu mensaje"
            className={`w-full px-4 py-2 border rounded-lg ${errors.message ? "border-red-500" : "border-gray-300"}`}
            rows={4}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className={`w-full px-4 py-2 rounded-lg ${
            Object.values(errors).some((err) => err)
              ? "bg-gray-400 text-gray-800"
              : "bg-green-700 hover:bg-green-600 text-white"
          }`}
          disabled={Object.values(errors).some((err) => err)}
        >
          <div className="flex items-center justify-center space-x-2">
            <span>Enviar a WhatsApp</span>
            <FaWhatsapp className="text-center text-2xl" />
          </div>
        </button>
      </form>
    </motion.div>
  );
};

export default WhatsAppForm;