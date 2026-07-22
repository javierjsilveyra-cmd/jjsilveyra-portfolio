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

export async function getPintoresPampeanosGallery(): Promise<
  PintoresPampeanosImage[]
> {
  try {
    const data = await client.getEntries({
      content_type: "pintoresPampeanosGallery",
      order: "sys.createdAt",
    });

    const images: PintoresPampeanosImage[] = data.items.map((item: any) => ({
      id: item.sys.id,
      title: item.fields.titulo || "",
      image: {
        url: item.fields.imagen.fields.file.url,
        width: item.fields.imagen.fields.file.details.image.width,
        height: item.fields.imagen.fields.file.details.image.height,
        alt: item.fields.imagenAlt || item.fields.titulo || "",
      },
      description: item.fields.descripcion || "",
    }));

    return images;
  } catch (error) {
    console.error("Error fetching Pintores Pampeanos gallery:", error);
    return [];
  }
}
