interface PageBannerProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
}

export default function PageBanner({
  title,
  subtitle,
  imageUrl,
}: PageBannerProps) {
  return (
    <section
      className="relative flex h-[400px] items-center justify-center overflow-hidden text-white"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-5xl px-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>

        <p className="mt-7 text-lg text-gray-200">
          {subtitle}
        </p>
      </div>
    </section>
  );
}