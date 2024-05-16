"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingList from "./_components/BookingList";
import GlobalApi from "@/app/_utils/GlobalApi";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const MyBooking = () => {
  const { user } = useKindeBrowserClient();
  const [bookingList , setBookingList] = useState();


  useEffect(() => {
    getUserBookingList();
  }, [user]);
  const getUserBookingList = () => {
    GlobalApi.getUserBookingList(user?.email).then((res) => {
      console.log("Booking List",res.data.data);
      setBookingList(res.data.data);
    });
  };
  const filterUserBooking = (type: any) => {
    // Check if bookingList exists before filtering
    if (!bookingList) {
        return [];
    }
    const result = (bookingList as any).filter((item: any) =>
        type === 'upcoming' ? new Date(item.attributes.Date) >= new Date()
            : new Date(item.attributes.Date) <= new Date()
    );
    console.log(result);
    return result;
};

  return (
    <div className="px-4 sm:px-10 mt-10">
        <h2 className="font-bold text-2xl">My Booking</h2>
        <Tabs defaultValue="upcoming" className="w-full mt-5">
            <TabsList className="w-full justify-start">
                <TabsTrigger value="upcomming">Upcoming</TabsTrigger>
                <TabsTrigger value="expired">Expired</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming">
                <BookingList bookingList={filterUserBooking('upcoming')} expired = {false} updateRecord ={()=>getUserBookingList()}  />
            </TabsContent>
            <TabsContent value="expired">
                <BookingList bookingList={filterUserBooking('expired')}  expired = {true} updateRecord ={()=>getUserBookingList()}/>
            </TabsContent>
        </Tabs>
    </div>
  );
};

export default MyBooking;
