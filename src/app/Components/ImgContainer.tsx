import type { Photo } from "@/Models/Images";
import Image from "next/image";

type props = {
  photo: Photo;
};

const ImgContainer: React.FC<props> = ({ photo }) => {
  return (
    <div className="h-64 bg-gray-200 rounded-xl relative overflow-hidden group">
      <Image
        src={photo.src.large}
        alt={photo.alt}
        // height={250}
        // width={250}
        fill={true}
        // objectFit="cover"
        className="object-cover group-hover:opacity-75"
        sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
        placeholder="blur"
        blurDataURL={photo.blurredDataUrl}
      />
    </div>
  );
};

export default ImgContainer;
