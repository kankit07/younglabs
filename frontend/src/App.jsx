import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const [error, setError] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const getGreeting = async () => {
    setGreeting("");
    setError("");

    try {
      const response = await fetch(
        `https://younglabs-1.onrender.com/api/greet?name=${name}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      );
      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        setError(data.error || "An error occurred.");
      } else {
        setGreeting(data.message);
      }
      setShowDialog(true);
    } catch (err) {
      console.error("Error fetching greeting:", err);
      setError("Failed to fetch greeting.");
      setShowDialog(true);
    }
  };

  // Dialog component
  const ResponseDialog = () => {
    if (!showDialog) return null;

    return (
      <div
        className="fixed inset-0 backdrop-blur-sm bg-white/70 flex items-center justify-center p-4"
        onClick={() => setShowDialog(false)}
      >
        <div
          className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the card
        >
          {/* Close button */}
          <button
            onClick={() => setShowDialog(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Dialog content */}
          {greeting && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 animate-fadeIn">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-8 w-8 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-green-800">
                    Greeting
                  </h3>
                  <p className="text-green-700 mt-2">{greeting}</p>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 animate-fadeIn">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-8 w-8 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-red-800">Error</h3>
                  <p className="text-red-700 mt-2">{error}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Greeting App</h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="border border-gray-300 p-2 w-full rounded mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={getGreeting}
          className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition-colors"
        >
          Get Greeting
        </button>
        <ResponseDialog />
      </div>
    </div>
  );
}

export default App;
