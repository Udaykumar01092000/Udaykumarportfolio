import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const DEFAULT_TO_EMAIL = "udaykumar.77348@gmail.com";

type ContactPayload = {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  phone?: unknown;
  service?: unknown;
  message?: unknown;
};

type NormalizedContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const normalizeField = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const buildPlainTextMessage = ({
  firstName,
  lastName,
  email,
  phone,
  service,
  message,
}: NormalizedContactPayload) =>
  [
    "New portfolio contact form submission",
    "",
    `First name: ${firstName}`,
    `Last name: ${lastName || "-"}`,
    `Email: ${email}`,
    `Phone: ${phone || "-"}`,
    `Service: ${service}`,
    "",
    "Message:",
    message,
  ].join("\n");

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid form submission." },
      { status: 400 },
    );
  }

  const firstName = normalizeField(payload.firstName);
  const lastName = normalizeField(payload.lastName);
  const email = normalizeField(payload.email);
  const phone = normalizeField(payload.phone);
  const service = normalizeField(payload.service);
  const message = normalizeField(payload.message);

  if (!firstName || !email || !service || !message) {
    return NextResponse.json(
      { error: "Please fill in the required fields before submitting." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (message.length > 4000) {
    return NextResponse.json(
      { error: "Your message is too long. Please keep it under 4000 characters." },
      { status: 400 },
    );
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? "465");
  const smtpSecure =
    process.env.SMTP_SECURE !== undefined
      ? process.env.SMTP_SECURE === "true"
      : smtpPort === 465;
  const smtpUser = process.env.SMTP_USER;
  const rawSmtpPass = process.env.SMTP_PASS;
  const smtpPass =
    smtpHost?.includes("gmail.com") && rawSmtpPass
      ? rawSmtpPass.replace(/\s+/g, "")
      : rawSmtpPass;
  const toEmail = process.env.CONTACT_FORM_TO_EMAIL ?? DEFAULT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FORM_FROM_EMAIL ?? smtpUser;
  const missingConfig = [
    ["SMTP_HOST", smtpHost],
    ["SMTP_PORT", process.env.SMTP_PORT ?? "465"],
    ["SMTP_USER", smtpUser],
    ["SMTP_PASS", smtpPass],
    ["CONTACT_FORM_FROM_EMAIL", fromEmail],
  ]
    .filter(([, value]) => !value)
    .map(([name]) => name);

  if (!Number.isFinite(smtpPort) || missingConfig.length > 0) {
    console.error("Contact form SMTP configuration is incomplete.", {
      missingConfig,
      smtpPort,
    });

    return NextResponse.json(
      { error: "The contact form is not configured yet. Please try again later." },
      { status: 500 },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New portfolio contact form message from ${firstName}${lastName ? ` ${lastName}` : ""}`,
      text: buildPlainTextMessage({
        firstName,
        lastName,
        email,
        phone,
        service,
        message,
      }),
    });

    return NextResponse.json({
      message: "Thanks for reaching out. Your message has been sent.",
    });
  } catch (error) {
    console.error("Contact form email send failed.", error);

    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again later." },
      { status: 500 },
    );
  }
}
