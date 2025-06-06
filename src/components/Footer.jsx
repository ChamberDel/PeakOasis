import { FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#eae4da] text-neutral-700 p-4 text-center">
      <p>&copy; 2025 Peak Oasis Retreat. Virgin Gorda, BVI.</p>
      <div className="mt-2 flex justify-center gap-4">
        <a
          href="https://instagram.com/peakoasisretreat"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#e63946] transition"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://facebook.com/peakoasisretreat"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#e63946] transition"
        >
          <FaFacebookF size={20} />
        </a>
      </div>
    </footer>
  );
}
