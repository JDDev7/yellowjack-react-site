import { motion } from 'framer-motion';
import { SelectedPage } from '@/shared/types';
import React from 'react'
import { useForm } from 'react-hook-form';
import { FormEvent } from 'react';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };

const Contacto = ({ setSelectedPage }: Props) => {
    const {
        register,
        trigger,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        const isValid = await trigger();
        if (!isValid) {
          e.preventDefault();
        }
      };
  return (
    <section id='contacto'>
        <motion.div className='contacto-container' onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
            {/* Text */}
            <motion.div className='contacto-text'>
            <p>¿Quieres trabajar con nosotros, darnos alguna sugerencia o preparar un evento? ¡No dudes en contactarnos!</p>
            </motion.div>
            {/* Form */}
            <motion.div className='contacto-form-container'>
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://usebasin.com/f/adf45c3282ea"
              method="POST"
            >
              <p className='contacto-text-titles'>Nombre</p>
              {errors.name && (
                <p className="error-text">
                  {errors.name.type === "required" && "Este campo es obligatorio"}
                  {errors.name.type === "maxLength" &&
                    "Longitud maxima de 100 caracteres"}
                </p>
              )}
              <input
                className='contacto-input'
                type="text"
                placeholder="Nombre"
                {...register("name", { required: true, maxLength: 100 })}
              />

              <p className='contacto-text-titles'>Email</p>
              {errors.email && (
                <p className="error-text">
                  {errors.email.type === "required" && "Este campo es obligatorio"}
                  {errors.email.type === "pattern" && "Dirección de email inválida"}
                </p>
              )}
              <input
                className='contacto-input'
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />

              <p className='contacto-text-titles'>Mensaje</p>
              {errors.message && (
                <p className='error-text'>
                  {errors.message.type === "required" &&
                    "Este campo es obligatorio"}
                  {errors.message.type === "maxLength" &&
                    "Longitud maxima de 2000 caracteres"}
                </p>
              )}
              <textarea
                className='contacto-textarea'
                rows={4}
                cols={50}
                placeholder="Tu Mensaje"
                {...register("message", { required: true, maxLength: 2000 })}
              />
              <button
                className="action-button"
                type="submit"
                
              >
                Enviar
              </button>
            </form>
            </motion.div>
        </motion.div>

    </section>
  )
}

export default Contacto