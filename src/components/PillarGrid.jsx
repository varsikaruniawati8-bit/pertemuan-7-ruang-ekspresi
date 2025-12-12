import PilarIdeation from "../assets/PilarIdeation.png";
import PilarCreation from "../assets/PilarCreation.png";
import PilarCollaboration from "../assets/PilarCollaboration.png";
import PilarGuidance from "../assets/PilarGuidance.png";

export default function PillarGrid() {
  const pillars = [
    {
      title: "Ideation",
      desc: "Mengembangkan ide-ide kreatif dan inovatif melalui brainstorming dan workshop ideation yang terarah.",
      img: PilarIdeation,
      color: "bg-yellow-50",
    },
    {
      title: "Creation",
      desc: "Mewujudkan ide menjadi karya nyata dengan dukungan tools dan teknologi terkini.",
      img: PilarCreation,
      color: "bg-green-50",
    },
    {
      title: "Collaboration",
      desc: "Bekerja sama dalam tim multidisiplin untuk menciptakan solusi yang komprehensif.",
      img: PilarCollaboration,
      color: "bg-blue-50",
    },
    {
      title: "Guidance & Support",
      desc: "Mendapat bimbingan dari mentor berpengalaman dan akses ke berbagai resources pembelajaran.",
      img: PilarGuidance,
      color: "bg-pink-50",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-3">
        Empat Pilar <span className="text-blue-600">Ruang Ekspresi</span>
      </h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
        komprehensif yang dirancang untuk mengembangkan potensi kreatif mahasiswa 
        melalui pendekatan holistik
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {pillars.map((p) => (
          <div
            key={p.title}
            className={`${p.color} p-8 rounded-2xl shadow-md text-center hover:shadow-lg transition`}
          >
            <img
              src={p.img}
              className="w-16 h-16 mx-auto mb-5 object-contain"
              alt={p.title}
            />
            <h3 className="font-semibold text-lg mb-3">{p.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

