"use client";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "aos/dist/aos.css";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import AnimatedCursor from "react-animated-cursor";
import "react-toastify/dist/ReactToastify.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    window.document.scrollingElement?.scrollTo(0, 0);
  }, []);
  const queryClient = new QueryClient();

  return (
    <html suppressHydrationWarning lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico?v=4" sizes="any" />
        <title>Bhume Engineering</title>
      </head>

      <body
        className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}
        suppressHydrationWarning={true}
      >
        <QueryClientProvider client={queryClient}>
          <Header />
          <AnimatedCursor
            innerSize={10}
            outerSize={12}
            color="1, 74, 173"
            outerAlpha={0}
            innerScale={2}
            outerScale={5}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
            ]}
          />
          <div>{children}</div>
          <ScrollToTop />
        </QueryClientProvider>
      </body>
    </html>
  );
}

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
