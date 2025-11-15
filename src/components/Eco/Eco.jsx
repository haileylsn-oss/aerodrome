import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Info } from "lucide-react";


const Eco = () => {

   const [inWallet, setInWallet] = useState(false);
  const navigate = useNavigate();

  const goToWallet = () => navigate("/wallet");



  return (
    <>
<section className="w-full py-8 text-gray-300 mt-8">
  <div className="flex flex-row items-center justify-between max-w-6xl mx-auto px-4 gap-4 sm:gap-8">

    {/* Left Content */}
    <Link
      to="/wallet"
      className="flex min-w-0 gap-3 max-w-[800px] hover:opacity-90 transition"
    >
      <div className="flex items-center gap-3 sm:gap-6">
        {/* Icon Frame */}
        <div className="flex shrink-0 items-center justify-center w-12 h-12 sm:w-24 sm:h-24 rounded-2xl border bg-[#00ffd11a] border-[#2AE5B933]">
          <svg
            className="w-6 h-8 sm:w-[34px] sm:h-[47px]"
            viewBox="0 0 34 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Lend</title>
            <path d="M9.00001 13.4551L1 18.0928L17 27.3681L33 18.0928L25 13.4551" stroke="#2AE5B9" strokeWidth="0.6" strokeMiterlimit="10"/>
            <path d="M33 36.5664L17 45.8417V27.291L33 18.0156V36.5664Z" fill="url(#paint0_linear)" fillOpacity="0.5" stroke="#2AE5B9" strokeWidth="0.6" strokeMiterlimit="10"/>
            <path d="M1 18.0156V36.5664L17 45.8417V27.291L1 18.0156Z" fill="url(#paint1_linear)" fillOpacity="0.5" stroke="#2AE5B9" strokeWidth="0.6" strokeMiterlimit="10"/>
            <rect x="24.7" y="15.8582" width="15.4" height="15.4" rx="7.7" transform="rotate(180 24.7 15.8582)" fill="url(#paint2_linear)" fillOpacity="0.2" stroke="#2AE5B9" strokeWidth="0.6"/>
            <path d="M17.0002 4.85156V11.4641M17.0002 11.4641L20.2002 8.22939M17.0002 11.4641L13.8002 8.22939" stroke="#2AE5B9" strokeWidth="0.6" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="paint0_linear" x1="25" y1="18.0156" x2="25" y2="45.8417" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2AE5B9"/>
                <stop offset="1" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="paint1_linear" x1="9" y1="18.0156" x2="9" y2="45.8417" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2AE5B9"/>
                <stop offset="1" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="paint2_linear" x1="33" y1="16.1582" x2="33" y2="32.1582" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2AE5B9"/>
                <stop offset="1" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-0.5 sm:gap-1">
          <h1 className="text-base sm:text-2xl font-semibold text-text-primary">Lend</h1>
          <p className="text-[10px] sm:text-sm text-text-secondary">
            Earn yield on assets by lending them out.
          </p>
        </div>
      </div>
    </Link>

    {/* Right Stats */}
    <ul className="flex flex-row items-end gap-4 sm:gap-8">
      {/* Total Borrow */}
      <li>
        <Link
          to="/wallet"
          className="flex flex-col items-end gap-0.5 hover:opacity-90 transition"
        >
          <h6 className="font-semibold text-text-subText text-[10px] sm:text-sm">
            Total borrow
          </h6>
          <div className="flex flex-col gap-0.5">
            <div className="flex justify-end gap-1">
              <h6 className="text-text-subText text-[14px] sm:text-xl font-semibold">$</h6>
              <h6 className="text-text-primary text-[14px] sm:text-xl font-semibold">1.29B</h6>
            </div>
            <p className="text-text-secondary text-[10px] sm:text-sm">$713.96M on Ethereum</p>
          </div>
        </Link>
      </li>

      {/* Total Supply */}
      <li>
        <Link
          to="/wallet"
          className="flex flex-col items-end gap-0.5 hover:opacity-90 transition"
        >
          <h6 className="font-semibold text-text-subText text-[10px] sm:text-sm">
            Total supply
          </h6>
          <div className="flex flex-col gap-0.5">
            <div className="flex justify-end gap-1">
              <h6 className="text-text-subText text-[14px] sm:text-xl font-semibold">$</h6>
              <h6 className="text-text-primary text-[14px] sm:text-xl font-semibold">2.50B</h6>
            </div>
            <p className="text-text-secondary text-[10px] sm:text-sm">$1.49B on Ethereum</p>
          </div>
        </Link>
      </li>
    </ul>

  </div>
</section>



 <div className="text-gray-400 p-4 rounded-2xl shadow-sm flex flex-row flex-wrap justify-between items-center gap-4">
  {/* Left Section: Search + Filters */}
  <div className="flex flex-row  items-center gap-3 sm:gap-6 text-[10px] sm:text-sm">
    {/* Search */}
    <button
      onClick={goToWallet}
      className="flex items-center gap-1 sm:gap-2 text-gray-300 hover:text-purple-600 transition"
    >
      <Search className="w-3 h-3 sm:w-4 sm:h-4" />
      <span className="font-medium">Search</span>
    </button>

    {/* Asset */}
    <div className="flex gap-1 sm:gap-2">
      <span className="font-medium">Asset</span>
      <span className="text-gray-400">is</span>
      <span className="font-semibold text-gray-800 bg-green-200 px-2 rounded-full ">any asset</span>
    </div>

    {/* Market */}
    <div className="flex gap-1 sm:gap-2">
      <span className="font-medium">Market</span>
      <span className="text-gray-400">is</span>
      <span className="font-semibold text-gray-800 bg-green-200 px-2 rounded-full">any market</span>
    </div>

    {/* Risk Curator */}
    <div className="flex gap-1 sm:gap-2">
      <span className="font-medium">Risk curator</span>
      <span className="text-gray-400">is</span>
      <span className="font-semibold text-gray-800 bg-green-200 px-2 rounded-full">anyone</span>
    </div>
  </div>

  {/* Right Section: In Wallet + Info + Toggle */}
  <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-sm text-gray-300">
    <span className="font-medium">In wallet</span>
    <Info className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />

    {/* Toggle Switch */}
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={inWallet}
        onChange={() => {
          setInWallet(!inWallet);
          goToWallet();
        }}
        className="sr-only peer"
      />
      <div className="w-8 h-4 sm:w-10 sm:h-5 bg-gray-300 rounded-full peer peer-checked:bg-purple-500 transition-all"></div>
      <div className="absolute left-0.5 top-0.5 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full peer-checked:translate-x-4 sm:peer-checked:translate-x-5 transition-transform"></div>
    </label>
  </div>
</div>


    
    </>
  );
};

export default Eco;
