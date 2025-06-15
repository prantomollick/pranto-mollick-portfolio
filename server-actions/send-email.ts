"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown) => {
  if (!value || typeof value !== "string") {
    return false;
  }

  return true;
};

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  // Validate the email field
  if (!validateString(senderEmail)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message)) {
    return {
      error: "Invalid message",
    };
  }

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "prantomollick01@gmail.com",
    subject: "Message from contact form",
    reply_to: senderEmail,
    text: `Name: ${senderEmail}\n\n${message}`,
  });
};
