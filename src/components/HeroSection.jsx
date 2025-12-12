export default function HeroSection() {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
    >
      {/* LEFT TEXT */}
      <div className="text-left">
        
        {/* TITLE + SUBTITLE DALAM SATU BLOK */}
        <div className="flex flex-wrap items-start gap-3 lg:gap-4">
          <h1 className="font-extrabold text-blue-600 
                         sm:text-2xl md:text-3xl lg:text-5xl">
            RUANG EKSPRESI :
          </h1>

          <div className="font-extrabold text-gray-800 leading-tight
                          text-3xl sm:text-2xl md:text-3xl lg:text-5xl">
            Wadah <br /> kreatif & Kompetitif <br /> Mahasiswa
          </div>
        </div>

        {/* TAGS */}
        <div className="flex flex-wrap gap-4 mt-10">
          <span className="px-6 py-3 bg-yellow-200 rounded-full text-base">
            Ideation
          </span>
          <span className="px-6 py-3 bg-green-200 rounded-full text-base">
            Creation
          </span>
          <span className="px-6 py-3 bg-blue-200 rounded-full text-base">
            Collaboration
          </span>
          <span className="px-6 py-3 bg-pink-200 rounded-full text-base">
            Guidance & Support
          </span>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center">
        <img
          src="src/assets/HeroSection.png"
          className="w-64 sm:w-72 md:w-80 lg:w-[23rem] rounded-xl object-cover shadow-md"
          alt="Hero"
        />
      </div>
    </section>
  );
}




