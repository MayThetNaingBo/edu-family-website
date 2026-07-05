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
      "/student-life-classroom-1.jpg",
      "/student-life-classroom-2.jpg",
      "/student-life-classroom-3.jpg",
      "/student-life-classroom-4.jpg",
    ],
    points: [
      "Student-centered learning environment",
      "Use of technology and multimedia",
      "Encourages questions and discussion",
      "Builds confidence and communication",
    ],
  },
  {
    title: "Science Experiments",
    subtitle: "Learning Through Discovery",
    description:
      "Students explore scientific ideas through practical experiments, observation, teamwork, and hands-on learning activities.",
    images: [
      "/student-life-science-1.jpg",
      "/student-life-science-2.jpg",
      "/student-life-science-3.jpg",
      "/student-life-science-4.jpg",
    ],
    points: [
      "Hands-on experiments",
      "Team-based learning",
      "Observation and analysis",
      "Creative problem solving",
    ],
  },
  {
    title: "Sports Activities",
    subtitle: "Healthy Body, Strong Mind",
    description:
      "Sports help students build teamwork, discipline, leadership, confidence, and a healthy lifestyle.",
    images: [
      "/student-life-sports-1.jpg",
      "/student-life-sports-2.jpg",
      "/student-life-sports-3.jpg",
      "/student-life-sports-4.jpg",
    ],
    points: [
      "Teamwork and discipline",
      "Physical fitness",
      "Leadership skills",
      "School spirit",
    ],
  },
  {
    title: "School Events",
    subtitle: "Celebrating Talent and Unity",
    description:
      "School events give students opportunities to perform, lead, celebrate, and grow together as one EDU Family community.",
    images: [
      "/student-life-events-1.jpg",
      "/student-life-events-2.jpg",
      "/student-life-events-3.jpg",
      "/student-life-events-4.jpg",
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
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          title="Student Life"
          subtitle="Learning Beyond the Classroom"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {activities.map((item, index) => (
            <button
              key={item.title}
              onClick={() => openGallery(index)}
              className="group overflow-hidden rounded-3xl bg-white text-left shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#123C73] text-[#D4AF37]">
                    <Search size={22} />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activity && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 px-4"
          onClick={closeGallery}
        >
          <div
            className="relative grid w-full max-w-6xl gap-8 rounded-3xl bg-white p-6 shadow-2xl lg:grid-cols-[1.4fr_1fr]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeGallery}
              className="absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#123C73] shadow-lg transition hover:rotate-90 hover:bg-[#D4AF37]"
              aria-label="Close gallery"
            >
              <X size={22} />
            </button>

            <div>
              <div className="relative h-[460px] overflow-hidden rounded-2xl bg-gray-100">
                <Image
                  src={activity.images[selectedImage]}
                  alt={activity.title}
                  fill
                  className="object-cover"
                />

                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#123C73] shadow-lg transition hover:bg-[#D4AF37]"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#123C73] shadow-lg transition hover:bg-[#D4AF37]"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <div className="mt-4 grid grid-cols-4 gap-3">
                {activity.images.map((image, index) => (
                  <button
                    key={image}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-24 overflow-hidden rounded-xl border-4 transition ${
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

            <div className="flex flex-col justify-center pr-10">
              <p className="font-semibold text-[#D4AF37]">
                {activity.subtitle}
              </p>

              <h3 className="mt-3 text-4xl font-bold text-[#123C73]">
                {activity.title}
              </h3>

              <p className="mt-6 leading-8 text-gray-600">
                {activity.description}
              </p>

              <div className="mt-8 space-y-4 border-t pt-6">
                {activity.points.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D4AF37]/20 text-sm font-bold text-[#123C73]">
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