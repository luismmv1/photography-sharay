"use client";

import codeCountryDataForm from "@/app/getData/codeCountryDataForm"; // Importar los datos desde el JSON
import React, { useEffect, useRef, useState } from "react";
import { BsArrowDown, BsGlobe } from "react-icons/bs";

interface DropdownPhoneCodesProps {
  onCountryChange: (selectedCountry: { name: string; code: string; phoneCode: string; flagEmoji: string } | null) => void;
  resetDropdown?: boolean; // Prop para indicar si debe reiniciar
}

const DropdownPhoneCodes: React.FC<DropdownPhoneCodesProps> = ({ onCountryChange, resetDropdown }) => {
  const [searchQuery, setSearchQuery] = useState(""); // Estado para búsqueda
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Control del desplegable
  const [selectedCountry, setSelectedCountry] = useState<{ name: string; code: string; phoneCode: string; flagEmoji: string } | null>(null); // Ningún país preseleccionado

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Manejar clics fuera del dropdown para cerrarlo
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Reiniciar el dropdown cuando se detecte un reset
  useEffect(() => {
    if (resetDropdown) {
      setSelectedCountry(null); // Reiniciar país seleccionado
      setSearchQuery(""); // Limpiar el filtro de búsqueda
    }
  }, [resetDropdown]);

  const handleCountrySelect = (country: { name: string; code: string; phoneCode: string; flagEmoji: string }) => {
    setSelectedCountry(country); // Actualizar el país seleccionado
    onCountryChange(country); // Informar al formulario
    setSearchQuery(""); // Limpiar el filtro
    setDropdownOpen(false); // Cerrar el dropdown
  };

  const clearSearchQuery = () => {
    setSearchQuery(""); // Limpiar el filtro
  };

  const filteredCountries = codeCountryDataForm.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) || // Filtro por nombre del país
      country.phoneCode.includes(searchQuery) // Filtro por código telefónico
  );

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setDropdownOpen(!isDropdownOpen)}
        className="flex items-center cursor-pointer text-black bg-gray-200 hover:bg-gray-300 border font-medium rounded-lg text-sm px-5 py-2.5 shadow-md"
        type="button"
      >
        {selectedCountry ? (
          <>
            <span className="mr-2">{selectedCountry.flagEmoji}</span>
            <span className="mr-2">{selectedCountry.phoneCode}</span>
          </>
        ) : (
          <span className="text-gray-500 mr-2">País</span>
        )}
        <BsGlobe className="mr-2"/><BsArrowDown />

      </button>

      {isDropdownOpen && (
        <div className="absolute z-10 bg-white rounded-lg shadow-sm w-60 mt-2 dark:bg-gray-700">
          <div className="p-3 relative">
            <input
              type="text"
              id="input-group-search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Buscar país o código"
            />
            {searchQuery && (
              <button
                onClick={clearSearchQuery}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700"
              >
                ✖
              </button>
            )}
          </div>
          <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200">
            {filteredCountries.map((country) => (
              <li
                key={country.code}
                className="flex items-center px-2 py-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
                onClick={() => handleCountrySelect(country)}
              >
                <span className="mr-2">{country.flagEmoji}</span>
                <span className="mr-2">{country.name}</span>
                <span>{country.phoneCode}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownPhoneCodes;