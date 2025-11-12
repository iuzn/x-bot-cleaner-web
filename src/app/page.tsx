"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { CTAButton } from "@/components/CTAButton";
import {
  Shield,
  Target,
  Download,
  MoveHorizontal,
  Trash2,
  Filter,
  BarChart,
  Users,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { useScrollTracking } from "@/lib/analytics";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  // Enable scroll depth tracking
  useScrollTracking();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-xl bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/logo.png"
              alt="X Bot Cleaner Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-semibold text-xl">X Bot Cleaner</span>
          </motion.div>
          <ThemeToggle />
        </div>
      </header>

      <main role="main">
        {/* Hero Section */}
        <section
          className="container mx-auto px-4 py-16 md:py-24"
          aria-labelledby="hero-heading"
        >
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="flex justify-center mb-8"
              variants={fadeInUp}
            >
              <Image
                src="/images/logo.png"
                alt="X Bot Cleaner Logo - Manual Bot Follower Removal Tool for X (Twitter)"
                width={120}
                height={120}
                className="rounded-3xl"
                priority
              />
            </motion.div>
            <motion.h1
              id="hero-heading"
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6"
              variants={fadeInUp}
            >
              Take Control of Your X Followers
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Manually identify and bulk remove bot followers
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground/80 mb-12 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              X Bot Cleaner helps you take control of your X (Twitter) follower
              list by providing powerful tools to manually classify and remove
              bot accounts while protecting your legitimate followers.
            </motion.p>

            {/* Hero CTA */}
            <motion.div variants={fadeInUp}>
              <CTAButton showText={false} size="small" />
            </motion.div>
          </motion.div>
        </section>

        {/* App Story Flow */}
        <section
          className="container mx-auto px-4 py-16"
          aria-labelledby="features-heading"
        >
          <motion.div
            className="grid gap-16 max-w-6xl mx-auto"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 id="features-heading" className="sr-only">
              X Bot Cleaner Features
            </h2>

            {/* First Image - Manual Bot Classification */}
            <motion.article
              className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16"
              variants={fadeInUp}
            >
              <div className="flex-1 space-y-6">
                <header className="flex items-center gap-3">
                  <Target
                    className="w-8 h-8 text-blue-500"
                    aria-hidden="true"
                  />
                  <h3 className="text-3xl md:text-4xl font-bold">
                    Manual Bot Classification
                  </h3>
                </header>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Manually mark followers as "Real" or "Bot" with dedicated
                  buttons. Visual color coding helps you quickly identify and
                  organize your follower list.
                </p>
                <ul className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle
                      className="w-4 h-4 text-green-500"
                      aria-hidden="true"
                    />
                    Mark as Real (green)
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle
                      className="w-4 h-4 text-red-500"
                      aria-hidden="true"
                    />
                    Mark as Bot (red)
                  </li>
                  <li className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 bg-blue-500 rounded-full"
                      aria-hidden="true"
                    ></div>
                    Persistent classifications
                  </li>
                </ul>
              </div>
              <div className="flex-1 max-w-md">
                <Image
                  src="/images/1.png"
                  alt="Manual Bot Classification Interface showing Real and Bot buttons with color coding"
                  width={400}
                  height={800}
                  className="rounded-3xl"
                  priority
                />
              </div>
            </motion.article>

            {/* Second Image - Follower Capture */}
            <motion.article
              className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
              variants={fadeInUp}
            >
              <div className="flex-1 space-y-6">
                <header className="flex items-center gap-3">
                  <Download
                    className="w-8 h-8 text-purple-500"
                    aria-hidden="true"
                  />
                  <h3 className="text-3xl md:text-4xl font-bold">
                    Follower Capture
                  </h3>
                </header>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Automatically capture and save all follower profiles. Smart
                  scrolling through your entire followers list stores profile
                  data locally.
                </p>
                <ul className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 bg-purple-500 rounded-full"
                      aria-hidden="true"
                    ></div>
                    Auto-scroll capture
                  </li>
                  <li className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 bg-purple-500 rounded-full"
                      aria-hidden="true"
                    ></div>
                    Profile data storage
                  </li>
                  <li className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 bg-purple-500 rounded-full"
                      aria-hidden="true"
                    ></div>
                    Username, bio, verification
                  </li>
                </ul>
              </div>
              <div className="flex-1 max-w-md">
                <Image
                  src="/images/2.png"
                  alt="Follower Capture Interface showing automatic follower profile capture and storage"
                  width={400}
                  height={800}
                  className="rounded-3xl"
                />
              </div>
            </motion.article>

            {/* Third Image - Swipe-Based Review */}
            <motion.article
              className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16"
              variants={fadeInUp}
            >
              <div className="flex-1 space-y-6">
                <header className="flex items-center gap-3">
                  <MoveHorizontal
                    className="w-8 h-8 text-green-500"
                    aria-hidden="true"
                  />
                  <h3 className="text-3xl md:text-4xl font-bold">
                    Swipe-Based Review
                  </h3>
                </header>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Review captured followers with an intuitive swipe interface.
                  Swipe right for "Real", swipe left for "Bot". Process
                  followers in batches for efficient review.
                </p>
                <ul className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 bg-green-500 rounded-full"
                      aria-hidden="true"
                    ></div>
                    Intuitive swipe gestures
                  </li>
                  <li className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 bg-green-500 rounded-full"
                      aria-hidden="true"
                    ></div>
                    Batch processing
                  </li>
                  <li className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 bg-green-500 rounded-full"
                      aria-hidden="true"
                    ></div>
                    Undo support
                  </li>
                </ul>
              </div>
              <div className="flex-1 max-w-md">
                <Image
                  src="/images/3.png"
                  alt="Swipe-Based Review Interface showing intuitive swipe gestures for classifying followers"
                  width={400}
                  height={800}
                  className="rounded-3xl"
                />
              </div>
            </motion.article>

            {/* Fourth Image - Bulk Removal & Smart Filters */}
            <motion.article
              className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
              variants={fadeInUp}
            >
              <div className="flex-1 space-y-6">
                <header className="flex items-center gap-3">
                  <Trash2
                    className="w-8 h-8 text-orange-500"
                    aria-hidden="true"
                  />
                  <h3 className="text-3xl md:text-4xl font-bold">
                    Bulk Removal & Smart Filters
                  </h3>
                </header>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Remove all bot-marked followers with one click. Real-time
                  progress tracking with automatic rate limit protection. Use
                  smart filters to hide/show real followers, verified accounts,
                  or focus on unclassified accounts.
                </p>
                <ul className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Filter
                      className="w-4 h-4 text-orange-500"
                      aria-hidden="true"
                    />
                    Smart filtering options
                  </li>
                  <li className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 bg-orange-500 rounded-full"
                      aria-hidden="true"
                    ></div>
                    Progress tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 bg-orange-500 rounded-full"
                      aria-hidden="true"
                    ></div>
                    Rate limit protection
                  </li>
                </ul>
              </div>
              <div className="flex-1 max-w-md">
                <Image
                  src="/images/4.png"
                  alt="Bulk Removal Interface showing smart filters and progress tracking for removing bot followers"
                  width={400}
                  height={800}
                  className="rounded-3xl"
                />
              </div>
            </motion.article>
          </motion.div>
        </section>

        {/* Privacy Section */}
        <section
          className="container mx-auto px-4 py-16 border-t border-border/40"
          aria-labelledby="privacy-heading"
        >
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <Shield className="w-16 h-16 text-blue-500" aria-hidden="true" />
            </div>
            <h2
              id="privacy-heading"
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Privacy-First Design
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              100% local processing - no external servers. No tracking or
              analytics. Data stored locally in your browser. Optional Chrome
              sync support for your classifications.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <article className="space-y-3">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield
                    className="w-6 h-6 text-green-500"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-semibold">Local Processing</h3>
                <p className="text-sm text-muted-foreground">
                  All processing happens locally in your browser
                </p>
              </article>
              <article className="space-y-3">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield
                    className="w-6 h-6 text-blue-500"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-semibold">Zero Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  No tracking or analytics
                </p>
              </article>
              <article className="space-y-3">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto">
                  <BarChart
                    className="w-6 h-6 text-purple-500"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-semibold">Live Metrics</h3>
                <p className="text-sm text-muted-foreground">
                  Track trusted followers, flagged bots, and classification
                  coverage
                </p>
              </article>
            </div>
          </motion.div>
        </section>

        {/* Download CTA */}
        <section className="container mx-auto px-4 py-16">
          <CTAButton />
        </section>
      </main>

      {/* Footer */}
      <footer
        className="border-t border-border/40 bg-muted/20"
        role="contentinfo"
      >
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/logo.png"
                  alt="X Bot Cleaner Logo"
                  width={24}
                  height={24}
                  className="rounded"
                />
                <span className="font-semibold">X Bot Cleaner</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Manual bot follower removal tool for X (Twitter)
              </p>
              <p className="text-sm text-muted-foreground">
                Built with ❤️ by Ibrahim Uzun
              </p>
            </div>

            <nav className="space-y-4" aria-label="Legal pages">
              <h3 className="font-semibold">Legal</h3>
              <div className="space-y-2 text-sm flex flex-col">
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </nav>

            <div className="space-y-4">
              <h3 className="font-semibold">Developer</h3>
              <address className="space-y-2 text-sm text-muted-foreground not-italic">
                <p>Ibrahim Uzun</p>
                <p>iOS Developer</p>
                <p>Istanbul, Turkey</p>
                <Link
                  href="https://x.com/ibrahimuzn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors"
                >
                  @ibrahimuzn
                </Link>
              </address>
            </div>
          </div>

          <div className="border-t border-border/40 mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 X Bot Cleaner. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              This extension automates interactions with X/Twitter's interface.
              Use responsibly and in accordance with X/Twitter's Terms of
              Service. Always review accounts before marking them as bots. Bulk
              removal operations cannot be undone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
