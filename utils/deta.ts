import { Deta } from "deta";

export const deta = Deta(Deno.env.get("DETA_PROJECT_KEY"));

export interface DetaBaseKeyValuePair {
  key: string;
  data: DetaBaseValue;
}

export interface DetaBaseValue {
  store: string;
  language: string;
}
