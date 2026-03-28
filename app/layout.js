import "./globals.css";
import  Providers  from "./providers";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";


export const metadata = {
  title: "EduConnect",
  description: "Online Learning Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        <Providers>
          <Navbar/>
          {children}
        </Providers>

        <Footer />
      </body>
    </html>
  );
}