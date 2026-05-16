import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Twitter, Send, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Design Philosophy: Cyberpunk Anime Rebellion
 * - Dark backgrounds with neon pink, cyan, and lime green accents
 * - Anime-inspired visuals with glitch effects and chaotic energy
 * - Asymmetric layouts with diagonal dividers and layered depth
 * - Space Mono for bold headings, Poppins for body text
 */

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold neon-glow">$HENTAI</div>
          <div className="flex gap-4">
            <a
              href="https://x.com/hentai_m0de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-primary transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-primary transition-colors"
            >
              <Send size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663615323739/Gr5YDUWdXkBBHYwLuYE7Vi/hentai-mode-hero-1-dZFVLtUsVHdr42b7uZrvUy.webp"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        </div>

        <motion.div
          className="container relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="max-w-2xl">
            <h1               className="text-5xl md:text-6xl font-bold mb-6 neon-glow">
              HENTAI MODE
            </h1>
            <p className="text-xl md:text-2xl text-accent mb-4 font-semibold">
              ACTIVATED
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Survival • Chaos • Mutation • Adrenaline
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
                onClick={() =>
                  window.open(
                    "https://dexscreener.com/solana/cbmk4f64cec4sgsveroqa3jnwqqos2nn5pqlkv3pfdem",
                    "_blank"
                  )
                }
              >
                Trade on DEX
                <ExternalLink className="ml-2" size={18} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10"
                onClick={() =>
                  window.open("https://x.com/hentai_m0de", "_blank")
                }
              >
                Follow on X
                <Twitter className="ml-2" size={18} />
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Diagonal Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* About Section */}
      <section className="relative py-20 bg-background">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-12 text-center neon-glow-cyan"
            >
              ABOUT $HENTAI
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div variants={itemVariants}>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663615323739/Gr5YDUWdXkBBHYwLuYE7Vi/hentai-mode-hero-2-Af2uAFtRsrsrcNMtAsYnCh.webp"
                  alt="Chaotic Energy"
                  className="w-full rounded-lg border-2 border-primary/50"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                <Card className="bg-card border-border/50 p-6">
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    Pure Chaos
                  </h3>
                  <p className="text-muted-foreground">
                    $HENTAI is a memecoin built on the Solana blockchain,
                    designed for those who embrace the chaos and rebellion of
                    the crypto space. No utility, no promises—just pure digital
                    energy.
                  </p>
                </Card>

                <Card className="bg-card border-border/50 p-6">
                  <h3 className="text-2xl font-bold text-accent mb-3">
                    Community Driven
                  </h3>
                  <p className="text-muted-foreground">
                    Join a community of rebels and degens who believe in the
                    power of memes and the future of decentralized finance.
                    Together, we create the narrative.
                  </p>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="relative py-20 bg-card/30 border-t border-b border-border">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-12 text-center neon-glow"
            >
              TOKENOMICS
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  label: "Chain",
                  value: "Solana",
                  color: "text-accent",
                },
                {
                  label: "DEX",
                  value: "PumpSwap",
                  color: "text-primary",
                },
                {
                  label: "Contract",
                  value: "4aeB...Ypump",
                  color: "text-cyan-400",
                },
              ].map((item, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <Card className="bg-background border-border/50 p-6 text-center hover:border-primary/50 transition-colors">
                    <p className="text-muted-foreground text-sm mb-2">
                      {item.label}
                    </p>
                    <p className={`text-2xl font-bold ${item.color}`}>
                      {item.value}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="mt-12 text-center">
              <Card className="bg-background border-primary/30 p-8 inline-block">
                <p className="text-muted-foreground mb-2">Contract Address</p>
                <p className="text-lg font-mono text-accent break-all">
                  4aeBSAusGHEEzBEG9DBYtTjvcQjTJWsNfNvfNioYpump
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-background">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6 neon-glow-cyan"
            >
              READY TO ACTIVATE?
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Join the chaos. Embrace the rebellion. Be part of the $HENTAI
              movement on Solana.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center flex-wrap"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
                onClick={() =>
                  window.open(
                    "https://dexscreener.com/solana/cbmk4f64cec4sgsveroqa3jnwqqos2nn5pqlkv3pfdem",
                    "_blank"
                  )
                }
              >
                Buy $HENTAI
                <ExternalLink className="ml-2" size={18} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10"
                onClick={() =>
                  window.open("https://x.com/hentai_m0de", "_blank")
                }
              >
                Follow Us
                <Twitter className="ml-2" size={18} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
                onClick={() =>
                  window.open("https://hentaimode.xyz", "_blank")
                }
              >
                Visit Website
                <Globe className="ml-2" size={18} />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-card/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              $HENTAI • Survival • Chaos • Mutation • Adrenaline
            </p>
            <div className="flex gap-4">
              <a
                href="https://x.com/hentai_m0de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://dexscreener.com/solana/cbmk4f64cec4sgsveroqa3jnwqqos2nn5pqlkv3pfdem"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-primary transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
