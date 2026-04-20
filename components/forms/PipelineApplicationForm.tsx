"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type PipelineApplicationFormProps = {
  endpoint: string;
  submitLabel: string;
  labels: {
    name: string;
    email: string;
    company: string;
    phone: string;
    country: string;
    message: string;
    extraOne: string;
    extraTwo: string;
    sending: string;
    success: string;
    error: string;
  };
  fields: Array<"name" | "email" | "company" | "phone" | "country" | "message" | "extraOne" | "extraTwo">;
};

const schema = z.object({
  name: z.string().min(2, "Required"),
  email: z.string().email("Invalid email"),
  company: z.string().optional(),
  phone: z.string().optional(),
  country: z.string().optional(),
  message: z.string().optional(),
  extraOne: z.string().optional(),
  extraTwo: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function PipelineApplicationForm({ endpoint, submitLabel, labels, fields }: PipelineApplicationFormProps) {
  const [statusMessage, setStatusMessage] = useState("");
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", company: "", phone: "", country: "", message: "", extraOne: "", extraTwo: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setStatusMessage("");
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!response.ok) {
      setStatusMessage(labels.error);
      return;
    }
    setStatusMessage(labels.success);
    reset();
  };

  const fieldLabel = (field: string) => labels[field as keyof typeof labels] ?? field;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 border border-gray-2/40 bg-navy-2 p-6">
      <div className="grid gap-4 md:grid-cols-2">
        {fields.map((field) => (
          <label key={field} className="space-y-2 text-sm text-gray-1">
            {fieldLabel(field)}
            {field === "message" ? (
              <textarea {...register(field)} rows={4} className="w-full border border-gray-2/40 bg-navy px-3 py-2 text-white" />
            ) : (
              <input
                type={field === "email" ? "email" : "text"}
                {...register(field)}
                className="w-full border border-gray-2/40 bg-navy px-3 py-2 text-white"
              />
            )}
            {errors[field] ? <span className="text-danger">{String(errors[field]?.message ?? "")}</span> : null}
          </label>
        ))}
      </div>

      <button type="submit" disabled={isSubmitting} className="rounded-full bg-cyan px-5 py-3 font-medium text-navy hover:bg-cyan-2 disabled:opacity-60">
        {isSubmitting ? labels.sending : submitLabel}
      </button>

      {statusMessage ? <p className="text-sm text-gray-1">{statusMessage}</p> : null}
    </form>
  );
}
