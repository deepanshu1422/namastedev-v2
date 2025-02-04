"use client";

import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

export default function Main() {
  const [contact, setContact] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (contact.length !== 10) throw { message: `Invalid Phone number length` }

      const response = await fetch("/api/getEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ contact }),
      });

      const data = await response.json();

      if (response.ok) {
        setEmail(data.email);
        setShowModal(true);
      } else {
        toast.error(data.message || "No email found for this phone number");
      }
    } catch (error) {
      toast.error(error?.message ?? "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const src =
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmMxZ296M2gwcXlrZzdsN3NmMGd6eGJuNXY0eDgxd2s5MGlqcnliNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ta3v3I4GI1gH7Rqek6/giphy.gif";

  return (
    <main className="min-h-[90vh] flex bg-white">
      <div className="m-auto p-4 gap-2 flex flex-col items-center">
        <Image
          loader={() => src}
          src={src}
          height={400}
          width={400}
          alt="search"
        />
        <CardHeader className="p-0 sm:items-center">
          <span className="flex gap-2 sm:items-center text-3xl text-black font-extrabold">
            Unable to find email ?
          </span>
          <CardDescription className="sm:text-center text-black max-w-2xl">
            Enter your phone number to find the associated email address
          </CardDescription>
        </CardHeader>

        <CardContent className="p-0 pt-3 pb-0 mx-auto w-full flex flex-col items-center gap-4">
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-2">
            <Input
              type="tel"
              placeholder="Enter your phone number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
              className="w-full bg-white focus-visible:ring-1 focus-visible:ring-prime text-black"
            />
            <Button
              type="submit"
              className="w-full bg-prime/90 hover:bg-prime text-white"
              disabled={loading}
            >
              {loading ? "Searching..." : "Find Email"}
            </Button>
          </form>
        </CardContent>

        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Email Found!</DialogTitle>
            </DialogHeader>
            <div className="p-4">
              <p className="text-center">Your email address is:</p>
              <p className="text-center font-bold text-lg mt-2">{email}</p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
}
