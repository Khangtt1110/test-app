import React from "react";
import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];

function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [types, setTypes] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${types}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [types]);

  useEffect(() => {
    const handleScroll = () => {
      //If scroll Y > 200 set setGoToTop true
      setShowGoToTop(window.scrollY >= 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {tabs.map((tab) => (
        <button
          onClick={() => setTypes(tab)}
          key={tab}
          style={types === tab ? { color: "#ffff", background: "#333" } : {}}
        >
          {tab}
        </button>
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
      {showGoToTop && (
        <button style={{ position: "fixed", right: 20, bottom: 20 }}>
          Go to Top
        </button>
      )}
    </div>
  );
}

export default Content;
