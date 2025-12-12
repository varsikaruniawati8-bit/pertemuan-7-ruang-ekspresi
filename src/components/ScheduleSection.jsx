import Kalender from "../assets/Kalender.png";
import Jam from "../assets/Jam.png";

export default function ScheduleSection() {
  return (
    <section className="max-w-7xl mx-auto mt-24 px-6 md:px-12">
      {/* Title */}
      <h2 className="text-center text-3xl font-bold">
        Jadwal & <span className="text-blue-600">Program Kegiatan</span>
      </h2>

      <p className="text-center text-gray-600 max-w-xl mx-auto text-sm mt-3">
        Program terstruktur yang dirancang untuk mengoptimalkan pembelajaran dan
        pengembangan skill setiap Sabtu
      </p>

      {/* Box */}
      <div className="bg-white mt-12 rounded-3xl shadow-lg p-10 border border-gray-100">
        {/* Label */}
        <div className="text-center font-semibold text-blue-600 mb-8 flex items-center justify-center gap-3">
          <img src={Kalender} className="w-6" />
          Setiap Sabtu
        </div>

        {/* Two cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="p-7 rounded-2xl shadow-sm border bg-gradient-to-r from-yellow-50 to-green-50">
            <h3 className="font-semibold text-base flex items-center gap-2">
              <img src={Jam} className="w-6" />
              Sesi Pagi
            </h3>

            <p className="text-blue-900 font-bold text-lg mt-2">
              09.00 – 12.00 WIB
            </p>

            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Workshop, Career Talks, dan Extra Classes intensif.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-7 rounded-2xl shadow-sm border bg-gradient-to-r from-yellow-50 to-blue-50">
            <h3 className="font-semibold text-base flex items-center gap-2">
              <img src={Jam} className="w-6" />
              Sesi Sore
            </h3>

            <p className="text-blue-900 font-bold text-lg mt-2">
              16.00 – 19.00 WIB
            </p>

            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Project Work, Mentoring, dan Collaboration Session
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
