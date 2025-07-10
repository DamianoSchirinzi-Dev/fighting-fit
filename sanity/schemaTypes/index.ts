import { type SchemaTypeDefinition } from "sanity";
import homepage from "../schemas/homepage";
import coach from "../schemas/coach";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepage, coach],
};
