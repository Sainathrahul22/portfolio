import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Sainath Rahul A | Portfolio",
  description: "AI/ML Developer | Data-Centric Thinker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
        <Navbar />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
