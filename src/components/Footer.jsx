export default function Footer() {
  return (
    <footer className="bg-[#2E63A3] text-white pt-20 pb-10 rounded-b-3xl mt-28">

      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-center items-start gap-20 px-10">

        {/* LEFT SECTION */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-[350px]">

          <div className="flex items-center gap-3 mb-5">
            <img src="src/assets/LogoFooter.png" className="h-12" />
            <img src="src/assets/RuangEkspresiFooter.png" className="h-8" />
          </div>

          <p className="text-gray-200 leading-relaxed">
            Wadah kreatif dan kompetitif untuk mahasiswa yang ingin
            mengembangkan potensi melalui ideation, creation,
            collaboration, dan guidance.
          </p>

          <div className="mt-6 space-y-4 text-gray-200">

            <div className="flex items-start gap-3">
              <img src="src/assets/MapsFooter.png" className="w-6 mt-1" />
              <p className="leading-snug">
                Jl. Ringroad Selatan, Kragilan, Tamanan,
                Kec. Banguntapan, Bantul, Daerah Istimewa Yogyakarta 55191
              </p>
            </div>

            <div className="flex items-center gap-3">
              <img src="src/assets/EmailFooter.png" className="w-5" />
              <p>ruang_ekspresi@webmail.uad.ac.id</p>
            </div>

            <div className="flex items-center gap-3">
              <img src="src/assets/ContactFooter.png" className="w-5" />
              <p>(0274) 511830</p>
            </div>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="w-[200px]">
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-200">
            <li>Home</li>
            <li>About</li>
            <li>Program</li>
            <li>Projects</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* PROGRAMS */}
        <div className="w-[200px]">
          <h4 className="font-semibold text-lg mb-4">Programs</h4>
          <ul className="space-y-2 text-gray-200">
            <li>Career Talks</li>
            <li>Extra Classes</li>
            <li>Project Work</li>
            <li>Mentoring</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/40 mt-12 pt-4"></div>

      <p className="text-center text-gray-200 text-xs">
        © 2025 Ruang Ekspresi | All Rights Reserved
      </p>
    </footer>
  );
}