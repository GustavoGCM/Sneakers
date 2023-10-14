import "src/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header/header";
import { ProductsProvider } from "@/providers/ProductsContext.tsx/productsContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sneakers",
  description: "E-commerce Sneakers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <ProductsProvider>
        <body className={`${inter.className} scroll-smooth`}>
          <Header />
          {children}
        </body>
      </ProductsProvider>
    </html>
  );
}
