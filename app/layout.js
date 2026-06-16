import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://bawsalafellowship.org"),
  title: {
    default: "Bawsala Fellowship — Empowering Oman's Next Generation of Leaders",
    template: "%s · Bawsala Fellowship",
  },
  description:
    "A transformative leadership journey for high-potential Omani youth. Mentorship, institutional exposure, and real-world leadership challenges. Applications for Cohort 2026 are now open.",
  keywords: [
    "Bawsala Fellowship",
    "Oman leadership program",
    "Omani youth",
    "Vision 2040",
    "executive mentorship",
    "leadership development",
  ],
  openGraph: {
    title: "Bawsala Fellowship",
    description:
      "A transformative leadership journey for high-potential Omani youth. Applications for Cohort 2026 are now open.",
    url: "https://bawsalafellowship.org",
    siteName: "Bawsala Fellowship",
    type: "website",
  },
  icons: {
    icon: "/logos/badge-purple.png",
  },
};

export const viewport = {
  themeColor: "#291532",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
