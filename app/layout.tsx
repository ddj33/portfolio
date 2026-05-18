import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dylan Johnson Restrepo — AI Product & Product Engineering",
  description:
    "Dylan Johnson Restrepo — Cornell Tech MS Connective Media. Building AI tools that fit real workflows. AI Product · Product Engineering · Workflow Automation.",
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
