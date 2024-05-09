import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                alt="doctors"
                src="/doctors.jpg"
                width={800}
                height={800}
                className="absolute inset-0 h-full w-full object-cover rounded-3xl"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Find & Book <span className="text-primary">Appointment</span>{" "}
                with your Favourite{" "}
                <span className="text-primary">Doctors</span>
              </h2>

              <p className="mt-4 text-gray-600">
              DocFinderPro revolutionizes healthcare access, offering a diverse array of doctors on one platform, from primary care physicians to specialized surgeons. Patients effortlessly find the perfect match for their needs, ensuring seamless healthcare experiences with confidence and convenience.
              </p>
              <Button className="mt-10">Explore Now</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
