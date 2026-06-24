import { BRAND } from "./constants";

const encode = (message: string) => encodeURIComponent(message);

export function generateWhatsAppOrder(productName = "Tastish products"): string {
  const message = `Hello Tastish, I would like to order ${productName}. Please share availability and pricing. Thank you.`;
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encode(message)}`;
}

export function generateWhatsAppEventInquiry(
  eventType = "Wedding/Function",
  guestCount?: number,
  eventDate?: string,
): string {
  const guests = guestCount ? `${guestCount}` : "to be confirmed";
  const date = eventDate?.trim() || "to be confirmed";
  const message = `Hello Tastish, I would like to place a bulk order for an event (${eventType}). Approximate guest count: ${guests}. Date: ${date}. Please share catering availability and pricing. Thank you.`;
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encode(message)}`;
}

export const callHref = `tel:${BRAND.phoneHref}`;
