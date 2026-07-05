import { Award, GraduationCap, Users, UserRoundCheck } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Students" },
  { icon: UserRoundCheck, value: "30+", label: "Teachers" },
  { icon: GraduationCap, value: "95%", label: "Success Rate" },
  { icon: Award, value: "4", label: "Years of Excellence" },
];

export default function Stats() {
  return (
    <section className="bg-white px-6 pb-16">
      <div className="mx-auto grid max-w-6xl gap-6 rounded-2xl bg-white p-8 shadow-xl md:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.label} className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#123C73] text-white">
                <Icon size={26} />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#123C73]">
                  {item.value}
                </h3>
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}