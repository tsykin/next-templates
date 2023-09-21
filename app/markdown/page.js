import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

// Funtion to get content from a markdown file
const getPostContent = () => {
  // Define file path
  const file = "app/markdown/markdown-post.mdx";

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
      <h1>Blogs</h1>
      <h2>Title: {post.data.title}</h2>
      <h2>Subtitle: {post.data.date}</h2>
      <h2>Date: {post.data.date}</h2>
      <h2>Category: {post.data.category}</h2>

      <Markdown>{post.content}</Markdown>
    </div>
  );
}
