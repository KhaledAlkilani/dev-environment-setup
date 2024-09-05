import { useState } from "react";
import "./App.css";

function App() {
  const [showMessage, setShowMessage] = useState<string>("");

  let welcomeMessage =
    "Welcome to Vite + React JS + Typescript. First XAMK React App.";

  // const handleShowMessage = () => {
  //   setShowMessage((prevMessage) => (prevMessage === "" ? welcomeMessage : ""));
  // };

  const handleShowMessage = (action: "show" | "clear") => {
    if (action === "show") {
      setShowMessage(welcomeMessage);
    } else if (action === "clear") {
      setShowMessage("");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full gap-6">
      <p style={{ color: "turquoise", fontWeight: "bold", fontSize: "22" }}>
        {showMessage}
      </p>
      <div className="flex gap-6">
        {/* <button className="btn btn-primary" onClick={handleShowMessage}>
          {showMessage === "" ? "Show Message" : "Clear Message"}
        </button> */}
        <button
          className="btn btn-primary"
          onClick={() => handleShowMessage("show")}
        >
          Show message
        </button>
        <button
          className="btn btn-primary"
          onClick={() => handleShowMessage("clear")}
        >
          Clear message
        </button>
      </div>
    </div>
  );
}

export default App;
