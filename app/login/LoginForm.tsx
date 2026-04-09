"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        // TODO: call your auth API here
        console.log(Object.fromEntries(formData));
    }

    return (
        <div className="w-full max-w-[440px] z-10">
            {/* Branding */}
            <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 mb-6">
                    <div className="w-10 h-10 rounded-lg primary-gradient flex items-center justify-center shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-white text-2xl">
                            architecture
                        </span>
                    </div>
                    <h1 className="text-2xl font-extrabold tracking-tight">
                        FormFlow
                    </h1>
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-2">Welcome!</h2>
                <p className="text-on-surface-variant">Please enter your details to sign in</p>
            </div>

            {/* Card */}
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_24px_48px_-12px_rgba(26,27,34,0.04)] border border-outline-variant/15">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email */}
                    <div className="space-y-1.5">
                        <label
                            htmlFor="email"
                            className="text-xs font-bold uppercase tracking-wider text-on-surface-variant px-1"
                        >
                            Email or Username
                        </label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant group-focus-within:text-primary transition-colors">
                                <span className="material-symbols-outlined text-[20px]">mail</span>
                            </div>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                placeholder="name@company.com"
                                className="w-full pl-11 pr-4 py-3.5 bg-surface-container-high border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-t-lg transition-all text-on-surface placeholder:text-outline/60"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-1.5">
                        <div className="flex justify-between items-center px-1">
                            <label
                                htmlFor="password"
                                className="text-xs font-bold uppercase tracking-wider text-on-surface-variant"
                            >
                                Password
                            </label>
                            <Link
                                href="/forgot-password"
                                className="text-xs font-bold text-primary hover:text-primary-container transition-colors"
                            >
                                Forgot password?
                            </Link>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant group-focus-within:text-primary transition-colors">
                                <span className="material-symbols-outlined text-[20px]">lock</span>
                            </div>
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="w-full pl-11 pr-12 py-3.5 bg-surface-container-high border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 rounded-t-lg transition-all text-on-surface placeholder:text-outline/60"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((v) => !v)}
                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-on-surface-variant hover:text-on-surface"
                            >
                                <span className="material-symbols-outlined text-[20px]">
                                    {showPassword ? "visibility_off" : "visibility"}
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Remember me */}
                    <div className="flex items-center px-1">
                        <input
                            id="remember"
                            name="remember"
                            type="checkbox"
                            className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/20 bg-surface-container-low"
                        />
                        <label
                            htmlFor="remember"
                            className="ml-3 text-sm text-on-surface-variant font-medium"
                        >
                            Keep me signed in
                        </label>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full primary-gradient text-on-primary font-bold py-4 rounded-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all active:scale-[0.98]"
                    >
                        Sign In
                    </button>
                </form>
            </div>

            <p className="mt-8 text-center text-on-surface-variant">
                Don&apos;t have an account?{" "}
                <Link
                    href="login/register"
                    className="text-primary font-bold hover:text-primary-container transition-colors ml-1"
                >
                    Create an account
                </Link>
            </p>
        </div>
    );
}