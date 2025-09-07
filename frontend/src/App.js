import React, { useState, useEffect } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import HelperQuiz from "./components/HelperQuiz";
import MenuBar from "./components/MenuBar";
import { generateRandomName } from "./utils/generateName";
import "./App.css";

function App() {
  const [mode, setMode] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [isHelper, setIsHelper] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (!username) {
      const name = generateRandomName();
      setUsername(name);
    }
  }, [username]);

  const goHome = () => {
    setMode(null);
    setShowQuiz(false);
  };

  return (
    <div className="App">
      {/* Menu bar always on top */}
      <MenuBar username={username} isHelper={isHelper} onBack={goHome} />

      {/* Landing screen */}
      {mode === null && (
        <div className="landing">
          <h1 className="main-title">🌟 Beacon</h1>
          <p className="subheading">
            A guiding light for students — find support or become a helper
          </p>

          <div className="options">
            <button
              className="btn"
              onClick={() => {
                setMode("peer");
                setShowQuiz(true);
                alert(
                  "📋 You must complete a short questionnaire. Based on your answers, you may be verified as a helper."
                );
              }}
            >
              Become a Verified Peer
              <p className="sub">Help others in need</p>
            </button>

            <button className="btn" onClick={() => setMode("student")}>
              Have a doubt? Ask your peers
              <p className="sub">Post anonymously and get guidance</p>
            </button>
          </div>
        </div>
      )}

      {/* Peer flow */}
      {mode === "peer" && showQuiz && (
        <div className="landing">
          <HelperQuiz onPass={setIsHelper} />
        </div>
      )}

      {/* Student flow */}
      {mode === "student" && (
        <div className="landing">
          <PostForm username={username} isHelper={isHelper} />
          <PostList />
        </div>
      )}
    </div>
  );
}

export default App;
