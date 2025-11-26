// components/BookingDialog.tsx
import { FC, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Clock, CheckCircle2, X } from "lucide-react";
import { format } from "date-fns";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DURATION_OPTIONS = [
  { value: 15, label: "15 minutes", description: "Quick consultation" },
  { value: 30, label: "30 minutes", description: "Discovery session" },
  { value: 45, label: "45 minutes", description: "In-depth consultation" },
];

const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00"
];

export const BookingDialog: FC<BookingDialogProps> = ({ open, onOpenChange }) => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedDuration, setSelectedDuration] = useState<number>(30);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", phone: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [open]);

  const resetForm = () => {
    setStep(1);
    setSelectedDate(undefined);
    setSelectedTime("");
    setSelectedDuration(30);
    setFormData({ name: "", email: "", company: "", phone: "" });
    setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking confirmed:", {
      date: selectedDate,
      time: selectedTime,
      duration: selectedDuration,
      ...formData
    });

    setIsSubmitted(true);
    setTimeout(() => {
      onOpenChange(false);
      resetForm();
    }, 3500);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-2xl">
      {/* Hidden scrollbar but scrollable */}
      <div className="h-screen overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">

        {/* Close Button */}
        <button
          onClick={() => { onOpenChange(false); resetForm(); }}
          className="fixed top-8 right-8 z-50 text-5xl text-cyan-400 hover:text-white transition-all hover:scale-110"
        >
          <X className="w-12 h-12" />
        </button>

        <div className="min-h-screen flex flex-col">

          {/* Header */}
          <div className="px-12 pt-20 pb-10 text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
              Book a Call
            </h1>
            <p className="text-2xl text-gray-300">
              Schedule a free consultation with our GTM Outbound experts
            </p>
          </div>

          {/* Progress Bar */}
          <div className="flex justify-center items-center gap-10 md:gap-20 px-10 mb-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center flex-1 max-w-2xl">
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold transition-all
                  ${i === step 
                    ? "bg-cyan-500 text-black shadow-2xl shadow-cyan-500/70 ring-8 ring-cyan-500/30" 
                    : i < step 
                    ? "bg-cyan-500/20 text-cyan-400 border-4 border-cyan-500" 
                    : "bg-gray-800 text-gray-500 border-4 border-gray-700"
                  }`}>
                  {i < step ? "✓" : i}
                </div>
                {i < 3 && (
                  <div className={`flex-1 h-2 rounded-full mx-4 md:mx-8 ${i < step ? "bg-cyan-500" : "bg-gray-700"}`} />
                )}
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="flex-1 px-8 md:px-20 pb-20">

            {/* Success State */}
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center"
              >
                <CheckCircle2 className="w-32 h-32 md:w-40 md:h-40 text-cyan-500 mb-10" />
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">You're Booked!</h2>
                <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl">
                  Your <strong className="text-cyan-400">{selectedDuration}-minute call</strong> is confirmed for<br />
                  <span className="text-4xl md:text-5xl font-bold text-white mt-4 block">
                    {selectedDate && format(selectedDate, "EEEE, MMMM d, yyyy")} at {selectedTime} GMT
                  </span>
                </p>
                <p className="text-xl text-gray-400 mt-8">Confirmation sent to {formData.email}</p>
              </motion.div>
            ) : (

              /* Step 1: Duration + Calendar */
              step === 1 ? (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto"
                >
                  {/* Duration */}
                  <div className="space-y-8">
                    <h3 className="text-4xl font-bold text-white text-center lg:text-left">Select Call Duration</h3>
                    <div className="space-y-6">
                      {DURATION_OPTIONS.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => setSelectedDuration(opt.value)}
                          className={`w-full p-8 rounded-3xl border-4 text-left transition-all duration-300 group
                            ${selectedDuration === opt.value
                              ? "border-cyan-500 bg-cyan-500/10 shadow-2xl shadow-cyan-500/50 ring-4 ring-cyan-500/30"
                              : "border-gray-700 bg-gray-900/50 hover:border-cyan-600 hover:shadow-2xl"
                            }`}
                        >
                          <div className="flex items-center gap-6">
                            <Clock className={`w-12 h-12 transition-colors ${selectedDuration === opt.value ? "text-cyan-400" : "text-gray-500 group-hover:text-cyan-400"}`} />
                            <div>
                              <div className="text-3xl font-bold text-white">{opt.label}</div>
                              <div className="text-lg text-gray-400 mt-1">{opt.description}</div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Calendar */}
                  <div className="bg-gray-900/70 backdrop-blur-xl border-4 border-gray-800 rounded-3xl p-10 shadow-2xl">
                    <h3 className="text-4xl font-bold text-white text-center mb-10">Choose Your Date</h3>
                    <div className="flex justify-center">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={(date) => { setSelectedDate(date); if (date) setStep(2); }}
                        disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                        className="text-2xl"
                        classNames={{
                          day_selected: "bg-cyan-500 text-black font-bold text-lg hover:bg-cyan-400",
                          day_today: "text-cyan-400 font-bold ring-4 ring-cyan-500/50",
                          caption: "text-3xl font-bold text-white",
                          day: "text-xl hover:bg-gray-800",
                        }}
                      />
                    </div>
                    <p className="text-center text-lg text-gray-400 mt-8">Available Monday – Friday (GMT)</p>
                  </div>
                </motion.div>
              )

              /* Step 2: Time Slots */
              : step === 2 ? (
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="max-w-6xl mx-auto space-y-12"
                >
                  <div className="text-center">
                    <h3 className="text-5xl font-bold text-white">
                      {selectedDate && format(selectedDate, "EEEE, MMMM d, yyyy")}
                    </h3>
                    <p className="text-2xl text-gray-400 mt-4">Select your preferred time (GMT)</p>
                  </div>

                  <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
                    {TIME_SLOTS.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        size="lg"
                        onClick={() => { setSelectedTime(time); setStep(3); }}
                        className={`h-24 text-2xl font-bold transition-all
                          ${selectedTime === time 
                            ? "bg-cyan-500 hover:bg-cyan-400 shadow-2xl shadow-cyan-500/50" 
                            : "border-2 hover:border-cyan-500 hover:bg-gray-800"
                          }`}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>

                  <div className="text-center">
                    <Button variant="ghost" size="lg" onClick={() => setStep(1)} className="text-xl">
                      ← Back to Calendar
                    </Button>
                  </div>
                </motion.div>
              )

              /* Step 3: Form */
              : (
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="max-w-4xl mx-auto space-y-12"
                >
                  <div className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 border-4 border-cyan-700/50 rounded-3xl p-12">
                    <p className="text-2xl text-cyan-400 font-semibold">Your Selected Slot</p>
                    <p className="text-6xl font-bold text-white mt-6">
                      {selectedDate && format(selectedDate, "EEEE, MMMM d")} at {selectedTime}
                    </p>
                    <p className="text-3xl text-gray-300 mt-4">{selectedDuration}-minute consultation</p>
                  </div>

                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {(["name", "email", "company", "phone"] as const).map((field) => (
                      <div key={field}>
                        <Label className="text-2xl text-white capitalize">
                          {field === "phone" ? "Phone (optional)" : `${field.replace(/^\w/, c => c.toUpperCase())} *`}
                        </Label>
                        <Input
                          required={field !== "phone"}
                          type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                          value={formData[field]}
                          onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                          placeholder={
                            field === "name" ? "John Doe" :
                            field === "email" ? "john@company.com" :
                            field === "company" ? "Acme Corp" : "+44 7911 123456"
                          }
                          className="mt-4 h-20 text-2xl bg-gray-900/70 border-2 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/30"
                        />
                      </div>
                    ))}

                    <div className="md:col-span-2">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full h-24 text-3xl font-bold bg-cyan-500 hover:bg-cyan-400 shadow-2xl shadow-cyan-500/60 transition-all"
                      >
                        Confirm Booking
                      </Button>
                    </div>
                  </form>

                  <div className="text-center">
                    <Button variant="ghost" size="lg" onClick={() => setStep(2)} className="text-xl">
                      ← Change Time
                    </Button>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};