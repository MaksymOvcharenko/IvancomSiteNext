import { useState, useEffect } from "react";

import { SocLink } from "./SocLink/SocLink";


export default function ResponsiveSocLink() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) return null;

  return <SocLink />;
}
