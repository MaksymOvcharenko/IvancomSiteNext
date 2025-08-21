export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
// import type { Metadata } from "next";
// import GtmHead from "@/components/analytics/GtmHead";
// import GtmNoScript from "@/components/analytics/GtmNoScript";
// import GtmPageView from "@/components/analytics/GtmPageView";


// export const metadata: Metadata = { title: "IVANCOM" };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="uk">
//       <head>
//         <GtmHead />
//       </head>
//       <body>
//         <GtmNoScript />
//         <GtmPageView />
//         {children}
//       </body>
//     </html>
//   );
// }
