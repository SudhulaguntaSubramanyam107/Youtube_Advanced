import { useState } from "react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    emoji: "🌐",
    tagline: "Build End-to-End Applications",
    category: "Web Dev",
    level: "Beginner → Advanced",
    duration: "6 Months",
    lessons: 120,
    students: "84K+",
    rating: 4.9,
    color: "#2563eb",
    desc: "Master HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. Build real-world full stack apps from scratch and deploy them to production.",
    topics: ["HTML & CSS", "JavaScript ES6+", "React.js", "Node.js", "MongoDB", "REST APIs", "Git & GitHub", "Deployment"],
    instructor: "Alex Morgan",
    certificate: true,
  },
  {
    id: 2,
    title: "Python for Data Science & AI",
    emoji: "🐍",
    tagline: "From Data to Intelligence",
    category: "Data Science",
    level: "Intermediate",
    duration: "4 Months",
    lessons: 95,
    students: "112K+",
    rating: 4.8,
    color: "#16a34a",
    desc: "Learn Python, NumPy, Pandas, Matplotlib, Scikit-learn, and TensorFlow. Analyze data, build ML models, and deploy AI-powered applications.",
    topics: ["Python Basics", "NumPy & Pandas", "Data Visualization", "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Model Deployment"],
    instructor: "Dr. Priya Sharma",
    certificate: true,
  },
  {
    id: 3,
    title: "UI/UX Design Mastery",
    emoji: "🎨",
    tagline: "Design that Delights Users",
    category: "Design",
    level: "Beginner",
    duration: "3 Months",
    lessons: 72,
    students: "61K+",
    rating: 4.9,
    color: "#db2777",
    desc: "Learn Figma, design systems, prototyping, user research, and accessibility. Build a professional portfolio of real-world UI/UX case studies.",
    topics: ["Design Thinking", "Figma", "Wireframing", "Prototyping", "Typography", "Color Theory", "Design Systems", "User Research"],
    instructor: "Sarah Chen",
    certificate: true,
  },
  {
    id: 4,
    title: "DevOps & Cloud Engineering",
    emoji: "☁️",
    tagline: "Ship Faster, Scale Smarter",
    category: "DevOps",
    level: "Intermediate",
    duration: "5 Months",
    lessons: 108,
    students: "43K+",
    rating: 4.7,
    color: "#ea580c",
    desc: "Master Docker, Kubernetes, CI/CD pipelines, AWS, Terraform, and monitoring. Learn how modern companies ship and scale software at speed.",
    topics: ["Linux & Bash", "Docker", "Kubernetes", "AWS/GCP", "CI/CD", "Terraform", "Monitoring", "Security"],
    instructor: "James Okafor",
    certificate: true,
  },
  {
    id: 5,
    title: "React Native Mobile Dev",
    emoji: "📱",
    tagline: "One Codebase, Two Platforms",
    category: "Mobile Dev",
    level: "Intermediate",
    duration: "3 Months",
    lessons: 80,
    students: "38K+",
    rating: 4.8,
    color: "#0891b2",
    desc: "Build cross-platform iOS and Android apps using React Native. From navigation and state management to animations and app store deployment.",
    topics: ["React Native Basics", "Navigation", "Redux", "Expo", "APIs", "Push Notifications", "Animations", "App Store Deploy"],
    instructor: "Maria Gonzalez",
    certificate: true,
  },
  {
    id: 6,
    title: "Cybersecurity & Ethical Hacking",
    emoji: "🔐",
    tagline: "Defend. Detect. Dominate.",
    category: "Security",
    level: "Advanced",
    duration: "4 Months",
    lessons: 90,
    students: "29K+",
    rating: 4.9,
    color: "#9333ea",
    desc: "Learn penetration testing, network security, cryptography, and ethical hacking techniques. Prepare for CEH and CompTIA Security+ certifications.",
    topics: ["Network Security", "Penetration Testing", "Cryptography", "OWASP", "Kali Linux", "Malware Analysis", "SOC Operations", "Bug Bounty"],
    instructor: "Ravi Patel",
    certificate: true,
  },
  {
    id: 7,
    title: "Blockchain & Web3 Development",
    emoji: "⛓️",
    tagline: "Build the Decentralised Web",
    category: "Web3",
    level: "Intermediate",
    duration: "3 Months",
    lessons: 65,
    students: "22K+",
    rating: 4.6,
    color: "#ca8a04",
    desc: "Understand blockchain fundamentals, write Solidity smart contracts, build DeFi protocols, and launch NFT projects on Ethereum and Solana.",
    topics: ["Blockchain Basics", "Solidity", "Smart Contracts", "Hardhat", "Web3.js", "DeFi", "NFTs", "Solana"],
    instructor: "Kevin Wu",
    certificate: true,
  },
  {
    id: 8,
    title: "System Design & Architecture",
    emoji: "🏗️",
    tagline: "Design Systems That Scale",
    category: "Engineering",
    level: "Advanced",
    duration: "2 Months",
    lessons: 48,
    students: "55K+",
    rating: 4.9,
    color: "#0f766e",
    desc: "Learn how to design scalable, fault-tolerant distributed systems. Master load balancing, caching, databases, microservices, and system design interviews.",
    topics: ["Distributed Systems", "Load Balancing", "Caching (Redis)", "SQL vs NoSQL", "Microservices", "Message Queues", "CAP Theorem", "System Design Interview"],
    instructor: "Anika Patel",
    certificate: false,
  },
];

const categories = ["All", "Web Dev", "Data Science", "Design", "DevOps", "Mobile Dev", "Security", "Web3", "Engineering"];

const Stars = ({ rating, color }) => {
  const full = Math.floor(rating);
  const decimal = rating - full;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 2 }}>
      {[...Array(5)].map((_, i) => (
        <span key={i} style={{ fontSize: 11, color: i < full ? color : i === full && decimal >= 0.5 ? color : "#333", opacity: i < full ? 1 : i === full && decimal >= 0.5 ? 0.6 : 0.25 }}>★</span>
      ))}
      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#888", marginLeft: 4 }}>{rating}</span>
    </span>
  );
};

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);

  const filtered = activeCategory === "All" ? courses : courses.filter(c => c.category === activeCategory);

  return (
    <div style={{ fontFamily: "'Bebas Neue', cursive", background: "#0a0a0a", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap');

        .course-card {
          background: #111;
          border: 1px solid #1e1e1e;
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          cursor: pointer;
          position: relative;
        }
        .course-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.7);
        }
        .cat-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 600;
          padding: 7px 16px;
          border-radius: 999px;
          border: 1px solid #222;
          background: transparent;
          color: #555;
          cursor: pointer;
          transition: all 0.2s;
          letter-spacing: 0.03em;
          white-space: nowrap;
        }
        .cat-btn:hover { background: #1a1a1a; color: #aaa; border-color: #333; }
        .cat-btn.active { background: #fff; color: #000; border-color: #fff; }

        .topic-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 6px;
          background: #1a1a1a;
          border: 1px solid #222;
          color: #666;
          white-space: nowrap;
        }
        .enroll-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          padding: 10px 22px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
          display: inline-block;
          letter-spacing: 0.02em;
        }
        .enroll-btn:hover { transform: scale(1.04); filter: brightness(1.15); }

        .meta-pill {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          color: #555;
          background: #161616;
          border: 1px solid #1e1e1e;
          border-radius: 6px;
          padding: 5px 10px;
          white-space: nowrap;
        }
        .grid-layout {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 20px;
        }
        @media (max-width: 600px) {
          .grid-layout { grid-template-columns: 1fr; }
        }
        .cert-badge {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 4px;
          background: #1a1a0a;
          color: #ca8a04;
          border: 1px solid #ca8a0440;
        }
      `}</style>

      {/* Header */}
      <div style={{ padding: "60px 40px 36px", borderBottom: "1px solid #141414" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#888", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14, background: "#1a1a1a", display: "inline-block", padding: "4px 12px", borderRadius: 4, border: "1px solid #222" }}>
            💻 Software Courses
          </p>
          <h1 style={{ fontSize: "clamp(48px, 8vw, 92px)", color: "#fff", lineHeight: 0.92, margin: "0 0 18px" }}>
            LEVEL UP<br /><span style={{ color: "#2a2a2a" }}>YOUR SKILLS.</span>
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#555", fontSize: 15, maxWidth: 480, lineHeight: 1.6 }}>
            {courses.length} world-class courses across software development, design, data science, and more. Learn at your pace, build real projects.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div style={{ padding: "24px 40px", borderBottom: "1px solid #111", overflowX: "auto" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 8, flexWrap: "nowrap", minWidth: "max-content" }}>
          {categories.map((cat) => (
            <button key={cat} className={`cat-btn ${activeCategory === cat ? "active" : ""}`} onClick={() => setActiveCategory(cat)}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ padding: "16px 40px", borderBottom: "1px solid #0e0e0e" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 28, flexWrap: "wrap" }}>
          {[
            { v: `${filtered.length}`, l: "Courses" },
            { v: "500K+", l: "Students Enrolled" },
            { v: "4.8★", l: "Average Rating" },
            { v: "Certificate", l: "on Completion" },
          ].map(s => (
            <div key={s.l} style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>{s.v}</span>
              <span style={{ fontSize: 12, color: "#444", marginLeft: 6 }}>{s.l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Course Grid */}
      <div style={{ padding: "36px 40px 60px", maxWidth: 1240, margin: "0 auto" }}>
        <div className="grid-layout">
          {filtered.map((course) => (
            <div
              key={course.id}
              className="course-card"
              style={{ borderColor: hoveredId === course.id ? `${course.color}40` : "#1e1e1e" }}
              onMouseEnter={() => setHoveredId(course.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Color bar */}
              <div style={{ height: 4, background: course.color }} />

              {/* Glow overlay on hover */}
              <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                background: `radial-gradient(circle at top left, ${course.color}0d, transparent 60%)`,
                opacity: hoveredId === course.id ? 1 : 0,
                transition: "opacity 0.3s"
              }} />

              <div style={{ padding: "22px" }}>
                {/* Top row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <div style={{ fontSize: 44 }}>{course.emoji}</div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 10px", borderRadius: 4, background: `${course.color}20`, color: course.color, border: `1px solid ${course.color}30` }}>
                      {course.category}
                    </span>
                    {course.certificate && <span className="cert-badge">🏆 Certificate</span>}
                  </div>
                </div>

                {/* Title */}
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#444", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>
                  {course.tagline}
                </p>
                <h2 style={{ fontSize: 28, color: "#fff", lineHeight: 1.05, margin: "0 0 12px" }}>
                  {course.title.toUpperCase()}
                </h2>

                {/* Rating + students */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <Stars rating={course.rating} color={course.color} />
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#444" }}>·</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#555" }}>{course.students} students</span>
                </div>

                {/* Description */}
                <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#777", fontSize: 13, lineHeight: 1.65, marginBottom: 18 }}>
                  {course.desc}
                </p>

                {/* Topics */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                  {course.topics.slice(0, 6).map((t) => (
                    <span key={t} className="topic-tag">{t}</span>
                  ))}
                  {course.topics.length > 6 && (
                    <span className="topic-tag" style={{ color: course.color, borderColor: `${course.color}30` }}>+{course.topics.length - 6} more</span>
                  )}
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: "#181818", marginBottom: 18 }} />

                {/* Footer */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <span className="meta-pill">📚 {course.lessons} lessons</span>
                    <span className="meta-pill">⏱ {course.duration}</span>
                    <span className="meta-pill">📊 {course.level}</span>
                  </div>
                </div>

                <div style={{ marginTop: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "#333", marginBottom: 2 }}>INSTRUCTOR</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#666" }}>👤 {course.instructor}</p>
                  </div>
                  <Link to={`/courses/${course.id}`} style={{ textDecoration: "none" }}>
                    <button className="enroll-btn" style={{ background: course.color, color: "#fff" }}>
                      Enroll Now →
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
