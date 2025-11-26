// components/BookingDialog.tsx
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2 } from "lucide-react";

// YOUR GOOGLE SHEETS WEB APP URL
const WEBHOOK = "https://script.google.com/macros/s/YOUR_ID/exec";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function BookingDialog({ open, onOpenChange }: BookingDialogProps) {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = async () => {
    if (!date || !name || !email) return;

    await fetch(WEBHOOK, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Date: format(date, "yyyy-MM-dd"),
        Name: name.trim(),
        Email: email.trim(),
        Timestamp: new Date().toISOString(),
      }),
    });

    setDone(true);
    setTimeout(() => {
      onOpenChange(false);
      // Reset after modal closes
      setTimeout(() => {
        setDate(undefined);
        setName("");
        setEmail("");
        setDone(false);
      }, 300);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl w-[95vw] max-h-[96vh] rounded-3xl bg-black border border-cyan-900/40 p-6">
        {done ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <CheckCircle2 className="w-16 h-16 text-cyan-500 mb-4" />
            <p className="text-2xl font-bold text-white">You're Booked!</p>
            <p className="text-gray-400 text-sm">Check your email for the Zoom link</p>
          </div>
        ) : (
          <>
            <DialogHeader className="text-center mb-6">
              <DialogTitle className="text-2xl font-bold text-white">
                Free 15-Min Call
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-5">
              {/* Calendar + Form side-by-side on md+ */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Calendar */}
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(d) => d < new Date() || d.getDay() === 0 || d.getDay() === 6}
                    className="rounded-2xl border border-zinc-800"
                    classNames={{
                      day_selected: "bg-cyan-500 text-black font-bold",
                      day_today: "text-cyan-400 font-bold",
                    }}
                  />
                </div>

                {/* Form */}
                <div className="space-y-4">
                  <Input
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-12 bg-zinc-900/50 border-zinc-700 text-white placeholder:text-gray-500"
                  />
                  <Input
                    type="email"
                    placeholder="Work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 bg-zinc-900/50 border-zinc-700 text-white placeholder:text-gray-500"
                  />
                  <Button
                    onClick={submit}
                    disabled={!date || !name || !email}
                    className="w-full h-12 font-semibold bg-cyan-500 hover:bg-cyan-400 text-black disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Book My Call
                  </Button>
                </div>
              </div>

              {/* Selected date indicator */}
              {date && (
                <p className="text-center text-cyan-400 font-medium text-sm -mt-2">
                  Selected: {format(date, "EEEE, MMM d")}
                </p>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}