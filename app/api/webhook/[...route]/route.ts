import { NextRequest, NextResponse } from "next/server";
import { forwardToWebhook } from "@/lib/webhook/send";

const routeToEnvMap: Record<string, string | undefined> = {
  "walkthrough": process.env.N8N_WEBHOOK_WALKTHROUGH,
  "contact": process.env.N8N_WEBHOOK_CONTACT,
  "franchise-application": process.env.N8N_WEBHOOK_FRANCHISE_APPLICATION,
  "career-application": process.env.N8N_WEBHOOK_CAREER_APPLICATION,
  "transformation-inquiry": process.env.N8N_WEBHOOK_TRANSFORMATION_INQUIRY,
  "diagnose-start": process.env.N8N_WEBHOOK_DIAGNOSE_START,
};

export async function POST(request: NextRequest, context: { params: Promise<{ route: string[] }> }) {
  const params = await context.params;
  const routeKey = params.route.join("/");
  const targetUrl = routeToEnvMap[routeKey];

  if (!targetUrl) {
    return NextResponse.json(
      {
        ok: false,
        error: `Webhook target is not configured for route: ${routeKey}`,
      },
      { status: 500 },
    );
  }

  const payload = await request.json();

  await forwardToWebhook(targetUrl, payload as Record<string, unknown>);

  return NextResponse.json({ ok: true });
}
