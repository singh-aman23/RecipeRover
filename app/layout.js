import "./globals.css";
import { Poppins } from '@next/font/google';

export const metadata = {
  title: "RecipeRover",
  description:
    "Discover delicious recipes from around the world! Share your own unique food creations and explore recipes from other passionate cooks.",
};

// Import and configure Poppins font
const poppins = Poppins({
  weight: ['400', '600'], 
  subsets: ['latin'],    
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
