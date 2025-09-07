import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import ReplyBox from "./ReplyBox";

function PostList({ isHelper }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  }, []);

  return (
    <div className="post-list">
      <h2 className="section-title">See what your peers are asking 👇</h2>
      <p className="section-sub">
        Think you can help them?{" "}
        {isHelper ? "Reply below!" : "(Only verified peers can reply)"}
      </p>

      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <p className="post-text">{post.text}</p>
          <p className="post-meta">
            Posted by <span className="post-user">{post.username}</span>
            {post.isHelper && <span className="badge"> 🌟 Verified</span>}
          </p>

          {isHelper && <ReplyBox postId={post.id} />}
        </div>
      ))}
    </div>
  );
}

export default PostList;
