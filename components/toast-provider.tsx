"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, X } from "lucide-react";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type ToastType = "success" | "error";

type ToastOptions = {
  type: ToastType;
  message: string;
  duration?: number;
};

type ToastState = {
  id: number;
  type: ToastType;
  message: string;
} | null;

type ToastContextValue = {
  showToast: (options: ToastOptions) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

function ToastViewport({
  toast,
  onDismiss,
}: {
  toast: ToastState;
  onDismiss: () => void;
}) {
  return (
    <div className="pointer-events-none fixed inset-x-4 top-4 z-[1200] flex justify-end sm:right-6 sm:top-6">
      <AnimatePresence>
        {toast ? (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className={`pointer-events-auto w-full max-w-sm rounded-[24px] border px-4 py-4 shadow-[var(--section-card-shadow)] backdrop-blur-xl ${
              toast.type === "success"
                ? "border-emerald-500/30 bg-[var(--surface-elevated)]"
                : "border-red-500/30 bg-[var(--surface-elevated)]"
            }`}
            role={toast.type === "error" ? "alert" : "status"}
            aria-live={toast.type === "error" ? "assertive" : "polite"}
          >
            <div className="flex items-start gap-3">
              <span
                className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                  toast.type === "success"
                    ? "bg-emerald-500/12 text-emerald-500"
                    : "bg-red-500/12 text-red-500"
                }`}
              >
                {toast.type === "success" ? (
                  <CheckCircle2 size={20} />
                ) : (
                  <AlertCircle size={20} />
                )}
              </span>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  {toast.type === "success" ? "Message sent" : "Something went wrong"}
                </p>
                <p className="mt-1 text-sm leading-6 text-[var(--muted-foreground)]">
                  {toast.message}
                </p>
              </div>

              <button
                type="button"
                onClick={onDismiss}
                suppressHydrationWarning
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-[var(--muted-foreground)] transition hover:bg-[#8750f7]/10 hover:text-[var(--foreground)]"
                aria-label="Dismiss notification"
              >
                <X size={18} />
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastState>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearToastTimer = () => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const dismissToast = () => {
    clearToastTimer();
    setToast(null);
  };

  const showToast = ({ type, message, duration = 4500 }: ToastOptions) => {
    clearToastTimer();

    const nextToast = {
      id: Date.now(),
      type,
      message,
    };

    setToast(nextToast);
    timeoutRef.current = setTimeout(() => {
      setToast((current) => (current?.id === nextToast.id ? null : current));
      timeoutRef.current = null;
    }, duration);
  };

  useEffect(() => clearToastTimer, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastViewport toast={toast} onDismiss={dismissToast} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider.");
  }

  return context;
}
