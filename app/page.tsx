import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="bg-surface font-body text-on-surface min-h-screen flex flex-col relative overflow-hidden">
      {/* Abstract Background Blobs (Matched to Login Page) */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] -z-10" />
      <div className="absolute top-[40%] right-[-10%] w-[30%] h-[50%] rounded-full bg-secondary/10 blur-[120px] -z-10" />

      {/* Navbar */}
      <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center z-10">
        <div className="inline-flex items-center gap-2">
          <div className="w-8 h-8 rounded-md primary-gradient flex items-center justify-center shadow-md shadow-primary/20">
            <span className="material-symbols-outlined text-white text-xl">
              architecture
            </span>
          </div>
          <span className="text-xl font-extrabold tracking-tight">FormFlow</span>
        </div>
        <div className="flex gap-4">
          <Link
            href="/login"
            className="px-5 py-2.5 text-sm font-bold text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/login/register"
            className="px-5 py-2.5 text-sm font-bold primary-gradient text-on-primary rounded-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all active:scale-[0.98]"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-12 z-10 max-w-4xl mx-auto mt-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/30 text-xs font-bold text-primary mb-8 uppercase tracking-wider">
          <span className="material-symbols-outlined text-[16px]">database</span>
          <span>Powered by Supabase (RDBMS)</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Create forms seamlessly. <br />
          <span className="text-transparent bg-clip-text primary-gradient">
            Store it securely.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant mb-12 max-w-2xl">
          The modern alternative to Google Forms. Build questionaires in seconds and share them instantly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/login/register"
            className="px-8 py-4 text-base font-bold primary-gradient text-on-primary rounded-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            Create Your First Form
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0_24px_48px_-12px_rgba(26,27,34,0.04)] border border-outline-variant/15 hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <span className="material-symbols-outlined text-3xl">all_inclusive</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Unlimited Forms, Free</h3>
            <p className="text-on-surface-variant leading-relaxed">
              No limits. Create as many forms and ask as many questions as required.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0_24px_48px_-12px_rgba(26,27,34,0.04)] border border-outline-variant/15 hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <span className="material-symbols-outlined text-3xl">shield_person</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Secure Participation</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Only registered and authenticated users can submit responses, ensuring your data integrity.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0_24px_48px_-12px_rgba(26,27,34,0.04)] border border-outline-variant/15 hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
              <span className="material-symbols-outlined text-3xl">qr_code_scanner</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Frictionless Sharing</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Distribute your forms your way. Invite users via direct link, custom join codes, or scannable QR codes.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-outline-variant/20 mt-auto py-8 text-center text-on-surface-variant text-sm z-10 bg-surface-container-lowest/50 backdrop-blur-sm">
        <p>FormFlow. Built for DMS project. 2026</p>
        <p>By Devdat, Pramukh, Pranav | NMAMIT - ISE C</p><br></br>
        <p>2026 | 4th Semester</p>
      </footer>
    </main>
  );
}