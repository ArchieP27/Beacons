import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function ReplyBox({ postId }) {
  const [reply, setReply] = useState("");

  const handleReply = async (e) => {
    e.preventDefault();
    if (!reply.trim()) return;
    await addDoc(collection(db, "posts", postId, "replies"), {
      text: reply,
      createdAt: serverTimestamp(),
    });
    setReply("");
  };

  return (
    <form onSubmit={handleReply}>
      <input
        type="text"
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        placeholder="Write a reply..."
      />
      <button type="submit">Reply</button>
    </form>
  );
}

export default ReplyBox;
