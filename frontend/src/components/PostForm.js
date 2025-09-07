import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function PostForm({ username, isHelper }) {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      await addDoc(collection(db, "posts"), {
        text,
        username,
        isHelper,
        createdAt: serverTimestamp(),
      });
      setText("");
    } catch (error) {
      console.error("Error adding post: ", error);
    }
  };

  return (
    <div className="post-form">
      <h2 className="section-title">Post your doubt ✨</h2>
      <p className="section-sub">Your peers are here to help you</p>

      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your question here..."
          className="textarea"
        />
        <button type="submit" className="btn">
          Post
        </button>
      </form>
    </div>
  );
}

export default PostForm;
