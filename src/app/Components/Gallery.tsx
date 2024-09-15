import fetchImages from "@/lib/fetchImages";
import type { ImageResults } from "@/Models/Images";
import ImgContainer from "./ImgContainer";
import addBlurredDataUrls from "@/lib/getBase64";

type Props = {
  topic?: string | undefined;
};

const Gallery: React.FC<Props> = async ({ topic }) => {
  const url = !topic
    ? `https://api.pexels.com/v1/curated`
    : `https://api.pexels.com/v1/search?query=${topic}`;

  const images: ImageResults | undefined = await fetchImages(url);

  if (!images)
    return <h2 className="m-4 text-2xl font-bold">No Images Found</h2>;

  const photosWithBlur = await addBlurredDataUrls(images);

  return (
    <section className="px-1 my-2 grid grid-cols-gallery auto-rows-[10px]">
      {photosWithBlur.map((photo) => (
        <ImgContainer key={photo.id} photo={photo} />
      ))}
    </section>
  );
};

export default Gallery;
