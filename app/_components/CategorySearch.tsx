"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import GlobalApi from "../_utils/GlobalApi";

const CategorySearch = () => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    getCategoriesList();
  }, []);
  const getCategoriesList = () => {
    // API call to get categories
    GlobalApi.getCategories().then((resp) => {
      console.log(resp.data);
      setCategoryList(resp.data.data);
    });
  };
  return (
    <div className="mb-10 items-center flex flex-col gap-2">
      <h2 className="font-bold text-4xl tracking-wide">
        Search <span className="text-primary">Doctors</span>
      </h2>
      <h2 className="text-gray-400 px-5 text-xl">
        Search Your Doctor and Book Appointment in one click
      </h2>
      <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search..." />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
      {/* Display List of Categories */}
      <div className="grid grid-cols-3 mt-5 md:grid-cols-4 lg:grid-cols-6">
        {categoryList.map(
          (item, index) =>
            index < 6 && (
              <div
                key={index}
                className="flex flex-col text-center items-center p-5 bg-blue-50 m-2 rounded-lg gap-2 hover:scale-110 transition-all ease-in-out cursor-pointer "
              >
                <Image
                  src={item.attributes?.Icon?.data.attributes?.url}
                  alt="icon"
                  width={40}
                  height={40}
                />
                <label className="text-blue-600 text-sm">
                  {item?.attributes?.Name}
                </label>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default CategorySearch;
