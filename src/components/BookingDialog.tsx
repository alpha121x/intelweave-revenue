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
import { Label } from "@/components/ui/label";
import { CheckCircle2, Clock, X } from "lucide-react";

const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00"
];

const WEBHOOK = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function BookingDialog({ open, onOpenChange }: BookingDialogProps) {
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);

  const isValid = date && time && firstName && lastName && email;

  const submit = async () => {
    if (!isValid) return;

    await fetch(WEBHOOK, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Date: format(date!, "yyyy-MM-dd"),
        Time: time,
        FirstName: firstName.trim(),
        LastName: lastName.trim(),
        Email: email.trim(),
        Phone: phone.trim() || "—",
        Timestamp: new Date().toISOString(),
      }),
    });

    setSuccess(true);
    setTimeout(() => onOpenChange(false), 3000);
  };

  const reset = () => {
    setDate(undefined); setTime(""); setFirstName(""); setLastName("");
    setEmail(""); setPhone(""); setSuccess(false);
  };

  return (
    <Dialog open={open} onOpenChange={(o) => { onOpenChange(o); if (!o) reset(); }}>
      <DialogContent
        className="
          max-w-5xl w-[95vw] max-h-[96vh] rounded-3xl bg-black border border-cyan-900/40 
          p-6 md:p-8 flex flex-col overflow-hidden relative
        "
      >
        {/* Close Button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white z-50"
        >
          <X className="w-6 h-6" />
        </button>

        {success ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <CheckCircle2 className="w-24 h-24 text-cyan-500 mb-8" />
            <h3 className="text-4xl font-bold text-white">You're Booked!</h3>
            <p className="text-xl text-gray-300 mt-4">
              {date && format(date, "EEEE, MMM d")} at <span className="text-cyan-400 font-bold">{time}</span>
            </p>
            <p className="text-gray-400 mt-4">Zoom link sent to {email}</p>
          </div>
        ) : (
          <div className="overflow-y-auto flex-1 pt-20">
            <DialogHeader className="text-center mb-8">
              <DialogTitle className="text-4xl md:text-5xl font-bold text-white">
                Book Your Free 15-Min Call
              </DialogTitle>
            </DialogHeader>

            {/* Mobile-first responsive grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
              {/* Calendar */}
              <div className="lg:col-span-4">
                <Label className="text-white text-lg mb-4 block">Select Date</Label>
                <div className="bg-zinc-900/50 rounded-2xl p-4 border border-zinc-800">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(d) => d < new Date() || d.getDay() === 0 || d.getDay() === 6}
                    className="w-full"
                    classNames={{
                      day_selected: "bg-cyan-500 text-black font-bold",
                      day_today: "text-cyan-400 font-bold ring-2 ring-cyan-500/50",
                      day: "text-white hover:bg-zinc-800",
                      caption: "text-white font-semibold",
                      nav_button: "text-cyan-400 hover:bg-zinc-800",
                    }}
                  />
                </div>
                {date && (
                  <p className="text-center text-cyan-400 font-medium mt-3">
                    {format(date, "EEEE, MMMM d")}
                  </p>
                )}
              </div>

              {/* Time Slots */}
              <div className="lg:col-span-4">
                <Label className="text-white text-lg mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5" /> Select Time (GMT)
                </Label>
                <div className="grid grid-cols-3 gap-3 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-900">
                  {TIME_SLOTS.map((slot) => (
                    <Button
                      key={slot}
                      variant={time === slot ? "default" : "outline"}
                      size="sm"
                      onClick={() => setTime(slot)}
                      className={`h-11 text-sm font-medium transition-all ${
                        time === slot
                          ? "bg-cyan-500 hover:bg-cyan-400 text-black shadow-lg shadow-cyan-500/30"
                          : "border-zinc-700 hover:border-cyan-500"
                      }`}
                    >
                      {slot}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-4 space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white">First Name *</Label>
                    <Input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="John"
                      className="mt-2 h-12 bg-zinc-900/50 border-zinc-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <Label className="text-white">Last Name *</Label>
                    <Input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Doe"
                      className="mt-2 h-12 bg-zinc-900/50 border-zinc-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-white">Work Email *</Label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@company.com"
                    className="mt-2 h-12 bg-zinc-900/50 border-zinc-700 text-white"
                  />
                </div>

                <div>
                  <Label className="text-white">Phone <span className="text-gray-500">(optional)</span></Label>
                  <Input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+44 7911 123456"
                    className="mt-2 h-12 bg-zinc-900/50 border-zinc-700 text-white"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  onClick={submit}
                  disabled={!isValid}
                  className="w-full h-14 text-lg font-bold bg-cyan-500 hover:bg-cyan-400 text-black disabled:opacity-50 shadow-lg shadow-cyan-500/40 mt-4"
                >
                  Confirm Booking
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
