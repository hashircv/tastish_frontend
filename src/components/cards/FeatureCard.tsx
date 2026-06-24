import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export function FeatureCard({ icon: Icon, title, text }: Props) {
  return (
    <article className="rounded-[1.5rem] bg-white p-5 shadow-soft ring-1 ring-black/5">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
        <Icon size={23} />
      </div>
      <h3 className="mt-5 font-display text-lg font-extrabold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-black/62">{text}</p>
    </article>
  );
}
