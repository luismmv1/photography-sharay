type ValidationRules = {
  required: boolean;
  minLength?: number;
  regex?: RegExp;
  errorMessage: string;
};

const validationsDataForm: Record<string, ValidationRules> = {
  name: {
    required: true,
    minLength: 3,
    errorMessage: "El nombre debe tener al menos 3 caracteres.",
  },
  phone: {
    required: true,
    minLength: 7,
    regex: /^[0-9]*$/,
    errorMessage: "El número de teléfono debe tener al menos 7 dígitos y contener solo números.",
  },
  email: {
    required: true,
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Por favor ingresa un correo electrónico válido.",
  },
  message: {
    required: true,
    minLength: 20,
    errorMessage: "El mensaje debe tener al menos 20 caracteres.",
  },
  countryCode: {
    required: true,
    errorMessage: "Por favor selecciona un país.",
  },
};

export default validationsDataForm;