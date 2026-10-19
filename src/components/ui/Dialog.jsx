import React, { useEffect, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

const DialogContext = createContext({
  open: false,
  onOpenChange: () => {},
});

export function Dialog({ open, onOpenChange, children }) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onOpenChange?.(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [open, onOpenChange]);

  return (
    <DialogContext.Provider
      value={{
        open: Boolean(open),
        onOpenChange: onOpenChange || (() => {}),
      }}
    >
      {children}
    </DialogContext.Provider>
  );
}

export function DialogTrigger({ children, asChild, ...props }) {
  const { onOpenChange } = useContext(DialogContext);
  return (
    <div onClick={() => onOpenChange(true)} {...props}>
      {children}
    </div>
  );
}

export function DialogContent({ children, className = "", ...props }) {
  const { open, onOpenChange } = useContext(DialogContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop mit sanftem Blur */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300"
        onClick={() => onOpenChange(false)}
        aria-hidden="true"
      />

      {/* Modal Fenster */}
      <div
        className={`relative z-10 w-full max-w-lg bg-slate-900/95 border border-indigo-400/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-indigo-950/90 text-white backdrop-blur-xl transition-all duration-300 transform scale-100 ${className}`}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 p-2 rounded-full text-indigo-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          aria-label="Schließen"
        >
          <X className="w-5 h-5" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export function DialogHeader({ children, className = "" }) {
  return <div className={`flex flex-col space-y-2 text-left ${className}`}>{children}</div>;
}

export function DialogTitle({ children, className = "" }) {
  return (
    <h3 className={`text-xl font-bold font-headline text-white tracking-tight ${className}`}>
      {children}
    </h3>
  );
}

export function DialogDescription({ children, className = "" }) {
  return <p className={`text-sm text-indigo-200/80 font-body ${className}`}>{children}</p>;
}

export function DialogFooter({ children, className = "" }) {
  return (
    <div className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-6 ${className}`}>
      {children}
    </div>
  );
}
