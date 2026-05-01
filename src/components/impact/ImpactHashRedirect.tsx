"use client";

import { useEffect } from "react";

/** Old nav used `/impact#community-kitchen`; kitchen content now lives on `/community-kitchen`. */
export function ImpactHashRedirect() {
  useEffect(() => {
    if (window.location.hash === "#community-kitchen") {
      window.location.replace("/community-kitchen");
    }
  }, []);
  return null;
}
