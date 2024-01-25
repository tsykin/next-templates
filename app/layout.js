import Navbar from "./components/Navbar";
import CustomImage from "./components/CustomImage";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Templates for Next.js by @tsykin",
  description: "Fetching local json, external API, markdown and mdx with react",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <br />
        <div className="wrapper">{children}</div>
        <p>Updated 2023-01-25, 10:28</p>
      </body>
    </html>
  );
}
