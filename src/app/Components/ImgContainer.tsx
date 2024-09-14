import type { Photo } from "@/Models/Images";
import Image from "next/image";

type props = {
  photo: Photo;
};

const ImgContainer: React.FC<props> = ({ photo }) => {
  return (
    <div
      key={photo.id}
      className="h-64 bg-gray-200 rounded-xl relative overflow-hidden"
    >
      <Image
        src={photo.src.large}
        alt={photo.alt}
        // height={250}
        // width={250}
        fill={true}
        // objectFit="cover"
        className="object-cover"
        sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
      />
    </div>
  );
};

export default ImgContainer;
