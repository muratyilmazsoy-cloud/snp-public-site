"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { walkthroughSchema, type WalkthroughFormValues } from "@/lib/validation/walkthrough";

type WalkthroughFormProps = {
  submitLabel: string;
  labels: {
    name: string;
    email: string;
    company: string;
    country: string;
    message: string;
    sending: string;
    success: string;
    error: string;
  };
};

export function WalkthroughForm({ submitLabel, labels }: WalkthroughFormProps) {
  const [statusMessage, setStatusMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<WalkthroughFormValues>({
    resolver: zodResolver(walkthroughSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      country: "",
      message: "",
    },
  });

  const onSubmit = async (values: WalkthroughFormValues) => {
    setStatusMessage("");

    const response = await fetch("/api/webhook/walkthrough", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      setStatusMessage(labels.error);
      return;
    }

    setStatusMessage(labels.success);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 border border-gray-2/40 bg-navy-2 p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-gray-1">
          {labels.name}
          <input {...register("name")} className="input-surface w-full px-3 py-2" />
          {errors.name ? <span className="text-danger">{errors.name.message}</span> : null}
        </label>

        <label className="space-y-2 text-sm text-gray-1">
          {labels.email}
          <input
            type="email"
            {...register("email")}
            className="input-surface w-full px-3 py-2"
          />
          {errors.email ? <span className="text-danger">{errors.email.message}</span> : null}
        </label>

        <label className="space-y-2 text-sm text-gray-1">
          {labels.company}
          <input {...register("company")} className="input-surface w-full px-3 py-2" />
          {errors.company ? <span className="text-danger">{errors.company.message}</span> : null}
        </label>

        <label className="space-y-2 text-sm text-gray-1">
          {labels.country}
          <input {...register("country")} className="input-surface w-full px-3 py-2" />
          {errors.country ? <span className="text-danger">{errors.country.message}</span> : null}
        </label>
      </div>

      <label className="space-y-2 text-sm text-gray-1">
        {labels.message}
        <textarea {...register("message")} rows={4} className="input-surface w-full px-3 py-2" />
        {errors.message ? <span className="text-danger">{errors.message.message}</span> : null}
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-micro rounded-full bg-cyan px-5 py-3 font-medium text-navy transition-colors hover:bg-cyan-2 disabled:opacity-60"
      >
        {isSubmitting ? labels.sending : submitLabel}
      </button>

      {statusMessage ? <p className="text-sm text-gray-1">{statusMessage}</p> : null}
    </form>
  );
}
