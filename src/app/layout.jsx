import "./globals.css";

export const metadata = {
  title: "Tasks",
  description: "Next.js client for Laravel Tasks API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">{children}</body>
    </html>
  );
}
