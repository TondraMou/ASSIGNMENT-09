
const testimonials = [
  {
    name: "Sarah Johnson",
    feedback:
      "Lingo Bingo has completely transformed the way I learn Japanese! The lessons are fun and easy to follow.",
  },
  {
    name: "Carlos Rivera",
    feedback:
      "Learning Japanese has never been this engaging. The vocabulary lessons are interactive and effective!",
  },
  {
    name: "Aiko Tanaka",
    feedback:
      "I love how intuitive Lingo Bingo is. It made learning Japanese a breeze for me. Highly recommend!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 w-11/12 mx-auto" id="testimonials">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#caf12d] text-center mb-8">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md glow-on-hover"
              data-aos="fade-up"
            >
              <p className="text-gray-600 italic mb-4">
                "{testimonial.feedback}"
              </p>
              <h3 className="text-lg font-semibold text-[#657915]">
                - {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
