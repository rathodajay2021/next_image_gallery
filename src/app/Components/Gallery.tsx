import fetchImages from "@/lib/fetchImages";
import type { ImageResults } from "@/Models/Images";
import ImgContainer from "./ImgContainer";
import addBlurredDataUrls from "@/lib/getBase64";
import getPrevNextPages from "@/lib/getPrevNextPages";
import Footer from "./Footer";

type Props = {
  topic?: string | undefined;
  page?: string | undefined;
};

const Gallery: React.FC<Props> = async ({ topic = "curated", page }) => {
  let url;
  if (topic === "curated" && page) {
    url = `https://api.pexels.com/v1/curated?page=${page}`; //browsing beyond home
  } else if (topic === "curated") {
    url = `https://api.pexels.com/v1/curated`; //home page
  } else if (!page) {
    url = `https://api.pexels.com/v1/search?query=${topic}`; //1st page of search results
  } else {
    url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}`;
  }

  const images: ImageResults | undefined = await fetchImages(url);

  if (!images || images.per_page === 0)
    return <h2 className="m-4 text-2xl font-bold">No Images Found</h2>;

  const photosWithBlur = await addBlurredDataUrls(images);

  // calculate pagination
  const { nextPage, prevPage } = getPrevNextPages(images);

  const footerProps = { topic, page, nextPage, prevPage };

  return (
    <>
      <section className="px-1 my-2 grid grid-cols-gallery auto-rows-[10px]">
        {photosWithBlur.map((photo) => (
          <ImgContainer key={photo.id} photo={photo} />
        ))}
      </section>
      <Footer {...footerProps} />
      {/* add footer */}
    </>
  );
};

export default Gallery;
