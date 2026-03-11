import { useState } from "react";
import { Link } from "react-router-dom";

const sports = [
  {
    id: 1,
    name: "Cricket",
    emoji: "🏏",
    tagline: "The Gentleman's Game",
    desc: "Cricket is a bat-and-ball game played between two teams of eleven players on a field. It's the world's second most popular sport with over 2.5 billion fans globally.",
    color: "#16a34a",
    players: "11 per side",
    origin: "England, 16th century",
    worldCup: "Every 4 years",
    topNations: ["India", "Australia", "England", "Pakistan"],
    stats: [{ label: "Global Fans", value: "2.5B+" }, { label: "ICC Members", value: "108" }, { label: "Test Nations", value: "12" }],
  },
  {
    id: 2,
    name: "Football",
    emoji: "⚽",
    tagline: "The Beautiful Game",
    desc: "Football (Soccer) is the world's most popular sport with over 4 billion fans. Played in virtually every country, it unites cultures across the globe like no other sport.",
    color: "#2563eb",
    players: "11 per side",
    origin: "England, 1863",
    worldCup: "Every 4 years",
    topNations: ["Brazil", "Germany", "France", "Argentina"],
    stats: [{ label: "Global Fans", value: "4B+" }, { label: "FIFA Members", value: "211" }, { label: "Countries", value: "200+" }],
  },
  {
    id: 3,
    name: "Basketball",
    emoji: "🏀",
    tagline: "Sky's The Limit",
    desc: "Basketball is a fast-paced sport played by two teams of five players. Invented in 1891 by James Naismith, it has grown into a global phenomenon with the NBA at its pinnacle.",
    color: "#ea580c",
    players: "5 per side",
    origin: "USA, 1891",
    worldCup: "Every 4 years (FIBA)",
    topNations: ["USA", "Spain", "France", "Australia"],
    stats: [{ label: "Global Fans", value: "2.2B+" }, { label: "FIBA Members", value: "213" }, { label: "NBA Teams", value: "30" }],
  },
  {
    id: 4,
    name: "Tennis",
    emoji: "🎾",
    tagline: "Ace the Moment",
    desc: "Tennis is an individual or doubles racket sport played on a variety of surfaces. The four Grand Slams — Wimbledon, US Open, French Open, and Australian Open — are its greatest stages.",
    color: "#ca8a04",
    players: "1 or 2 per side",
    origin: "France, 12th century",
    worldCup: "Davis Cup (annual)",
    topNations: ["Serbia", "Spain", "Switzerland", "USA"],
    stats: [{ label: "Global Fans", value: "1B+" }, { label: "ATP/WTA Tours", value: "100+" }, { label: "Grand Slams", value: "4" }],
  },
  {
    id: 5,
    name: "Swimming",
    emoji: "🏊",
    tagline: "Flow with Power",
    desc: "Swimming is both a competitive and recreational sport spanning multiple strokes. The Olympics showcase 32 events across freestyle, backstroke, breaststroke, butterfly, and medleys.",
    color: "#0891b2",
    players: "Individual / Team",
    origin: "Ancient civilizations",
    worldCup: "World Championships",
    topNations: ["USA", "Australia", "Hungary", "China"],
    stats: [{ label: "Olympic Events", value: "32" }, { label: "World Records", value: "100+" }, { label: "FINA Members", value: "209" }],
  },
  {
    id: 6,
    name: "Athletics",
    emoji: "🏃",
    tagline: "Faster. Higher. Stronger.",
    desc: "Athletics (Track & Field) is the cornerstone of the Olympic Games. It encompasses running, jumping, throwing, and combined events, celebrating the raw limits of human physical performance.",
    color: "#9333ea",
    players: "Individual / Relay",
    origin: "Ancient Greece",
    worldCup: "World Championships",
    topNations: ["USA", "Kenya", "Jamaica", "Ethiopia"],
    stats: [{ label: "Olympic Events", value: "48" }, { label: "World Athletics Members", value: "214" }, { label: "Disciplines", value: "24+" }],
  },
];

const SportCard = ({ sport }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative bg-[#111] border border-[#222] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
      style={{
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hovered ? "0 24px 60px rgba(0,0,0,0.6)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <div className="h-[5px]" style={{ background: sport.color }} />
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, ${sport.color}11, transparent)`,
          opacity: hovered ? 1 : 0,
        }}/>

      <div className="p-6">
        <div className="flex justify-between items-start mb-5">
          <span className="text-5xl">{sport.emoji}</span>
          <span
            className="text-[11px] font-medium tracking-widest uppercase px-2.5 py-1 rounded"
            style={{ color: sport.color, background: `${sport.color}20` }}>
            {sport.players}
          </span>
        </div>
        <div className="mb-3">
          <p className="text-[11px] text-[#555] tracking-[0.12em] uppercase mb-1">
            {sport.tagline}
          </p>
          <h2
            className="text-4xl leading-none m-0 text-white"
            style={{ fontFamily: "'Bebas Neue', cursive" }}>
            {sport.name.toUpperCase()}
          </h2>
        </div>
        <p className="text-[#888] text-[13.5px] leading-relaxed mb-5">
          {sport.desc}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {sport.stats.map((s) => (
            <div
              key={s.label}
              className="text-xs text-[#aaa] px-3 py-1 rounded-full whitespace-nowrap"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}>
              <span className="font-semibold" style={{ color: sport.color }}>{s.value}</span>{" "}
              {s.label}
            </div>
          ))}
        </div>
        <div className="h-px bg-[#1e1e1e] mb-5" />
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[11px] text-[#444] mb-0.5 uppercase tracking-wider">Origin</p>
            <p className="text-[13px] text-[#777]">{sport.origin}</p>
          </div>
          <Link to={`/sports/${sport.id}`} className="no-underline">
            <button
              className="text-sm font-semibold px-5 py-2.5 rounded-full border-none cursor-pointer transition-all duration-200 hover:scale-105 hover:brightness-110 text-white"
              style={{ background: sport.color }}>
              View Details →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Sports = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]" style={{ fontFamily: "'Bebas Neue', cursive" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap'); * { font-family: 'DM Sans', sans-serif; }`}</style>
      <div className="px-10 pt-16 pb-10 border-b border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <span className="text-[11px] text-[#888] bg-[#1a1a1a] tracking-widest uppercase px-3 py-1 rounded inline-block mb-4">
            🌍 World Sports Hub
          </span>
          <h1
            className="text-[clamp(52px,8vw,96px)] leading-[0.95] text-white tracking-wide"
            style={{ fontFamily: "'Bebas Neue', cursive" }}>
            EXPLORE
            <br />
            <span className="text-[#444]">THE GAME.</span>
          </h1>
          <p className="text-[#666] text-base mt-5 max-w-xl leading-relaxed">
            Dive into the world's greatest sports. Click any card to explore full details, stats, and everything you need to know.
          </p>
        </div>
      </div>
      <div className="px-10 py-10 max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sports.map((sport) => (
            <SportCard key={sport.id} sport={sport} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { sports };
export default Sports;
