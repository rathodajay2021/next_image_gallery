import type { ImageResults } from "@/Models/Images";
import { ImagesSchemaWithPhotos } from "@/Models/Images";
import env from "./env";

export default async function fetchImages(
  url: string
): Promise<ImageResults | undefined> {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: env.PEXELS_API_KEY,
      },
    });

    if (!response.ok) throw new Error("Fetch images error! \n ");

    const imagesResults: ImageResults = await response.json();
    console.log("🚀 ~ fetchImages ~ imagesResults:", imagesResults);

    // parse data with zod schema
    const parseData = ImagesSchemaWithPhotos.parse(imagesResults);

    if (parseData.total_results === 0) return undefined;

    return parseData;
  } catch (error: unknown) {
    // will show in terminal console
    if (error instanceof Error) console.log(error.message, error.stack);
    else console.log("🚀 ~ fetchImages error:", error);
  }
}
