// interfaces.ts

export interface FormData {
    name: string;
    phone: string;
    message: string;
    countryCode: string;
    flag: string;
  }
  
  export interface FormErrors {
    name: string;
    phone?: string;
    email?: string;
    message: string;
    countryCode?: string;
  }
  
  export interface Country {
    code: string;
    name: string;
    flag: string;
  }
  
  export type ValidationRules = {
    required: boolean;
    minLength?: number;
    regex?: RegExp;
    errorMessage: string;
  };