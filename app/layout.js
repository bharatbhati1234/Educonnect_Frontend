import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Script from "next/script";


export const metadata = {
  title: "EduConnect",
  description: "Online Learning Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />

        <Providers>
          <Navbar />
          {children}
        </Providers>

        <Footer />
      </body>
    </html>
  );
}