import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dances } from "../../data/dances";
import { learnConfig } from "../../data/learn";
import Reveal from "../common/reveal";
import useScrollLock from "../common/useScrollLock";

// Convert any YouTube URL format to an embed URL
function toEmbedUrl(url) {
  if (!url) return "";
  if (url.includes("/embed/")) return url;
  const short = url.match(/youtu\.be\/([^?&]+)/);
  if (short) {
    const t = url.match(/[?&]t=(\d+)/);
    return `https://www.youtube.com/embed/${short[1]}${t ? `?start=${t[1]}` : ""}`;
  }
  const watch = url.match(/[?&]v=([^&]+)/);
  if (watch) {
    const t = url.match(/[?&]t=(\d+)/);
    return `https://www.youtube.com/embed/${watch[1]}${t ? `?start=${t[1]}` : ""}`;
  }
  return url;
}

function getVideoId(url) {
  if (!url) return null;
  const e = url.match(/\/embed\/([^?&]+)/);
  if (e) return e[1];
  const s = url.match(/youtu\.be\/([^?&]+)/);
  if (s) return s[1];
  const w = url.match(/[?&]v=([^&]+)/);
  if (w) return w[1];
  return null;
}

function SocialIcon({ platform }) {
  if (platform === "youtube") return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="currentColor"/>
    </svg>
  );
  if (platform === "instagram") return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" fill="currentColor"/>
    </svg>
  );
  if (platform === "tiktok") return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.17 8.17 0 004.77 1.53V6.84a4.85 4.85 0 01-1-.15z" fill="currentColor"/>
    </svg>
  );
  return null;
}

const PLATFORM_LABELS = { youtube: "YouTube", instagram: "Instagram", tiktok: "TikTok" };

function VideoCard({ dance, onClick }) {
  const videoId = getVideoId(dance.video);
  const thumbnail = videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : dance.image;

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 10px 28px rgba(0,0,0,0.16)" }}
      onClick={onClick}
      style={{
        flexShrink: 0,
        width: "min(300px, 80vw)",
        backgroundColor: "white",
        borderRadius: "0.75rem",
        border: "2px solid var(--gold)",
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <div style={{ position: "relative", aspectRatio: "16/9", backgroundColor: "var(--cream)" }}>
        <img
          src={thumbnail}
          alt={dance.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.22)",
        }}>
          <div style={{
            width: "3rem", height: "3rem", borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.92)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--red)">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>
      <div style={{ padding: "0.7rem 1rem", display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
        <span style={{ fontWeight: "700", fontSize: "0.95rem", color: "var(--red)" }}>{dance.name}</span>
        {dance.region && (
          <span style={{
            fontSize: "0.65rem", fontWeight: "700", textTransform: "uppercase",
            letterSpacing: "0.06em", padding: "0.18rem 0.5rem",
            backgroundColor: "var(--gold)", color: "var(--dark)", borderRadius: "999px",
          }}>
            {dance.region}
          </span>
        )}
      </div>
    </motion.div>
  );
}

function VideoModal({ dance, onClose }) {
  useScrollLock(true);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        backgroundColor: "rgba(0,0,0,0.75)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "1.5rem",
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={e => e.stopPropagation()}
        style={{
          backgroundColor: "white", borderRadius: "1rem",
          overflow: "hidden", width: "min(720px, 95vw)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
        }}
      >
        <div style={{ aspectRatio: "16/9" }}>
          <iframe
            src={`${toEmbedUrl(dance.video)}${dance.video.includes("?") ? "&" : "?"}autoplay=1`}
            title={dance.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: "100%", height: "100%", border: "none", display: "block" }}
          />
        </div>
        <div style={{ padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <span style={{ fontWeight: "700", fontSize: "1.1rem", color: "var(--red)" }}>{dance.name}</span>
            {dance.region && (
              <span style={{
                fontSize: "0.68rem", fontWeight: "700", textTransform: "uppercase",
                letterSpacing: "0.06em", padding: "0.2rem 0.55rem",
                backgroundColor: "var(--gold)", color: "var(--dark)", borderRadius: "999px",
              }}>
                {dance.region}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer", color: "var(--dark)", opacity: 0.45, lineHeight: 1 }}
          >×</button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function LearnPage() {
  const [search, setSearch] = useState("");
  const [activeVideo, setActiveVideo] = useState(null);

  const isSearching = search.trim().length > 0;
  const visibleSocials = Object.entries(learnConfig.social).filter(([, cfg]) => cfg.visible && cfg.url);
  const videoDances = dances.filter(d => d.video);
  const filtered = videoDances.filter(d => d.name.toLowerCase().includes(search.toLowerCase()));

  // Enough copies to fill the screen (card ≈ 324px wide), always an even number for seamless -50% loop
  const cardWidth = 324;
  const minCards = Math.ceil((typeof window !== "undefined" ? window.innerWidth : 1440) / cardWidth) + 2;
  const copies = Math.max(2, Math.ceil(minCards / videoDances.length));
  const evenCopies = copies % 2 === 0 ? copies : copies + 1;
  const marqueeItems = Array(evenCopies).fill(videoDances).flat();

  return (
    <main style={{ background: "var(--cream)", minHeight: "100vh", paddingBottom: "5rem" }}>
      <style>{`
        @keyframes tdc-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .tdc-track {
          display: flex;
          width: max-content;
          animation: tdc-marquee ${Math.max(20, videoDances.length * 8)}s linear infinite;
        }
        .tdc-track.paused {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header */}
      <Reveal>
        <section style={{ padding: "2rem 2rem 1.5rem", textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--red)", marginBottom: "0.75rem" }}>
            Learn with TDC
          </h1>
          <p style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)", lineHeight: "1.7", color: "var(--dark)", opacity: 0.75, margin: 0 }}>
            A resource for Filipino dances. Watch our tutorials and learn traditional Philippine folk dances from our current Officers.
          </p>
        </section>
      </Reveal>

      {/* Social channels */}
      {learnConfig.showSocialLinks && visibleSocials.length > 0 && (
        <Reveal>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", padding: "0 2rem 2rem" }}>
            {visibleSocials.map(([platform, cfg]) => (
              <a
                key={platform}
                href={cfg.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: "0.45rem",
                  padding: "0.55rem 1.1rem", backgroundColor: "white",
                  border: "2px solid var(--gold)", borderRadius: "2rem",
                  color: "var(--dark)", textDecoration: "none", fontWeight: "600",
                  fontSize: "0.88rem", boxShadow: "0 2px 6px rgba(0,0,0,0.07)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 5px 14px rgba(0,0,0,0.12)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.07)"; }}
              >
                <SocialIcon platform={platform} />
                {PLATFORM_LABELS[platform]}
              </a>
            ))}
          </div>
        </Reveal>
      )}

      {/* Search bar */}
      <Reveal>
        <div style={{ padding: "0 2rem 2.5rem", maxWidth: "480px", margin: "0 auto" }}>
          <input
            type="text"
            placeholder="Search dances..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: "100%", padding: "0.7rem 1.2rem", fontSize: "1rem",
              border: "2px solid var(--gold)", borderRadius: "2rem",
              backgroundColor: "white", color: "var(--dark)",
              outline: "none", boxSizing: "border-box",
              boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
            }}
          />
        </div>
      </Reveal>

      {/* Carousel / search results */}
      {videoDances.length === 0 ? (
        <div style={{ textAlign: "center", padding: "4rem 2rem", opacity: 0.45, color: "var(--dark)" }}>
          <p style={{ fontSize: "1.1rem" }}>No videos yet — check back soon!</p>
        </div>
      ) : isSearching ? (
        /* Search results — static row */
        filtered.length > 0 ? (
          <div style={{
            display: "flex", gap: "1.5rem", flexWrap: "wrap",
            justifyContent: "center", padding: "0 2rem",
          }}>
            {filtered.map(dance => (
              <VideoCard key={dance.name} dance={dance} onClick={() => setActiveVideo(dance)} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "3rem 2rem", opacity: 0.45, color: "var(--dark)" }}>
            <p style={{ fontSize: "1.05rem" }}>No videos found for "{search}"</p>
          </div>
        )
      ) : (
        /* Auto-scrolling marquee */
        <div style={{ overflow: "hidden", paddingBottom: "1rem", width: "100%" }}>
          <div className={`tdc-track${isSearching ? " paused" : ""}`}>
            {marqueeItems.map((dance, i) => (
              <div key={`${dance.name}-${i}`} style={{ marginRight: "1.5rem" }}>
                <VideoCard dance={dance} onClick={() => setActiveVideo(dance)} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Video modal */}
      <AnimatePresence>
        {activeVideo && (
          <VideoModal dance={activeVideo} onClose={() => setActiveVideo(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}
