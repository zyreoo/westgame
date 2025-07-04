import "./globals.css";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: "West Interface - The Ultimate Western Survival RPG",
  description: "Experience the untamed frontier in this immersive Western survival RPG. Build your homestead, defend your territory, and become a legend of the Old West.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
