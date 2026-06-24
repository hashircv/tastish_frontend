import { useCounter } from "../../hooks/useCounter";

type Props = {
  value: number;
  suffix: string;
  label: string;
};

export function Counter({ value, suffix, label }: Props) {
  const counter = useCounter(value);
  return (
    <div ref={counter.ref} className="rounded-[1.5rem] bg-white p-5 text-center shadow-soft ring-1 ring-black/5">
      <strong className="font-display text-3xl font-extrabold text-primary">
        {counter.value}
        {suffix}
      </strong>
      <p className="mt-1 text-sm font-semibold text-black/60">{label}</p>
    </div>
  );
}
