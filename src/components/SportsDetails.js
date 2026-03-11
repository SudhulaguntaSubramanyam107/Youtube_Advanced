import { useParams, Link } from "react-router-dom";

const sports = [
  {
    id: 1,
    name: "Cricket",
    emoji: "🏏",
    tagline: "The Gentleman's Game",
    desc: "Cricket is a bat-and-ball game played between two teams of eleven players on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket at each end. It's the world's second most popular sport with over 2.5 billion fans globally, particularly dominant in South Asia, Australia, and the UK.",
    longDesc: "Cricket traces its origins to south-east England in the late 16th century. The first international match was played in 1844 between USA and Canada. Today, it is governed by the International Cricket Council (ICC) with 108 member nations. The sport has three main formats: Test Cricket (5 days), One Day Internationals (50 overs), and T20 (20 overs) — making it one of the most versatile sports in the world.",
    color: "#16a34a",
    players: "11 per side",
    origin: "England, 16th century",
    worldCup: "Every 4 years",
    topNations: ["🇮🇳 India", "🇦🇺 Australia", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", "🇵🇰 Pakistan", "🇿🇦 South Africa"],
    stats: [{ label: "Global Fans", value: "2.5B+" }, { label: "ICC Members", value: "108" }, { label: "Test Nations", value: "12" }, { label: "Founded", value: "1877" }],
    formats: ["Test Cricket", "One Day Internationals", "T20 Cricket"],
    equipment: ["Cricket Bat", "Cricket Ball", "Wickets & Stumps", "Helmet & Pads", "Gloves"],
    funFact: "The longest cricket match ever played was 14 days long — played between England and South Africa in 1939, it was abandoned due to England's ship home departing!",
  },
  {
    id: 2,
    name: "Football",
    emoji: "⚽",
    tagline: "The Beautiful Game",
    desc: "Football (Soccer) is the world's most popular sport with over 4 billion fans. Played in virtually every country on Earth, it unites cultures, transcends language, and delivers passion on a scale no other sport can match.",
    longDesc: "Modern football was codified in England in 1863 when the Football Association was formed and the laws of the game were established. From humble origins in English public schools, football has grown into the planet's dominant sport. The FIFA World Cup, held every 4 years, is the most-watched sporting event in history, drawing over 3.5 billion viewers per tournament.",
    color: "#2563eb",
    players: "11 per side",
    origin: "England, 1863",
    worldCup: "Every 4 years",
    topNations: ["🇧🇷 Brazil", "🇩🇪 Germany", "🇫🇷 France", "🇦🇷 Argentina", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England"],
    stats: [{ label: "Global Fans", value: "4B+" }, { label: "FIFA Members", value: "211" }, { label: "Countries Play", value: "200+" }, { label: "Founded", value: "1863" }],
    formats: ["Club Football", "International Matches", "FIFA World Cup", "UEFA Champions League"],
    equipment: ["Football", "Goalposts", "Shin Guards", "Boots/Cleats", "Goalkeeper Gloves"],
    funFact: "The football World Cup Final in 2022 between Argentina and France was watched by an estimated 1.5 billion people — roughly 1 in 5 humans on Earth.",
  },
  {
    id: 3,
    name: "Basketball",
    emoji: "🏀",
    tagline: "Sky's The Limit",
    desc: "Basketball is a fast-paced team sport played by two teams of five players who score by shooting a ball through a hoop elevated 10 feet above the ground. Invented by Dr. James Naismith in 1891, it is now a global phenomenon.",
    longDesc: "Dr. James Naismith invented basketball in December 1891 in Springfield, Massachusetts, using peach baskets as goals. The NBA was founded in 1946 and has since become one of the world's most powerful sports leagues. Players like Michael Jordan, LeBron James, and Kobe Bryant have elevated the sport to icon status globally.",
    color: "#ea580c",
    players: "5 per side",
    origin: "USA, 1891",
    worldCup: "Every 4 years (FIBA)",
    topNations: ["🇺🇸 USA", "🇪🇸 Spain", "🇫🇷 France", "🇦🇺 Australia", "🇷🇸 Serbia"],
    stats: [{ label: "Global Fans", value: "2.2B+" }, { label: "FIBA Members", value: "213" }, { label: "NBA Teams", value: "30" }, { label: "Founded", value: "1891" }],
    formats: ["NBA (Professional)", "FIBA World Cup", "Olympic Basketball", "3x3 Basketball"],
    equipment: ["Basketball", "Hoop & Backboard", "Court", "Basketball Shoes", "Jersey & Shorts"],
    funFact: "When basketball was invented, players used a soccer ball and peach baskets — someone had to climb a ladder to retrieve the ball every time a basket was scored!",
  },
  {
    id: 4,
    name: "Tennis",
    emoji: "🎾",
    tagline: "Ace the Moment",
    desc: "Tennis is an individual or doubles racket sport played on a variety of surfaces. The four Grand Slams — Wimbledon, US Open, French Open, and Australian Open — are the sport's greatest stages and most coveted titles.",
    longDesc: "Modern lawn tennis was invented in Birmingham, England in 1873 by Major Walter Clopton Wingfield. The Open Era began in 1968, allowing professional players to compete in Grand Slam tournaments. Legends like Roger Federer, Rafael Nadal, Serena Williams, and Novak Djokovic have defined eras of dominance.",
    color: "#ca8a04",
    players: "1 or 2 per side",
    origin: "England, 1873",
    worldCup: "Davis Cup (annual)",
    topNations: ["🇷🇸 Serbia", "🇪🇸 Spain", "🇨🇭 Switzerland", "🇺🇸 USA", "🇵🇱 Poland"],
    stats: [{ label: "Global Fans", value: "1B+" }, { label: "ATP/WTA Tours", value: "100+" }, { label: "Grand Slams", value: "4" }, { label: "Founded", value: "1873" }],
    formats: ["Grand Slams", "ATP/WTA Tour", "Davis Cup", "Olympic Tennis"],
    equipment: ["Tennis Racket", "Tennis Ball", "Tennis Court", "Tennis Shoes", "Wristbands"],
    funFact: "Wimbledon uses around 54,000 tennis balls every year. Balls are changed every 7–9 games to maintain consistent playing conditions.",
  },
  {
    id: 5,
    name: "Swimming",
    emoji: "🏊",
    tagline: "Flow with Power",
    desc: "Swimming is both a competitive sport and vital life skill, spanning multiple strokes across individual and relay events. The Olympics showcase 32 events including freestyle, backstroke, breaststroke, butterfly, and medleys.",
    longDesc: "Competitive swimming began in earnest in the early 19th century in Britain. It was included in the first modern Olympic Games in 1896 in Athens. Michael Phelps, with 23 Olympic gold medals, is the most decorated Olympian of all time — all in swimming.",
    color: "#0891b2",
    players: "Individual / Team",
    origin: "Ancient civilizations",
    worldCup: "World Championships",
    topNations: ["🇺🇸 USA", "🇦🇺 Australia", "🇭🇺 Hungary", "🇨🇳 China", "🇬🇧 Great Britain"],
    stats: [{ label: "Olympic Events", value: "32" }, { label: "World Records", value: "100+" }, { label: "FINA Members", value: "209" }, { label: "Olympic Since", value: "1896" }],
    formats: ["Freestyle", "Backstroke", "Breaststroke", "Butterfly", "Individual Medley"],
    equipment: ["Swimsuit", "Goggles", "Swimming Cap", "Swim Fins (training)", "Kickboard"],
    funFact: "Michael Phelps has won more Olympic gold medals (23) than 86% of all countries in Olympic history have won in total!",
  },
  {
    id: 6,
    name: "Athletics",
    emoji: "🏃",
    tagline: "Faster. Higher. Stronger.",
    desc: "Athletics (Track & Field) is the cornerstone of the Olympic Games. It encompasses running, jumping, throwing, and combined events — celebrating the raw limits of human physical performance.",
    longDesc: "Athletics is one of humanity's oldest forms of organized sport, with roots in Ancient Greek Olympic Games dating to 776 BC. It encompasses sprints, middle distance, long distance, hurdles, relays, marathon, high jump, long jump, triple jump, pole vault, shot put, discus, hammer, and javelin.",
    color: "#9333ea",
    players: "Individual / Relay",
    origin: "Ancient Greece, 776 BC",
    worldCup: "World Championships",
    topNations: ["🇺🇸 USA", "🇰🇪 Kenya", "🇯🇲 Jamaica", "🇪🇹 Ethiopia", "🇬🇧 Great Britain"],
    stats: [{ label: "Olympic Events", value: "48" }, { label: "World Athletics Members", value: "214" }, { label: "Disciplines", value: "24+" }, { label: "Olympic Since", value: "776 BC" }],
    formats: ["Sprints", "Middle Distance", "Long Distance", "Field Events", "Decathlon/Heptathlon"],
    equipment: ["Running Spikes", "Throwing Implements", "Pole (Vault)", "High Jump Mat", "Starting Blocks"],
    funFact: "Usain Bolt's top speed during his 100m world record run was 44.72 km/h (27.8 mph) — faster than any human ever recorded.",
  },
];

const SportsDetails = () => {
  const { id } = useParams();
  const sport = sports.find((s) => s.id === parseInt(id));

  if (!sport) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center text-white">
          <div className="text-7xl mb-4">🔍</div>
          <h2 className="text-3xl font-bold mb-2">Sport Not Found</h2>
          <p className="text-[#666] mb-6">The sport you're looking for doesn't exist.</p>
          <Link
            to="/sports"
            className="no-underline bg-white text-black px-7 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            ← Back to Sports
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap');`}</style>

      {/* Top Nav */}
      <div className="px-10 py-6 border-b border-[#141414] flex items-center gap-4">
        <Link
          to="/sports"
          className="no-underline text-[#888] bg-[#1a1a1a] border border-[#2a2a2a] rounded-full px-5 py-2.5 text-sm font-semibold inline-flex items-center gap-1.5 hover:bg-[#222] hover:text-white transition-all"
        >
          ← All Sports
        </Link>
        <span className="text-[#333] text-sm">/</span>
        <span className="text-sm text-[#666]">{sport.name}</span>
      </div>

      <div className="max-w-[1100px] mx-auto px-10 py-10">

        {/* Hero Section */}
        <div className="flex flex-wrap gap-10 mb-10">

          {/* Left: Main Info */}
          <div className="flex-1 min-w-[320px]">
            <div className="mb-6 text-6xl">{sport.emoji}</div>

            <p
              className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-2"
              style={{ color: sport.color }}
            >
              {sport.tagline}
            </p>

            <h1
              className="text-[clamp(52px,8vw,88px)] text-white leading-[0.95] mb-5"
              style={{ fontFamily: "'Bebas Neue', cursive" }}
            >
              {sport.name.toUpperCase()}
            </h1>

            <p className="text-[15px] text-[#aaa] leading-[1.7] mb-5 max-w-[560px]">
              {sport.desc}
            </p>
            <p className="text-[14px] text-[#666] leading-[1.75] max-w-[560px]">
              {sport.longDesc}
            </p>
          </div>

          {/* Right: Stats + Quick Facts */}
          <div className="flex flex-col gap-4 min-w-[240px] flex-1">

            {/* Stat Boxes */}
            <div className="flex flex-wrap gap-3">
              {sport.stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-[#111] border border-[#1e1e1e] rounded-xl px-5 py-4 text-center flex-1 min-w-[110px]"
                >
                  <div
                    className="text-2xl font-bold leading-none mb-1.5"
                    style={{ color: sport.color }}
                  >
                    {s.value}
                  </div>
                  <div className="text-[11px] text-[#555] tracking-[0.08em] uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Facts Card */}
            <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-5">
              <p className="text-[11px] text-[#444] tracking-[0.1em] uppercase mb-4">Quick Facts</p>
              {[
                { label: "Players", value: sport.players },
                { label: "Origin", value: sport.origin },
                { label: "World Cup", value: sport.worldCup },
              ].map((f, i) => (
                <div
                  key={f.label}
                  className={`flex justify-between items-center py-2.5 ${i < 2 ? "border-b border-[#1a1a1a]" : ""}`}
                >
                  <span className="text-[13px] text-[#555]">{f.label}</span>
                  <span className="text-[13px] text-[#ccc] font-medium">{f.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Colored Accent Bar */}
        <div
          className="h-[3px] rounded-sm mb-10"
          style={{ background: `linear-gradient(90deg, ${sport.color}, transparent)` }}
        />

        {/* Bottom 3-col Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

          {/* Top Nations */}
          <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-5">
            <p className="text-[11px] text-[#444] tracking-[0.1em] uppercase mb-4">🌍 Top Nations</p>
            <div className="flex flex-col gap-2">
              {sport.topNations.map((n, i) => (
                <div
                  key={n}
                  className="flex items-center gap-2.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-3.5 py-2 text-[13px] text-[#ccc]"
                >
                  <span className="text-[12px] font-bold" style={{ color: sport.color }}>
                    #{i + 1}
                  </span>
                  {n}
                </div>
              ))}
            </div>
          </div>

          {/* Formats */}
          <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-5">
            <p className="text-[11px] text-[#444] tracking-[0.1em] uppercase mb-4">📋 Formats & Events</p>
            <div className="flex flex-wrap gap-2">
              {sport.formats.map((f) => (
                <span
                  key={f}
                  className="text-[12px] font-medium px-3.5 py-1.5 rounded-full"
                  style={{
                    background: `${sport.color}1a`,
                    color: sport.color,
                    border: `1px solid ${sport.color}40`,
                  }}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Equipment */}
          <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-5">
            <p className="text-[11px] text-[#444] tracking-[0.1em] uppercase mb-4">🛠️ Equipment</p>
            <div className="flex flex-col gap-2">
              {sport.equipment.map((e) => (
                <div
                  key={e}
                  className="flex items-center gap-2 bg-[#161616] border border-[#222] rounded-lg px-4 py-2.5 text-[13px] text-[#aaa]"
                >
                  <span style={{ color: sport.color }}>▸</span>
                  {e}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Fact Banner */}
        <div
          className="rounded-2xl px-7 py-6 flex gap-4 items-start"
          style={{
            background: `${sport.color}10`,
            border: `1px solid ${sport.color}30`,
          }}
        >
          <span className="text-3xl flex-shrink-0">💡</span>
          <div>
            <p
              className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-2"
              style={{ color: sport.color }}
            >
              Did You Know?
            </p>
            <p className="text-[15px] text-[#ccc] leading-[1.7]">{sport.funFact}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SportsDetails;
