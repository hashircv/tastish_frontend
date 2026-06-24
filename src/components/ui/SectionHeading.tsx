import { Badge } from "./Badge";

type Props = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, text, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Badge>{eyebrow}</Badge>
      <h2 className="fluid-title mt-4 font-display font-extrabold text-dark">{title}</h2>
      {text ? <p className="fluid-lead mt-4 text-black/65">{text}</p> : null}
    </div>
  );
}
