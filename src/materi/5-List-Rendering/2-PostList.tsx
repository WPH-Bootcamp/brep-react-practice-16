import { useState, useEffect } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

type PostData = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function PostList() {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    async function fetchPost(): Promise<void> {
      try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
          throw new Error("Error nih API nya");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.log(error.message);
        }
        console.log(error);
      }
    }

    fetchPost();
  }, []);
  
  return (
    <li>
      {posts.map((post) => (
        <li key={post.id}>
          {post.id}. <strong>Title</strong> : {post.title}
        </li>
      ))}
    </li>
  );
}

export default PostList;
