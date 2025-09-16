import React, { useState } from "react";

const SubmitNews = () => {
  const [formData, setFormData] = useState({
    title: "",
    url: "",
    description: "",
    source: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: send to backend / firebase
    console.log("News submitted:", formData);

    setSubmitted(true);
    setFormData({
      title: "",
      url: "",
      description: "",
      source: "",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white px-4 py-10">
      <div className="w-full max-w-2xl bg-black/40 backdrop-blur-md rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-400 text-center mb-6">
          📰 Submit Suspicious News
        </h1>

        {submitted && (
          <p className="mb-4 text-green-400 text-center">
            ✅ Thank you! Your submission has been recorded.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block mb-1 text-sm font-medium">Headline / Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Enter the headline"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* URL */}
          <div>
            <label className="block mb-1 text-sm font-medium">News URL</label>
            <input
              type="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              required
              placeholder="https://example.com/article"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Source */}
          <div>
            <label className="block mb-1 text-sm font-medium">Source (optional)</label>
            <input
              type="text"
              name="source"
              value={formData.source}
              onChange={handleChange}
              placeholder="e.g. Twitter, WhatsApp, News Site"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 text-sm font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Add context about why this news looks suspicious..."
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold text-white shadow-lg"
          >
            Submit News
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitNews;
