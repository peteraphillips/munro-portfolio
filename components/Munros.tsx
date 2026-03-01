"use client";

import { motion } from "framer-motion";
import { useGhibliTheme } from "@/contexts/GhibliThemeContext";
import MUNRO_IMAGES from "@/data/munros";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

function MunroItem({
  src,
  name,
  onOpen,
}: {
  src: string;
  name: string;
  onOpen: (s: string) => void;
}) {
  const [dims, setDims] = useState<{ width: number; height: number } | null>(
    null,
  );

  useEffect(() => {
    let mounted = true;
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      if (!mounted) return;
      setDims({ width: img.naturalWidth, height: img.naturalHeight });
    };
    return () => {
      mounted = false;
    };
  }, [src]);

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.25 }}
      className="break-inside-avoid mb-4 overflow-hidden rounded-lg cursor-pointer relative"
      onClick={() => onOpen(src)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onOpen(src);
      }}
    >
      {dims ? (
        <Image
          src={src}
          alt={name || "munro"}
          title={name || "munro"}
          width={dims.width}
          height={dims.height}
          className="w-full block"
        />
      ) : (
        <div className="w-full bg-gray-200" style={{ paddingTop: "56%" }} />
      )}
      <p className="absolute bottom-2 left-2 text-xs bg-black/50 text-white px-2 py-1 rounded">
        {name || "munro"}
      </p>
    </motion.div>
  );
}

export default function Munros() {
  const { isGhibliMode } = useGhibliTheme();
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!previewSrc) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreviewSrc(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [previewSrc]);

  function PreviewPortal({
    src,
    onClose,
  }: {
    src: string;
    onClose: () => void;
  }) {
    useEffect(() => {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }, []);

    if (!src) return null;

    return createPortal(
      <div
        className="fixed inset-0 z- flex items-center justify-center bg-black/80"
        role="dialog"
        aria-modal="true"
        onClick={onClose}
      >
        <div
          className="relative w-[90vw] max-w-300 h-[80vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <Image src={src} alt={"preview"} fill className="object-contain" />
          <button
            className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 cursor-pointer hover:bg-gray-50/20 transition-colors rounded-full"
            onClick={onClose}
            aria-label="Close preview"
          >
            ✕
          </button>
        </div>
      </div>,
      document.body,
    );
  }

  return (
    <section
      id="munros"
      className="relative flex items-center justify-center px-6 py-6 transition-colors duration-300 "
    >
      <motion.div
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 4 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl text-center md:text-left backdrop-blur-sm bg-gray-50/5 rounded-lg p-6 shadow-lg/40"
      >
        <h2 className="text-4xl font-bold text-center  ">Munros</h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={`h-1 ${isGhibliMode ? "bg-skyBlue" : "bg-sunset"} my-6 mx-auto`}
        />
        <p className="mt-4 text-xl md:text-3xl">
          Munros are Scotland&apos;s mountains that are over 3,000 feet (914.4
          meters) high. There are 282 Munros, and I am always looking for an
          apportunity to bag my next one.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <h2 className="break-inside-avoid text-center text-2xl col-span-full py-2">
            Munros Summited:{" "}
            <span
              className={`text-6xl font-semibold ${isGhibliMode ? "text-skyBlue" : "text-sunset"}`}
            >
              {MUNRO_IMAGES.length}
            </span>{" "}
            /282
          </h2>

          <div className="mt-6 columns-2 sm:columns-3 md:columns-4 gap-2">
            {MUNRO_IMAGES.map((src) => {
              const filename = (src.split("/").pop() as string) || "";
              const name = filename.replace(/\.[^/.]+$/, "");
              return (
                <motion.div
                  whileHover={{ scale: 1.02, color: "white" }}
                  transition={{ duration: 0.3 }}
                  key={src}
                  className="overflow-hidden rounded-xl cursor-pointer py-1"
                  onClick={() => setPreviewSrc(src)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setPreviewSrc(src);
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative"
                  >
                    <Image
                      src={src}
                      alt={name || "munro"}
                      title={name || "munro"}
                      className="w-full block"
                      width={500}
                      height={500}
                    />
                    <p className="absolute bottom-2 left-2 text-xs bg-black/50 text-white px-2 py-1 rounded">
                      {name || "munro"}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
            {previewSrc && (
              <PreviewPortal
                src={previewSrc}
                onClose={() => setPreviewSrc(null)}
              />
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
