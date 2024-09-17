import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { SelectedPage } from '@/shared/types';
import { useForm } from 'react-hook-form';
const Contacto = ({ setSelectedPage }) => {
    const { register, trigger, formState: { errors }, } = useForm();
    const onSubmit = async (e) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };
    return (_jsx("section", { id: 'contacto', children: _jsxs(motion.div, { className: 'contacto-container', onViewportEnter: () => setSelectedPage(SelectedPage.ContactUs), children: [_jsx(motion.div, { className: 'contacto-text', children: _jsx("p", { children: "\u00BFQuieres trabajar con nosotros, darnos alguna sugerencia o preparar un evento? \u00A1No dudes en contactarnos!" }) }), _jsx(motion.div, { className: 'contacto-form-container', children: _jsxs("form", { target: "_blank", onSubmit: onSubmit, action: "https://usebasin.com/f/adf45c3282ea", method: "POST", children: [_jsx("p", { className: 'contacto-text-titles', children: "Nombre" }), errors.name && (_jsxs("p", { className: "error-text", children: [errors.name.type === "required" && "Este campo es obligatorio", errors.name.type === "maxLength" &&
                                        "Longitud maxima de 100 caracteres"] })), _jsx("input", { className: 'contacto-input', type: "text", placeholder: "Nombre", ...register("name", { required: true, maxLength: 100 }) }), _jsx("p", { className: 'contacto-text-titles', children: "Email" }), errors.email && (_jsxs("p", { className: "error-text", children: [errors.email.type === "required" && "Este campo es obligatorio", errors.email.type === "pattern" && "Dirección de email inválida"] })), _jsx("input", { className: 'contacto-input', type: "text", placeholder: "Email", ...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                }) }), _jsx("p", { className: 'contacto-text-titles', children: "Mensaje" }), errors.message && (_jsxs("p", { className: 'error-text', children: [errors.message.type === "required" &&
                                        "Este campo es obligatorio", errors.message.type === "maxLength" &&
                                        "Longitud maxima de 2000 caracteres"] })), _jsx("textarea", { className: 'contacto-textarea', rows: 4, cols: 50, placeholder: "Tu Mensaje", ...register("message", { required: true, maxLength: 2000 }) }), _jsx("button", { className: "action-button", type: "submit", children: "Enviar" })] }) })] }) }));
};
export default Contacto;
