import React from "react";
import style from "./image-card.module.scss";
import { Card } from "@/components/ui/card";

type ImageCardProps = {
  imageSrc: string;
  logoSrc: React.ReactNode;
  title: string;
};

const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, logoSrc, title }) => (
  <Card className={style.card}>
    <img src={imageSrc} alt="Card image" className={style.image} />
    <div className={style.overlay}>
      <div className={style.content}>
        <div className={style.logo}>{logoSrc}</div>
        <div className={style.title}>{title}</div>
      </div>
    </div>
  </Card>
);

export default ImageCard;
