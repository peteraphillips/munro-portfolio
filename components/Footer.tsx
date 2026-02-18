// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="text-white py-6 flex flex-col items-center justify-center">
      <p className="mb-2">© {new Date().getFullYear()} Peter Phillips Portfolio</p>

      <a href="#hero" className="mt-4 text-sm hover:text-leafGreen">Back to Top ↑</a>
    </footer>
  );
}
