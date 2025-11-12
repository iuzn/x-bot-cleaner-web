"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-xl bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div className="flex items-center space-x-3">
              <Image
                src="/images/logo.png"
                alt="X Bot Cleaner Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-semibold text-xl">X Bot Cleaner</span>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground">
            Simple terms for using X Bot Cleaner
          </p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By installing and using X Bot Cleaner, you agree to these terms. If
                you don&apos;t agree with these terms, please don&apos;t use the
                extension.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                Description of Service
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                X Bot Cleaner is a Chrome browser extension that helps users
                manually identify and bulk remove bot followers from their X
                (Twitter) account while preserving legitimate followers. The
                extension operates entirely locally in your browser and does not
                collect or transmit any personal data to external servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Use the extension only for lawful purposes</li>
                <li>
                  • Use responsibly and in accordance with X/Twitter&apos;s Terms
                  of Service
                </li>
                <li>
                  • Always review accounts before marking them as bots - the
                  extension only automates actions you would perform manually
                </li>
                <li>
                  • Understand that bulk removal operations cannot be undone
                </li>
                <li>
                  • Use the extension at your own risk and responsibility
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                Limitations of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                X Bot Cleaner is provided &quot;as is&quot; without warranties. The
                developer is not responsible for any damages or issues arising
                from the use of this extension, including but not limited to:
                accidental removal of legitimate followers, account suspension or
                restrictions by X/Twitter, or any other consequences of using
                the extension. You use this extension at your own risk.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>Important:</strong> This extension automates interactions
                with X/Twitter&apos;s interface. X/Twitter may change their
                interface at any time, which could affect the extension&apos;s
                functionality. The developer is not responsible for compatibility
                issues or changes to X/Twitter&apos;s platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                X Bot Cleaner respects your privacy completely. All data is
                stored locally in your browser and never transmitted to external
                servers. No tracking, no analytics, no data collection. Please
                refer to our{" "}
                <Link href="/privacy" className="text-blue-500 hover:underline">
                  Privacy Policy
                </Link>{" "}
                for detailed information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                X Bot Cleaner and its design are the intellectual property of
                Ibrahim Uzun. Your follower classifications and data belong to
                you and are stored locally in your browser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms may be updated occasionally. Significant changes
                will be communicated through extension updates or the Chrome Web
                Store listing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these terms, contact Ibrahim Uzun through
                the Chrome Web Store or social media.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                <strong>Developer:</strong> Ibrahim Uzun
                <br />
                <strong>Last Updated:</strong> January 2025
              </p>
            </section>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-16">
          <Link href="/">
            <Button size="lg" variant="outline">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
