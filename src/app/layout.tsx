import type { Metadata } from "next";
import "./globals.css";

import Sidebar from "../components/layout/Sidebar";

export const metadata: Metadata = {
  title: "Kudwa Dashboard",
  description: "Frontend Engineer Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="min-h-screen">
      <body className="flex min-h-screen">
        <div>
          <Sidebar />
        </div>
        <div className="w-full h-screen overflow-auto pl-16">{children}</div>
      </body>
    </html>
  );
}
