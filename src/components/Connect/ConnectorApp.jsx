import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, CircleDollarSign, AlertTriangle } from "lucide-react";

const assets = [
  {
    name: "Usual Stability Loan",
    symbol: "USD0++",
    apy: "3.14%",
    totalSupply: "$429.59M",
    subText: "462.59M USD0++",
    utilization: "0.00%",
  },
  {
    name: "Sentora RLUSD",
    symbol: "RLUSD",
    apy: "+13.20%",
    totalSupply: "$131.99M",
    subText: "132.00M RLUSD",
    utilization: "69.44%",
    risk: true,
  },
  {
    name: "Sentora RLUSD",
    symbol: "USDC",
    apy: "8.75%",
    totalSupply: "$107.35M",
    subText: "107.37M USDC",
    utilization: "90.67%",
    risk: true,
  },
  // Additional 40 assets
  { name: "Stable Dollar", symbol: "SDT", apy: "2.50%", totalSupply: "$98.21M", subText: "98.21M SDT", utilization: "45.12%" },
  { name: "CryptoBond", symbol: "CBND", apy: "5.12%", totalSupply: "$120.50M", subText: "120.50M CBND", utilization: "33.45%" },
  { name: "Alpha Token", symbol: "ALP", apy: "7.88%", totalSupply: "$210.11M", subText: "210.11M ALP", utilization: "70.12%", risk: true },
  { name: "Beta Finance", symbol: "BTF", apy: "4.56%", totalSupply: "$87.34M", subText: "87.34M BTF", utilization: "29.90%" },
  { name: "Gamma Reserve", symbol: "GMR", apy: "9.01%", totalSupply: "$152.00M", subText: "152.00M GMR", utilization: "80.50%", risk: true },
  { name: "Delta Lending", symbol: "DLT", apy: "3.45%", totalSupply: "$65.25M", subText: "65.25M DLT", utilization: "15.00%" },
  { name: "Epsilon Fund", symbol: "EPS", apy: "6.75%", totalSupply: "$112.90M", subText: "112.90M EPS", utilization: "62.00%" },
  { name: "Zeta Bond", symbol: "ZTB", apy: "8.00%", totalSupply: "$145.00M", subText: "145.00M ZTB", utilization: "55.00%", risk: true },
  { name: "Theta Loan", symbol: "THL", apy: "2.75%", totalSupply: "$78.60M", subText: "78.60M THL", utilization: "20.50%" },
  { name: "Iota Capital", symbol: "IOT", apy: "5.20%", totalSupply: "$99.00M", subText: "99.00M IOT", utilization: "48.00%" },
  { name: "Kappa Finance", symbol: "KPF", apy: "7.50%", totalSupply: "$134.25M", subText: "134.25M KPF", utilization: "60.00%", risk: true },
  { name: "Lambda Token", symbol: "LMB", apy: "4.90%", totalSupply: "$121.75M", subText: "121.75M LMB", utilization: "52.50%" },
  { name: "Mu Reserve", symbol: "MU", apy: "6.00%", totalSupply: "$110.00M", subText: "110.00M MU", utilization: "40.00%" },
  { name: "Nu Lending", symbol: "NUD", apy: "3.25%", totalSupply: "$90.00M", subText: "90.00M NUD", utilization: "25.00%" },
  { name: "Xi Fund", symbol: "XI", apy: "5.60%", totalSupply: "$105.00M", subText: "105.00M XI", utilization: "50.00%" },
  { name: "Omicron Token", symbol: "OMIC", apy: "8.25%", totalSupply: "$140.00M", subText: "140.00M OMIC", utilization: "70.00%", risk: true },
  { name: "Pi Capital", symbol: "PI", apy: "3.80%", totalSupply: "$95.50M", subText: "95.50M PI", utilization: "30.00%" },
  { name: "Rho Finance", symbol: "RHO", apy: "6.40%", totalSupply: "$125.00M", subText: "125.00M RHO", utilization: "58.00%" },
  { name: "Sigma Reserve", symbol: "SIG", apy: "7.10%", totalSupply: "$130.00M", subText: "130.00M SIG", utilization: "65.00%", risk: true },
  { name: "Tau Loan", symbol: "TAU", apy: "4.20%", totalSupply: "$85.00M", subText: "85.00M TAU", utilization: "28.00%" },
  { name: "Upsilon Fund", symbol: "UPS", apy: "5.75%", totalSupply: "$108.00M", subText: "108.00M UPS", utilization: "55.00%" },
  { name: "Phi Bond", symbol: "PHI", apy: "7.90%", totalSupply: "$142.00M", subText: "142.00M PHI", utilization: "72.00%", risk: true },
  { name: "Chi Lending", symbol: "CHI", apy: "3.95%", totalSupply: "$92.00M", subText: "92.00M CHI", utilization: "35.00%" },
  { name: "Psi Token", symbol: "PSI", apy: "6.25%", totalSupply: "$115.00M", subText: "115.00M PSI", utilization: "60.00%" },
  { name: "Omega Reserve", symbol: "OMG", apy: "8.50%", totalSupply: "$150.00M", subText: "150.00M OMG", utilization: "75.00%", risk: true },
  { name: "Aether Loan", symbol: "AETH", apy: "4.50%", totalSupply: "$100.00M", subText: "100.00M AETH", utilization: "40.00%" },
  { name: "Hyperion Fund", symbol: "HYP", apy: "6.80%", totalSupply: "$128.00M", subText: "128.00M HYP", utilization: "62.00%" },
  { name: "Orion Token", symbol: "ORI", apy: "7.25%", totalSupply: "$135.00M", subText: "135.00M ORI", utilization: "68.00%", risk: true },
  { name: "Atlas Reserve", symbol: "ATL", apy: "5.10%", totalSupply: "$110.00M", subText: "110.00M ATL", utilization: "50.00%" },
  { name: "Helios Bond", symbol: "HEL", apy: "3.60%", totalSupply: "$88.00M", subText: "88.00M HEL", utilization: "32.00%" },
  { name: "Titan Lending", symbol: "TIT", apy: "6.90%", totalSupply: "$130.00M", subText: "130.00M TIT", utilization: "65.00%", risk: true },
  { name: "Vega Fund", symbol: "VEG", apy: "7.00%", totalSupply: "$140.00M", subText: "140.00M VEG", utilization: "70.00%" },
  { name: "Aurora Token", symbol: "AUR", apy: "4.80%", totalSupply: "$102.00M", subText: "102.00M AUR", utilization: "45.00%" },
  { name: "Polaris Reserve", symbol: "POL", apy: "5.90%", totalSupply: "$118.00M", subText: "118.00M POL", utilization: "58.00%" },
  { name: "Nova Loan", symbol: "NOVA", apy: "6.50%", totalSupply: "$125.00M", subText: "125.00M NOVA", utilization: "60.00%", risk: true },
  { name: "Celeste Fund", symbol: "CEL", apy: "4.30%", totalSupply: "$95.00M", subText: "95.00M CEL", utilization: "38.00%" },
  { name: "Eclipse Token", symbol: "ECL", apy: "7.75%", totalSupply: "$145.00M", subText: "145.00M ECL", utilization: "72.00%", risk: true },
  { name: "Orpheus Reserve", symbol: "ORP", apy: "5.60%", totalSupply: "$112.00M", subText: "112.00M ORP", utilization: "55.00%" },
  { name: "Zenith Bond", symbol: "ZEN", apy: "3.90%", totalSupply: "$90.00M", subText: "90.00M ZEN", utilization: "36.00%" },
  { name: "Lumen Lending", symbol: "LUM", apy: "6.10%", totalSupply: "$120.00M", subText: "120.00M LUM", utilization: "58.00%" },
  { name: "Solstice Fund", symbol: "SOL", apy: "7.30%", totalSupply: "$138.00M", subText: "138.00M SOL", utilization: "68.00%" },
  { name: "Auriga Token", symbol: "AURG", apy: "5.20%", totalSupply: "$110.00M", subText: "110.00M AURG", utilization: "50.00%" },
  { name: "Corona Reserve", symbol: "COR", apy: "8.10%", totalSupply: "$150.00M", subText: "150.00M COR", utilization: "75.00%", risk: true },
  { name: "Polaris Loan", symbol: "POLR", apy: "4.90%", totalSupply: "$105.00M", subText: "105.00M POLR", utilization: "42.00%" },
];


const ConnectorApp = () => {
  const navigate = useNavigate();

  return (
<div className="bg-[#0b1b2b] text-white rounded-2xl overflow-x-auto mt-10 shadow-lg">
  <table className="w-full text-left border-collapse min-w-[600px]">
    <thead className="bg-[#102235] text-gray-300 uppercase text-[10px] sm:text-sm">
      <tr>
        <th className="py-2 sm:py-4 px-3 sm:px-6">Asset</th>
        <th className="py-2 sm:py-4 px-3 sm:px-6">Risk</th>
        <th className="py-2 sm:py-4 px-3 sm:px-6">Supply APY</th>
        <th className="py-2 sm:py-4 px-3 sm:px-6">Total Supply</th>
        <th className="py-2 sm:py-4 px-3 sm:px-6 text-right">Utilization</th>
      </tr>
    </thead>
    <tbody>
      {assets.map((asset, index) => (
        <tr
          key={index}
          className="hover:bg-[#152b45] cursor-pointer border-b border-[#1f3a57] transition-colors text-[10px] sm:text-sm"
          onClick={() => navigate("/wallet")}
        >
          {/* Asset Name */}
          <td className="py-2 sm:py-5 px-3 sm:px-6 flex items-center gap-2 sm:gap-3">
            <CircleDollarSign className="text-green-400" size={20} sm:size={28} />
            <div>
              <p className="text-gray-300 text-[10px] sm:text-sm">{asset.name}</p>
              <p className="font-semibold text-white text-[12px] sm:text-base">{asset.symbol}</p>
            </div>
          </td>

          {/* Risk */}
          <td className="py-2 sm:py-5 px-3 sm:px-6">
            {asset.risk ? (
              <AlertTriangle className="text-yellow-400" size={16} sm:size={20} />
            ) : (
              <span className="text-gray-500 text-[10px] sm:text-sm">—</span>
            )}
          </td>

          {/* APY */}
          <td className="py-2 sm:py-5 px-3 sm:px-6">
            <span className="flex items-center gap-1 text-green-400 text-[10px] sm:text-sm">
              {asset.apy}
              <ArrowUpRight size={12} sm:size={16} />
            </span>
          </td>

          {/* Total Supply */}
          <td className="py-2 sm:py-5 px-3 sm:px-6 text-[10px] sm:text-sm">
            <p>{asset.totalSupply}</p>
            <p className="text-gray-400 text-[8px] sm:text-sm">{asset.subText}</p>
          </td>

          {/* Utilization */}
          <td className="py-2 sm:py-5 px-3 sm:px-6 text-right text-[10px] sm:text-sm">
            {asset.utilization}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};

export default ConnectorApp;
