import { type SchemaTypeDefinition } from "sanity";
import homepageSchema from "../schemas/homepage";
import coachSchema from "../schemas/coach";
import classSchema from "../schemas/class";
import testimonialSchema from "../schemas/testimonial";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepageSchema, coachSchema, classSchema, testimonialSchema],
};
