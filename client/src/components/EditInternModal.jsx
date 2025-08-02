import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

function EditInternModal({ intern, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    name: intern.name,
    donations: intern.donations,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `https://internboard.onrender.com/api/interns/${intern._id}`,
        formData
      );
      toast.success("Intern updated successfully!");
      onClose();
      onSuccess();
    } catch (error) {
      toast.error("Failed to update intern.");
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center px-4">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Edit Intern Details
        </h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="donations"
            placeholder="Donations Raised"
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={formData.donations}
            onChange={handleChange}
            required
          />

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditInternModal;
