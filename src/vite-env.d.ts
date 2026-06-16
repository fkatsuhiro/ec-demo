/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FF_SALE_WOMEN: string;
  readonly VITE_FF_SALE_MEN: string;
  readonly VITE_FF_SALE_KIDS: string;
  readonly VITE_LOGIN_USER: string;
  readonly VITE_LOGIN_PASSWORD: string;
  readonly VITE_CREDIT_CARD_NUMBER: string;
  readonly VITE_CREDIT_CARD_EXPIRY: string;
  readonly VITE_CREDIT_CARD_CVV: string;
  readonly VITE_USER_NAME: string;
  readonly VITE_USER_EMAIL: string;
  readonly VITE_USER_ADDRESS: string;
  readonly VITE_USER_POSTAL_CODE: string;
  readonly VITE_USER_PHONE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
