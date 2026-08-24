import "./globals.css";

export const metadata = {
 title: "DARK ARMUFA",
 description: "King Armufa Digital & Kreatif"
};

export default function RootLayout({children}) {
 return (
  <html lang="id">
   <body>{children}</body>
  </html>
 );
}