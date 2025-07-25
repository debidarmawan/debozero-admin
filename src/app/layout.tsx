"use client";

import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import Loader from "@/components/common/Loader";
import React, { useEffect, useState } from "react";

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <div className="dark:bg-boxdark-2 dark:text-bodydark">
                    {loading ? <Loader /> : children}
                </div>
            </body>
        </html>
    );
}