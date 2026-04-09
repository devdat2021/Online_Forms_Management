import LoginForm from "@/app/login/LoginForm";

export default function LoginPage() {
    return (
        <main className="bg-surface font-body text-on-surface min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Abstract Background Blobs */}
            <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-[120px]" />

            <LoginForm />

            <footer className="mt-12 text-center max-w-2xl px-6 opacity-60">
                <div className="flex justify-center items-center gap-8 grayscale brightness-75">
                    {/* <TrustBadge icon="verified_user" label="Enterprise Grade" />
          <TrustBadge icon="shield" label="SSL Encrypted" />
          <TrustBadge icon="gpp_good" label="ISO 27001" /> */}
                </div>
            </footer>
        </main>
    );
}

