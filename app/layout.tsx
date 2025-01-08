import type { Metadata } from "next";
import "./globals.css";
import Header from './_components/Header';
import Footer from './_components/Footer';


export const metadata: Metadata = {
  title: "シンプルなコーポレートサイト",
  description: "ヘッドレスCMSではじめる！ かんたん・モダンWeb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
          {/* GTM HEAD スクリプト */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-5N5JNJM9');`, // GTMのIDを設定
            }}
          />
      </head>
    <body >
    <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5N5JNJM9"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
      <Header />
      {children}
      <Footer />
    </body>
  </html>
  );
}
