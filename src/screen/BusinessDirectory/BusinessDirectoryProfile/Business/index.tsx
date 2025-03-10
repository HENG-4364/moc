"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Select from "react-select";
import { Camera, Loader2 } from "lucide-react";
import TagsInput from "./components/TagInput";
import {
  getCommune,
  getDistrict,
  getProvince,
  getVillage,
} from "@/hooks/provinces";
import { TimePicker } from "./components/TimePicker";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Facebook, Youtube, MessageCircle, Clapperboard } from "lucide-react";
import { FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import MapInterface from "../../components/GoogleMap";
import CropImageUpload from "@/components/UploadCrop/upload-image-crop";
import { MultiUpload } from "@/components/MultiUpload/MultiUpload";

interface FormData {
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  avatar?: File;
}
type OptionType = { value: string; label: string };
export default function Business() {
  const [formData, setFormData] = useState<FormData>({
    lastName: "SENG",
    firstName: "LYHENG",
    email: "sok.dara@gmail.com",
    phone: "092744510",
  });
  const dict = {
    choose_type_of_business: "Choose type of business",
    province: "Province",
    district: "District",
    commune: "Commune",
    village: "Village",
  };
  const getCategories = (): OptionType[] => [
    { value: "technology", label: "Technology" },
    { value: "health", label: "Health" },
    { value: "finance", label: "Finance" },
    { value: "education", label: "Education" },
  ];
  const [result, setResult] = useState<string[]>([]);
  const [avatarPreview, setAvatarPreview] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState<OptionType | null>(null);
  const [province, setProvince] = useState<any>();
  const [district, setDistrict] = useState<any>();
  const [commune, setCommune] = useState<any>();
  const [villageOrGroup, setVillageOrGroup] = useState<any>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentPlatform, setCurrentPlatform] = useState<string>("");
  const [socialLinks, setSocialLinks] = useState<Record<string, string>>({
    facebook: "",
    youtube: "",
    telegram: "",
    tiktok: "",
  });
  const [ba, setBa] = useState<string | null>(null);
  const [croppedBanner, setCroppedBanner] = useState<string | null>(null);
  const [fileNameBaner, setFileBanner] = useState("")
  const handleCropBannerDone = (croppedBanner: string) => {
    setCroppedBanner(croppedBanner);
    setBa(null);

  };

  const handleCropBannerCancel = () => {
    setBa(null);
  };

  const [businessImages, setBusinessImage] = useState<File[]>([]);
  const handleFileUpload = (files?: File[] | undefined) => {
    if (files) {
      setBusinessImage(files)
    }
  };
  const handleIconClick = (platform: string) => {
    setCurrentPlatform(platform);
    setShowModal(true);
  };

  const handleSaveLink = () => {
    setShowModal(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSocialLinks({ ...socialLinks, [currentPlatform]: e.target.value });
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, avatar: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4">
      {/* <div className="flex flex-col items-center justify-center">
        <div className="mb-3 ">
          <img src="/waiting.svg" alt="" className="w-60" />
        </div>
        <div className="text-center font-semibold">
          គណនីរបស់អ្នកកំពុងត្រួតពិនិត្យ!
        </div>
      </div> */}

      <h1 className="mb-4 text-xl font-semibold">ពត៌មានអាជីវកម្ម</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <div className="pt-6">
            <div className="mb-6 flex justify-start">
              <div className="relative">
                <Avatar className="h-32 w-32">
                  <AvatarImage src={avatarPreview || "/placeholder.svg"} />
                  <AvatarFallback>
                    {formData.firstName[0]}
                    {formData.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                <Label
                  htmlFor="avatar"
                  className="absolute bottom-0 right-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primary text-primary-foreground "
                >
                  <Camera className="h-4 w-4" />
                  <Input
                    id="avatar"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleAvatarChange}
                  />
                </Label>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="lastName">
                    ឈ្មោះអាជីវកម្ម (ខ្មែរ)
                    <span className="text-destructive"> *</span>
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        lastName: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="firstName">
                    ឈ្មោះអាជីវកម្ម (អង់គ្លេស)
                    <span className="text-destructive"> *</span>
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        firstName: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
              </div>

              <div>
                <Label>ម៉ោងធ្វើការ</Label>
                <div className="grid md:grid-cols-2 gap-4 mt-2">
                  <div>
                    <Label htmlFor="started_date">From</Label>
                    <TimePicker />
                  </div>
                  <div>
                    <Label htmlFor="ended_date">To</Label>
                    <TimePicker />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  ប្រភេទអាជីវកម្ម <span className="text-destructive">*</span>
                </Label>
                <Select
                  id="category"
                  options={getCategories()}
                  onChange={setCategory}
                  value={category}
                  isClearable
                  placeholder={"Select Category"}
                  className="react-select-container"
                  classNamePrefix="react-select"
                />
              </div>

              <div className="">
                <TagsInput
                  setResult={setResult}
                  result={result}
                  className="w-full"
                />
                {/* <div className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Selected tags:
                  </p>
                  <p className="text-sm">{result.join(", ")}</p>
                </div> */}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="lastName">
                    ផ្ទះលេខ <span className="text-destructive"> *</span>
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        lastName: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="firstName">
                    ផ្លូវលេខ <span className="text-destructive"> *</span>
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        firstName: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="lastName">
                    អ៊ីមែលទំនាក់ទំនង<span className="text-destructive"> *</span>
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        lastName: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">លេខទូរស័ព្ទ</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">URL ចូលមើលគេហទំព័រ</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                />
              </div>
              <div className="space-y-4">
                <Label>តំណភ្ជាប់បណ្តាញសង្គម</Label>
                <div className="flex mt-3">
                  <div>
                    <div
                      onClick={() => handleIconClick("facebook")}
                      className={`flex items-center justify-center w-[35px] h-[35px] rounded-full cursor-pointer  bg-[#3F71BA]`}
                    >
                      <FaFacebookF color="white" size={25} />
                    </div>
                  </div>
                  <div>
                    <div
                      onClick={() => handleIconClick("youtube")}
                      className={`mx-3 flex items-center justify-center w-[35px] h-[35px] rounded-full cursor-pointer bg-[#1A1A1A]`}
                    >
                      <FaXTwitter color="white" size={25} />
                    </div>
                  </div>
                  <div>
                    <div
                      onClick={() => handleIconClick("telegram")}
                      className={`me-3 flex items-center justify-center w-[35px] h-[35px] rounded-full cursor-pointer  bg-[#FE0000]`}
                    >
                      <FaYoutube color="white" size={25} />
                    </div>
                  </div>
                  <div>
                    <div
                      onClick={() => handleIconClick("tiktok")}
                      className={`flex items-center justify-center w-[35px] h-[35px] rounded-full cursor-pointer  bg-[#5499FF]`}
                    >
                      <FaTelegramPlane color="white" size={25} />
                    </div>
                  </div>
                </div>

                {/* Dialog */}
                <Dialog open={showModal} onOpenChange={setShowModal}>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        បញ្ចូលតំណភ្ជាប់គណនី{" "}
                        {currentPlatform.charAt(0).toUpperCase() +
                          currentPlatform.slice(1)}{" "}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="socialMediaLink">តំណភ្ជាប់ (URL)</Label>
                        <Input
                          id="socialMediaLink"
                          type="text"
                          value={socialLinks[currentPlatform] || ""}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        variant="outline"
                        onClick={() => setShowModal(false)}
                      >
                        ត្រឡប់ក្រោយ
                      </Button>
                      <Button
                        className="hover:bg-primary"
                        onClick={handleSaveLink}
                      >
                        រក្សាទុក
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="space-y-4">
                <Label>តំណភ្ជាប់បណ្តាញសង្គម</Label>
                <MapInterface />
              </div>
              <div className="space-y-4">
                <Label>តំណភ្ជាប់បណ្តាញសង្គម</Label>
                <CropImageUpload
                  isBanner={true}
                  isWidth="100%"
                  isHeight="100%"
                  image={ba}
                  handleCropCancel={handleCropBannerCancel}
                  handleCropDone={handleCropBannerDone}
                  fileName={fileNameBaner}
                  croppedImage={croppedBanner}
                  setCroppedImage={setCroppedBanner}
                  setImage={setBa}
                  setFile={setFileBanner} />
              </div>
              <div className="space-y-4">
                <Label>តំណភ្ជាប់បណ្តាញសង្គម</Label>
                <MultiUpload onFileUpload={handleFileUpload} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end ">
          <Button
            type="submit"
            className="w-full md:w-auto hover:bg-primary"
            disabled={isLoading}
          >
            {isLoading && <Loader2 className="mr-2 size-4 animate-spin" />}
            ធ្វើបច្ចុប្បន្នភាព
          </Button>
        </div>
        {/* <Button
          className="w-full hover:bg-primary"
          type="submit"
          disabled={isLoading || !isFormValid}
        >
          {isLoading && <Loader2 className="mr-2 size-4 animate-spin" />}
          ផ្លាស់ប្ដូរពាក្យសម្ងាត់
        </Button> */}
      </form>
    </div>
  );
}
