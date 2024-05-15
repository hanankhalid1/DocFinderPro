"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookAppointment from "./BookAppointment";

const DoctorDetail = ({ doctor }: any) => {
  // soical Media Iocns and urls
  const socialMediaList = [
    {
      id: 1,
      icon: "/youtube.png",
      url: "",
    },
    {
      id: 2,
      icon: "/facebook.png",
      url: "https://www.facebook.com/mian.hannan.73/",
    },
    {
      id: 3,
      icon: "/instagram.png",
      url: "https://www.instagram.com/hanank.1/",
    },
    {
      id: 4,
      icon: "/twitter.png",
      url: "https://twitter.com/Hkhalid1434",
    },
    {
      id: 5,
      icon: "/linkedin.png",
      url: "https://www.linkedin.com/in/hanankhalid1/",
    },
    {
      id: 6,
      icon: "/github.png",
      url: "https://github.com/hanankhalid1",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 border-[1px] p-5 mt-5 rounded-lg">
        {/* doctor Image */}
        <div>
          <Image
            src={doctor.attributes?.Image?.data[0]?.attributes?.url}
            alt={doctor.name}
            width={200}
            height={200}
            className="rounded-lg w-full h-[280px] object-cover"
          />
        </div>
        {/* doctor Info */}
        <div className="col-span-2 md:px-10 mt-5 flex flex-col gap-3 items-baseline">
          <h2 className="font-bold text-2xl mt-5">{doctor.attributes?.Name}</h2>
          <h2 className="flex gap-2 text-gray-500 text-md">
            <GraduationCap />
            <span>{doctor.attributes?.Year_of_Experience} of Experience</span>
          </h2>
          <h2 className="text-md flex gap-2 text-gray-500">
            <MapPin />
            <span>{doctor.attributes?.Address}</span>
          </h2>
          <h2 className="text-[14px] bg-blue-100 p-1 rounded-full px-2 text-primary">
            {doctor?.attributes?.categories?.data[0]?.attributes?.Name}
          </h2>
          <div className="flex gap-3">
            {socialMediaList.map((item, index) => (
              // Link of social Media Icons
              <Link href={item?.url} target="_blank" rel="noreferrer">
                <Image
                  src={item.icon}
                  key={index}
                  height={30}
                  width={30}
                  alt="Social Media Icon"
                />
              </Link>
            ))}
          </div>
          <BookAppointment doctor={doctor}/>
        </div>
        {/* about doctor */}
      </div>
      <div className="p-3 border-[1px] rounded-lg mt-5">
        <h2 className="font-bold text-[20px]">About Me</h2>
        <p className="text-gray-500 tracking-wide mt-2">
          {doctor.attributes?.About[0]?.children[0]?.text}
        </p>
      </div>
    </>
  );
};

export default DoctorDetail;
