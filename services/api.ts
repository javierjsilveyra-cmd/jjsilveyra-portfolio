import * as contentful from "contentful";
import safeJsonStringify from "safe-json-stringify";

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

export interface PintoresPampeanosImage {
  id: string;
  title: string;
  image: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  description?: string;
}

function normalizeUrl(url?: string): string {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("//")) return `https:${url}`;
  return url;
}

export async function getPintoresPampeanosGallery(): Promise<
  PintoresPampeanosImage[]
> {
  try {
    const data = await client.getEntries({
      content_type: "pintoresPampeanosGallery",
      order: "sys.createdAt",
    });

    if (!data || !data.items || data.items.length === 0) {
      console.log("No gallery items found in Contentful");
      return [];
    }

    const images: PintoresPampeanosImage[] = [];

    for (const item of data.items) {
      try {
        if (!item.fields || !item.fields.imagen) {
          continue;
        }

        const imageField: any = item.fields.imagen;
        let imageUrl = "";
        let imageWidth = 800;
        let imageHeight = 600;

        // Handle different Contentful asset formats
        if (imageField.fields?.file?.url) {
          imageUrl = imageField.fields.file.url;
          imageWidth =
            imageField.fields.file.details?.image?.width || imageWidth;
          imageHeight =
            imageField.fields.file.details?.image?.height || imageHeight;
        } else if (imageField.url) {
          imageUrl = imageField.url;
          imageWidth = imageField.details?.image?.width || imageWidth;
          imageHeight = imageField.details?.image?.height || imageHeight;
        }

        imageUrl = normalizeUrl(imageUrl);

        if (!imageUrl) {
          console.warn("No image URL found for item:", item.sys.id);
          continue;
        }

        images.push({
          id: item.sys.id,
          title: item.fields.titulo || "",
          image: {
            url: imageUrl,
            width: imageWidth,
            height: imageHeight,
            alt: item.fields.imagenAlt || item.fields.titulo || "",
          },
          description: item.fields.descripcion || "",
        });
      } catch (e) {
        console.error("Error mapping gallery item:", e);
        continue;
      }
    }

    console.log(`Successfully loaded ${images.length} gallery images`);
    return images;
  } catch (error) {
    console.error("Error fetching Pintores Pampeanos gallery:", error);
    return [];
  }
}

export async function getHomeImage() {
  return await client.getAsset("3FPIiTtNfLKjvYwzP99Cc1").catch(console.error);
}

export async function getAllPaintings() {
  const data = await client.getEntries({
    content_type: "pintura",
  });

  return JSON.parse(safeJsonStringify(data));
}

export async function getAllCollections() {
  const data = await client.getEntries({
    content_type: "collection",
  });

  return JSON.parse(safeJsonStringify(data));
}

export async function getCollectionByEntryId(entryId: string) {
  const data: any = await client.getEntry(entryId);

  return JSON.parse(safeJsonStringify(data));
}

export async function getBioByEntryId() {
  const data: any = await client.getEntry("7p2Ywe4gK2smjeYlL040nH");

  return JSON.parse(safeJsonStringify(data));
}
