import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  return (
    <div className="flex justify-end items-center mt-3 ">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 0v4m0 6v4m0-10h4m-12 0H4a4 4 0 0 0-4 4v12h24V11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4-4z"
          />
        </svg>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          placeholderText="Start Date"
          className="px-10 py-4 rounded-sm"
        />
      </div>

      <div className="flex items-center">
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          placeholderText="End Date"
          className="px-10 py-4 rounded-sm"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-2 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
};

export default Calendar;
