type WebhookPayload = Record<string, unknown>;

export async function forwardToWebhook(url: string, payload: WebhookPayload) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Webhook forwarding failed with status ${response.status}.`);
  }

  return response;
}
