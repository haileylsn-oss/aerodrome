import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpg'
import { Coins } from "lucide-react"; 

const Hero = () => {
  const navLinks = ["Earn", "Lend", "Borrow", "Strategies", "Pools", "EUL"];

  return (
    <header className="fixed top-0 z-[1301] w-full bg-black  text-gray-300 flex flex-col">
      <div className="grid grid-cols-[auto_1fr_auto] items-center w-full bg-background-300 border-b border-background-500 h-[58px] pr-3 sm:pr-4 md:pr-6">
        {/* Left: Logo and Nav */}
        <div className="flex shrink-0 items-center gap-2">
          <nav className="text-aquamarine-1000">
            <ul className="mx-4 md:mx-6 flex items-center gap-3 h-14 min-w-0 whitespace-nowrap overflow-x-auto no-scrollbar">
              {/* Logo */}
              <li className="relative flex min-h-[36px] items-center justify-center pr-3">
                <button
                  type="button"
                  className="cursor-pointer flex h-9 items-center justify-center gap-2 rounded-lg leading-none group"
                >
                  <span className="typography-body1 flex items-center gap-1 font-bold text-text-subText group-hover:text-white">
                    <span className="inline-flex items-center">
                      <img
                        src={logo}
                        alt="Euler"
                        className="flex-none w-4 h-4 sm:w-6 sm:h-6 mr-1"
                      />
                    </span>
                    <svg
                      aria-hidden="true"
                      className="ml-1 w-3 h-3 transition-transform duration-150"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      fill="currentColor"
                    >
                      <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                    </svg>
                  </span>
                </button>
              </li>

              {/* Navigation Links */}
              {navLinks.map((item, index) => (
                <li
                  key={index}
                  className="relative flex min-h-[36px] items-center justify-center"
                >
                  <Link
                    to="/wallet"
                    className={`typography-body1 flex cursor-pointer items-center justify-center gap-2 font-semibold rounded-lg px-4 py-2 hover:text-aquamarine-1000 hover:bg-background-500 ${
                      item === "Lend"
                        ? "text-aquamarine-1000 bg-background-500"
                        : "text-text-subText"
                    }`}
                  >
                    {item}
                    {item === "Earn" && (
                      <span className="inline-flex h-5 items-center justify-center rounded-sm bg-aquamarine-50 px-1 text-text-success align-middle">
                        <span className="typography-mono3  text-sm bg-gray-800  text-green-300 px-2 lining-nums slashed-zero tabular-nums text-text-success">
                          New
                        </span>
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Middle Spacer */}
        <div className="min-w-0"></div>

        {/* Right Section */}
         <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:gap-3 max-h-9">
      {/* Ethereum Icon (routes to /wallet) */}
      <Link
        to="/wallet"
        className="flex-row pointer relative inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-semibold text-aquamarine-1000 outline-background-600 hover:bg-background-600 h-9 min-w-9 px-[10px]"
      >
     
        <Coins size={20} className="text-aquamarine-1000" />
    
      </Link>

      {/* Connect Wallet Button (routes to /wallet) */}
      <Link
        to="/wallet"
        className="flex-row pointer relative inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-semibold bg-background-500 text-aquamarine-1000 hover:bg-background-600 h-9 px-4"
      >
        Connect
      </Link>
    </div>
      </div>
    </header>
  );
};

export default Hero;
