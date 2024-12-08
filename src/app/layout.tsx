import type { Metadata } from "next";
import CursorComponent from "./components/cursor/cursor.tsx";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ian LEDIG",
  description: "Ian LEDIG's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <CursorComponent />
        {children}
      </body>
    </html>
  );
}
