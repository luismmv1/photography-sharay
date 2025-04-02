"use client";

import { FormErrors } from "@/app/getData/interfacesDataForm"; // Import interfaces
import formvalidations from "@/app/getData/validationsDataForm"; // Import validations
import { motion } from "motion/react";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { BsFillEnvelopeAtFill } from "react-icons/bs";

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "", 
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateField(name as keyof FormErrors, value);
  };

  const validateField = (name: keyof FormErrors, value: string) => {
    const rule = formvalidations[name];
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

  const validateForm = () => {
    let isValid = true;
    const newErrors: FormErrors = {
      name: "",
      email: "",
      message: "",
    };

    Object.keys(formData).forEach((field) => {
      const value = formData[field as keyof typeof formData];
      const rule = formvalidations[field as keyof typeof formvalidations];
      if (rule) {
        if (rule.required && !value.trim()) {
          newErrors[field as keyof FormErrors] = rule.errorMessage;
          isValid = false;
        } else if (rule.minLength && value.trim().length < rule.minLength) {
          newErrors[field as keyof FormErrors] = rule.errorMessage;
          isValid = false;
        } else if (rule.regex && !rule.regex.test(value)) {
          newErrors[field as keyof FormErrors] = rule.errorMessage;
          isValid = false;
        }
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Por favor corrige los errores en el formulario.");
      return;
    }

    // Simulate form submission
    toast.success("Formulario enviado correctamente.");
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setErrors({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Toaster position="top-right" />
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Envíame un Correo</h3>
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
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Tu correo electrónico"
            className={`w-full px-4 py-2 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
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
          className={`w-full px-4 py-2 rounded-lg ${Object.values(errors).some((err) => err) ? "bg-gray-400 text-gray-800" : "bg-indigo-600 hover:bg-indigo-500 text-white"
            }`}
          disabled={Object.values(errors).some((err) => err)}
        >
          <div className="flex items-center justify-center space-x-2">
            <span>Enviar</span>
            <BsFillEnvelopeAtFill className="text-center text-2xl" />
          </div>
        </button>
      </form>
    </motion.div>
  );
};

export default EmailForm;