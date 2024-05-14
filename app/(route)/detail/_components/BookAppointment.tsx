import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { DialogFooter } from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CalendarDays, Clock } from "lucide-react";

const BookAppointment = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [timeSlot, setTimeSlot] = useState<any[]>([]);
  const [selectedSlot, setSlelectedSlot] = useState();
  const [note  , setNote] = useState('');

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({ time: i + ":00 AM" });
      timeList.push({ time: i + ":30 AM" });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({ time: i + ":00 PM" });
      timeList.push({ time: i + ":30 PM" });
    }
    setTimeSlot(timeList);
  };
  const isPastDay=(day : any)=>{
    return day < new Date();
}
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="mt-3 rounded-full">Book Appointment</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book Appointment</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col md:flex-row gap-4">
              {/* Calendar */}
              <div className="flex flex-col gap-3 items-baseline">
                <h2 className="flex gap-2 items-center">
                  <CalendarDays className="text-primary h-5 w-5" />
                  Select Date
                </h2>
                <Calendar
                  mode="single"
                  selected={date}
                  disabled={isPastDay}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </div>
              {/* Time Slot */}
              <div className="flex flex-col gap-3 items-baseline">
                <h2 className="flex gap-2 items-center">
                  <Clock className="text-primary h-5 w-5" />
                  Select the Time Slot
                </h2>
                <div className="grid grid-cols-3 gap-2 border rounded-lg p-3">
                  {timeSlot?.map((item, index) => (
                    <h2
                      onClick={() => setSlelectedSlot(item.time)}
                      key={index}
                      className={`p-2 border text-center cursor-pointer hover:bg-primary hover:text-white rounded-full ${
                        item.time === selectedSlot
                          ? "bg-primary text-white"
                          : ""
                      }`}
                    >
                      {item.time}
                    </h2>
                  ))}
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="border rounded-md p-2 w-full"
            placeholder="Add a note..."
          />
        <DialogFooter className="sm:justify-end">
       
          <DialogClose asChild>
            <>
            <Button type="button" className="text-red-500 border-red-500" variant="outline">
              Close
            </Button>
            <Button type="button" disabled = {!(date&& selectedSlot)}>
              Confirm
            </Button>
            </>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BookAppointment;
