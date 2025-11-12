"use client";

import { motion } from "framer-motion";
import { ChromeWebStore } from "@/components/ChromeWebStore";
import { getAnalytics, logEvent } from "firebase/analytics";
import { app } from "@/lib/firebase";

interface CTAButtonProps {
  className?: string;
  showText?: boolean;
  size?: "small" | "medium" | "large";
}

const handleChromeWebStoreClick = () => {
  if (typeof window !== "undefined") {
    try {
      const analytics = getAnalytics(app);
      logEvent(analytics, "cta_click", {
        button_type: "chrome_web_store_download",
        source: "landing_page",
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.warn("Analytics event failed:", error);
    }
  }
};

export const CTAButton = ({
  className = "",
  showText = true,
  size = "medium",
}: CTAButtonProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
  };

  const sizeClasses = {
    small: "max-w-md",
    medium: "max-w-2xl",
    large: "max-w-4xl",
  };

  return (
    <motion.div
      className={`text-center mx-auto ${sizeClasses[size]} ${className}`}
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {showText && (
        <>
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-4"
            variants={fadeInUp}
          >
            Get X Bot Cleaner Today
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-8"
            variants={fadeInUp}
          >
            Take control of your X (Twitter) follower list
          </motion.p>
        </>
      )}
      <motion.div className="flex justify-center" variants={fadeInUp}>
        <a
          href="https://chromewebstore.google.com/detail/x-bot-cleaner/noehdijpennlbfmaohlhdhhjgdjmofjl"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-transform hover:scale-105 active:scale-95 scale-[0.75] sm:scale-100"
          aria-label="Add X Bot Cleaner to Chrome"
          onClick={handleChromeWebStoreClick}
        >
          <ChromeWebStore />
        </a>
      </motion.div>
    </motion.div>
  );
};
