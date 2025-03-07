import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Laptop } from 'lucide-react';

export default function MobilePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Only show on mobile devices
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      setIsOpen(true);
    }

    // Handle resize
    const handleResize = () => {
      setIsOpen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Laptop className="h-5 w-5" />
            Switch to Desktop
          </DialogTitle>
          <DialogDescription className="text-center pt-2">
            Phones are meant for memes, access your courses on desktop for the best experience.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
} 