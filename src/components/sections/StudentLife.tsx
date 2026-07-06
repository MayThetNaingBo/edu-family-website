"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import SectionHeading from "@/src/components/common/SectionHeading";

const activities = [
  {
    title: "Interactive Classrooms",
    subtitle: "Active Learning, Active Minds",
    description:
      "Our classrooms encourage student participation, critical thinking, and collaboration through modern teaching methods and engaging lessons.",
    images: [
      "/classroom-1.jpg",
      "/classroom-2.jpg",
      "/classroom-3.jpg",
      "/classroom-4.jpg",
      "/classroom-5.jpg",
      "/classroom-6.jpg",
    ],
    points: [
      "Student-centered learning environment",
      "Use of technology and multimedia",
      "Encourages questions and discussion",
      "Builds confidence and communication",
    ],
  },
  {
    title: "Practical Experiments",
    subtitle: "Learning Through Discovery",
    description:
      "Students explore scientific ideas through practical experiments, observation, teamwork, and hands-on learning activities.",
    images: [
      "/lab-1.jpg",
      "/lab-2.jpg",
      "/lab-3.jpg",
      "/lab-4.jpg",
      "/lab-5.jpg",
      "/lab-6.jpg",
    ],
    points: [
      "Hands-on experiments",
      "Team-based learning",
      "Observation and analysis",
      "Creative problem solving",
    ],
  },
  {
    title: "Sports & Activities",
    subtitle: "Healthy Body, Strong Mind",
    description:
      "Sports help students build teamwork, discipline, leadership, confidence, and a healthy lifestyle.",
    images: [
      "/sports-1.jpg",
      "/sports-2.jpg",
      "/sports-3.jpg",
      "/sports-4.jpg",
      "/sports-5.jpg",
    ],
    points: [
      "Teamwork and discipline",
      "Physical fitness",
      "Leadership skills",
      "School spirit",
    ],
  },
  {
    title: "Trips & Excursions",
    subtitle: "Celebrating Talent and Unity",
    description:
      "School events give students opportunities to perform, lead, celebrate, and grow together as one EDU Family community.",
    images: [
      "/events-1.jpg",
      "/events-2.jpg",
      "/events-3.jpg",
      "/events-4.jpg",
      "/events-5.jpg",
      "/events-6.jpg",
      "/events-7.jpg",
    ],
    points: [
      "Annual celebrations",
      "Student performances",
      "Cultural activities",
      "Community bonding",
    ],
  },
];

export default function StudentLife() {
  const [selectedActivity, setSelectedActivity] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const activity =
    selectedActivity !== null ? activities[selectedActivity] : null;

  const openGallery = (index: number) => {
    setSelectedActivity(index);
    setSelectedImage(0);
  };

  const closeGallery = () => {
    setSelectedActivity(null);
    setSelectedImage(0);
  };

  const nextImage = () => {
    if (!activity) return;

    setSelectedImage((prev) =>
      prev === activity.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!activity) return;

    setSelectedImage((prev) =>
      prev === 0 ? activity.images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeGallery();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <section className="bg-[#F8FAFC] py-14 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Student Life"
          subtitle="Learning Beyond the Classroom"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {activities.map((item, index) => (
            <button
              key={item.title}
              onClick={() => openGallery(index)}
              className="group overflow-hidden rounded-3xl bg-white text-left shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden sm:h-72 lg:h-80">
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    {item.title}
                  </h3>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#D4AF37] md:h-12 md:w-12">
                    <Search size={20} />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activity && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 px-3 py-4 md:px-4"
          onClick={closeGallery}
        >
          <div
            className="relative grid max-h-[90vh] w-full max-w-6xl gap-6 overflow-y-auto rounded-3xl bg-white p-4 shadow-2xl md:p-6 lg:grid-cols-[1.4fr_1fr] lg:gap-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeGallery}
              className="absolute right-3 top-3 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#123C73] shadow-lg transition hover:bg-[#123C73] hover:text-white md:right-4 md:top-4"
              aria-label="Close gallery"
            >
              <X size={22} />
            </button>

            <div>
              <div className="relative h-[260px] overflow-hidden rounded-2xl bg-gray-100 sm:h-[360px] lg:h-[460px]">
                <Image
                  src={activity.images[selectedImage]}
                  alt={activity.title}
                  fill
                  className="object-cover"
                />

                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#123C73] shadow-lg transition hover:bg-[#D4AF37] md:left-4 md:h-11 md:w-11"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#123C73] shadow-lg transition hover:bg-[#D4AF37] md:right-4 md:h-11 md:w-11"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
                {activity.images.map((image, index) => (
                  <button
                    key={image}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-20 overflow-hidden rounded-xl border-4 transition sm:h-24 ${
                      selectedImage === index
                        ? "border-[#D4AF37]"
                        : "border-transparent"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${activity.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center pr-0 lg:pr-10">
              <p className="font-semibold text-[#D4AF37]">
                {activity.subtitle}
              </p>

              <h3 className="mt-3 text-3xl font-bold text-[#123C73] md:text-4xl">
                {activity.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-600 md:mt-6">
                {activity.description}
              </p>

              <div className="mt-6 space-y-4 border-t pt-6 md:mt-8">
                {activity.points.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/20 text-sm font-bold text-[#123C73]">
                      ✓
                    </span>
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm text-gray-500">
                {selectedImage + 1} / {activity.images.length} photos
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}