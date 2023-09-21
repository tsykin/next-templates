import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import Hello from "../components/Hello";
import Link from "next/link";

// Funtion to get content from a markdown file
const getPostContent = () => {
  // Define file path
  const file = "app/md/markdown-post.md";

  // Read content using fs
  const content = fs.readFileSync(file, "utf8");

  // Return content to use in functions
  const matterResult = matter(content);
  return matterResult;
};

export default async function Page() {
  // Call function to get content from markdown file
  const post = await getPostContent();
  return (
    <div>
      <h1>Post written in markdown</h1>
      <p>
        This is a page that presents markdown file as html. It also shows
        metadata inside markdown file using gray-matter
      </p>
      <br />
      <h1>Post metadata:</h1>

      <p>Title: {post.data.title}</p>
      <p>Subtitle: {post.data.subtitle}</p>
      <p>Date: {post.data.date}</p>
      <p>Category: {post.data.category}</p>

      <br />

      <Markdown>{post.content}</Markdown>
    </div>
  );
}
