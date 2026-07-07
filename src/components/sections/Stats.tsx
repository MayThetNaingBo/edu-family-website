"use client";

import { Award, GraduationCap, Users, UserRoundCheck } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: t.stats.student, label: t.stats.students },
    { icon: UserRoundCheck, value: t.stats.teacher, label: t.stats.teachers },
    { icon: GraduationCap, value: t.stats.success, label: t.stats.successRate },
    { icon: Award, value: t.stats.year, label: t.stats.years },
  ];

  return (
    <section className="-mt-8 bg-transparent px-4 pb-10 md:-mt-12 md:px-6">
      <div className="relative z-10 mx-auto max-w-7xl rounded-2xl bg-white shadow-xl">
        <div className="grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 md:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex items-center justify-center gap-4 px-5 py-5 sm:px-6 md:px-8"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#123C73] text-white md:h-12 md:w-12">
                  <Icon size={20} strokeWidth={2} />
                </div>

                <div>
                  <h3 className="text-3xl font-bold leading-none text-[#123C73] md:text-4xl">
                    {item.value}
                  </h3>

                  <div className="mt-2 h-1 w-8 rounded-full bg-[#D4AF37]" />

                  <p className="mt-2 text-sm font-medium text-gray-600">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}