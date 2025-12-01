import React, { FC, useState } from "react";
import { Button } from "@/components/ui/button"; // Adjust path as needed
import { Input } from "@/components/ui/input"; // Adjust path as needed
import { Textarea } from "@/components/ui/textarea"; // Adjust path as needed
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, User, MessageSquare } from "lucide-react";

// --- Contact Form Sub-Component ---
const ContactForm: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  // 1. Initial State Setup
  setIsSubmitting(true);
  setErrorMessage(null);
  setSuccessMessage(null);

  // 2. Get and Validate Form Data
  const form = e.currentTarget;
  const formData = new FormData(form);
  const email = formData.get('email') as string;
  const name = formData.get('name') as string;
  const message = formData.get('message') as string;

  // Client-side required field validation
  if (!email || !name || !message) {
      setErrorMessage("❌ Please fill out all required fields.");
      setIsSubmitting(false);
      return;
  }

  // --- START ACTUAL API CALL ---
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        // Essential header for sending JSON data
        'Content-Type': 'application/json',
      },
      // Convert form data into a JSON string for the body
      body: JSON.stringify({ name, email, message }),
    });

    // Parse the response body as JSON
    const result = await response.json();

    if (response.ok) {
      // HTTP status 200/201 (success)
      setSuccessMessage("✅ Thank you! We've received your message and will be in touch shortly.");
      form.reset();
    } else {
      // HTTP status 400 or 500 (server-side validation error or internal error)
      // Display the specific error message returned by the API route, if available.
      setErrorMessage(`❌ Failed to send message: ${result.message || 'An unknown error occurred on the server.'}`);
    }
  } catch (error) {
    // Handle network errors (e.g., server offline, connection timeout)
    console.error('Frontend Fetch Error:', error);
    setErrorMessage("❌ A connection error occurred. Please check your network and try again.");
  } finally {
    // Always stop the loading state
    setIsSubmitting(false);
  }
  // --- END ACTUAL API CALL ---
};

  return (
    <div className="p-6 md:p-8 border border-steel/20 rounded-xl shadow-2xl bg-black/30">
      <h3 className="text-2xl font-semibold mb-6 text-white">General Enquiries</h3>
      
      {successMessage && (
        <div className="bg-primary/20 text-primary p-4 rounded-lg mb-4 font-medium">{successMessage}</div>
      )}
      {errorMessage && (
        <div className="bg-red-500/20 text-red-400 p-4 rounded-lg mb-4 font-medium">{errorMessage}</div>
      )}

      {!successMessage && (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="text-sm font-medium text-steel mb-1 block">Name*</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-steel/60" />
              <Input
                id="name"
                name="name"
                type="text"
                required
                disabled={isSubmitting}
                className="pl-10 bg-black/50 border-steel/30 text-white placeholder:text-steel/50 focus:border-primary"
                placeholder="John Doe"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="text-sm font-medium text-steel mb-1 block">Work Email*</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-steel/60" />
              <Input
                id="email"
                name="email"
                type="email"
                required
                disabled={isSubmitting}
                className="pl-10 bg-black/50 border-steel/30 text-white placeholder:text-steel/50 focus:border-primary"
                placeholder="john.doe@company.com"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="text-sm font-medium text-steel mb-1 block">Your Message*</label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-steel/60" />
              <Textarea
                id="message"
                name="message"
                rows={5}
                required
                disabled={isSubmitting}
                className="pl-10 pt-3 bg-black/50 border-steel/30 text-white placeholder:text-steel/50 focus:border-primary resize-y"
                placeholder="Tell us about your growth goals..."
              />
            </div>
          </div>

          <Button 
            type="submit" 
            variant="surgical" 
            size="lg" 
            disabled={isSubmitting}
            className="mt-4 w-full"
          >
            {isSubmitting ? (
              // You can replace this with a proper spinner component
              "Sending..." 
            ) : (
              <>
                Send Message
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform w-4 h-4" />
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
};

// --- Direct Contact Links Sub-Component ---
const DirectContactLinks: FC = () => (
  <div className="space-y-6">
    <h3 className="text-2xl font-semibold text-white">Or Contact Us Directly</h3>
    
    {/* Mailto Link */}
    <a 
      href="mailto:info@gtmoutbound.com" 
      className="group flex items-center p-4 bg-black/30 border border-steel/20 rounded-lg transition duration-300 hover:border-primary hover:bg-black/50"
    >
      <Mail className="w-6 h-6 mr-4 text-primary group-hover:text-primary transition-colors" />
      <div>
        <p className="text-sm text-steel">Email for Support & Inquiries</p>
        <p className="text-lg font-bold text-white group-hover:text-primary transition-colors">contact@gtmoutboundservices.com</p>
      </div>
    </a>

    {/* Tel Link */}
    <a 
      href="tel:+15551234567" 
      className="group flex items-center p-4 bg-black/30 border border-steel/20 rounded-lg transition duration-300 hover:border-primary hover:bg-black/50"
    >
      <Phone className="w-6 h-6 mr-4 text-primary group-hover:text-primary transition-colors" />
      <div>
        <p className="text-sm text-steel">Call a Growth Specialist</p>
        <p className="text-lg font-bold text-white group-hover:text-primary transition-colors">(555) 123-4567</p>
      </div>
    </a>
    
    {/* Map Embed / Location Placeholder */}
    <div className="p-4 bg-black/30 border border-steel/20 rounded-lg h-48 overflow-hidden">
        <h4 className="text-lg font-medium text-white mb-2">Our Location (Optional)</h4>
        {/* Replace this div with your actual Google Map Embed code */}
        <div className="w-full h-full bg-steel/10 flex items-center justify-center text-steel italic text-sm">
            [Google Map Embed Here - Use dark mode style to match site]
        </div>
    </div>
  </div>
);

// --- Main Exported Component ---
const ContactSection: FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-6xl mx-auto mt-16 sm:mt-20"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <ContactForm />
                <DirectContactLinks />
            </div>
        </motion.div>
    );
};

export default ContactSection;