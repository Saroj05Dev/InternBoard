import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

function AddInterForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    college: "",
    year: "",
    email: "",
    donations: 0,
  });

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("https://internboard.onrender.com/api/interns", formData);
      toast.success("Intern Added Successfully!");
      setFormData({ name: "", college: "", year: "", email: "", donations: 0 });
      onSuccess();
    } catch (error) {
      toast.error("Failed to Add Intern");
      console.log(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md mb-6 w-full"
    >
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        Add New Intern
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="college"
          placeholder="College Name"
          className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={formData.college}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="year"
          placeholder="Year (e.g., 2nd Year)"
          className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={formData.year}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="donations"
          placeholder="Donations Raised"
          className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={formData.donations}
          onChange={handleChange}
        />
      </div>

      <div className="mt-6 text-right">
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition text-sm sm:text-base"
        >
          Add Intern
        </button>
      </div>
    </form>
  );
}

export default AddInterForm;
