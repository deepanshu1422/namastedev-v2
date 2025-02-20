import { useSearchParams } from "next/navigation";

export function getPaymentUrl({
  title,
  amount,
  itemId,
  itemType,
  domain,
  utm_source,
  utm_medium,
  utm_campaign,
  utm_content,
  utm_term,
}: {
  title: string;
  amount: number;
  itemId: string;
  itemType: "course" | "bundle" | "guide" | "mentor";
  domain: string;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_content?: string | null;
  utm_term?: string | null;
}) {
  // Ensure we're using the checkout path
  const baseUrl = `https://${domain}/checkout/${itemType}s/${itemId}`;
  const params = new URLSearchParams({
    title: title,
    amount: amount.toString(),
  });

  // Add UTM parameters if they exist
  if (utm_source) params.append("utm_source", utm_source);
  if (utm_medium) params.append("utm_medium", utm_medium);
  if (utm_campaign) params.append("utm_campaign", utm_campaign);
  if (utm_content) params.append("utm_content", utm_content);
  if (utm_term) params.append("utm_term", utm_term);

  // Force the checkout path
  return `${baseUrl}?${params.toString()}`;
} 