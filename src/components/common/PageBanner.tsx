interface PageBannerProps {
  title: string;
  subtitle: string;
}

export default function PageBanner({
  title,
  subtitle,
}: PageBannerProps) {
  return (
    <section className="bg-[#123C73] py-24 text-center text-white">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-5xl font-bold">
          {title}
        </h1>

        <p className="mt-5 text-lg text-gray-200">
          {subtitle}
        </p>
      </div>
    </section>
  );
}