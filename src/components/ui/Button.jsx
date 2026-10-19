import React from "react";

export function Button({
  children,
  className = "",
  variant = "default",
  size = "default",
  type = "button",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center font-headline font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]";

  const variants = {
    default:
      "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-500 text-white border border-indigo-400/30 shadow-md shadow-indigo-950/40 hover:shadow-indigo-900/40",
    outline:
      "border border-indigo-400/30 bg-slate-900/60 hover:bg-white/10 text-indigo-200 hover:text-white shadow-sm",
    ghost:
      "text-indigo-200 hover:text-white hover:bg-white/10 border border-transparent",
    secondary:
      "bg-slate-800 text-indigo-100 hover:bg-slate-700 hover:text-white border border-indigo-400/20 shadow-sm",
  };

  const sizes = {
    default: "px-5 py-2.5 rounded-full text-sm",
    sm: "px-3.5 py-1.5 rounded-full text-xs",
    lg: "px-8 py-3.5 rounded-full text-base",
    icon: "p-2.5 rounded-full",
  };

  const variantClass = variants[variant] || variants.default;
  const sizeClass = sizes[size] || sizes.default;

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClass} ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
