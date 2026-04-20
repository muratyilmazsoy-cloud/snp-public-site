"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Required"),
  email: z.string().email("Invalid email"),
  company: z.string().min(2, "Required"),
  country: z.string().min(2, "Required"),
  interest: z.string().min(2, "Required"),
  message: z.string().min(10, "Required"),
});

type Values = z.infer<typeof schema>;

export function ContactForm({ submitLabel }: { submitLabel: string }) {
  const [status, setStatus] = useState("");
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", company: "", country: "", interest: "", message: "" },
  });

  const onSubmit = async (values: Values) => {
    setStatus("");
    const response = await fetch("/api/webhook/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!response.ok) {
      setStatus("Could not send your message.");
      return;
    }
    setStatus("Message sent.");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 border border-gray-2/40 bg-navy-2 p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-gray-1">Name
          <input {...register("name")} className="w-full border border-gray-2/40 bg-navy px-3 py-2 text-white" />
          {errors.name ? <span className="text-danger">{errors.name.message}</span> : null}
        </label>
        <label className="space-y-2 text-sm text-gray-1">Email
          <input type="email" {...register("email")} className="w-full border border-gray-2/40 bg-navy px-3 py-2 text-white" />
          {errors.email ? <span className="text-danger">{errors.email.message}</span> : null}
        </label>
        <label className="space-y-2 text-sm text-gray-1">Company
          <input {...register("company")} className="w-full border border-gray-2/40 bg-navy px-3 py-2 text-white" />
          {errors.company ? <span className="text-danger">{errors.company.message}</span> : null}
        </label>
        <label className="space-y-2 text-sm text-gray-1">Country
          <input {...register("country")} className="w-full border border-gray-2/40 bg-navy px-3 py-2 text-white" />
          {errors.country ? <span className="text-danger">{errors.country.message}</span> : null}
        </label>
      </div>
      <label className="space-y-2 text-sm text-gray-1">Interest
        <select {...register("interest")} className="w-full border border-gray-2/40 bg-navy px-3 py-2 text-white">
          <option value="">Select</option>
          <option value="Infrastructure">Infrastructure</option>
          <option value="Operasyon 4.0">Operasyon 4.0</option>
          <option value="Grow">Grow path</option>
          <option value="General">General</option>
        </select>
        {errors.interest ? <span className="text-danger">{errors.interest.message}</span> : null}
      </label>
      <label className="space-y-2 text-sm text-gray-1">Message
        <textarea {...register("message")} rows={4} className="w-full border border-gray-2/40 bg-navy px-3 py-2 text-white" />
        {errors.message ? <span className="text-danger">{errors.message.message}</span> : null}
      </label>
      <button type="submit" disabled={isSubmitting} className="rounded-full bg-cyan px-5 py-3 font-medium text-navy disabled:opacity-60">
        {isSubmitting ? "Sending..." : submitLabel}
      </button>
      {status ? <p className="text-sm text-gray-1">{status}</p> : null}
    </form>
  );
}
