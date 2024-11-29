
import CountUp from "react-countup";

const SuccessSection = () => {
  const successData = [
    { title: "Users", count: 12000, icon: "👥", color: "bg-blue-100" },
    { title: "Lessons", count: 1500, icon: "📘", color: "bg-green-100" },
    { title: "Vocabularies", count: 20000, icon: "🗣️", color: "bg-yellow-100" },
    { title: "Tutorials", count: 500, icon: "🎥", color: "bg-red-100" },
  ];

  return (
    <section className="py-12 w-11/12 mx-auto">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#caf12d] mb-8">
        Highlights of Our Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {successData.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg glow-on-hover shadow-lg ${item.color}`}
              data-aos="zoom-in"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-3xl font-semibold text-gray-800">
                <CountUp
                  start={0}
                  end={item.count}
                  duration={4}
                  separator=","
                />
              </h3>
              <p className="text-lg text-gray-600">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;