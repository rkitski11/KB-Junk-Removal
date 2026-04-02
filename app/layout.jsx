import { Analytics } from '@vercel/analytics/next';
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
export const metadata = {
  title: "KB Junk Removal",
  description: "Junk removal services in Washington County",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
  
