"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase";

export default function ServerDownBanner() {
    const [down, setDown] = useState(false);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const supabase = createClient();
        let mounted = true;

        const check = async () => {
            try {
                const { error } = await supabase.from("forms").select("form_id").limit(1);
                if (!mounted) return;
                if (error) setDown(true);
                else setDown(false);
            } catch (e) {
                if (!mounted) return;
                setDown(true);
            }
        };

        check();
        const interval = setInterval(check, 30000);

        return () => {
            mounted = false;
            clearInterval(interval);
        };
    }, []);

    if (!down || !visible) return null;

    return (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 max-w-2xl w-[calc(100%-2rem)]">
            <div className="bg-error-container text-on-error-container border border-error rounded-lg px-4 py-3 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-error">warning</span>
                    <div>
                        <div className="font-semibold text-error">Server Unreachable</div>
                        <div className="text-sm text-on-surface-variant">We are unable to connect to Supabase. Some features may be unavailable.</div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={() => setVisible(false)} className="p-2 rounded hover:bg-white/5" aria-label="Dismiss server banner">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
