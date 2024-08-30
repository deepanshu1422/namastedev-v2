import { Badge } from "@/components/ui/badge";
import { Bell, MessageCircleQuestion } from "lucide-react";

export default function Notifications() {
    return <div className="sticky top-0 max-xl:hidden flex flex-col gap-2 px-4 py-5 min-w-60 h-full max-h-screen border-l-2">
        <span className="flex items-center gap-1">
            <Bell className="h-5 w-5" />
            Updates</span>
        <div className="flex h-full w-full">
            <Badge className="text-white gap-1 hover:bg-second/60 bg-second/40 rounded m-auto"><MessageCircleQuestion className="h-4 w-4" />No Updates Yet</Badge>
        </div>
    </div>
}