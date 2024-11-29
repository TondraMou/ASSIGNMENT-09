import Snowfall from "react-snowfall";
import { Link, useNavigate } from "react-router-dom";

const lessons = Array.from({ length: 10 }, (_, i) => ({
  lesson_no: i + 1,
  title: `Lesson ${i + 1}`,
}));

const StartLearning = () => {
  const navigate = useNavigate();

  return (
    <div className="w-11/12 mx-auto py-12 px-6">
      <Snowfall color="white" snowflakeCount={50} />
      <h1 className="text-4xl font-bold text-[#caf12d] text-center mb-8">
        Let’s Learn Japanese
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 mb-12">
        {lessons.map((lesson) => (
          <div
            key={lesson.lesson_no}
            className="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer glow-on-hover"
            onClick={() => navigate(`/lessons/${lesson.lesson_no}`)} 
          >
            <h2 className="text-xl font-semibold text-[#353f0c]">
              {lesson.title}
            </h2>
          </div>
        ))}
      </div>

      <div className="mb-12 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold mb-4 text-[#caf12d]">Learn the Alphabet</h2>
        <iframe className="w-full lg:w-[560px] aspect-video rounded-lg" src="https://www.youtube.com/embed/6p9Il_j0zjc?si=y1qwLFad28W81TY3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <div className="text-center">
        <Link
          to="/tutorial"
          className="px-6 py-3 bg-[#657915] text-white rounded-lg hover:bg-[#6b7541] transition"
        >
          View More Tutorials
        </Link>
      </div>
    </div>
  );
};

export default StartLearning;