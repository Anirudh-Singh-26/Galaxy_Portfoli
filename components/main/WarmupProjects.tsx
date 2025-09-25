"use client";

import { useEffect } from "react";
import axios from "axios";

const projectUrls = [
  "https://hotel-listing-fhib.onrender.com/listings",
//   "https://gear-xpert-client-anirudh-singh-rathores-projects.vercel.app/",
  "https://crowdspark-frontend-gamma.vercel.app/",
  "https://velora-frontend-seven.vercel.app/",
  "https://mavix-frontend.vercel.app/",
  // Add more project URLs here
];

export const WarmupProjects = () => {
  useEffect(() => {
    const warmup = async () => {
      const requests = projectUrls.map((url) =>
        axios
          .get(url, { timeout: 5000 }) // 5s timeout
          .then(() => console.log(`✅ Woke up: ${url}`))
          .catch(() => console.warn(`⚠️ Failed to wake up: ${url}`))
      );

      await Promise.allSettled(requests);
      console.log("All projects warm-up completed.");
    };

    warmup();
  }, []); // runs only once

  return null; // does not render anything
};
