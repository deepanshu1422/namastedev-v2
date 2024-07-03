import { Button } from "@/components/ui/button"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import Plyr from "plyr-react";
import "plyr-react/plyr.css";


export default function Player() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="text-white bg-prime/70 hover:bg-prime/90 text-xs h-8" size={"sm"}>Demo</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-3xl">
                <DialogHeader>
                    <DialogTitle>Video Title</DialogTitle>
                    <DialogDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, perspiciatis
                    </DialogDescription>
                    <Plyr
                        source={{
                            type: "video",
                            sources: [{ src: "bTqVqk7FSmY", provider: "youtube" }],
                        }}
                    />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
