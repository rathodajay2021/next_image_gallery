import type { Photo } from "@/Models/Images";
import Image from "next/image";
import Link from "next/link";

type props = {
  photo: Photo;
};

const ImgContainer: React.FC<props> = ({ photo }) => {
  const widthHeightRation = photo.height / photo.width;
  const galleryHeight = Math.ceil(250 * widthHeightRation);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;

  return (
    <div
      className="w-[250px] justify-self-center"
      style={{
        gridRow: `span ${photoSpans}`,
      }}
    >
      <Link href={photo.url} target="_blank" className="grid place-content-center">
        <div className="rounded-xl overflow-hidden group">
          <Image
            src={photo.src.large}
            alt={photo.alt}
            height={galleryHeight}
            width={250}
            // objectFit="cover"
            className="group-hover:opacity-75"
            sizes="250px"
            placeholder="blur"
            blurDataURL={photo.blurredDataUrl}
          />
        </div>
      </Link>
    </div>
  );
};

export default ImgContainer;
