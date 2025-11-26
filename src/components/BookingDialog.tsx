import { FC, useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Clock, CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
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

  const resetForm = () => {
    setStep(1); setSelectedDate(undefined); setSelectedTime(""); setSelectedDuration(30);
    setFormData({ name: "", email: "", company: "", phone: "" }); setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booked:", { selectedDate, selectedTime, selectedDuration, ...formData });
    setIsSubmitted(true);
    setTimeout(() => { onOpenChange(false); resetForm(); }, 3000);
  };

  return (
    <Dialog open={open} onOpenChange={(o) => { onOpenChange(o); if (!o) resetForm(); }}>
      <DialogContent className="
        max-w-[95vw] w-full max-h-[92vh] h-[92vh]
        p-0 bg-black/95 backdrop-blur-2xl border border-cyan-900/50
        rounded-3xl overflow-hidden
        [&::-webkit-scrollbar]:hidden [scrollbar-width:none]
      ">
        <div className="flex flex-col h-full">
          {/* Header */}
          <DialogHeader className="px-10 pt-10 pb-6 bg-gradient-to-b from-cyan-900/20 to-transparent">
            <DialogTitle className="text-5xl font-bold text-white flex items-center gap-4">
              <span className="text-cyan-400">Book a Call</span>
            </DialogTitle>
            <DialogDescription className="text-xl text-gray-300 mt-3">
              Schedule a free consultation with our GTM Outbound experts
            </DialogDescription>
          </DialogHeader>

          {/* Progress Bar - Horizontal & Bold */}
          <div className="px-10 mb-8">
            <div className="flex items-center justify-center gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center flex-1">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold transition-all
                    ${i === step ? "bg-cyan-500 text-black shadow-2xl shadow-cyan-500/60" :
                      i < step ? "bg-cyan-500/30 text-cyan-400 border-4 border-cyan-500" :
                      "bg-gray-800 text-gray-600 border-4 border-gray-700"}`}>
                    {i < step ? "✓" : i}
                  </div>
                  {i < 3 && <div className={`flex-1 h-2 mx-4 rounded-full ${i < step ? "bg-cyan-500" : "bg-gray-700"}`} />}
                </div>
              ))}
            </div>
          </div>

          {/* Main Horizontal Content Area */}
          <div className="flex-1 overflow-hidden">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center px-20 text-center"
              >
                <CheckCircle2 className="w-32 h-32 text-cyan-500 mb-8" />
                <h2 className="text-5xl font-bold text-white mb-4">You're All Set!</h2>
                <p className="text-2xl text-gray-300 max-w-2xl">
                  Your <strong className="text-cyan-400">{selectedDuration}-minute call</strong> is confirmed for<br/>
                  <span className="text-3xl font-bold text-white">
                    {selectedDate && format(selectedDate, "EEEE, MMMM d, yyyy")} at {selectedTime} GMT
                  </span>
                </p>
                <p className="text-xl text-gray-400 mt-6">Confirmation sent to {formData.email}</p>
              </motion.div>
            ) : (
              <div className="h-full flex items-center justify-center px-10">
                {/* Step 1: Duration + Calendar Side by Side */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl"
                  >
                    {/* Duration Selection */}
                    <div className="space-y-6">
                      <h3 className="text-3xl font-bold text-white mb-8">Select Call Duration</h3>
                      <div className="space-y-5">
                        {DURATION_OPTIONS.map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => setSelectedDuration(opt.value)}
                            className={`w-full p-8 rounded-3xl border-4 text-left transition-all duration-300
                              ${selectedDuration === opt.value
                                ? "border-cyan-500 bg-cyan-500/10 shadow-2xl shadow-cyan-500/40 ring-4 ring-cyan-500/30"
                                : "border-gray-700 bg-gray-900/50 hover:border-cyan-600 hover:shadow-xl"
                              }`}
                          >
                            <div className="flex items-center gap-5">
                              <Clock className={`w-10 h-10 ${selectedDuration === opt.value ? "text-cyan-400" : "text-gray-500"}`} />
                              <div>
                                <div className="text-2xl font-bold text-white">{opt.label}</div>
                                <div className="text-gray-400 mt-1">{opt.description}</div>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Calendar */}
                    <div className="bg-gray-900/60 backdrop-blur-xl border-4 border-gray-800 rounded-3xl p-10">
                      <h3 className="text-3xl font-bold text-white mb-8 text-center">Choose Your Date</h3>
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
                        }}
                      />
                      <p className="text-center text-gray-400 mt-6 text-lg">Available Monday – Friday</p>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Time Slots Grid */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="w-full max-w-5xl space-y-10"
                  >
                    <div className="text-center">
                      <h3 className="text-4xl font-bold text-white">
                        {selectedDate && format(selectedDate, "EEEE, MMMM d, yyyy")}
                      </h3>
                      <p className="text-xl text-gray-400 mt-3">Select your preferred time (GMT)</p>
                    </div>

                    <div className="grid grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-5">
                      {TIME_SLOTS.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          size="lg"
                          onClick={() => { setSelectedTime(time); setStep(3); }}
                          className={`h-20 text-xl font-semibold ${selectedTime === time ? "bg-cyan-500 hover:bg-cyan-400 shadow-xl" : "border-2"}`}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>

                    <div className="flex justify-center mt-8">
                      <Button variant="ghost" size="lg" onClick={() => setStep(1)} className="text-xl">
                        <ArrowLeft className="mr-2" /> Back to date
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Final Form */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="w-full max-w-4xl space-y-10"
                  >
                    <div className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 border-4 border-cyan-700/50 rounded-3xl p-10">
                      <p className="text-2xl text-cyan-400 font-semibold">Your Selected Slot</p>
                      <p className="text-5xl font-bold text-white mt-4">
                        {selectedDate && format(selectedDate, "EEEE, MMMM d")} at {selectedTime}
                      </p>
                      <p className="text-2xl text-gray-300 mt-3">{selectedDuration}-minute consultation</p>
                    </div>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {(["name", "email", "company", "phone"] as const).map((field) => (
                        <div key={field}>
                          <Label className="text-xl text-white capitalize">
                            {field === "phone" ? "Phone (optional)" : `${field} *`}
                          </Label>
                          <Input
                            required={field !== "phone"}
                            type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                            value={formData[field]}
                            onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                            placeholder={field === "name" ? "John Doe" : field === "email" ? "john@acme.com" : field === "company" ? "Acme Corp" : "+44 7911 123456"}
                            className="mt-3 h-16 text-xl bg-gray-900/70 border-2 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500"
                          />
                        </div>
                      ))}
                      <div className="md:col-span-2">
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full h-20 text-2xl font-bold bg-cyan-500 hover:bg-cyan-400 shadow-2xl shadow-cyan-500/50"
                        >
                          Confirm My Booking
                        </Button>
                      </div>
                    </form>

                    <div className="text-center">
                      <Button variant="ghost" size="lg" onClick={() => setStep(2)}>
                        <ArrowLeft className="mr-2" /> Change time
                      </Button>
                    </div>
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};