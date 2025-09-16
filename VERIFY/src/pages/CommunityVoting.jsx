import React, { useState } from "react";

const CommunityVoting = () => {
  // Sample dummy claims (replace with API or DB later)
  const [claims, setClaims] = useState([
    {
      id: 1,
      title: "New vaccine causes severe side effects in 70% of people.",
      submittedBy: "Anonymous",
      date: "25/08/2025 12:30",
      votes: { true: 12, false: 5, review: 8 },
    },
    {
      id: 2,
      title: "Electric cars are more harmful to the environment than petrol cars.",
      submittedBy: "Ravi Kumar",
      date: "24/08/2025 09:10",
      votes: { true: 3, false: 15, review: 2 },
    },
  ]);

  // Handle vote logic
  const handleVote = (id, type) => {
    setClaims((prevClaims) =>
      prevClaims.map((c) =>
        c.id === id
          ? { ...c, votes: { ...c.votes, [type]: c.votes[type] + 1 } }
          : c
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        🗳 Community Voting
      </h1>
      <p className="text-center text-gray-400 mb-8">
        Vote on news claims submitted by the community to fight misinformation.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {claims.map((claim) => (
          <div
            key={claim.id}
            className="bg-gray-800 rounded-2xl shadow-lg p-5 flex flex-col justify-between hover:shadow-xl transition"
          >
            <div>
              <h2 className="text-xl font-semibold">{claim.title}</h2>
              <p className="text-sm text-gray-400 mt-1">
                Submitted by {claim.submittedBy} • {claim.date}
              </p>
            </div>

            {/* Voting Buttons */}
            <div className="flex justify-around mt-6">
              <button
                onClick={() => handleVote(claim.id, "true")}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl"
              >
                ✅ True ({claim.votes.true})
              </button>
              <button
                onClick={() => handleVote(claim.id, "false")}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl"
              >
                ❌ False ({claim.votes.false})
              </button>
              <button
                onClick={() => handleVote(claim.id, "review")}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-xl"
              >
                ⚠ Needs Review ({claim.votes.review})
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityVoting;
