"use client"
import { useEffect } from "react";

declare global {
  interface Window {
    Tawk_API?: Record<string, unknown>;
    Tawk_LoadStart?: Date;
  }
}

const TawkTo: React.FC = () => {
  useEffect(() => {
    // Prevent loading the script more than once
    if (window.Tawk_API) return;

    window.Tawk_API = {};
    window.Tawk_LoadStart = new Date();

    const script: HTMLScriptElement = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/6938fda08465ad197f9bc106/1jc39tfla";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    // Optional cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default TawkTo;
