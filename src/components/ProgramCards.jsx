export default function ProgramCards() {
  const programs = [
    {
      title: "Career Talks",
      desc: "Sesi sharing dari praktisi industri dan alumni sukses",
      gradient: "bg-gradient-to-br from-yellow-50 to-yellow-100",
      img: "src/assets/CareerTalks.png",
    },
    {
      title: "Extra Classes",
      desc: "Kelas tambahan skill development dan workshop teknis",
      gradient: "bg-gradient-to-br from-green-50 to-green-100",
      img: "src/assets/ExtraClasses.png",
    },
    {
      title: "Project Work",
      desc: "Mengerjakan project nyata dengan bimbingan mentor",
      gradient: "bg-gradient-to-br from-blue-50 to-blue-100",
      img: "src/assets/ProjectWork.png",
    },
    {
      title: "Mentoring",
      desc: "Sesi konsultasi personal dengan mentor berpengalaman",
      gradient: "bg-gradient-to-br from-pink-50 to-pink-100",
      img: "src/assets/Mentoring.png",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto mt-20 px-6">

      <div className="grid md:grid-cols-4 gap-6 mt-10">
        {programs.map((p) => (
          <div
            key={p.title}
            className={`${p.gradient} p-6 rounded-xl shadow-sm hover:shadow-md transition border`}
          >
            <img src={p.img} className="w-10 mb-4" alt={p.title} />
            <h3 className="font-semibold text-sm">{p.title}</h3>
            <p className="text-xs text-gray-600 mt-1">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

