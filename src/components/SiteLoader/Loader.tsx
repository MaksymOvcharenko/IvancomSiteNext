// "use client"; // Робимо компонент клієнтським

// import { useState, useTransition, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import styles from "./Loader.module.css"
// export default function Loader() {
//   const [isLoading, startTransition] = useTransition(); // Перевіряємо стан навігації
//   const pathname = usePathname();

//   useEffect(() => {
//     startTransition(() => {}); // При зміні маршруту викликаємо зміну стану
//   }, [pathname]);

//   if (!isLoading) return null; // Ховаємо, якщо не йде навігація

//   return (
//       <div className={styles.loader}>
//           <div className={styles.spinner}></div>
//     </div>
//   );
// }
"use client";

import { useState, useEffect, useTransition } from "react";
import { usePathname } from "next/navigation";
import styles from "./Loader.module.css"; // Підключаємо стилі

export default function Loader({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setLoading(true);
    startTransition(() => {
      setTimeout(() => setLoading(false), 500); // 500ms для плавності
    });
  }, [pathname]);

  if (loading) {
    return (
      <div className={styles.loaderWrapper}>
        <div className={styles.loader}></div>
      </div>
    );
  }

  return <>{children}</>;
}