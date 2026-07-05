interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-14 text-center">
      <p className="font-semibold uppercase tracking-[4px] text-[#D4AF37]">
        {title}
      </p>

      <h2 className="mt-3 text-4xl font-bold text-[#123C73]">
        {subtitle}
      </h2>

      <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#123C73]" />
    </div>
  );
}