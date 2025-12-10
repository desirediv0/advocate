import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import DisclaimerDialog from "@/components/DisclaimerDialog";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "Indian Law Masters - Expert Legal Counsel & Advocates",
  description: "Trusted legal advisors providing comprehensive legal services in civil, criminal, family, and constitutional law. Expert representation in Delhi courts with integrity and precision.",
  keywords: "advocate, lawyer, legal counsel, Delhi lawyer, civil law, criminal law, family law, constitutional law, legal services, Indian Law Masters",
  author: "Indian Law Masters",
  robots: "index, follow",
  openGraph: {
    title: "Indian Law Masters - Expert Legal Counsel & Advocates",
    description: "Trusted legal advisors providing comprehensive legal services in civil, criminal, family, and constitutional law.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian Law Masters - Expert Legal Counsel & Advocates",
    description: "Trusted legal advisors providing comprehensive legal services in civil, criminal, family, and constitutional law.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
        <FloatingButtons />
        <DisclaimerDialog />
      </body>
    </html>
  );
}
