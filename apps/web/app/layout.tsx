import { ServerThemeProvider } from "@wits/next-themes";

// const sourceSansPro = Source_Sans_Pro({
//   weight: ["400", "600", "700"],
//   style: ["normal", "italic"],
//   subsets: ["latin"],
// });

export const runtime = "experimental-edge";



import "./styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ServerThemeProvider>
      <html lang="en">
        <head>
          <link rel="manifest" href="/manifest.json" />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content="#187C56" />
        </head>
        <body>
          {/* <Providers>
            
            
          </Providers> */}
          <main>{children}</main>
          {/* <AnalyticsWrapper /> */}
        </body>
      </html>
    </ServerThemeProvider>
  );
}
