import { z } from 'zod';

export const FORM_SCHEMA_LOGIN = {
  username: z.string().min(1, {
    message: 'Este campo es requerido.',
  }),
  password: z.string().min(1, {
    message: 'Este campo es requerido.',
  }),
};

export const DEFAULT_VALUES_LOGIN = {
  username: '',
  password: '',
};
