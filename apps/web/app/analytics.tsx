"use client";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "./GoogleAnalytics";

export function AnalyticsWrapper() {
  return (
    <>
      <Analytics />;
    </>
  );
}
