import { FC, useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Clock, CheckCircle2 } from "lucide-react";
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
    name: "",
    email: "",
    company: "",
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) setStep(2);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const bookingData = {
      date: selectedDate ? format(selectedDate, "PPP") : "",
      time: selectedTime,
      duration: selectedDuration,
      ...formData,
      timestamp: new Date().toISOString(),
    };
    
    console.log("Booking Data:", bookingData);
    // Here you'll integrate with Google Sheets later
    
    setIsSubmitted(true);
    setTimeout(() => {
      onOpenChange(false);
      resetForm();
    }, 2000);
  };

  const resetForm = () => {
    setStep(1);
    setSelectedDate(undefined);
    setSelectedDuration(30);
    setSelectedTime("");
    setFormData({ name: "", email: "", company: "", phone: "" });
    setIsSubmitted(false);
  };

  const handleClose = (open: boolean) => {
    onOpenChange(open);
    if (!open) {
      setTimeout(resetForm, 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-12"
          >
            <CheckCircle2 className="w-16 h-16 text-accent-green mb-4" />
            <h3 className="text-2xl font-bold mb-2">Booking Confirmed!</h3>
            <p className="text-muted-foreground text-center">
              We'll send you a confirmation email shortly.
            </p>
          </motion.div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Book a Call</DialogTitle>
              <DialogDescription>
                Choose your preferred date, time, and call duration
              </DialogDescription>
            </DialogHeader>

            {/* Progress Indicator */}
            <div className="flex items-center justify-center gap-2 mb-4">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-2 flex-1 rounded-full transition-all ${
                    s <= step ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>

            {/* Step 1: Date & Duration Selection */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <Label className="text-base mb-3 block">Select Call Duration</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {DURATION_OPTIONS.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setSelectedDuration(option.value)}
                        className={`p-4 rounded-lg border-2 transition-all text-left ${
                          selectedDuration === option.value
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Clock className="w-4 h-4" />
                          <span className="font-semibold">{option.label}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {option.description}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-base mb-3 block">Select Date</Label>
                  <div className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={handleDateSelect}
                      disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                      className="rounded-md border"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    Available Monday to Friday
                  </p>
                </div>
              </motion.div>
            )}

            {/* Step 2: Time Selection */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <Label className="text-base">
                    Select Time - {selectedDate && format(selectedDate, "PPP")}
                  </Label>
                  <Button variant="ghost" size="sm" onClick={() => setStep(1)}>
                    Change Date
                  </Button>
                </div>
                
                <div className="grid grid-cols-3 gap-3 max-h-[400px] overflow-y-auto p-1">
                  {TIME_SLOTS.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      onClick={() => handleTimeSelect(time)}
                      className="h-12"
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Contact Information */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="mb-4 p-4 bg-muted rounded-lg">
                  <p className="text-sm font-semibold mb-1">Your Booking:</p>
                  <p className="text-sm text-muted-foreground">
                    {selectedDate && format(selectedDate, "PPP")} at {selectedTime} ({selectedDuration} min)
                  </p>
                  <Button variant="ghost" size="sm" onClick={() => setStep(2)} className="mt-2 p-0 h-auto">
                    Change Time
                  </Button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your Company Ltd"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+44 123 456 7890"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Confirm Booking
                  </Button>
                </form>
              </motion.div>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
