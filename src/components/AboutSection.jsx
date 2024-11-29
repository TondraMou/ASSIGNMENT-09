

const AboutSection = () => {
  return (
    <section className="w-11/12 mx-auto py-12 px-6 text-center" id="about">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-4xl font-bold text-[#caf12d] mb-6"
          data-aos="fade-up"
        >
          About Lingo Bingo
        </h2>
        <p
          className="text-lg mb-8"
          data-aos="fade-right"
        >
          Welcome to Lingo Bingo, your fun and interactive platform for mastering the Japanese language! Our mission is to make language learning engaging, effective, and enjoyable. Whether you’re a beginner or advancing your skills, our platform offers vocabulary lessons, pronunciation guides, and interactive exercises to help you communicate confidently in Japanese.
        </p>
        <p
          className="text-lg"
          data-aos="fade-left"
        >
          Learn at your own pace with personalized lessons, vocabulary cards, and immersive tutorials. Join us on this exciting journey and discover the joy of learning Japanese with Lingo Bingo!
        </p>
      </div>
    </section>
  );
};

export default AboutSection;