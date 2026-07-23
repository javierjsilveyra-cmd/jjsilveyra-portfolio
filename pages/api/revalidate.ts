import type { NextApiRequest, NextApiResponse } from "next";

// Protect this endpoint with a secret. Set REVALIDATE_SECRET in your Vercel (or env).
const SECRET = process.env.REVALIDATE_SECRET;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST from Contentful webhook
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const provided = (req.query.secret as string) || (req.headers["x-revalidate-secret"] as string);
  if (!SECRET || !provided || provided !== SECRET) {
    return res.status(401).json({ message: "Invalid or missing secret" });
  }

  try {
    // Contentful may send a lot of information in the webhook body. We support
    // an optional `paths` array in the body to revalidate multiple pages.
    // Default to revalidating the Pintores Pampeanos page.
    const body = req.body || {};
    const paths: string[] = Array.isArray(body.paths) ? body.paths : ["/pintores-pampeanos"];

    const revalidated: string[] = [];
    for (const path of paths) {
      // Next's res.revalidate triggers ISR for the given path
      // (Note: in Next.js >=12 this is available in API routes)
      // await res.revalidate(path) throws if the path is invalid
      // so we try/catch per-path to continue revalidating other paths.
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore-next-line
        await res.revalidate(path);
        revalidated.push(path);
      } catch (err) {
        console.error("Failed to revalidate", path, err);
      }
    }

    return res.json({ revalidated });
  } catch (err: any) {
    console.error("Error in revalidation endpoint:", err);
    return res.status(500).json({ message: "Error revalidating", details: err?.message || String(err) });
  }
}
