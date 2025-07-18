import { useState, useEffect } from "react";
import LocaleSwitcher from "./local-switcher";


export default function ResponsiveLocaleSwitcher() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // setIsMobile(window.innerWidth < 768);
      setIsMobile(window.innerWidth < 375);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) return null;

  return <LocaleSwitcher />;
}
