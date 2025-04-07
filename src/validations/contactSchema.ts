import { z } from "zod";

// Función para validar nombres y apellidos
const nameValidation = (maxLength: number) =>
    z.string()
        .min(2, "Debe tener al menos 2 letras")
        .max(maxLength, `No debe exceder los ${maxLength} caracteres`)
        .regex(/^[a-zA-Z]+$/, "No debe contener espacios, números o símbolos");
        // .regex(/^[A-Z][a-z]+$/, "Debe comenzar con mayúscula y no contener espacios, números o símbolos");

// Esquema de validación
export const contactSchema = z.object({
    name: nameValidation(10), // Nombre con máximo 10 caracteres
    lastName: nameValidation(15), // Apellido con máximo 15 caracteres
    email: z.string()
        .email("Correo inválido") // Valida que tenga la estructura correcta
        .max(50, "El correo no debe exceder los 50 caracteres"), // Limita el tamaño del correo
    message: z.string()
        .min(10, "El mensaje debe tener al menos 10 caracteres") // Evita mensajes vacíos
        .max(500, "El mensaje no debe exceder los 500 caracteres") // Evita mensajes muy largos
        .refine((value) => !/<|>|\{|\}|\$|script|alert|onerror/i.test(value), {
            message: "El mensaje contiene caracteres no permitidos",
        }), // Protege contra intentos de inyección de código
});

// Tipado para el formulario basado en el esquema de Zod
export type ContactFormData = z.infer<typeof contactSchema>;
