// import { NextRequest, NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(req: NextRequest) {
//     const { name, email, message } = await req.json();

//     if (!name || !email || !message) {
//         return NextResponse.json({ error: 'Por favor, rellena todos los campos.' }, { status: 400 });
//     }

//     // Configura el transporte de nodemailer
//     const transporter = nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         service: 'gmail', // O puedes usar SMTP o algún otro servicio
//         secure: true,
//         auth: {
//             user: process.env.EMAIL_USER, // El correo desde donde enviarás
//             pass: process.env.EMAIL_PASS, // La contraseña o app password
//         },
//     });

//     const mailOptions = {
//         from: email,
//         to: process.env.RECIPIENT_EMAIL, // A donde quieres enviar el correo
//         subject: `Nuevo mensaje de contacto de ${name}`,
//         text: message,
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         return NextResponse.json({ success: 'Mensaje enviado con éxito.' });
//     } catch (error) {
//         return NextResponse.json({ error: 'Error al enviar el mensaje. Inténtalo más tarde.' }, { status: 500 });
//     }
// }

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const { firstname, lastname, email, message, phone } = await request.json();
    console.log('Datos recibidos:', { firstname, lastname, email, message, phone });

    // Configurar Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail', // O cualquier otro servicio de correo que uses
        auth: {
            user: process.env.EMAIL_USER, // Usa las variables de entorno para la seguridad
            pass: process.env.EMAIL_PASS,
        },
    });
    const cuerpo = `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.5; padding: 20px; border: 1px solid #eaeaea; border-radius: 5px; background-color: #f9f9f9;">
        <h2 style="color: #00466a; font-size: 24px;">Nuevo mensaje de contacto</h2>
        <p style="font-size: 16px;"><strong>Nombre:</strong> ${firstname} ${lastname}</p>
        <p style="font-size: 16px;"><strong>Email:</strong> ${email}</p>
        <p style="font-size: 16px;"><strong>Mensaje:</strong></p>
        <p style="font-size: 16px; white-space: pre-line; background-color: #f1f1f1; padding: 10px; border-radius: 4px;">${message}</p>
        <hr style="border-top: 1px solid #ccc; margin: 20px 0;" />
        <p style="font-size: 14px; color: #555;">
            Este mensaje fue enviado desde el formulario de contacto de tu sitio web.<br />
            <em>Rodrigo Rivas Portfolio Desarrollador</em>
        </p>
    </div>
    `;

    const mailOptions = {
        from: email,
        to: process.env.RECIPIENT_EMAIL, // A quién enviar el correo
        subject: `Mensaje de ${firstname} ${lastname}`,
        html: cuerpo,
    };
    console.log('Intentando enviar correo...');
    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email enviado con éxito' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error al enviar el correo' }, { status: 500 });
    }
}

