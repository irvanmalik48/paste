import { Handlers, PageProps } from "$fresh/server.ts";
import { deta } from "../utils/deta.ts";
import { DetaBaseValue } from "../utils/deta.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const db = deta.Base("kv");
    const item = await db.get(new URL(req.url).searchParams.get("key") || "");
    const result = item as unknown as DetaBaseValue || "";

    return ctx.render(result);
  },
};

export default function Greet(props: PageProps) {

}
