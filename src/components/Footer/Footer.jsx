import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const goToWallet = (e) => {
    e.preventDefault();
    navigate("/wallet"); // routes to wallet page
  };

  return (
    <footer className="pb-4 bg-[#e9e7e5] pt-8 sm:pb-6 sm:pt-12 md:pb-8 md:pt-16 lg:pt-24">
      <div className="rounded-2xl bg-accent-0 p-6 sm:p-10">
        {/* Top Navigation */}
        <div className="flex items-start justify-between">
          <nav className="flex flex-col gap-2 text-xs text-accent-60 lg:flex-row lg:items-center lg:gap-5">
            <div className="flex flex-col gap-2 lg:flex-row lg:gap-6">
              <a href="/wallet" onClick={goToWallet} className="text-accent-50 hover:text-accent-60">Documentation</a>
              <a href="/wallet" onClick={goToWallet} className="text-accent-50 hover:text-accent-60">Security</a>
              <a href="/wallet" onClick={goToWallet} className="text-accent-50 hover:text-accent-60">Brand Kit</a>
              <a href="/wallet" onClick={goToWallet} className="text-accent-50 hover:text-accent-60">Flight School</a>
              <a href="/wallet" onClick={goToWallet} className="text-accent-50 hover:text-accent-60">Aero Launch</a>
            </div>
          </nav>

          {/* Dark Mode Button */}
          <button
            type="button"
            className="flex h-9 w-14 cursor-pointer items-center justify-center rounded-full bg-accent-10 transition hover:opacity-80"
            aria-label="Switch to dark mode"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-moon"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
          </button>
        </div>

        {/* Bottom Footer */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between text-xs text-accent-50">
          <div className="mb-6 flex flex-col gap-2 sm:mb-0 md:flex-row md:items-center md:gap-3">
            <div>2025 © Aerodrome Finance</div>
            <div className="flex gap-2">v5.0.0+b5bb75</div>
            <div className="hidden text-accent-20 md:block">·</div>
            <a href="/wallet" onClick={goToWallet} className="hover:text-accent-60">Legal Disclaimer</a>
            <a href="/wallet" onClick={goToWallet} className="hover:text-accent-60">Legal Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
