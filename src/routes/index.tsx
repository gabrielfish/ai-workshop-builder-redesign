import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

/* ───── Reusable atoms ───── */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium tracking-[0.2em] uppercase text-td-muted mb-4">
      {children}
    </p>
  );
}

function DashedDivider() {
  return <hr className="border-0 border-t border-dashed border-td-text/15 my-0" />;
}

function GhostNumber({ n }: { n: string }) {
  return (
    <span className="font-serif text-[4rem] leading-none font-light text-td-text/[0.06] select-none">
      {n}
    </span>
  );
}

function TealButton({ children, large }: { children: React.ReactNode; large?: boolean }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md bg-td-teal text-white font-sans font-medium transition-colors hover:opacity-90 ${large ? "px-10 py-4 text-base" : "px-6 py-3 text-sm"}`}
    >
      {children}
    </button>
  );
}

function GhostButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="inline-flex items-center justify-center rounded-md border border-td-text/20 bg-transparent text-td-text font-sans text-sm font-medium px-6 py-3 transition-colors hover:bg-td-text/5">
      {children}
    </button>
  );
}

/* ───── Section components ───── */

function Nav() {
  return (
    <nav className="w-full border-b border-td-text/10" style={{ borderWidth: "0.5px" }}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="https://ai-workshop-builder-redesign.lovable.app/" className="flex items-center gap-2">
          <div className="w-6 h-6 border border-td-text/40 rounded-sm" style={{ borderWidth: "0.5px" }} />
          <span className="font-serif text-lg font-semibold text-td-text tracking-tight">TalkDeck</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-sans">
          <Link to="/training" className="text-td-muted hover:text-td-text transition-colors">
            Training
          </Link>
          <span className="text-td-text underline underline-offset-4 decoration-td-teal">
            Build my workshop
          </span>
          <a href="https://growth-lab-landing.lovable.app/growth-lab" className="text-td-muted hover:text-td-text transition-colors">
            Join Growth Lab
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="max-w-3xl mx-auto px-6 pt-12 pb-9 md:pt-15 md:pb-12 text-center">
      <Eyebrow>AI WORKSHOP BUILDER</Eyebrow>
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.15] text-td-text mb-6">
        Never build a workshop
        <br />
        from scratch{" "}
        <em className="text-td-teal italic">again.</em>
      </h1>
      <p className="text-td-muted font-sans text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
        Answer a few questions. AI builds your entire workshop — slides, scripts,
        opening, closing, patient conversion sequence — in minutes. Even if you
        hate public speaking or have never built a slide in your life.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <TealButton>Build my slides →</TealButton>
        <GhostButton>Watch how it works</GhostButton>
      </div>
    </section>
  );
}

const problems = [
  { n: "01", text: "They don't know what to say" },
  { n: "02", text: "They hate building slides" },
  { n: "03", text: "They're unsure how to present confidently" },
  { n: "04", text: "They worry no one will show up" },
  { n: "05", text: "They don't know how to convert attendees into patients" },
  { n: "06", text: "They struggle to follow up after the event" },
];

function ProblemSection() {
  return (
    <section id="build" className="max-w-6xl mx-auto px-6 py-12 md:py-15">
      <DashedDivider />
      <div className="pt-10 md:pt-12">
        <Eyebrow>SOUND FAMILIAR?</Eyebrow>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-td-text mb-12">
          Most chiropractors know workshops work.
          <br className="hidden md:block" /> They just never run them.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((p) => (
            <div
              key={p.n}
              className="bg-td-card rounded-lg p-6 relative"
              style={{ border: "0.5px solid rgba(10,25,41,0.1)" }}
            >
              <GhostNumber n={p.n} />
              <p className="font-sans text-td-text text-base mt-2">{p.text}</p>
            </div>
          ))}
        </div>
        <p className="font-serif italic text-td-teal text-xl md:text-2xl text-center mt-14">
          "That's exactly why we built this."
        </p>
        <div className="text-center mt-6">
          <a
            href="#build"
            className="inline-flex items-center justify-center rounded-md border bg-transparent text-td-text font-sans text-sm font-medium px-5 py-2.5 transition-colors hover:bg-td-text/5"
            style={{ border: "0.5px solid rgba(10,25,41,0.2)" }}
          >
            Build my slides →
          </a>
        </div>
      </div>
    </section>
  );
}

const deliverables = [
  { icon: "📋", text: "Your entire workshop structure" },
  { icon: "🎤", text: "Your opening script" },
  { icon: "⭐", text: "Your credibility story" },
  { icon: "🙋", text: "Audience engagement questions" },
  { icon: "🖥", text: "Your full slide deck" },
  { icon: "🔄", text: "Patient conversion sequence" },
];

function ProductSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 md:py-15">
      <DashedDivider />
      <div className="pt-10 md:pt-12">
        <Eyebrow>THE AI WORKSHOP BUILDER</Eyebrow>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-td-text mb-12">
          Answer a few questions.
          <br className="hidden md:block" /> AI handles everything else.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 items-start">
          <div>
            <p className="font-sans text-td-muted text-base leading-relaxed mb-8">
              This is the AI system built to remove every barrier chiropractors face
              when running workshops. In minutes, AI builds everything you need to
              fill your room and convert attendees into long-term patients.
            </p>
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80"
              className="rounded-lg w-full aspect-[16/10] object-cover mb-4 bg-td-card"
              style={{ border: "1px solid #1A8FA6" }}
            >
              <source
                src="https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-5402/1080p.mp4"
                type="video/mp4"
              />
            </video>
            <p className="font-sans text-sm text-td-text mb-4">
              Your slides, built and ready to present
            </p>
            <div className="flex flex-wrap gap-2">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-sans text-td-text bg-td-card"
                style={{ border: "0.5px solid rgba(10,25,41,0.15)" }}
              >
                ⚡ Ready in minutes
              </span>
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-sans text-td-text bg-td-card"
                style={{ border: "0.5px solid rgba(10,25,41,0.15)" }}
              >
                🎯 Converts attendees into patients
              </span>
            </div>
          </div>
          <div
            className="bg-td-card rounded-lg overflow-hidden self-start"
            style={{ border: "0.5px solid rgba(10,25,41,0.1)" }}
          >
            {deliverables.map((d, i) => (
              <div
                key={d.text}
                className="px-5 py-4 font-sans text-td-text text-sm flex items-center gap-3"
                style={{
                  borderBottom:
                    i < deliverables.length - 1
                      ? "0.5px solid rgba(10,25,41,0.1)"
                      : "none",
                }}
              >
                <span className="text-base">{d.icon}</span>
                <span>{d.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <TealButton large>Build my slides →</TealButton>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { stat: "27", quote: "Our last event had 80 bookings, 60 attendees, and 27 new patients booked on the night.", name: "Dr Ian Carter" },
  { stat: "36", quote: "This completely changed the quality of patients coming into our clinic. We filled the room and converted nearly half into care.", name: "Dr Helen Harding" },
  { stat: "17", quote: "We had 70 leads, 39 attendees, and converted 17 brand new patients plus reactivations. Absolutely incredible.", name: "Dr Peter Townsend" },
  { stat: "14", quote: "Our last talk brought in over 50 leads, 32 attendees, and 14 new patients. We've already got 15 booked for the next one.", name: "Dr Lindsay McInnis" },
  { stat: "15", quote: "We've been running these for over 2 years now and they just keep improving. The patients coming from workshops have far more trust.", name: "Dr Chris Braxton" },
  { stat: "18", quote: "We generated over 70 leads and had to run another workshop just to keep up with demand.", name: "Dr Will Goddard" },
];

function ResultsSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 md:py-15">
      <DashedDivider />
      <div className="pt-10 md:pt-12">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-td-text mb-12 text-center">
          Real workshops. Real patients. Real results.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-td-card rounded-lg p-6"
              style={{ border: "0.5px solid rgba(10,25,41,0.1)" }}
            >
              <p className="font-serif text-3xl font-semibold text-td-teal mb-1">
                {t.stat}
              </p>
              <p className="text-xs text-td-muted font-sans mb-3">new patients</p>
              <p className="font-serif italic text-td-text text-sm leading-relaxed mb-4">
                "{t.quote}"
              </p>
              <p className="font-sans text-sm font-medium text-td-text">{t.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="#build"
            className="inline-flex items-center justify-center rounded-md bg-td-teal text-white font-sans font-medium text-base px-10 py-4 transition-colors hover:opacity-90"
          >
            Build my slides — it's free to start →
          </a>
        </div>
      </div>
    </section>
  );
}

const paths = [
  {
    title: "Training",
    desc: "Watch Ryan's framework first. Four lessons on what makes a workshop actually convert.",
    cta: "Watch the training →",
    teal: false,
    href: "/training",
  },
  {
    title: "Build My Workshop",
    desc: "Answer a few questions. AI builds your slides, scripts, and conversion sequence in minutes.",
    cta: "Build my slides →",
    teal: true,
    href: "#",
  },
  {
    title: "Growth Lab",
    desc: "Work one-on-one with Ryan for 60 days. Limited spots each month.",
    cta: "Join the waitlist →",
    teal: false,
    href: "/growth-lab",
  },
];

function EcosystemSection() {
  return (
    <section className="bg-td-dark py-12 md:py-15">
      <div className="max-w-6xl mx-auto px-6">
        <Eyebrow>
          <span className="text-td-teal">EVERYTHING YOU NEED</span>
        </Eyebrow>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-12">
          One system. Three ways to win.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {paths.map((p) => (
            <div
              key={p.title}
              className="rounded-lg p-6 flex flex-col justify-between"
              style={{
                backgroundColor: "#122035",
                border: "0.5px solid rgba(255,255,255,0.1)",
              }}
            >
              <div>
                <h3 className="font-serif text-xl font-semibold text-white mb-3">
                  {p.title}
                </h3>
                <p className="font-sans text-sm text-white/60 leading-relaxed mb-6">
                  {p.desc}
                </p>
              </div>
              {p.teal ? (
                <TealButton>{p.cta}</TealButton>
              ) : (
                <a
                  href={p.href}
                  className="font-sans text-sm text-white/70 hover:text-white transition-colors"
                >
                  {p.cta}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const growthLabStats = [
  { stat: "35 patients", quote: "Dr Alex Lundborn reactivated 35 patients in 60 days" },
  { stat: "37 patients", quote: "Dr Austin Wells-Burr had 37 new patients within 6 weeks" },
  { stat: "34 patients", quote: "Dr Liz Walker reactivated 34 patients with the done-for-you campaign" },
];

function GrowthLabSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 md:py-15">
      <DashedDivider />
      <div className="pt-10 md:pt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <Eyebrow>WANT TO GO FURTHER?</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-td-text mb-6 leading-tight">
            Work one-on-one with <em className="text-td-teal italic">me</em> for 60 days.
          </h2>
          <p className="font-sans text-td-muted text-base leading-relaxed mb-6">
            Every month, I accept a handful of practices to work directly with me —
            with one goal: building an insanely profitable, impactful, and time-rich
            7-figure practice. The last 10 Growth Lab members generated an average
            of 27 extra new patients in their first 60 days. It pays for itself fast.
          </p>
          <ul className="space-y-2 mb-8">
            {[
              "1:1 strategy sessions with Ryan",
              "Done-with-you implementation",
              "60-day love it or leave it guarantee",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 font-sans text-sm text-td-text">
                <span className="text-td-teal">✓</span> {item}
              </li>
            ))}
          </ul>
          <p className="font-serif italic text-td-text text-lg mb-8">
            "Only 7 practices accepted each month."
          </p>
          <a
            href="https://growth-lab-landing.lovable.app/growth-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-td-teal text-white font-sans font-medium text-base px-10 py-4 transition-colors hover:opacity-90"
          >
            Join the Growth Lab waitlist →
          </a>
        </div>
        <div
          className="bg-td-card rounded-lg overflow-hidden"
          style={{ border: "0.5px solid rgba(10,25,41,0.1)" }}
        >
          {growthLabStats.map((s, i) => (
            <div
              key={s.stat}
              className="p-6"
              style={{
                borderBottom:
                  i < growthLabStats.length - 1
                    ? "0.5px solid rgba(10,25,41,0.1)"
                    : "none",
              }}
            >
              <p className="font-serif text-2xl font-semibold text-td-teal mb-2">
                {s.stat}
              </p>
              <p className="font-serif italic text-td-text text-sm leading-relaxed">
                "{s.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const stats = [
  { label: "practices", value: "8" },
  { label: "annual revenue", value: "$7M" },
  { label: "chiropractors helped", value: "500+" },
  { label: "new patients/year", value: "10,000" },
];

function CredibilitySection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 md:py-15">
      <DashedDivider />
      <div className="pt-10 md:pt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <Eyebrow>WHY LISTEN TO RYAN?</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-td-text mb-8 leading-tight">
            I've run this system at scale. Now I've built it for you.
          </h2>
          <div className="font-sans text-td-muted text-base leading-relaxed space-y-4">
            <p>
              I built a multi-seven-figure, 8-practice business — 3,500 visits per
              week, 10,000 new patients a year, $7 million in annual revenue. My
              team ran 5 workshops a week, 5–10 screenings a week, and consistently
              reactivated 30–50 past patients at a time. I spent over a million
              dollars on Facebook ads and managed a team of 80.
            </p>
            <p>
              For the last several years I've helped over 500 chiropractors install
              the exact same systems — adding $10k–$50k+ per month without adding
              extra hours. The AI Workshop Builder is everything I know, built into
              a tool anyone can use in minutes.
            </p>
          </div>
          <p className="font-serif italic text-td-text mt-8 text-lg">
            — Dr Ryan Rieder
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-td-card rounded-lg p-6 flex flex-col items-center justify-center text-center"
              style={{ border: "0.5px solid rgba(10,25,41,0.1)" }}
            >
              <p className="font-serif text-3xl md:text-4xl font-semibold text-td-teal mb-1">
                {s.value}
              </p>
              <p className="font-sans text-xs text-td-muted uppercase tracking-wider">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-td-teal py-12 md:py-15">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
          Your next workshop builds itself.
        </h2>
        <p className="font-sans text-white/80 text-base mb-10">
          Answer a few questions. Get your slides, scripts, and conversion system —
          ready to go in minutes.
        </p>
        <button className="inline-flex items-center justify-center rounded-md bg-white text-td-dark font-sans font-medium text-base px-10 py-4 transition-colors hover:bg-white/90">
          Build my slides →
        </button>
        <p className="font-sans text-white/50 text-xs mt-6">
          Trusted by 500+ chiropractors
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="border-t border-td-text/10 py-8"
      style={{ borderWidth: "0.5px" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div
            className="w-5 h-5 border border-td-text/40 rounded-sm"
            style={{ borderWidth: "0.5px" }}
          />
          <span className="font-serif text-sm font-semibold text-td-text">
            TalkDeck
          </span>
        </div>
        <div className="flex flex-col sm:items-end gap-1 items-center">
          <p className="font-sans text-xs text-td-muted text-center sm:text-right">
            © 2026 DC Practice Growth. All rights reserved.
          </p>
          <p className="font-sans text-xs text-td-muted flex items-center gap-2">
            <a
              href="https://dcpracticegrowth.com/privacy-cookie-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-td-text transition-colors"
            >
              Privacy &amp; Cookie Policy
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://dcpracticegrowth.com/terms-of-service/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-td-text transition-colors"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ───── Page ───── */

function HomePage() {
  return (
    <div className="min-h-screen bg-td-bg text-td-text">
      <Nav />
      <Hero />
      <ProblemSection />
      <ProductSection />
      <ResultsSection />
      <EcosystemSection />
      <GrowthLabSection />
      <CredibilitySection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
