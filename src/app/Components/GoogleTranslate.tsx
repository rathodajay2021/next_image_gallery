"use client";

import Script from "next/script";
import React, { useCallback } from "react";

const LANGUAGES = [
  { label: "English", value: "en", src: "https://flagcdn.com/h60/us.png" },
  { label: "Spanish", value: "es", src: "https://flagcdn.com/h60/es.png" },
  { label: "French", value: "fr", src: "https://flagcdn.com/h60/fr.png" },
  { label: "German", value: "de", src: "https://flagcdn.com/h60/de.png" },
  { label: "Italian", value: "it", src: "https://flagcdn.com/h60/it.png" },
  { label: "Portuguese", value: "pt", src: "https://flagcdn.com/h60/pt.png" },
  { label: "Chinese", value: "zh", src: "https://flagcdn.com/h60/cn.png" },
  { label: "Japanese", value: "ja", src: "https://flagcdn.com/h60/jp.png" },
  { label: "Korean", value: "ko", src: "https://flagcdn.com/h60/kr.png" },
  { label: "Russian", value: "ru", src: "https://flagcdn.com/h60/ru.png" },
  { label: "Hindi", value: "hi", src: "https://flagcdn.com/h60/in.png" },
  { label: "Arabic", value: "ar", src: "https://flagcdn.com/h60/sa.png" },
  { label: "Swedish", value: "sv", src: "https://flagcdn.com/h60/se.png" },
  { label: "Dutch", value: "nl", src: "https://flagcdn.com/h60/nl.png" },
  { label: "Turkish", value: "tr", src: "https://flagcdn.com/h60/tr.png" },
];

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (options: object, elementId: string) => void;
      };
    };
    googleTranslateElementInit: () => void;
  }
}

function GoogleTranslate() {
  const includedLanguages = LANGUAGES.map((lang) => lang.value).join(",");

  //   const [langCookie, setLangCookie] = React.useState(
  //     decodeURIComponent(prefLangCookie)
  //   );

  const googleTranslateElementInit = useCallback(() => {
    if (window.google && window.google.translate) {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "auto",
          includedLanguages,
        },
        "google_translate_element"
      );
    }
  }, [includedLanguages]);

  React.useEffect(() => {
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, [googleTranslateElementInit]);

  return (
    <>
      <div id="google_translate_element"> </div>
      {/* Use async script */}
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </>
  );
}

export default GoogleTranslate;
