import React from "react";
import Header from "../(users)/header";

export default function UserLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col bg-bg">
            <Header />
            <main className=" my-6">{children}</main>
        </div>
    );
}