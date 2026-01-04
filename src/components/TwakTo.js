"use client";

import { useEffect } from "react";

export default function TawkTo() {
  useEffect(() => {
    if (document.getElementById("tawk-script")) return;

    const script = document.createElement("script");
    script.id = "tawk-script";
    script.async = true;
    script.src = "https://embed.tawk.to/695a3fb8c597fd197ff953d7/1je48hqvr";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);
  }, []);

  return null;
}
