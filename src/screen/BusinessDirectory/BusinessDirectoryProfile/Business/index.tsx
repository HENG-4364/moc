"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Select from "react-select"
import { AlertTriangle, Loader2 } from "lucide-react"
import TagsInput from "./components/TagInput"
import { getCommune, getDistrict, getProvince, getVillage } from "@/hooks/provinces"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { FaFacebookF, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6"
import { FaTelegramPlane } from "react-icons/fa"
import MapInterface from "../../components/GoogleMap"
import CropImageUpload from "@/components/UploadCrop/upload-image-crop"
import { MultiUpload } from "@/components/MultiUpload/MultiUpload"
import { useUserStore } from "@/stores/me"
import { usePublicBusinessDirectoryCategoryList } from "@/hooks/business-directory-category-list"
import { useParams, useRouter } from "next/navigation"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import type { z } from "zod"
import { settings } from "@/lib/settings"
import { useMutation } from "@apollo/client"
import { toast } from "sonner"
import { UPDATE_BUSINESS_DIRECTORY_MUTATION } from "../../graphql/Mutation/business-directory-update-profile"
import { applicationFormSchema } from "../../formSchema"
import { TimePicker } from "./components/TimePicker"
import Image from "next/image"
import { Alert, AlertTitle } from "@/components/ui/alert"
import ChoosePlans from "./components/Plans"

const customStyles = (isInvalid: boolean): { [key: string]: any } => ({
  control: (provided: any) => ({
    ...provided,
    borderColor: isInvalid ? "#F46A6A" : provided.borderColor,
    boxShadow: "none",
    "&:hover": {
      borderColor: isInvalid ? "red" : provided.borderColor,
    },
  }),
})
type OptionType = { value: string; label: string }
type UpdateBusinessFormData = z.infer<typeof applicationFormSchema>
export default function Business() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<UpdateBusinessFormData>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      started_date: "08:00",
      ended_date: "17:00",
    },
  })

  const dict = {
    choose_type_of_business: "Choose type of business",
    province: "Province",
    district: "District",
    commune: "Commune",
    village: "Village",
  }

  const { getPublicBusinessDirectoryCategoryList } = usePublicBusinessDirectoryCategoryList()
  const params = useParams<{ lang: string }>()
  const lang = params?.lang
  const categoryOption = getPublicBusinessDirectoryCategoryList?.publicBusinessDirectoryCategoryList?.data?.map(
    (items: any) => ({
      value: items.id,
      label: lang === "kh" ? items.name_kh : items.name_en,
    }),
  )
  const me = useUserStore((state) => state.me)
  const setMe = useUserStore((state) => state.setMe)
  const [result, setResult] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [category, setCategory] = useState<OptionType | null>(null)
  const [province, setProvince] = useState<any>()
  const [district, setDistrict] = useState<any>()
  const [commune, setCommune] = useState<any>()
  const [villageOrGroup, setVillageOrGroup] = useState<any>()
  const [showModal, setShowModal] = useState<boolean>(false)
  const [currentPlatform, setCurrentPlatform] = useState<string>("")
  const [socialLinks, setSocialLinks] = useState<Record<string, string>>({
    facebook: me?.business_directory?.facebook_url ? me?.business_directory?.facebook_url : "",
    youtube: me?.business_directory?.youtube_url ? me?.business_directory?.youtube_url : "",
    telegram: me?.business_directory?.telegram_url ? me?.business_directory?.telegram_url : "",
    tiktok: me?.business_directory?.tiktok_url ? me?.business_directory?.tiktok_url : "",
  })
  const router = useRouter()
  const [uploadedFiles, setUploadedFiles] = useState<any>(me?.business_directory?.thumbnail?.split(", ") || [])

  const [ba, setBa] = useState<string | null>(null)
  const [croppedBanner, setCroppedBanner] = useState<string | null>(me?.business_directory?.banner || null)
  const [fileNameBaner, setFileBanner] = useState("")
  const handleCropBannerDone = (croppedBanner: string) => {
    setCroppedBanner(croppedBanner)
    setBa(null)
  }

  const handleCropBannerCancel = () => {
    setBa(null)
  }

  const [image, setImage] = useState<string | null>(null)
  const [croppedImage, setCroppedImage] = useState<string | null>(me?.business_directory?.business_logo || null)
  const [fileName, setFile] = useState("")

  const handleCropDone = (croppedImage: string) => {
    setCroppedImage(croppedImage)
    setImage(null)
  }

  const handleCropCancel = () => {
    setImage(null)
  }
  const [businessImages, setBusinessImage] = useState<File[]>([])
  const handleFileUpload = (files?: File[] | undefined) => {
    if (files) {
      setBusinessImage(files)
    }
  }
  const handleIconClick = (platform: string) => {
    setCurrentPlatform(platform)
    setShowModal(true)
  }

  const handleSaveLink = () => {
    setShowModal(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSocialLinks({ ...socialLinks, [currentPlatform]: e.target.value })
  }

  useEffect(() => {
    if (me.business_directory) {
      // setAttachDocuments(me?.business_directory?.documents);

      reset({
        business_name: me?.business_directory?.business_name,
        business_name_en: me?.business_directory?.business_name_en,
        email: me?.business_directory?.email,
        phone_number: me?.business_directory?.phone_number,
        home_number: me?.business_directory?.home_number,
        street_number: me?.business_directory?.street_number,
        website_url: me?.business_directory?.website_url,
        map_url: me?.business_directory?.map_url,
        started_date: me?.business_directory?.started_date,
        ended_date: me?.business_directory?.ended_date,
        // service: me?.business_directory?.service,
        // service_en: me?.business_directory?.service_en,
        province: {
          label: me?.business_directory?.province,
          label_en: me?.business_directory?.province_en,
          value: me?.business_directory?.province,
        },
        district: {
          label: me?.business_directory?.district,
          label_en: me?.business_directory?.district_en,
          value: me?.business_directory?.district,
        },
        commune: {
          label: me?.business_directory?.commune,
          label_en: me?.business_directory?.commune_en,
          value: me?.business_directory?.commune,
        },
        villageOrGroup: {
          label: me?.business_directory?.village,
          label_en: me?.business_directory?.village_en,
          value: me?.business_directory?.village,
        },
        category: {
          label: me?.business_directory?.business_directory_category?.name_kh,
          value: me?.business_directory?.business_directory_category?.id,
        },
        // businessType: me?.business_directory?.business_type,
      })
    }
  }, [me.business_directory, reset])

  const [businessDirectoryUpdateProfile] = useMutation(UPDATE_BUSINESS_DIRECTORY_MUTATION, {
    onCompleted: (data) => {
      if (data.businessDirectoryUpdateProfile) {
        toast.success(`${"Updated Successfully!"}`, {
          position: "top-right",
          style: { fontSize: "11pt", zIndex: "100" },
        })
        router.refresh()
      }
    },
    onError: (err) => {
      toast.error(`${err.message}`, {
        position: "top-right",
        style: { fontSize: "11pt" },
      })
    },
    refetchQueries: ["publicUserMe"],
  })
  const onSubmit = (input: any) => {
    console.log("Form submitted with data:", input)

    businessDirectoryUpdateProfile({
      variables: {
        businessDirectoryUpdateProfileId: me?.business_directory?.id,
        websiteId: Number(settings.websiteId),
        input: {
          business_name: input?.business_name || null,
          business_name_en: input?.business_name_en || null,
          business_logo: croppedImage || null,
          service: result?.length > 0 ? result?.join(", ") : null,
          banner: croppedBanner || null,
          business_directory_category_id: input?.category?.value || null,
          province: input?.province?.label || null,
          district: input?.district?.label || null,
          commune: input?.commune?.label || null,
          village: input?.villageOrGroup?.label || null,
          province_en: input?.province?.label_en || null,
          district_en: input?.district?.label_en || null,
          commune_en: input?.commune?.label_en || null,
          village_en: input?.villageOrGroup?.label_en || null,
          email: input?.email || null,
          phone_number: input?.phone_number || null,
          map_url: input?.map_url || null,
          telegram_url: socialLinks?.telegram || null,
          facebook_url: socialLinks?.facebook || null,
          tiktok_url: socialLinks?.tiktok || null,
          youtube_url: socialLinks?.youtube || null,
          website_url: input?.website_url || null,
          home_number: input?.home_number || null,
          street_number: input?.street_number || null,
          started_date: input?.started_date || null,
          ended_date: input?.ended_date || null,
          business_type: input?.businessType || null,
          thumbnail: [...uploadedFiles, ...businessImages]?.join(', ') || null,
        },
      },
    })
  }
  return (
    <div className="p-4">
      {(me?.business_directory?.status === "PENDING" || me?.business_directory?.status === "INREVIEW") && (
        <div className="flex flex-col items-center justify-center">
          <div className="mb-3 ">
            <img src="/waiting.svg" alt="" className="w-60" />
          </div>
          <div className="text-center font-semibold">
            ការស្នើរបង្កើតគណនីអាជីវកម្មរបស់អ្នកកំពុងត្រួតពិនិត្យ!
          </div>
        </div>
      )}

      {(me?.business_directory?.status === "APPROVED" || me?.business_directory?.status === "REVERSION") && (
        <>
          <h1 className="mb-4 text-xl font-semibold">ពត៌មានអាជីវកម្ម</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <div className="pt-6">
                <div className="mb-6 flex justify-start">
                  <div className="relative">
                    <CropImageUpload
                      is_updated={me?.business_directory?.is_updated}
                      isLogo={true}
                      isWidth="200px"
                      isHeight="200px"
                      defaultValue={me?.business_directory?.business_logo || null}
                      image={image}
                      handleCropCancel={handleCropCancel}
                      handleCropDone={handleCropDone}
                      fileName={fileName}
                      croppedImage={croppedImage}
                      setCroppedImage={setCroppedImage}
                      setImage={setImage}
                      setFile={setFile}
                    />
                  </div>
                </div>

                <div className="grid gap-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="business_name">
                        ឈ្មោះអាជីវកម្ម (ខ្មែរ)
                        <span className="text-destructive"> *</span>
                      </Label>
                      <Input
                        id="business_name"
                        disabled={me?.business_directory?.is_updated}
                        className={errors.business_name ? " border border-red-400" : ""}
                        type="text"
                        {...register("business_name")}
                        aria-invalid={errors.business_name ? "true" : "false"}
                      />
                      {errors.business_name && (
                        <p className="text-sm text-destructive mt-1">{errors.business_name.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="business_name_en">
                        ឈ្មោះអាជីវកម្ម (អង់គ្លេស)
                        <span className="text-destructive"> *</span>
                      </Label>
                      <Input
                        id="business_name_en"
                        disabled={me?.business_directory?.is_updated}
                        className={errors.business_name_en ? " border border-red-400" : ""}
                        type="text"
                        {...register("business_name_en")}
                        aria-invalid={errors.business_name_en ? "true" : "false"}
                      />
                      {errors.business_name_en && (
                        <p className="text-sm text-destructive mt-1">{errors.business_name_en.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label>
                      ម៉ោងធ្វើការ<span className="text-red-400">*</span>
                    </Label>
                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                      <Controller
                        control={control}
                        name="started_date"
                        render={({ field }) => (
                          <TimePicker
                            disabled={me?.business_directory?.is_updated}
                            id="started_date"
                            label="From"
                            value={field.value}
                            onChange={field.onChange}
                            error={errors.started_date?.message as string}
                          />
                        )}
                      />
                      <Controller
                        control={control}
                        name="ended_date"
                        render={({ field }) => (
                          <TimePicker
                            disabled={me?.business_directory?.is_updated}
                            id="ended_date"
                            label="To"
                            value={field.value}
                            onChange={field.onChange}
                            error={errors.ended_date?.message as string}
                          />
                        )}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      ប្រភេទអាជីវកម្ម <span className="text-destructive">*</span>
                    </Label>
                    <Controller
                      control={control}
                      name="category"
                      render={({ field }) => (
                        <>
                          <Select
                            isDisabled={me?.business_directory?.is_updated}
                            {...field}
                            value={field.value}
                            isClearable
                            onChange={(e: any) => {
                              field.onChange(e), setCategory(e)
                            }}
                            options={categoryOption}
                            className="react-select-container"
                            classNamePrefix="react-select"
                            styles={customStyles(!!errors.category)}
                            placeholder={"Choose Category"}
                          />
                        </>
                      )}
                    />
                    {errors.category && <p className="text-sm text-destructive mt-1">Business Category is required*</p>}
                  </div>
                  <div className="">
                    <TagsInput setResult={setResult} result={result} className="w-full" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="province" className="block text-sm font-medium text-gray-700">
                        {dict?.province}
                        <span className="text-red-400">*</span>
                      </label>
                      <Controller
                        control={control}
                        name="province"
                        render={({ field }) => (
                          <Select
                            {...field}
                            isDisabled={me?.business_directory?.is_updated}
                            value={field.value}
                            isClearable
                            onChange={(e: any) => {
                              field.onChange(e), setProvince(e)
                            }}
                            options={getProvince()}
                            styles={customStyles(!!errors.province)}
                            placeholder={"ជ្រើសរើស"}
                            className="react-select-container"
                            classNamePrefix="react-select"
                          />
                        )}
                      />
                      {errors.province && !province && (
                        <div className="text-sm text-destructive mt-1">{`Province is required*`}</div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="district" className="block text-sm font-medium text-gray-700">
                        {dict?.district}
                        <span className="text-red-400">*</span>
                      </label>
                      <Controller
                        control={control}
                        name="district"
                        render={({ field }) => (
                          <>
                            <Select
                              {...field}
                              value={field.value}
                              onChange={(e: any) => {
                                field.onChange(e), setDistrict(e)
                              }}
                              options={getDistrict(province?.value)}
                              styles={customStyles(!!errors.district)}
                              placeholder={"ជ្រើសរើស"}
                              isDisabled={!province || me?.business_directory?.is_updated}
                              isClearable
                              className="react-select-container"
                              classNamePrefix="react-select"
                            />
                          </>
                        )}
                      />
                      {errors.district && !district && (
                        <div className="text-sm text-destructive mt-1">{`District is required*`}</div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="commune" className="block text-sm font-medium text-gray-700">
                        {dict?.commune}
                        <span className="text-red-400">*</span>
                      </label>
                      <Controller
                        control={control}
                        name="commune"
                        render={({ field }) => (
                          <>
                            <Select
                              {...field}
                              onChange={(e: any) => {
                                field.onChange(e), setCommune(e)
                              }}
                              value={field.value}
                              options={getCommune(district?.value)}
                              styles={customStyles(!!errors.commune)}
                              placeholder={"ជ្រើសរើស"}
                              isDisabled={!district || me?.business_directory?.is_updated}
                              isClearable
                              className="react-select-container"
                              classNamePrefix="react-select"
                            />
                          </>
                        )}
                      />
                      {errors.commune && !commune && (
                        <div className="text-sm text-destructive mt-1">{`Commune is required*`}</div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="village" className="block text-sm font-medium text-gray-700">
                        {dict?.village}
                        <span className="text-red-400">*</span>
                      </label>
                      <Controller
                        control={control}
                        name="villageOrGroup"
                        render={({ field }) => (
                          <>
                            <Select
                              {...field}
                              onChange={(e: any) => {
                                field.onChange(e), setVillageOrGroup(e)
                              }}
                              value={field.value}
                              options={getVillage(commune?.value)}
                              styles={customStyles(!!errors.villageOrGroup)}
                              placeholder={"ជ្រើសរើស"}
                              isDisabled={!district || me?.business_directory?.is_updated}
                              isClearable
                              className="react-select-container"
                              classNamePrefix="react-select"
                            />
                          </>
                        )}
                      />
                      {errors.villageOrGroup && !villageOrGroup && (
                        <div className="text-sm text-destructive mt-1">{`Village is required*`}</div>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="home_number">
                        ផ្ទះលេខ <span className="text-destructive"> *</span>
                      </Label>
                      <Input
                        disabled={me?.business_directory?.is_updated}
                        id="home_number"
                        className={errors.home_number ? " border border-red-400" : ""}
                        type="text"
                        {...register("home_number")}
                        aria-invalid={errors.street_number ? "true" : "false"}
                      />
                      {errors.home_number && <p className="text-sm text-destructive mt-1">{errors.home_number.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="street_number">
                        ផ្លូវលេខ <span className="text-destructive"> *</span>
                      </Label>
                      <Input
                        disabled={me?.business_directory?.is_updated}
                        id="street_number"
                        className={errors.street_number ? " border border-red-400" : ""}
                        type="text"
                        {...register("street_number")}
                        aria-invalid={errors.street_number ? "true" : "false"}
                      />
                      {errors.street_number && (
                        <p className="text-sm text-destructive mt-1">{errors.street_number.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        អ៊ីមែលទំនាក់ទំនង<span className="text-destructive"> *</span>
                      </Label>
                      <Input
                        disabled={me?.business_directory?.is_updated}
                        id="email"
                        className={errors.email ? " border border-red-400" : ""}
                        type="text"
                        {...register("email")}
                        aria-invalid={errors.email ? "true" : "false"}
                      />
                      {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone_number">
                        លេខទូរស័ព្ទ<span className="text-red-400">*</span>
                      </Label>
                      <Input
                        disabled={me?.business_directory?.is_updated}
                        id="phone_number"
                        className={errors.phone_number ? " border border-red-400" : ""}
                        type="text"
                        {...register("phone_number")}
                        aria-invalid={errors.phone_number ? "true" : "false"}
                      />
                      {errors.phone_number && (
                        <p className="text-sm text-destructive mt-1">{errors.phone_number.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website_url">
                      URL ចូលមើលគេហទំព័រ <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      disabled={me?.business_directory?.is_updated}
                      id="website_url"
                      className={errors.website_url ? " border border-red-400" : ""}
                      type="text"
                      {...register("website_url")}
                      aria-invalid={errors.website_url ? "true" : "false"}
                    />
                    {errors.website_url && <p className="text-sm text-destructive mt-1">{errors.website_url.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="map_url">Google Map URL</Label>
                    <Input disabled={me?.business_directory?.is_updated} id="map_url" type="text" {...register("map_url")} />
                  </div>

                  <div className="space-y-4">
                    <Label>
                      តំណភ្ជាប់បណ្តាញសង្គម <span className="text-red-400">*</span>
                    </Label>
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

                          className={`mx-3 flex items-center justify-center w-[35px] h-[35px] rounded-full cursor-pointer  bg-[#FE0000]`}
                        >
                          <FaYoutube color="white" size={25} />
                        </div>
                      </div>
                      <div>
                        <div
                          onClick={() => handleIconClick("telegram")}
                          className={`me-3 flex items-center justify-center w-[35px] h-[35px] rounded-full cursor-pointer  bg-[#5499FF]`}
                        >

                          <FaTelegramPlane color="white" size={25} />
                        </div>
                      </div>
                      <div>
                        <div
                          onClick={() => handleIconClick("tiktok")}
                          className={`flex items-center justify-center w-[35px] h-[35px] rounded-full cursor-pointer  bg-black`}
                        >
                          <FaTiktok color="white" size={25} />
                        </div>
                      </div>
                    </div>

                    {/* Dialog */}
                    <Dialog open={showModal} onOpenChange={setShowModal}>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            បញ្ចូលតំណភ្ជាប់គណនី {currentPlatform.charAt(0).toUpperCase() + currentPlatform.slice(1)}{" "}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <Label htmlFor="socialMediaLink">តំណភ្ជាប់ (URL)</Label>
                            <Input
                              disabled={me?.business_directory?.is_updated}
                              id="socialMediaLink"
                              type="text"
                              value={socialLinks[currentPlatform] || ""}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          {me?.business_directory?.is_updated ? (
                            <>
                            </>
                          ) : (
                            <>
                              <Button variant="outline" onClick={() => setShowModal(false)}>
                                ត្រឡប់ក្រោយ
                              </Button>
                              <Button className="hover:bg-primary" onClick={handleSaveLink}>
                                រក្សាទុក
                              </Button>
                            </>
                          )}

                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>

                  <div className="space-y-4">
                    <Label>
                      ទីតាំង<span className="text-red-400">*</span>
                    </Label>
                    <MapInterface isDisabled={me?.business_directory?.is_updated} />
                  </div>
                  <div className="space-y-4">
                    <Label>
                      Banner អាជីវកម្ម<span className="text-red-400">*</span>
                    </Label>
                    <CropImageUpload
                      is_updated={me?.business_directory?.is_updated}
                      defaultValue={me?.business_directory?.banner || null}
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
                      setFile={setFileBanner}
                    />
                  </div>
                  <div className="space-y-4">
                    <Label>
                      {" "}
                      កម្រងរូបភាពអាជីវកម្ម <span className="text-red-400">*</span>
                    </Label>
                    <MultiUpload
                      isDisabled={me?.business_directory?.is_updated}
                      onFileUpload={handleFileUpload}
                      defaultValue={me?.business_directory?.thumbnail}
                      setUploadedFiles={setUploadedFiles}
                      uploadedFiles={uploadedFiles}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end ">
              <Button type="submit" className="w-full md:w-auto hover:bg-primary" disabled={isLoading || me?.business_directory?.is_updated}>
                {isLoading && <Loader2 className="mr-2 size-4 animate-spin" />}
                ធ្វើបច្ចុប្បន្នភាព
              </Button>
            </div>
          </form></>
      )}

      {me?.business_directory?.status === "REJECTED" && (
        <>
          <div className="flex justify-center items-center h-[320px] w-full">
            <div className="text-center flex justify-center items-center">
              <div className="p-3 border-0 flex flex-col items-center">
                <Image
                  src="/rejected-icon.svg"
                  alt="Rejected Status Icon"
                  width={150}
                  height={150}
                  className="w-[150px] h-auto"
                />
                <div className="mt-2 font-bold text-lg">ការស្នើរបង្កើតគណនីអាជីវកម្មរបស់អ្នកត្រូវបានបដិសេដ</div>
              </div>
            </div>
          </div>
        </>
      )}

      {me?.business_directory === null && (
        <>
          <ChoosePlans />
        </>
      )}
    </div>
  )
}

