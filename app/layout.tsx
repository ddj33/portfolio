import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dylan Johnson Restrepo — AI Product & Product Engineering",
  description:
    "Dylan Johnson Restrepo — Cornell Tech dual MEng student building AI systems, product software, and workflow automation. Selected work at MKRO, AI reliability research, and game development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
