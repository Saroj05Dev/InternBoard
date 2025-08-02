import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import InternCard from "../components/InternCard";
import axios from "axios";
import AddInterForm from "../components/AddInterForm";
import EditInternModal from "../components/EditInternModal";

function Dashboard() {
  const [interns, setInterns] = useState([]);
  const [search, setSearch] = useState("");
  const [selectIntern, setSelectIntern] = useState(null);

  async function fetchInterns() {
    try {
      const res = await axios.get("https://internboard.onrender.com/api/interns");
      setInterns(res.data);
    } catch (error) {
      console.error("Failed to fetch interns", error);
    }
  }

  useEffect(() => {
    fetchInterns();
  }, []);

  const filteredInterns = interns.filter((intern) =>
    intern.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <div className="px-4 py-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Intern Dashboard</h2>

          <input
            type="text"
            placeholder="Search intern..."
            className="w-full sm:w-72 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="mb-8">
          <AddInterForm onSuccess={fetchInterns} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInterns.length > 0 ? (
            filteredInterns.map((intern) => (
              <InternCard
                key={intern._id}
                intern={intern}
                onEdit={() => setSelectIntern(intern)}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No interns found.
            </p>
          )}
        </div>

        {selectIntern && (
          <EditInternModal
            intern={selectIntern}
            onClose={() => setSelectIntern(null)}
            onSuccess={() => {
              fetchInterns();
              setSelectIntern(null);
            }}
          />
        )}
      </div>
    </Layout>
  );
}

export default Dashboard;
