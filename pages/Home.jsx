import { useState } from "react";

const APP_URL = "https://app.netpraise.org";

const HERO_IMG = "https://media.base44.com/images/public/69f4bafefb56e75cc6423b34/f2fd08258_generated_image.png";
const WORSHIP_IMG = "https://media.base44.com/images/public/69f4bafefb56e75cc6423b34/ad73a528c_generated_image.png";
const CHURCH_IMG = "https://media.base44.com/images/public/69f4bafefb56e75cc6423b34/53cc04ba5_generated_image.png";
const SMALL_GROUP_IMG = "https://media.base44.com/images/public/69f4bafefb56e75cc6423b34/b1993aab0_generated_image.png";

// Brand Colors
const ORANGE_PRIMARY = "#f97316";
const ORANGE_DARK = "#ea580c";
const ORANGE_LIGHT = "#fff7ed";
const ORANGE_MED = "#fed7aa";
const PURPLE_SEC = "#7c3aed";
const PURPLE_DARK = "#5b21b6";
const PURPLE_LIGHT = "#f5f3ff";

const NAV_LINKS = [
  { label: "What Is NetPraise?", href: "#what-is" },
  { label: "Options", href: "#options" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "For Churches", href: "#church-admin" },
];

const OPTIONS = [
  {
    icon: "⛪",
    title: "Churches",
    desc: "Churches can create a full prayer community — organize members into classes or groups, assign leaders, and help everyone pray for one another throughout the week.",
    cta: "Start Your Church",
  },
  {
    icon: "📖",
    title: "Small Groups & Classes",
    desc: "Sunday school classes, Bible studies, youth groups, and life groups can share prayer requests privately and stay connected in faith beyond Sunday.",
    cta: "Start a Group",
  },
  {
    icon: "🏠",
    title: "Families & Friends",
    desc: "Create a private prayer circle for your family or closest friends. Support each other through prayer in the moments that matter most.",
    cta: "Create a Circle",
  },
  {
    icon: "🙏",
    title: "Pray For Me",
    desc: "You don't need a group to be prayed for. Share your request and receive encouragement from the NetPraise community around you.",
    cta: "Request Prayer",
  },
  {
    icon: "✨",
    title: "AI Prayer & Bible Guidance",
    desc: "NetPraise can suggest relevant Bible verses, prayer topics, and words of encouragement based on your request — so you're never praying alone.",
    cta: "Explore AI Guidance",
  },
];

const FEATURES = [
  { icon: "📝", text: "Prayer Requests" },
  { icon: "🔒", text: "Private & Public Groups" },
  { icon: "⛪", text: "Church & Class Organization" },
  { icon: "👩‍🏫", text: "Teacher & Leader Tools" },
  { icon: "🛠️", text: "Church Admin Tools" },
  { icon: "📖", text: "Bible Verse Suggestions" },
  { icon: "🤖", text: "AI-Assisted Prayer Guidance" },
  { icon: "👨‍👩‍👧", text: "Family Prayer Circles" },
  { icon: "📱", text: "Mobile-Friendly Design" },
];

const ADMIN_BENEFITS = [
  "Create unlimited classes or groups",
  "Assign leaders to any group",
  "Manage and invite members",
  "Encourage weekly prayer participation",
  "View aggregate prayer trends without exposing private details",
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id) => {
    setMobileOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', Helvetica, Arial, sans-serif", color: "#1a1a2e", overflowX: "hidden" }}>
      {/* SEO & META TAGS */}
      <head>
        <title>NetPraise | Prayer App for Churches, Small Groups & Families</title>
        <meta name="description" content="Connect through prayer. NetPraise helps churches, small groups, families, and individuals share prayer requests, pray together, and build Acts 2 community." />
        <meta name="keywords" content="prayer app, church prayer, small group prayer, prayer request app, family prayer, prayer community, Bible study app, prayer circle" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#f97316" />
        <meta property="og:title" content="NetPraise | Pray Together. Stay Connected." />
        <meta property="og:description" content="A prayer community platform for churches, small groups, families, friends, and individuals." />
        <meta property="og:image" content={HERO_IMG} />
        <meta property="og:url" content="https://netpraise.org" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NetPraise | Pray Together. Stay Connected." />
        <meta name="twitter:description" content="Connect through prayer. Share prayer requests, pray for others, organize church groups, and build Acts 2 community." />
        <meta name="author" content="NetPraise" />
        <meta name="copyright" content="© 2026 NetPraise. All rights reserved." />
        <link rel="canonical" href="https://netpraise.org" />
        
        {/* Structured Data — JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "NetPraise",
            url: "https://netpraise.org",
            logo: "https://netpraise.org/logo.png",
            description: "A prayer community platform for churches, small groups, families, and individuals",
            sameAs: [
              "https://www.linkedin.com/company/netpraise",
              "https://twitter.com/netpraise",
              "https://www.facebook.com/netpraise"
            ],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Customer Support",
              url: "https://app.netpraise.org/contact"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "NetPraise",
            description: "Prayer community app for churches, small groups, families, and individuals",
            url: "https://app.netpraise.org",
            applicationCategory: "ProductionApplication",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD"
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              ratingCount: "500"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is NetPraise?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "NetPraise is a prayer community platform that helps churches, small groups, families, and individuals share prayer requests, pray for each other, and build Acts 2 community."
                }
              },
              {
                "@type": "Question",
                name: "Can my church use NetPraise?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! NetPraise is specifically designed for churches. Organize unlimited classes and groups, assign leaders, manage members, and encourage weekly prayer participation across your entire church."
                }
              },
              {
                "@type": "Question",
                name: "Is NetPraise free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "NetPraise is free to use. Create a prayer group, share requests, and start praying together with your church, family, or friends at no cost."
                }
              },
              {
                "@type": "Question",
                name: "How do I start a prayer group?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sign up, create a group (church, class, family, or friends), invite members, and start sharing prayer requests. It takes less than 5 minutes to get started."
                }
              }
            ]
          })}
        </script>
      </head>

      {/* NAV */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(255,255,255,0.97)",
        borderBottom: "1px solid #ffe4cc",
        padding: "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 64, backdropFilter: "blur(8px)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 28 }}>🙏</span>
          <span style={{ fontWeight: 900, fontSize: 20, color: ORANGE_DARK }}>Net<span style={{ color: PURPLE_SEC }}>Praise</span></span>
        </div>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }} className="nav-desktop">
          {NAV_LINKS.map(l => (
            <button key={l.href} onClick={() => scrollTo(l.href)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#444", fontSize: 14, fontWeight: 500 }}>
              {l.label}
            </button>
          ))}
          <a href={APP_URL} target="_blank" rel="noopener noreferrer"
            style={{
              background: `linear-gradient(135deg, ${ORANGE_PRIMARY}, ${ORANGE_DARK})`,
              color: "#fff", padding: "10px 22px", borderRadius: 25,
              fontWeight: 700, fontSize: 14, textDecoration: "none",
              boxShadow: "0 4px 14px rgba(249,115,22,0.40)"
            }}>
            Open App
          </a>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)}
          style={{ display: "none", background: "none", border: "none", fontSize: 26, cursor: "pointer" }}
          className="nav-mobile-btn">
          {mobileOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          position: "fixed", top: 64, left: 0, right: 0, zIndex: 99,
          background: "#fff", padding: 24, borderBottom: "1px solid #ffe4cc",
          display: "flex", flexDirection: "column", gap: 16
        }}>
          {NAV_LINKS.map(l => (
            <button key={l.href} onClick={() => scrollTo(l.href)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#333", fontSize: 16, textAlign: "left", padding: "4px 0" }}>
              {l.label}
            </button>
          ))}
          <a href={APP_URL} target="_blank" rel="noopener noreferrer"
            style={{
              background: `linear-gradient(135deg, ${ORANGE_PRIMARY}, ${ORANGE_DARK})`,
              color: "#fff", padding: "12px 24px", borderRadius: 25,
              fontWeight: 700, textAlign: "center", textDecoration: "none"
            }}>
            Open App
          </a>
        </div>
      )}

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <img src={HERO_IMG} alt="People praying together in a church class"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(154,52,18,0.80) 0%, rgba(234,88,12,0.60) 40%, rgba(91,33,182,0.65) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "60px 24px", maxWidth: 760, margin: "0 auto" }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>🙏</div>
          <h1 style={{ fontSize: "clamp(38px, 7vw, 64px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 14 }}>
            NetPraise
          </h1>
          <p style={{ fontSize: "clamp(22px, 4vw, 34px)", fontWeight: 700, color: "#fed7aa", marginBottom: 14 }}>
            Pray Together. Stay Connected.
          </p>
          <p style={{ fontSize: "clamp(16px, 2.5vw, 20px)", color: "rgba(255,255,255,0.88)", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.7 }}>
            A prayer community platform for churches, small groups, families, friends, and individuals.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" style={btnOrange}>🚀 Open the App</a>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" style={btnWhite}>⛪ Start a Church or Group</a>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" style={btnOutlineWhite}>🙏 Pray For Me</a>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 28 }}>
            <span style={badgeWhite}>🍎 App Store</span>
            <span style={badgeWhite}>▶ Google Play</span>
          </div>
        </div>
      </section>

      {/* WHY PRAYER SECTION */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ display: "flex", flexWrap: "wrap", minHeight: 480 }}>
          <div style={{ flex: "1 1 400px", minHeight: 400, position: "relative" }}>
            <img src={WORSHIP_IMG} alt="Church worship and Holy Spirit connection"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 60%, #fff 100%)" }} />
          </div>
          <div style={{ flex: "1 1 360px", background: "#fff", padding: "60px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span style={sectionLabel}>The Heart of NetPraise</span>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 900, color: ORANGE_DARK, lineHeight: 1.2, marginBottom: 20 }}>
              When We Pray Together,<br />Everything Changes
            </h2>
            <p style={{ fontSize: 17, color: "#4b5563", lineHeight: 1.85, marginBottom: 16 }}>
              When people in a church prayer group pray for each other, something powerful happens — <strong>relationships deepen</strong>, trust grows, and the Holy Spirit moves in ways that transform lives.
            </p>
            <p style={{ fontSize: 17, color: "#4b5563", lineHeight: 1.85, marginBottom: 16 }}>
              This is the Acts 2 church — people invested in each other, carrying each other's burdens, and <strong>empowered by the Holy Spirit</strong> to reach more people for Christ.
            </p>
            <p style={{ fontSize: 17, color: PURPLE_SEC, fontWeight: 700, lineHeight: 1.7, fontStyle: "italic" }}>
              "And they devoted themselves to the apostles' teaching and the fellowship, to the breaking of bread and the prayers." — Acts 2:42
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IS NETPRAISE */}
      <section id="what-is" style={{ padding: "80px 24px", background: ORANGE_LIGHT, textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span style={sectionLabel}>About NetPraise</span>
          <h2 style={sectionTitle}>What Is NetPraise?</h2>
          <p style={{ fontSize: 18, color: "#4b5563", lineHeight: 1.8, marginBottom: 40 }}>
            NetPraise is a prayer community platform that helps people <strong>share prayer requests</strong>, <strong>pray for others</strong>, <strong>organize groups</strong>, and <strong>stay connected through prayer</strong> — whether you're part of a church, a small group, a family, or simply seeking prayer on your own.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "center" }}>
            {[
              { icon: "💬", text: "Share prayer requests with those you trust" },
              { icon: "🤝", text: "Pray for others and show you care" },
              { icon: "👥", text: "Organize church groups, classes & circles" },
              { icon: "📲", text: "Stay connected in faith all week long" },
            ].map((item, i) => (
              <div key={i} style={{
                background: "#fff", borderRadius: 16, padding: "20px 24px",
                flex: "1 1 180px", maxWidth: 220,
                boxShadow: "0 2px 12px rgba(249,115,22,0.10)",
                border: "1px solid #ffe4cc"
              }}>
                <div style={{ fontSize: 32, marginBottom: 10 }}>{item.icon}</div>
                <p style={{ fontSize: 15, color: "#374151", fontWeight: 500, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPTIONS */}
      <section id="options" style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={sectionLabel}>Who It's For</span>
            <h2 style={sectionTitle}>NetPraise for Everyone</h2>
            <p style={{ fontSize: 17, color: "#6b7280", maxWidth: 560, margin: "0 auto" }}>
              Whether you need a prayer app for churches, small group prayer platform, family prayer circle, or prayer request sharing — NetPraise helps you pray together.
            </p>
          </div>

          {/* Small group image banner */}
          <div style={{ borderRadius: 24, overflow: "hidden", marginBottom: 48, maxHeight: 380, position: "relative" }}>
            <img src={SMALL_GROUP_IMG} alt="Bible study small group connected through prayer and requests"
              style={{ width: "100%", height: 380, objectFit: "cover", objectPosition: "center top", display: "block" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(154,52,18,0.78) 0%, transparent 60%)" }} />
            <div style={{ position: "absolute", bottom: 28, left: 32, right: 32 }}>
              <p style={{ color: "#fff", fontSize: "clamp(18px, 3vw, 26px)", fontWeight: 800, margin: 0 }}>
                "When we're invested in each other through prayer, the church is stronger."
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {OPTIONS.map((opt, i) => (
              <div key={i} style={{
                background: "linear-gradient(135deg, #fff7ed, #fff3e6)",
                borderRadius: 20, padding: "32px 28px",
                boxShadow: "0 4px 24px rgba(249,115,22,0.10)",
                display: "flex", flexDirection: "column",
                border: "1px solid #ffe4cc"
              }}>
                <div style={{ fontSize: 42, marginBottom: 14 }}>{opt.icon}</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: ORANGE_DARK, marginBottom: 10 }}>{opt.title}</h3>
                <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.7, flexGrow: 1 }}>{opt.desc}</p>
                <a href={APP_URL} target="_blank" rel="noopener noreferrer" style={{
                  marginTop: 20, display: "inline-block",
                  background: `linear-gradient(135deg, ${ORANGE_PRIMARY}, ${ORANGE_DARK})`,
                  color: "#fff", padding: "10px 20px",
                  borderRadius: 25, fontWeight: 700, fontSize: 14,
                  textDecoration: "none", textAlign: "center",
                  boxShadow: "0 4px 12px rgba(249,115,22,0.30)"
                }}>
                  {opt.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ padding: "80px 24px", background: "linear-gradient(180deg, #fff7ed 0%, #fdf4ff 100%)", textAlign: "center" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <span style={sectionLabel}>Simple Process</span>
          <h2 style={sectionTitle}>How NetPraise Works</h2>
          <p style={{ fontSize: 17, color: "#6b7280", maxWidth: 500, margin: "0 auto 52px" }}>
            Getting started is easy — just three steps to start praying together.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 0, justifyContent: "center", alignItems: "flex-start" }}>
            {[
              { step: "01", icon: "👥", title: "Join or Create a Group", desc: "Start a church, class, family circle, or small group — or join one you've been invited to." },
              { step: "02", icon: "📝", title: "Share a Prayer Request", desc: "Post your prayer need privately or to your group. Add details or keep it simple." },
              { step: "03", icon: "💜", title: "Pray, Respond & Stay Connected", desc: "Pray for others, leave encouragement, and watch your community grow in faith together." },
            ].map((item, i) => (
              <div key={i} style={{ flex: "1 1 240px", maxWidth: 300, padding: "0 16px", marginBottom: 32 }}>
                <div style={{
                  width: 72, height: 72, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${ORANGE_PRIMARY}, ${PURPLE_SEC})`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 16px", fontSize: 30,
                  boxShadow: "0 6px 20px rgba(249,115,22,0.30)"
                }}>
                  {item.icon}
                </div>
                <div style={{
                  display: "inline-block", background: "#fff7ed",
                  color: ORANGE_DARK, fontWeight: 800, fontSize: 12,
                  padding: "3px 10px", borderRadius: 20, marginBottom: 10,
                  border: `1px solid ${ORANGE_MED}`
                }}>
                  STEP {item.step}
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: "#1e1b4b", marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <a href={APP_URL} target="_blank" rel="noopener noreferrer" style={{ ...btnOrange, display: "inline-block", marginTop: 16 }}>
            Get Started Free →
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={sectionLabel}>Features</span>
            <h2 style={sectionTitle}>Everything You Need for Church Prayer</h2>
            <p style={{ fontSize: 17, color: "#6b7280", maxWidth: 520, margin: "0 auto" }}>
              NetPraise includes all the tools churches and groups need to organize prayer and stay connected.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {FEATURES.map((f, i) => (
              <div key={i} style={{
                background: i % 2 === 0 ? "#fff7ed" : PURPLE_LIGHT,
                borderRadius: 16, padding: "22px 18px",
                display: "flex", alignItems: "center", gap: 14,
                boxShadow: "0 2px 12px rgba(249,115,22,0.07)",
                border: `1px solid ${i % 2 === 0 ? "#ffe4cc" : "#ede9fe"}`
              }}>
                <span style={{ fontSize: 28 }}>{f.icon}</span>
                <span style={{ fontSize: 15, fontWeight: 600, color: "#374151" }}>{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHURCH ADMIN */}
      <section id="church-admin" style={{ padding: "80px 24px", background: ORANGE_LIGHT }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ borderRadius: 24, overflow: "hidden", marginBottom: 56, position: "relative", maxHeight: 420 }}>
            <img src={CHURCH_IMG} alt="Church community welcoming new members and praying together"
              style={{ width: "100%", height: 420, objectFit: "cover", objectPosition: "center", display: "block" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(154,52,18,0.82) 0%, rgba(249,115,22,0.45) 60%, transparent 100%)" }} />
            <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, display: "flex", flexDirection: "column", justifyContent: "center", padding: "40px 48px", maxWidth: 500 }}>
              <span style={{ ...sectionLabel, marginBottom: 16 }}>Church Leaders</span>
              <h2 style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
                Powerful Tools for Church Admins
              </h2>
              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.90)", lineHeight: 1.7 }}>
                Organize prayer across all your classes, groups, and ministries — from one dashboard.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 48, alignItems: "center" }}>
            <div style={{ flex: "1 1 300px" }}>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                {ADMIN_BENEFITS.map((b, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 17, color: "#374151" }}>
                    <span style={{ color: ORANGE_PRIMARY, fontWeight: 900, fontSize: 20, marginTop: 1 }}>✓</span>
                    {b}
                  </li>
                ))}
              </ul>
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" style={{ ...btnOrange, display: "inline-block", marginTop: 36 }}>
                Set Up Your Church →
              </a>
            </div>
            <div style={{ flex: "1 1 280px" }}>
              <div style={{
                background: `linear-gradient(135deg, ${ORANGE_DARK}, ${ORANGE_PRIMARY}, ${PURPLE_SEC})`,
                borderRadius: 24, padding: "40px 32px",
                color: "#fff", textAlign: "center",
                boxShadow: "0 12px 40px rgba(249,115,22,0.28)"
              }}>
                <div style={{ fontSize: 52, marginBottom: 16 }}>⛪</div>
                <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>Built for Churches</h3>
                <p style={{ fontSize: 15, opacity: 0.92, lineHeight: 1.7 }}>
                  From small congregations to large ministries, NetPraise grows with your church and keeps prayer at the center.
                </p>
                <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 10 }}>
                  {["Unlimited Groups", "Leader Assignments", "Member Management", "Privacy Controls"].map((t, i) => (
                    <div key={i} style={{
                      background: "rgba(255,255,255,0.18)", borderRadius: 10,
                      padding: "10px 16px", fontSize: 14, fontWeight: 600
                    }}>
                      ✨ {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACTS 2 BANNER */}
      <section style={{
        background: `linear-gradient(135deg, ${ORANGE_DARK}, ${ORANGE_PRIMARY} 50%, ${PURPLE_SEC})`,
        padding: "70px 24px", textAlign: "center"
      }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ fontSize: 40, marginBottom: 20 }}>🔥</div>
          <h2 style={{ fontSize: "clamp(22px, 4vw, 34px)", color: "#fff", fontWeight: 900, marginBottom: 16 }}>
            Become an Acts 2 Church
          </h2>
          <p style={{ fontSize: "clamp(17px, 2.5vw, 22px)", color: "rgba(255,255,255,0.92)", fontStyle: "italic", lineHeight: 1.8, marginBottom: 20 }}>
            "When people become invested in each other through prayer, the church is stronger — and can reach more people for Christ."
          </p>
          <p style={{ color: "#fed7aa", fontSize: 15, fontWeight: 600 }}>— The NetPraise Mission</p>
          <a href={APP_URL} target="_blank" rel="noopener noreferrer" style={{ ...btnWhite, display: "inline-block", marginTop: 28 }}>
            Start Praying Together →
          </a>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: "90px 24px",
        background: "linear-gradient(160deg, #fff7ed 0%, #ffe4cc 40%, #f5f3ff 100%)",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ fontSize: 52, marginBottom: 16 }}>🙏</div>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 900, color: ORANGE_DARK, marginBottom: 16 }}>
            Start Praying Together Today
          </h2>
          <p style={{ fontSize: 18, color: "#6b7280", marginBottom: 40, lineHeight: 1.7 }}>
            Join thousands of people already connected through prayer on NetPraise.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" style={btnOrange}>🚀 Open NetPraise App</a>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" style={btnPurple}>👥 Create a Group</a>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" style={btnOutlineOrange}>🙏 Pray For Me</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#1c0a00", color: "#fed7aa", padding: "60px 24px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 40, marginBottom: 48 }}>
            <div style={{ flex: "2 1 240px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <span style={{ fontSize: 28 }}>🙏</span>
                <span style={{ fontWeight: 900, fontSize: 22, color: "#fff" }}>Net<span style={{ color: ORANGE_PRIMARY }}>Praise</span></span>
              </div>
              <p style={{ fontSize: 14, color: "#fcd9b0", lineHeight: 1.7, maxWidth: 260 }}>
                A prayer community platform for churches, small groups, families, and individuals.
              </p>
            </div>
            <div style={{ flex: "1 1 140px" }}>
              <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: 16, fontSize: 14, textTransform: "uppercase", letterSpacing: 1 }}>Product</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { label: "Open App", href: APP_URL },
                  { label: "About NetPraise", href: "#what-is" },
                  { label: "Features", href: "#features" },
                  { label: "For Churches", href: "#church-admin" },
                ].map((l, i) => (
                  <a key={i} href={l.href} style={{ color: "#fcd9b0", fontSize: 14, textDecoration: "none" }}>{l.label}</a>
                ))}
              </div>
            </div>
            <div style={{ flex: "1 1 140px" }}>
              <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: 16, fontSize: 14, textTransform: "uppercase", letterSpacing: 1 }}>Support</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { label: "Contact Us", href: APP_URL },
                  { label: "Support", href: APP_URL },
                  { label: "Privacy Policy", href: APP_URL },
                  { label: "Terms of Service", href: APP_URL },
                ].map((l, i) => (
                  <a key={i} href={l.href} style={{ color: "#fcd9b0", fontSize: 14, textDecoration: "none" }}>{l.label}</a>
                ))}
              </div>
            </div>
            <div style={{ flex: "1 1 160px" }}>
              <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: 16, fontSize: 14, textTransform: "uppercase", letterSpacing: 1 }}>Get the App</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a href={APP_URL} target="_blank" rel="noopener noreferrer" style={{
                  background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
                  color: "#fff", borderRadius: 10, padding: "10px 16px",
                  fontSize: 13, fontWeight: 600, textDecoration: "none", textAlign: "center"
                }}>🍎 App Store</a>
                <a href={APP_URL} target="_blank" rel="noopener noreferrer" style={{
                  background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
                  color: "#fff", borderRadius: 10, padding: "10px 16px",
                  fontSize: 13, fontWeight: 600, textDecoration: "none", textAlign: "center"
                }}>▶ Google Play</a>
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontSize: 13, color: "#fb923c", margin: 0 }}>© {new Date().getFullYear()} NetPraise. All rights reserved.</p>
            <p style={{ fontSize: 13, color: "#a78bfa", margin: 0 }}>Pray Together. Stay Connected. 🙏</p>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
        a:hover { opacity: 0.85; }
      `}</style>
    </div>
  );
}

// Shared styles
const btnOrange = {
  background: `linear-gradient(135deg, #f97316, #ea580c)`,
  color: "#fff", padding: "14px 28px", borderRadius: 30,
  fontWeight: 800, fontSize: 16, textDecoration: "none",
  boxShadow: "0 6px 20px rgba(249,115,22,0.40)", display: "inline-block"
};
const btnPurple = {
  background: `linear-gradient(135deg, #7c3aed, #5b21b6)`,
  color: "#fff", padding: "14px 28px", borderRadius: 30,
  fontWeight: 800, fontSize: 16, textDecoration: "none",
  boxShadow: "0 6px 20px rgba(124,58,237,0.30)", display: "inline-block"
};
const btnWhite = {
  background: "#fff", color: "#ea580c",
  padding: "14px 28px", borderRadius: 30,
  fontWeight: 800, fontSize: 16, textDecoration: "none",
  boxShadow: "0 6px 20px rgba(0,0,0,0.12)", display: "inline-block"
};
const btnOutlineOrange = {
  background: "#fff", color: "#ea580c",
  padding: "13px 28px", borderRadius: 30,
  fontWeight: 800, fontSize: 16, textDecoration: "none",
  border: "2px solid #f97316",
  boxShadow: "0 4px 14px rgba(249,115,22,0.15)", display: "inline-block"
};
const btnOutlineWhite = {
  background: "transparent", color: "#fff",
  padding: "13px 28px", borderRadius: 30,
  fontWeight: 800, fontSize: 16, textDecoration: "none",
  border: "2px solid rgba(255,255,255,0.75)", display: "inline-block"
};
const sectionLabel = {
  display: "inline-block",
  background: "linear-gradient(135deg, #fff7ed, #ffe4cc)",
  color: "#ea580c", fontWeight: 700, fontSize: 12,
  padding: "5px 14px", borderRadius: 20,
  letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12,
  border: "1px solid #fed7aa"
};
const sectionTitle = {
  fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900,
  color: "#1e1b4b", marginBottom: 16, textAlign: "center"
};
const badgeWhite = {
  background: "rgba(255,255,255,0.15)",
  color: "#fff", padding: "6px 14px", borderRadius: 20,
  fontSize: 13, fontWeight: 600,
  border: "1px solid rgba(255,255,255,0.35)"
};
