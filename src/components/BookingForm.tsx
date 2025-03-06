
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const BookingForm: React.FC = () => {
  const [departDate, setDepartDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);

  return (
    <div className="container mx-auto booking">
      <div className="bg-white shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
          <div className="md:col-span-1">
            <select className="w-full p-4 border" style={{ height: "47px" }}>
              <option value="">Destination</option>
              <option value="1">Destination 1</option>
              <option value="2">Destination 2</option>
              <option value="3">Destination 3</option>
            </select>
          </div>
          <div className="md:col-span-1">
            <DatePicker
              selected={departDate}
              onChange={(date: Date) => setDepartDate(date)}
              className="w-full p-4 border"
              placeholderText="Depart Date"
            />
          </div>
          <div className="md:col-span-1">
            <DatePicker
              selected={returnDate}
              onChange={(date: Date) => setReturnDate(date)}
              className="w-full p-4 border"
              placeholderText="Return Date"
            />
          </div>
          <div className="md:col-span-1">
            <select className="w-full p-4 border" style={{ height: "47px" }}>
              <option value="">Duration</option>
              <option value="1">Duration 1</option>
              <option value="2">Duration 2</option>
              <option value="3">Duration 3</option>
            </select>
          </div>
          <div className="md:col-span-1">
            <button className="w-full bg-primary text-white p-3">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
