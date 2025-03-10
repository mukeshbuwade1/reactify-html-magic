
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface BookNowDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const destinations = [
  "Thailand",
  "United States",
  "United Kingdom",
  "Australia",
  "India",
  "South Africa",
  "Indonesia"
];

const BookNowDialog: React.FC<BookNowDialogProps> = ({ isOpen, onClose }) => {
  // Form state
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState<Date | undefined>(undefined);
  const [budgetPerPerson, setBudgetPerPerson] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Define tomorrow's date for the date picker minimum
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!name || !phoneNumber || !destination || !travelDate || !budgetPerPerson || !numberOfPeople) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Format the date as a string in ISO format (YYYY-MM-DD)
      const formattedDate = travelDate.toISOString().split('T')[0];
      
      // Insert booking query into Supabase
      const { error } = await supabase.from('booking_queries').insert({
        name,
        phone_number: phoneNumber,
        destination,
        travel_date: formattedDate,
        budget_per_person: parseFloat(budgetPerPerson),
        number_of_people: parseInt(numberOfPeople, 10)
      });

      if (error) throw error;

      // Show success message
      toast({
        title: "Booking Request Submitted",
        description: "We will contact you shortly to confirm your booking.",
      });

      // Reset form and close dialog
      resetForm();
      onClose();
    } catch (error) {
      console.error('Error submitting booking:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form fields
  const resetForm = () => {
    setName("");
    setPhoneNumber("");
    setDestination("");
    setTravelDate(undefined);
    setBudgetPerPerson("");
    setNumberOfPeople("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">Book Your Tour</DialogTitle>
          <DialogDescription>
            Fill in the details below to book your dream vacation. We'll contact you to confirm.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Enter your full name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number (with country code)</Label>
            <Input 
              id="phoneNumber" 
              value={phoneNumber} 
              onChange={(e) => setPhoneNumber(e.target.value)} 
              placeholder="e.g. +91 9424971195"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="destination">Destination</Label>
            <Select value={destination} onValueChange={setDestination} required>
              <SelectTrigger id="destination">
                <SelectValue placeholder="Select your destination" />
              </SelectTrigger>
              <SelectContent>
                {destinations.map((dest) => (
                  <SelectItem key={dest} value={dest}>{dest}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="travelDate">Date of Travel</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="travelDate"
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !travelDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {travelDate ? format(travelDate, "PPP") : <span>Select travel date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={travelDate}
                  onSelect={setTravelDate}
                  disabled={(date) => date < tomorrow}
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="budgetPerPerson">Budget Per Person (USD)</Label>
            <Input 
              id="budgetPerPerson" 
              value={budgetPerPerson} 
              onChange={(e) => setBudgetPerPerson(e.target.value)} 
              type="number"
              min="1"
              placeholder="e.g. 1000"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="numberOfPeople">Number of People</Label>
            <Input 
              id="numberOfPeople" 
              value={numberOfPeople} 
              onChange={(e) => setNumberOfPeople(e.target.value)} 
              type="number"
              min="1"
              placeholder="e.g. 2"
              required
            />
          </div>
          
          <div className="flex justify-end gap-3 mt-6">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting} className="bg-primary text-white">
              {isSubmitting ? "Submitting..." : "Book Now"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookNowDialog;
