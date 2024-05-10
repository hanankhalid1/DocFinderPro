"use client";
import React from "react";
import { useState, useEffect } from "react";
import GlobalApi from "@/app/_utils/GlobalApi";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const CategoryList = () => {
  const [categoryList, setCategoryList] = useState([]);
  const params = decodeURIComponent(usePathname().replace(/\+/g, ' '));
  const category = params.split('/')[2].replace(/[%\d]/g, '');

  useEffect(() => {
    getCategoriesList();
    console.log(category);
  }, []);

  const getCategoriesList = () => {
    // API call to get categories
    GlobalApi.getCategories().then((resp) => {
      console.log(resp.data);
      setCategoryList(resp.data.data);
    });
  };

  return (
    <div className="h-screen fixed mt-5 flex flex-col">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="overflow-visible">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {categoryList &&
              categoryList.map((item, index) => (
                <CommandItem key={index}>
                  <Link
                    href={'/search/'+item?.attributes?.Name}
                    className={`p-2 flex gap-2 text-[14px] text-blue-600 rounded-md 
                    items-center cursor-pointer w-full ${
                      category == item.attributes.Name && "bg-blue-100"
                    }`}
                  >
                    <Image
                      src={item.attributes?.Icon?.data.attributes?.url}
                      alt="icon"
                      width={25}
                      height={25}
                    />
                    <label>{item.attributes.Name}</label>
                  </Link>
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default CategoryList;
