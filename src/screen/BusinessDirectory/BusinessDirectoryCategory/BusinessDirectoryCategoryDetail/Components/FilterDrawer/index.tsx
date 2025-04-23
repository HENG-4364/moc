"use client";

import * as React from "react";
import { Filter, Minus, Plus } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Select from "react-select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import {
  getCommune,
  getDistrict,
  getProvince,
  getVillage,
} from "@/hooks/provinces";

export function FilterDrawer({
  setProvince,
  setDistrict,
  setCommune,
  setVillageOrGroup,
  province,
  district,
  commune,
  villageOrGroup,
  dict,
}: any) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="cursor-pointer flex lg:hidden gap-1 items-center p-2 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 duration-300 transition-all">
          <Filter />
          <div>Filter</div>
        </div>
      </DrawerTrigger>
      <DrawerContent className="max-h-[70vh] ">
        <div className=" container mx-auto w-full overflow-y-auto scrollbar-hide">
          <DrawerHeader>
            <DrawerTitle>
              <div className="flex items-center justify-center gap-2">
                <Filter />
                <div>Filter</div>
              </div>
            </DrawerTitle>
            <DrawerDescription>
              Choose Category or location...
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="">
              <div className="space-y-6">
                {/* Locations */}
                <div>
                  <h2 className="text-lg font-semibold mb-4 text-blue-900">
                    LOCATIONS
                  </h2>

                  <div className="grid grid-cols-1 space-y-2 ">
                    <div className="space-y-2">
                      <label
                        htmlFor="province"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {dict?.province}
                      </label>
                      <Select
                        id="province"
                        options={getProvince()}
                        onChange={setProvince}
                        value={province}
                        isClearable={true}
                        placeholder={dict?.province}
                        className="react-select-container"
                        classNamePrefix="react-select"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="district"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {dict?.district}
                      </label>
                      <Select
                        id="district"
                        options={getDistrict(province?.value)}
                        onChange={setDistrict}
                        value={district}
                        isClearable={true}
                        placeholder={dict?.district}
                        isDisabled={!province}
                        className="react-select-container"
                        classNamePrefix="react-select"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="commune"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {dict?.commune}
                      </label>
                      <Select
                        id="commune"
                        options={getCommune(district?.value)}
                        onChange={setCommune}
                        value={commune}
                        isClearable={true}
                        placeholder={dict?.commune}
                        isDisabled={!district}
                        className="react-select-container"
                        classNamePrefix="react-select"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="village"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {dict?.village}
                      </label>
                      <Select
                        id="village"
                        options={getVillage(commune?.value)}
                        onChange={setVillageOrGroup}
                        value={villageOrGroup}
                        isClearable={true}
                        placeholder={dict?.village}
                        isDisabled={!commune}
                        className="react-select-container"
                        classNamePrefix="react-select"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
