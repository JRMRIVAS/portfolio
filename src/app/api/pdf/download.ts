import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Definir la ruta del archivo PDF
        const filePath = path.resolve('./public/CV_RodrigoRivas.pdf');

        // Leer el archivo en formato binario
        const fileContents = await fs.readFile(filePath);

        // Establecer los encabezados apropiados para la descarga
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=CV_RodrigoRivas.pdf');

        // Enviar el archivo
        res.send(fileContents);
    } catch (error) {
        res.status(500).json({ message: 'Error al descargar el archivo' });
    }
}
