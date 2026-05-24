"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/components/toast-provider";
import "@/styles/contact.css";
import {
  type ChangeEvent,
  type FormEvent,
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";
import { useSearchParams } from "next/navigation";

const SERVICE_PLACEHOLDER = "";

type ContactFormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const createInitialFormState = (
  selectedService = SERVICE_PLACEHOLDER,
): ContactFormState => ({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: selectedService,
  message: "",
});

function ContactForm() {
  const { showToast } = useToast();
  const searchParams = useSearchParams();
  const requestedService = searchParams.get("service") ?? SERVICE_PLACEHOLDER;
  const previousRequestedServiceRef = useRef(requestedService);
  const [formData, setFormData] = useState<ContactFormState>(() =>
    createInitialFormState(requestedService),
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (requestedService === previousRequestedServiceRef.current) {
      return;
    }

    previousRequestedServiceRef.current = requestedService;
    setFormData((current) => ({
      ...current,
      service: requestedService,
    }));
  }, [requestedService]);

  const handleChange =
    (field: keyof ContactFormState) =>
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      const value = event.target.value;

      setFormData((current) => ({
        ...current,
        [field]: value,
      }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json().catch(() => null)) as
        | { error?: string; message?: string }
        | null;

      if (!response.ok) {
        throw new Error(
          result?.error ?? "Unable to send your message right now.",
        );
      }

      setFormData(createInitialFormState());
      showToast({
        type: "success",
        message:
          result?.message ??
          "Your message has been sent successfully. I will get back to you soon.",
      });
    } catch (error) {
      showToast({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className="contact-input"
          name="firstName"
          placeholder="First name"
          autoComplete="given-name"
          value={formData.firstName}
          onChange={handleChange("firstName")}
          disabled={isSubmitting}
          suppressHydrationWarning
          required
        />
        <input
          className="contact-input"
          name="lastName"
          placeholder="Last name"
          autoComplete="family-name"
          value={formData.lastName}
          onChange={handleChange("lastName")}
          disabled={isSubmitting}
          suppressHydrationWarning
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className="contact-input"
          name="email"
          type="email"
          placeholder="Email address"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange("email")}
          disabled={isSubmitting}
          suppressHydrationWarning
          required
        />
        <input
          className="contact-input"
          name="phone"
          type="tel"
          placeholder="Phone number"
          autoComplete="tel"
          value={formData.phone}
          onChange={handleChange("phone")}
          disabled={isSubmitting}
          suppressHydrationWarning
        />
      </div>

      <select
        className={`contact-input ${!formData.service ? "is-placeholder" : ""}`}
        name="service"
        value={formData.service}
        onChange={handleChange("service")}
        disabled={isSubmitting}
        suppressHydrationWarning
        required
      >
        <option value="">Select a service</option>
        <option value="Website Design & Development">Website Design & Development</option>
        <option value="Custom Web Applications">Custom Web Applications</option>
        <option value="Responsive Frontend Development">Responsive Frontend Development</option>
        <option value="WordPress & Sage Development">WordPress & Sage Development</option>
        <option value="E-commerce Solutions">E-commerce Solutions</option>
        <option value="Mobile App Development">Mobile App Development</option>
      </select>

      <textarea
        className="contact-input min-h-[180px] resize-y"
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange("message")}
        disabled={isSubmitting}
        suppressHydrationWarning
        required
      />

      <button
        type="submit"
        className="cursor-pointer rounded-full bg-gradient-to-r from-[#8750f7] to-[#2a1454] px-8 py-4 text-sm font-bold !text-white shadow-[0_18px_40px_rgba(135,80,247,0.35)] transition duration-300 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
        disabled={isSubmitting}
        suppressHydrationWarning
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6300919562",
  },
  {
    icon: Mail,
    label: "Email",
    value: "udaykumar.77348@gmail.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Uppal, Hyderabad, Telangana",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--page-background)] pb-24 pt-16 sm:pb-28 sm:pt-20 lg:py-28"
    >
      <div className="absolute right-0 top-16 h-[420px] w-[420px] rounded-full bg-[#8750f7]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[28px] bg-[var(--surface-elevated)] p-8 shadow-[var(--section-card-shadow)]"
        >
          <h2 className="bg-gradient-to-r from-[#8750f7] to-[#2a1454] bg-clip-text text-4xl font-black text-transparent sm:text-5xl">
            Let&apos;s work together!
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted-foreground)]">
           Have a project in mind or need help with a website, e-commerce store, web application, or mobile app? I&apos;d love to hear about your ideas and discuss how we can bring them to life.
          </p>

          <Suspense fallback={<div className="mt-8 min-h-[400px]" />}>
            <ContactForm />
          </Suspense>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center gap-8"
        >
          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="flex items-center gap-6">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#8750f7] to-[#2a1454] text-white">
                  <Icon size={22} />
                </span>

                <div>
                  <p className="text-base text-[var(--muted-foreground)]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xl font-bold text-[var(--foreground)]">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}

          <div className="mt-4 overflow-hidden rounded-[28px] border border-[var(--header-border)] bg-[var(--surface-elevated)] shadow-[var(--section-card-shadow)]">
            <iframe
              title="Uppal Hyderabad Map"
              src="https://www.google.com/maps?q=17.4015441,78.5681716&z=16&output=embed"
              className="h-[260px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
