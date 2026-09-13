import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Anthony Rice — Full-stack Developer",
  description:
    "Full-stack TypeScript developer in California. Explore Anthony Rice’s work across web applications, AI tools, and game development.",
  openGraph: {
    title: "Anthony Rice — Full-stack Developer",
    description:
      "Thoughtful software. Continuous improvement. Explore selected web, AI, and game development projects.",
    type: "website",
  },
  twitter: { card: "summary", title: "Anthony Rice — Full-stack Developer" },
};
const themeScript = `(function(){try{var t=localStorage.getItem('portfolio-theme');document.documentElement.dataset.theme=t==='light'||t==='dark'?t:matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}catch(e){document.documentElement.dataset.theme=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}})()`;
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
