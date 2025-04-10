import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  const transporter =
    process.env.APP_ENV === "development"
      ? nodemailer.createTransport({
          service: process.env.TRANSPORTER_SERVICE,
          auth: {
            user: process.env.TRANSPORTER_USER,
            pass: process.env.TRANSPORTER_PASS,
          },
        })
      : nodemailer.createTransport({
          host: process.env.TRANSPORTER_SERVICE,
          port: 587, // Standard SMTP port for TLS
          secure: false, // true for 465, false for other ports
          auth: {
            user: process.env.TRANSPORTER_USER,
            pass: process.env.TRANSPORTER_PASS,
          },
          tls: {
            rejectUnauthorized: false, // Sometimes required for older SMTP servers
          },
        });

  console.log({
    host: process.env.TRANSPORTER_SERVICE,
    port: 587, // Standard SMTP port for TLS
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.TRANSPORTER_USER,
      pass: process.env.TRANSPORTER_PASS,
    },
  });
  const mailOptions =
    process.env.APP_ENV === "development"
      ? {
          from: email,
          to: process.env.TRANSPORTER_USER, // Send to yourself
          subject: `New Contact Form Submission from ${name}`,
          text: `From: ${name} <${email}>\n\n${message}`,
          replyTo: email,
        }
      : {
          from: process.env.TRANSPORTER_USER, // Should use authenticated sender address
          to: process.env.TRANSPORTER_USER,
          subject: `Inn at the Pier Contact Form Submission from ${name}`,
          text: `From: ${name} <${email}>\n\n${message}`,
          replyTo: email,
        };

  try {
    console.log(mailOptions);
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Email failed to send." + error });
  }
}
