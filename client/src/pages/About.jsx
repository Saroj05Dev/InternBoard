import React from "react";
import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl font-bold text-indigo-700 mb-4">About InternBoard</h1>
        <p className="text-lg leading-relaxed mb-6">
          <strong>InternBoard</strong> is a simple internal dashboard built for managing and tracking performance of interns.
          It allows admin users to:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>View and manage intern details</li>
          <li>Track donations raised by each intern</li>
          <li>Edit intern information in real-time</li>
          <li>View a leaderboard of top-performing interns</li>
        </ul>

        <p className="text-sm text-gray-600">
          This project is part of a frontend/backend assignment and is not intended for production use.
        </p>
      </div>
    </Layout>
  );
}

export default About;
