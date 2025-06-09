// components/KeyCrmChatWidget.tsx
"use client";

import { useEffect } from "react";

const KeyCrmChatWidget = () => {
  useEffect(() => {
    // Додаємо скрипт у <body>
    const script = document.createElement("script");
    script.src = "https://chat.key.live/bundles/widget.min.js";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      try {
        // @ts-ignore
        window.KeyCRM?.render({
          token: "6fd5bc5a-9420-458a-9e69-3873f3a3666d",
        });
        console.log("✅ KeyCRM chat widget loaded");
      } catch (err) {
        console.error("❌ KeyCRM render error:", err);
      }
    };
    script.onerror = () => {
      console.error("❌ Failed to load KeyCRM script");
    };

    document.body.appendChild(script);
  }, []);

  return null;
};

export default KeyCrmChatWidget;
