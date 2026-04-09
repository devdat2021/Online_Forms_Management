import LoginForm from "@/app/login/LoginForm";

export default function LoginPage() {
    return (
        <main className="bg-surface font-body text-on-surface min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Abstract Background Blobs */}
            <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-[120px]" />

            <LoginForm />

            <footer className="border-t border-outline-variant/20 mt-auto py-8 text-center text-on-surface-variant text-sm z-10 bg-surface-container-lowest/50 backdrop-blur-sm">
                <p>FormFlow. Built for DMS project. 2026</p>
                <p>By Devdat, Pramukh, Pranav | NMAMIT - ISE C</p><br></br>
                <p>2026 | 4th Semester</p>
            </footer>
        </main>
    );
}

