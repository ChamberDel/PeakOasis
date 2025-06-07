import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#eae4da] text-neutral-700 p-6 text-center flex flex-col items-center">
      <p className="mb-2 text-base font-medium">
        &copy; 2025 Peak Oasis Retreat. Virgin Gorda, BVI.
      </p>
      
      <div className="flex justify-center gap-6 mt-1">
        <a
          href="https://instagram.com/peakoasisretreat"
          target="_blank"
          rel="noopener noreferrer"
          className="transition transform hover:scale-110 hover:text-[#E1306C]"
          aria-label="Instagram"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://facebook.com/peakoasisretreat"
          target="_blank"
          rel="noopener noreferrer"
          className="transition transform hover:scale-110 hover:text-[#1877F2]"
          aria-label="Facebook"
        >
          <FaFacebookF size={24} />
        </a>
        <a
          href="https://www.tiktok.com/@peakoasisretreat"
          target="_blank"
          rel="noopener noreferrer"
          className="transition transform hover:scale-110 hover:text-black"
          aria-label="TikTok"
        >
          <FaTiktok size={24} />
        </a>
      </div>
    </footer>
  );
}
