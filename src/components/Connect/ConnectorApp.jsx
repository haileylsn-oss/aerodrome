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
];

const ConnectorApp = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0b1b2b] text-white rounded-2xl overflow-hidden mt-10 shadow-lg">
      <table className="w-full text-left border-collapse">
        <thead className="bg-[#102235] text-gray-300 uppercase text-sm">
          <tr>
            <th className="py-4 px-6">Asset</th>
            <th className="py-4 px-6">Risk</th>
            <th className="py-4 px-6">Supply APY</th>
            <th className="py-4 px-6">Total Supply</th>
            <th className="py-4 px-6">Utilization</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr
              key={index}
              className="hover:bg-[#152b45] cursor-pointer border-b border-[#1f3a57] transition-colors"
              onClick={() => navigate("/wallet")}
            >
              {/* Asset Name */}
              <td className="py-5 px-6 flex items-center gap-3">
                <CircleDollarSign className="text-green-400" size={28} />
                <div>
                  <p className="text-gray-300 text-sm">{asset.name}</p>
                  <p className="font-semibold text-white">{asset.symbol}</p>
                </div>
              </td>

              {/* Risk */}
              <td className="py-5 px-6">
                {asset.risk ? (
                  <AlertTriangle className="text-yellow-400" size={20} />
                ) : (
                  <span className="text-gray-500">—</span>
                )}
              </td>

              {/* APY */}
              <td className="py-5 px-6">
                <span className="flex items-center gap-1 text-green-400">
                  {asset.apy}
                  <ArrowUpRight size={16} />
                </span>
              </td>

              {/* Total Supply */}
              <td className="py-5 px-6">
                <p>{asset.totalSupply}</p>
                <p className="text-gray-400 text-sm">{asset.subText}</p>
              </td>

              {/* Utilization */}
              <td className="py-5 px-6 text-right">{asset.utilization}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConnectorApp;
