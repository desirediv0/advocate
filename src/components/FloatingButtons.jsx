"use client";

import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons({ phone = "+919871722270", whatsapp = "+919871722270" }) {
  const waHref = `https://wa.me/${whatsapp}`;
  const telHref = `tel:${phone}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:right-4 md:bottom-4 md:inset-x-auto">
      <div className="flex md:flex-col w-full md:w-auto md:gap-4">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex-1 md:flex-none flex items-center justify-center bg-green-500 hover:bg-green-600 text-white py-3 md:py-3 md:px-3 md:rounded-full shadow-lg transition-transform transform md:hover:scale-105"
        >
          <FaWhatsapp size={22} />
        </a>

        <a
          href={telHref}
          aria-label="Call us"
          className="flex-1 md:flex-none flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-3 md:py-3 md:px-3 md:rounded-full shadow-lg transition-transform transform md:hover:scale-105"
        >
          <FiPhone size={22} />
        </a>
      </div>
    </div>
  );
}