import Konten4 from "../assets/konten4.png";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Budi Santoso",
      major: "Mahasiswa Sistem Informasi",
      text: "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain.",
    },
    {
      name: "Budi Santoso",
      major: "Mahasiswa Sistem Informasi",
      text: "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain.",
    },
    {
      name: "Budi Santoso",
      major: "Mahasiswa Sistem Informasi",
      text: "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain.",
    },
    {
      name: "Budi Santoso",
      major: "Mahasiswa Sistem Informasi",
      text: "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain.",
    },
    {
      name: "Budi Santoso",
      major: "Mahasiswa Sistem Informasi",
      text: "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain.",
    },
    {
      name: "Budi Santoso",
      major: "Mahasiswa Sistem Informasi",
      text: "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {testimonials.map((item, i) => (
          <div
            key={i}
            className="
              bg-white
              w-full
              p-6
              rounded-2xl
              shadow-[0_5px_25px_rgba(0,0,0,0.08)]
              hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]
              transition
            "
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={Konten4}
                className="w-14 h-14 rounded-full object-cover"
                alt={item.name}
              />
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-blue-500 text-xs">{item.major}</p>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}







