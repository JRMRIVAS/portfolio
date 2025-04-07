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
    const { name, lastName, email, message } = await request.json();
    console.log('Datos recibidos:', { name, lastName, email, message });

    // Configurar Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail', // O cualquier otro servicio de correo que uses
        auth: {
            user: process.env.EMAIL_USER, // Usa las variables de entorno para la seguridad
            pass: process.env.EMAIL_PASS,
        },
    });
    const cuerpo = `
    <div style="font-family: 'Arial', sans-serif; background-color: #1c1c22; color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #333; max-width: 600px; margin: 0 auto;">
        <header style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #00ff99; font-size: 28px; margin: 0;">Nuevo Mensaje de Contacto</h1>
            <p style="color: #888; font-size: 14px; margin: 5px 0;">Formulario de contacto - Rodrigo Rivas Portfolio</p>
        </header>
        <main>
            <section style="margin-bottom: 20px;">
                <h2 style="color: #00ff99; font-size: 20px; border-bottom: 1px solid #444; padding-bottom: 5px;">Detalles del Mensaje</h2>
                <p style="font-size: 16px; margin: 10px 0;"><strong style="color: #00ff99;">Nombre:</strong> <span style="color: #fff;">${name} ${lastName}</span></p>
                <p style="font-size: 16px; margin: 10px 0;"><strong style="color: #00ff99;">Email:</strong><span style="color: #fff;">${email}</span> </p>
            </section>
            <section style="margin-bottom: 20px;">
                <h2 style="color: #00ff99; font-size: 20px; border-bottom: 1px solid #444; padding-bottom: 5px;">Mensaje</h2>
                <p style="font-size: 16px; background-color: #2a2a33; padding: 15px; border-radius: 5px; border: 1px solid #444; white-space: pre-line;">
                    ${message}
                </p>
            </section>
        </main>
        <div style="text-align: center; margin-top: 20px; font-size: 14px; color: #888;">
            <p>Este mensaje fue enviado desde el formulario de contacto de tu sitio web.</p>
            <p><em style="color: #00ff99;">Rodrigo Rivas Portfolio Desarrollador</em></p>
        </div>
    </div>
    `;

    const mailOptions = {
        from: email,
        to: process.env.RECIPIENT_EMAIL, // A quién enviar el correo
        subject: `Mensaje de ${name} ${lastName}`,
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

