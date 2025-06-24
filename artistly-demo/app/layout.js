import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { FilterProvider } from "@/context/FilterContext";
import { FormProvider } from "@/context/FormContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Artistly – Book the perfect performer",
  description: "Find and book musicians, comedians, speakers and more",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-white text-gray-800">
        <FilterProvider>
          <FormProvider>

            <Navbar />
            <main className="min-h-screen w-full">{children}</main>
          </FormProvider>
        </FilterProvider>
      </body>
    </html>
  );
}
