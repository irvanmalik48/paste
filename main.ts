/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import "$std/dotenv/load.ts";

import twind from "./utils/plugin-twind/mod.ts";
import { config } from "@twind";

await start(manifest, { plugins: [twind(config)] });
