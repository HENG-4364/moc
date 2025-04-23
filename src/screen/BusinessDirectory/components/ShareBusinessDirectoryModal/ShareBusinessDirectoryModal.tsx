"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Share2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";

export type ShareBusinessDirectoryModalProps = {
  publicBusinessDirectoryDetail: any;
};

const ShareBusinessDirectoryModal = ({
  publicBusinessDirectoryDetail,
}: ShareBusinessDirectoryModalProps) => {
  const searchParams = useSearchParams();
  const title = `${
    searchParams.get("lang") === "kh"
      ? publicBusinessDirectoryDetail?.business_name
      : publicBusinessDirectoryDetail?.business_name_en
  } | moc.gov.kh`;

  const [shareURL, setShareURL] = useState<string>("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareURL(
        `https://${window?.location?.host}${window?.location?.pathname}`
      );
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(shareURL || "")
      .then(() => setCopied(true))
      .catch((err) => console.error("Failed to copy:", err));

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-gray-300 h-8 w-8"
        >
          <Share2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Share this post</DialogTitle>
          <DialogDescription>Share this link via</DialogDescription>
        </DialogHeader>

        <div className="flex justify-center sm:justify-start gap-4 py-4">
          {shareURL && (
            <>
              <FacebookShareButton url={shareURL}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>

              <TwitterShareButton url={shareURL} title={title}>
                <XIcon size={32} round />
              </TwitterShareButton>

              <TelegramShareButton url={shareURL} title={title}>
                <TelegramIcon size={32} round />
              </TelegramShareButton>

              <WhatsappShareButton url={shareURL} title={title}>
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </>
          )}
        </div>

        <DialogFooter>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" value={shareURL} />
            <Button
              variant="default"
              className="hover:bg-blue-600"
              onClick={handleCopy}
            >
              {copied ? "Copied!" : "Copy"}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ShareBusinessDirectoryModal;
