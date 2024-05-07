import React from "react";
import Image from "next/image";
const DoctorList = ({ doctorList }: any) => {
  return (
    <div className="mb-10 px-10">
      <h2 className="font-bold text-xl">Popular Doctors</h2>
      <div>
        {doctorList &&
          doctorList.map((doctor, index) => (
            <div>
              <Image
                src={doctor.attributes?.image?.data?.attributes?.url}
                alt="doctor"
                width={500}
                height={200}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default DoctorList;
