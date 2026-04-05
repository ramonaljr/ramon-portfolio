"use server";

import { Resend } from "resend";

interface ContactFormState {
  success: boolean;
  error: string | null;
}

export async function sendContactEmail(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const projectType = formData.get("projectType") as string;
  const budget = formData.get("budget") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Fallback: log to console if Resend is not configured
    console.log("Contact form submission (Resend not configured):", {
      name,
      email,
      projectType,
      budget,
      message,
    });
    return { success: true, error: null };
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "hello@ramon.dev",
      subject: `New inquiry from ${name} — ${projectType}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project Type: ${projectType}`,
        `Budget: ${budget}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return { success: true, error: null };
  } catch {
    return {
      success: false,
      error: "Something went wrong. Please email me directly.",
    };
  }
}
