import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import {
  DEFAULT_VALUES_LOGIN,
  FORM_SCHEMA_LOGIN,
} from './constants/LoginConstants.js';

import HeaderAuth from '../../components/HeaderAuth.jsx';
import InputAuth from '../../components/InputAuth.jsx';
import ButtonAuth from '../../components/ButtonAuth.jsx';

import './Login.scss';

function Login() {
  const formSchema = z.object(FORM_SCHEMA_LOGIN);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: DEFAULT_VALUES_LOGIN,
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="seguridad bg-[#053275] h-full">
      <div
        className="seguridad__form flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 
       overflow-auto"
      >
        <HeaderAuth titulo="Iniciar Sesión" />

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            {/* USUARIO */}
            <InputAuth
              control={form.control}
              type="text"
              name="username"
              label="Usuario"
              placeholder="Ingrese su usuario"
            />

            {/* CONTRASEÑA */}
            <InputAuth
              control={form.control}
              type="password"
              name="password"
              label="Contraseña"
              placeholder="Ingrese su contraseña"
            />

            <ButtonAuth title="Iniciar sesión" />
          </form>
        </div>
      </div>
      <div className="seguridad__image" />
    </div>
  );
}

export default Login;
