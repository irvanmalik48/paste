import { Handlers } from "$fresh/server.ts";
import { deta, DetaBaseValue } from "../../utils/deta.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const db = deta.Base("kv");
    const item = await db.get(new URL(req.url).searchParams.get("key") || "");
    const result = item || "";

    return ctx.render(
      new Response(JSON.stringify(result), {
        headers: {
          "content-type": "application/json",
          "status": "200",
        },
      }),
    );
  },

  async POST(req, ctx) {
    const db = deta.Base("kv");
    const body = (await req.formData()).get("data") as unknown as DetaBaseValue;
    const key = Math.random().toString(36).substring(2, 12);
    const _item = await db.put({
      ...body,
    }, key, {
      expireIn: 604800,
    });

    return ctx.render(
      new Response(JSON.stringify({
        key: key,
        success: true,
      }), {
        headers: {
          "content-type": "application/json",
          "status": "200",
        },
      }),
    );
  },
};
