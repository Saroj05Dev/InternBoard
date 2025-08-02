import React from "react";
import Layout from "../components/Layout";
import leaderboardData from "../data/leaderboardData";
import { Trophy } from "lucide-react";

function Leaderboard() {
  const sortedData = leaderboardData.sort((a, b) => b.donations - a.donations);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-700">
          <Trophy size={30} className="inline"/> Top Interns - Leaderboard
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse bg-white shadow rounded">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="p-3 text-left">#</th>
                <th className="p-3 text-left">Intern Name</th>
                <th className="p-3 text-left">Referral Code</th>
                <th className="p-3 text-left">Donations</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((intern, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-gray-50 transition-colors"
                >
                  <td className="p-3 font-medium">{index + 1}</td>
                  <td className="p-3">{intern.name}</td>
                  <td className="p-3 text-gray-600">
                    {intern.name.toLowerCase().replace(/\s+/g, "")}2025
                  </td>
                  <td className="p-3 font-semibold text-green-600">
                    ₹{intern.donations.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default Leaderboard;
