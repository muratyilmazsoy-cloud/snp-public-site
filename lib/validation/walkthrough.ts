import { z } from "zod";

export const walkthroughSchema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.string().email("Valid email is required."),
  company: z.string().min(2, "Company is required."),
  country: z.string().min(2, "Country is required."),
  message: z.string().min(10, "Please add at least 10 characters."),
});

export type WalkthroughFormValues = z.infer<typeof walkthroughSchema>;
