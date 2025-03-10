
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faMapMarkerAlt, faUser, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface BookNowDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookNowDialog: React.FC<BookNowDialogProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState<Date>(new Date());
  const [numPeople, setNumPeople] = useState<number>(1);
  const [budget, setBudget] = useState<number>(1000);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Reset form when dialog opens
  React.useEffect(() => {
    if (isOpen) {
      setName("");
      setPhoneNumber("");
      setDestination("");
      setTravelDate(new Date());
      setNumPeople(1);
      setBudget(1000);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Format the date as YYYY-MM-DD string for Supabase
      const formattedDate = travelDate.toISOString().split('T')[0];

      const { error } = await supabase
        .from('booking_queries')
        .insert({
          name: name,
          phone_number: phoneNumber,
          destination: destination,
          travel_date: formattedDate,
          number_of_people: numPeople,
          budget_per_person: budget
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Booking Request Submitted",
        description: "We will contact you shortly!",
      });
      
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="bg-primary text-white p-4 rounded-t-lg">
          <h2 className="text-xl font-bold">Book Your Tour</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-primary" />
                Destination
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Where do you want to go?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">
                <FontAwesomeIcon icon={faCalendarDay} className="mr-2 text-primary" />
                Travel Date
              </label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded"
                value={travelDate.toISOString().split('T')[0]}
                onChange={(e) => setTravelDate(new Date(e.target.value))}
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">
                <FontAwesomeIcon icon={faUser} className="mr-2 text-primary" />
                Number of People
              </label>
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded"
                min="1"
                value={numPeople}
                onChange={(e) => setNumPeople(parseInt(e.target.value))}
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">
                <FontAwesomeIcon icon={faMoneyBillWave} className="mr-2 text-primary" />
                Budget Per Person (₹)
              </label>
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded"
                min="1000"
                value={budget}
                onChange={(e) => setBudget(parseInt(e.target.value))}
                required
              />
            </div>
          </div>
          
          <div className="flex justify-end mt-6 space-x-3">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Book Now"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookNowDialog;
