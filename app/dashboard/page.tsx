"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase";
import { getUserSession } from "@/utils/session";
import { useRouter } from "next/navigation";

const supabase = createClient();

export default function DashboardPage() {
    const [forms, setForms] = useState<any[]>([]);
    const router = useRouter();

    useEffect(() => {
        async function loadForms() {
            const session = getUserSession();

            if (!session) {
                router.push("/login");
                return;
            }

            const { data, error } = await supabase
                .from("forms")
                .select("*")
                .eq("user_id", session.user_id);

            if (!error && data) {
                setForms(data);
            }
        }

        loadForms();
    }, []);
  return (
        <>
            {/* Welcome Header */}
            <section className="mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-2">
                    Dashboard
                </h1>
                <p className="text-on-surface-variant text-lg max-w-2xl">
                    Manage your forms and review submission history.
                </p>
            </section>

            {/* Grid: Enter Code & Recent Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                {/* Enter Form Code Block */}
                <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-2xl shadow-[0_24px_48px_-12px_rgba(26,27,34,0.04)] border border-outline-variant/15 flex flex-col justify-between">
                    <div>
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-container-high text-primary rounded-full text-xs font-bold tracking-wider uppercase mb-4 border border-outline-variant/20">
                            <span className="material-symbols-outlined text-[14px]">vpn_key</span>
                            Direct Access
                        </span>
                        <h2 className="text-2xl font-bold mb-4">Enter Form Code</h2>
                        <p className="text-on-surface-variant mb-8">
                            Access form by entering its unique identification string below.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1 relative">
                            <input
                                className="w-full bg-surface-container-high border-b-2 border-primary border-t-0 border-l-0 border-r-0 rounded-t-lg px-6 py-4 outline-none focus:ring-0 transition-all text-xl font-mono tracking-widest placeholder:opacity-30"
                                placeholder="XXXXX"
                                type="text"
                            />
                        </div>
                        <button className="px-8 py-4 primary-gradient text-on-primary font-bold rounded-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 active:scale-[0.98]">
                            <span>Start Form</span>
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="primary-gradient text-on-primary p-8 rounded-2xl relative overflow-hidden group shadow-[0_24px_48px_-16px_rgba(63,81,255,0.45)]">
                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <div className="text-7xl font-black opacity-60 group-hover:opacity-30 transition-opacity">
                            24
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">Total Submissions</h3>
                            <p className="text-white/80 text-sm">
                                Across all forms.
                            </p>
                        </div>
                    </div>
                    {/* Decorative Element */}
                    <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
                </div>
            </div>

            {/* Created by You Section */}
            <section className="mb-16">
                <div className="flex items-end justify-between mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-on-surface">Created by You</h2>
                        <div className="h-1 w-12 primary-gradient mt-2 rounded-full"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {/* Form Card 1 */}
                    <div className="group bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/15 hover:border-primary/30 hover:shadow-[0_24px_48px_-12px_rgba(26,27,34,0.08)] transition-all cursor-pointer">
                        {/* <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <span className="material-symbols-outlined">architecture</span>
                            </div>
                            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">
                                Updated 2h ago
                            </span>
                        </div> */}
                        <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                            DBMS Feedback Form
                        </h3>
                        <p className="text-sm text-on-surface-variant mb-6">
                            College project evaluation data collection.
                        </p>
                        <div className="flex items-center justify-between text-xs font-bold text-outline uppercase tracking-widest">
                            <span>12 Questions</span>
                            <span>48 Responses</span>
                        </div>
                    </div>

                    {/* Form Card 2 */}
                    <div className="group bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/15 hover:border-primary/30 hover:shadow-[0_24px_48px_-12px_rgba(26,27,34,0.08)] transition-all cursor-pointer">
                        {/* <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                                <span className="material-symbols-outlined">landscape</span>
                            </div>
                            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">
                                Updated 1d ago
                            </span>
                        </div> */}
                        <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                            Class Survey
                        </h3>
                        <p className="text-sm text-on-surface-variant mb-6">
                            General questions for the student base.
                        </p>
                        <div className="flex items-center justify-between text-xs font-bold text-outline uppercase tracking-widest">
                            <span>5 Questions</span>
                            <span>156 Responses</span>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="border-t border-outline-variant/20 mt-auto py-8 text-center text-on-surface-variant text-sm z-10 bg-surface-container-lowest/50 backdrop-blur-sm">
                <p>FormFlow. Built for DMS project. 2026</p>
                <p>By Devdat, Pramukh, Pranav | NMAMIT - ISE C</p><br></br>
                <p>2026 | 4th Semester</p>
            </footer>
        </>
    );
}