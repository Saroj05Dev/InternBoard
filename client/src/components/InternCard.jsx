import React from "react";
import { GiftIcon, BadgePercentIcon, PencilLineIcon, Trash2Icon } from "lucide-react";

function InternCard({ intern, onEdit, onDelete }) {
  const referralCode = intern.name.toLowerCase().replace(/\s+/g, "") + "2025";

  return (
    <div className="bg-white p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300 flex flex-col justify-between">
      <div className="mb-3">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
          {intern.name}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 flex items-center gap-1">
          <BadgePercentIcon size={16} className="text-indigo-500" />
          Referral Code:{" "}
          <span className="font-medium text-gray-800 ml-1">{referralCode}</span>
        </p>
      </div>

      <div className="mb-3">
        <p className="text-sm sm:text-base text-gray-600">
          Donations Raised:{" "}
          <span className="font-semibold text-green-600">
            ₹{intern.donations}
          </span>
        </p>
      </div>

      <div className="bg-gray-50 border rounded-md p-3 text-sm text-gray-700 mb-4">
        <div className="flex items-center gap-1 font-medium text-gray-800 mb-1">
          <GiftIcon size={16} /> Rewards:
        </div>
        <ul className="list-disc list-inside ml-2">
          <li>Certificate</li>
          <li>Exclusive Merch</li>
          <li>LinkedIn Endorsement</li>
        </ul>
      </div>

      <div className="text-right">
        <button
          onClick={onEdit}
          className="inline-flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded-md text-sm transition"
        >
          <PencilLineIcon size={16} /> Edit
        </button>
        <button
          onClick={onDelete}
          className="inline-flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 rounded-md text-sm transition"
        >
          <Trash2Icon size={16} /> Delete
        </button>
      </div>
    </div>
  );
}

export default InternCard;
