import type { Metadata } from "next";
import Modal from "@/components/Modal";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trello 2.0 Clone",
  description: "Generated by Samuel Lajara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#F5F6F8]">
        {children}
        <Modal />
      </body>
    </html>
  );
}
