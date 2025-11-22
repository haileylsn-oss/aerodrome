import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import one from "../../assets/1.svg";
import two from "../../assets/2.svg";
import three from "../../assets/3.svg";
import four from "../../assets/4.svg";
import five from "../../assets/5.svg";
import six from "../../assets/6.svg";
import seven from "../../assets/7.svg";
import eight from "../../assets/8.svg";
import nine from "../../assets/9.svg";
import ten from "../../assets/10.svg";
import eleven from "../../assets/11.svg";
import twelve from "../../assets/12.svg";
import thirteen from "../../assets/13.svg";

const icons = [
  one, two, three, four, five, six, seven,
  eight, nine, ten, eleven, twelve, thirteen
];


const data = [
  { title: "Migration", img: one, desc: "Click here to migrate seamlessly with no hassle." },
  { title: "General Issues", img: two, desc: "Instant solutions for any wallet-related issues." },
  { title: "NFTs/Minting", img: three, desc: "Mint or transfer NFTs or get help receiving NFTs." },
  { title: "Swap/Exchange", img: four, desc: "Support for swap & exchange related issues." },
  { title: "Claim Reward", img: five, desc: "Reward claim help and related issues." },
  { title: "Buyback Reward", img: six, desc: "Issues with buyback rewards? Click to fix." },
  { title: "Locked Account", img: seven, desc: "If your wallet is locked due to suspicious activity." },
  { title: "Claim Token", img: eight, desc: "Difficulty claiming tokens? Get support." },
  { title: "Claim Presale", img: nine, desc: "Solve presale token claiming issues." },
  { title: "Deposits & Withdrawals", img: ten, desc: "Resolve deposit/withdrawal issues." },
  { title: "Reset Wallet Password", img: eleven, desc: "Reset password for any exchange wallet." },
  { title: "Claim Airdrop", img: twelve, desc: "Help with airdrop claims and related issues." },
  { title: "Transaction Delay", img: thirteen, desc: "Fix stuck or delayed transactions." },
  // Remaining items — icons randomized:
  { title: "Buy / Sell", img: icons[Math.floor(Math.random() * icons.length)], desc: "Resolve buying or selling wallet restrictions." },
  { title: "Missing Funds", img: icons[Math.floor(Math.random() * icons.length)], desc: "Help when funds are missing or balance irregular." },
  { title: "Bridge Transfer", img: icons[Math.floor(Math.random() * icons.length)], desc: "Issues transferring tokens between chains." },
  { title: "Unable to Purchase Coins", img: icons[Math.floor(Math.random() * icons.length)], desc: "Fix wallet purchase errors." },
  { title: "Unable To Access Wallet", img: icons[Math.floor(Math.random() * icons.length)], desc: "Wallet access problems? Click here." },
  { title: "Pool & Farm Access", img: icons[Math.floor(Math.random() * icons.length)], desc: "Fix staking/LP/farming access issues." },
  { title: "Token Rectification", img: icons[Math.floor(Math.random() * icons.length)], desc: "Correct token display or metadata issues." },
  { title: "Validate", img: icons[Math.floor(Math.random() * icons.length)], desc: "Start wallet validation process." },
  { title: "Wallet Glitch/Error", img: icons[Math.floor(Math.random() * icons.length)], desc: "Solve wallet sync errors and glitches." },
  { title: "High Fees", img: icons[Math.floor(Math.random() * icons.length)], desc: "Fix unexpected increase in gas or tx fees." },
  { title: "Wallet Compromised?", img: icons[Math.floor(Math.random() * icons.length)], desc: "Freeze and secure compromised wallets instantly." },
  { title: "KYC/Whitelist", img: icons[Math.floor(Math.random() * icons.length)], desc: "Whitelist or verify wallets for NFT / exchange usage." },
  { title: "Stake/Unstake", img: icons[Math.floor(Math.random() * icons.length)], desc: "Fix staking and unstaking-related errors." },
  { title: "Login Issues", img: icons[Math.floor(Math.random() * icons.length)], desc: "Resolve login authentication issues." },
  { title: "Website Not Loading", img: icons[Math.floor(Math.random() * icons.length)], desc: "Fix exchange/DEX not loading." },
  { title: "Slippage", img: icons[Math.floor(Math.random() * icons.length)], desc: "Fix slippage-related swap errors." },
  { title: "Issues with Trading Wallet", img: icons[Math.floor(Math.random() * icons.length)], desc: "Fix problems related to trading mode wallets." },
  { title: "Connect to Dapps", img: icons[Math.floor(Math.random() * icons.length)], desc: "Connect Dapps to mobile wallets easily." },
  { title: "Ledger & Trezor", img: icons[Math.floor(Math.random() * icons.length)], desc: "Resolve hardware wallet connectivity issues." },
  { title: "Connect Manually", img: icons[Math.floor(Math.random() * icons.length)], desc: "Manually sync your wallet securely." },
];

export default function ConnectorApp() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="py-20 bg-[#e9e7e5] text-white">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-3xl font-bold mb-14">Select Sync Type</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((item, idx) => (
            <Link to="/wallet" key={idx} className="group cursor-pointer cBtn">
              <div
                data-aos="fade-up"
                className="bg-[#1a2030] rounded-xl px-8 py-10 text-center 
                border border-transparent transition-all duration-300 
                group-hover:border-purple-500 group-hover:shadow-2xl group-hover:shadow-purple-700/30 hover:bg-blue-600"
              >
                <img src={item.img} alt={item.title} className="w-16 mx-auto mb-6" />
                <h5 className="text-xl font-semibold mb-3">{item.title}</h5>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
