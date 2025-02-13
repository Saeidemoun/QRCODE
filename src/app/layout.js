// import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "مهلا محتشم | شبکه های اجتماعی",
  description: "راه های ارتباطی ما با شما |",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
