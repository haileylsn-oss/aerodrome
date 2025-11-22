import React from "react";
import eth from '../../assets/ETH.svg'
import card1 from '../../assets/card1.jpg'
import card2 from '../../assets/card2.jpg'
import card3 from '../../assets/card3.jpg'
import { Link } from "react-router-dom";
import ma from '../../assets/ma.jpg'
import ConnectorApp from "../Connect/ConnectorApp"
const Eco = () => {
  return (
    <>
    <section className="relative flex flex-col pt-[var(--header-height)] -mt-[var(--header-height)]">
      {/* GRAY → BLUE BACKGROUND */}
     <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#e9e7e5] via-blue-500 to-[#e9e7e5]" />


      {/* TEXT SECTION */}
      <div className="relative z-20 pt-4 sm:pt-12 text-center max-w-xl mx-auto">
        <h2 className="mb-5 text-4xl font-semibold sm:text-7xl sm:mb-8">
          Swap, deposit,
          <br /> take to the skies
        </h2>

        <p className="hidden sm:block mx-auto w-5/6 text-sm sm:text-lg">
          Aerodrome is a <span className="font-bold">decentralized exchange</span>{" "}
          where you can execute low-fee swaps, deposit tokens to earn rewards,
          and participate in the onchain economy.
        </p>
      </div>

<div className="relative z-10 flex justify-center  items-center min-h-screen">
  {/* SWAP CARD */}
  <div className="max-w-xl mx-auto bg-white sm:-m-2 sm:rounded-[20px] sm:bg-white/5 sm:p-2 sm:outline sm:outline-white/15 sm:backdrop-blur-[1px] rounded-[20px]">
    <div className="bg-white via-white/5 to-white/0 rounded p-5 sm:p-8">

      {/* SELL */}
      <div className="space-y-3">
        <div className="flex justify-between px-2 text-sm font-semibold">
          <span>Sell</span>
          <span className="text-xs text-accent-50">Balance 0.0 ETH</span>
        </div>

        <div className="flex items-center gap-3 p-4 border rounded-xl border-accent-30">
          <button className="flex items-center gap-2 bg-accent-10 rounded-full p-2 pr-4 text-xs font-semibold">
         <img
  src={eth}
  className="w-6 h-6"
  alt="ETH"
/>

            ETH
          </button>

          <div className="flex flex-col w-full">
            <input
              className="w-full text-end text-2xl sm:text-3xl bg-transparent font-semibold outline-none placeholder:text-accent-30"
              placeholder="0"
            />
            <span className="text-end text-xs text-accent-50">~$0.0</span>
          </div>
        </div>
      </div>

      {/* SWITCH BUTTON */}
      <div className="flex items-center gap-3 my-5 sm:my-8">
        <div className="h-px flex-1 bg-accent-20" />
        <button className="bg-primary/10 p-2 rounded-full text-primary">
          ↓
        </button>
        <div className="h-px flex-1 bg-accent-20" />
      </div>

      {/* BUY */}
      <div className="space-y-3">
        <div className="flex justify-between px-2 text-sm font-semibold">
          <span>Buy</span>
          <span className="text-xs text-accent-50">Balance 0.0 AERO</span>
        </div>

        <div className="flex items-center gap-3 p-4 border rounded-xl border-accent-30">
          <button className="flex items-center gap-2 bg-accent-10 rounded-full p-2 pr-4 text-xs font-semibold">
            <img
              src="https://raw.githubusercontent.com/SmolDapp/tokenAssets/main/tokens/8453/0x940181a94a35a4569e4529a3cdfb74e38fd98631/logo.svg"
              className="size-6"
              alt="AERO"
            />
            AERO
          </button>

          <div className="flex flex-col w-full">
            <input
              disabled
              className="w-full text-end text-2xl sm:text-3xl bg-transparent font-semibold text-accent-30"
              value="0"
            />
            <span className="text-end text-xs text-accent-50">~$0.0</span>
          </div>
        </div>
      </div>

      {/* CONNECT BUTTON */}
      <div className="mt-5">
        <Link to={'/wallet'}>
        <button className="w-full py-3.5 bg-blue-600 text-white rounded-full font-semibold">
          Connect wallet
        </button></Link>
      </div>

    </div>
  </div>
</div>

    </section>
    
    <div className="flex flex-col px-6 md:gap-6 md:px-20 bg-[#e9e7e5]">
  {/* Heading */}
  <div className="mb-8 md:mb-3">
    <h2 className="text-xl sm:text-3xl font-semibold">
      A durable foundation
    </h2>
  </div>

  {/* Paragraph */}
  <div className="order-3 sm:max-w-md md:max-w-[810px]">
    <p className="text-xl sm:text-3xl">
      Aerodrome is a MetaDEX, combining elegant design, intelligent incentives, and battle-tested technology to deliver the next generation of liquidity infrastructure.
    </p>
  </div>
</div>


       <ConnectorApp/>

<div className="flex flex-col sm:flex-row flex-wrap bg-[#e9e7e5] justify-center items-center gap-4 p-4">
  <img src={card1} alt="Card 1" className="w-full sm:w-1/3 max-w-xs h-auto object-contain rounded-lg" />
  <img src={card2} alt="Card 2" className="w-full sm:w-1/3 max-w-xs h-auto object-contain rounded-lg" />
  <img src={card3} alt="Card 3" className="w-full sm:w-1/3 max-w-xs h-auto object-contain rounded-lg" />
</div>


<div className="grid grid-cols-1 gap-3 px-6 sm:px-0 lg:grid-cols-3 bg-[#e9e7e5] ">
  {/* Card 1 */}
  <div className="rounded-2xl bg-accent-0 p-7 md:p-8 lg:p-9 bg-gray-100 p-3 rounded">
    <div className="isolate w-full">
      <h3 className="mb-7 text-xs uppercase tracking-wider">Traders</h3>
      <div className="text-balance text-sm text-accent-50 lg:max-w-64 lg:text-base">
        <p>Swap tokens with predictable exchange rates and low fees</p>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="rounded-2xl bg-accent-0 p-7 md:p-8 lg:p-9 bg-gray-100 p-3 rounded">
    <div className="isolate w-full">
      <h3 className="mb-7 text-xs uppercase tracking-wider">Liquidity Providers</h3>
      <div className="text-balance text-sm text-accent-50 lg:max-w-64 lg:text-base">
        <p>Stake deposits to earn token emissions</p>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="rounded-2xl bg-accent-0 p-7 md:p-8 lg:p-9 bg-gray-100 p-3 rounded">
    <div className="isolate w-full">
      <h3 className="mb-7 text-xs uppercase tracking-wider">Voters</h3>
      <div className="text-balance text-sm text-accent-50 lg:max-w-64 lg:text-base">
        <p>Lock and vote for pools to earn weekly fees and incentives</p>
      </div>
    </div>
  </div>
</div>


<img 
  src={ma} 
  alt="" 
  className="transition-transform duration-500 ease-in-out sm:scale-100 scale-105"
/>
   


</>
  );
};

export default Eco;
