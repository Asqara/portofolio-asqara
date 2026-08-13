export function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="section-label">
      <span>/{number}</span>
      <span>{label}</span>
    </div>
  );
}
