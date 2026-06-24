type Props = {
  name: string;
  role: string;
  quote: string;
};

export function TestimonialCard({ name, role, quote }: Props) {
  return (
    <article className="h-full rounded-[1.5rem] bg-white p-6 shadow-soft ring-1 ring-black/5">
      <p className="text-lg leading-8 text-black/75">“{quote}”</p>
      <div className="mt-6">
        <strong className="font-display text-dark">{name}</strong>
        <p className="text-sm text-primary">{role}</p>
      </div>
    </article>
  );
}
