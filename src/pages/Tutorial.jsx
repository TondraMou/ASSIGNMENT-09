import { useNavigate } from "react-router-dom";

const Tutorial = () => {
  const navigate = useNavigate();
  
  const videoUrls = [
    "https://www.youtube.com/embed/IFLTH-DIyhk?si=Uk-G7k-_LXfIPsqS",
    "https://www.youtube.com/embed/HwCVV1773zg?si=R8xxkvBiPv044ixe",
    "https://www.youtube.com/embed/gqvMUvl3Pqk?si=FUJ_jsRXNyNyaXRT",
    "https://www.youtube.com/embed/sbw5IDYyoF0?si=RxkDysh173GiGqUS",
    "https://www.youtube.com/embed/n3OAvMSjB2g?si=-DLamde_Wd1nmw02",
    "https://www.youtube.com/embed/Me-QgSLa25w?si=ffwgb2_M-tLEbScL",
    "https://www.youtube.com/embed/775Fr5wBdMQ?si=aqBIRijXxdl456gp",
    "https://www.youtube.com/embed/673u14jpwVo?si=g20ASxZHuJUwnUKk"
  ];

  return (
    <div className="w-11/12 mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-[#caf12d] mb-8">
      Discover Japanese Language
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {videoUrls.map((url, index) => (
          <div key={index} className="aspect-w-16 aspect-h-9">
            <iframe
              src={url}
              title={`Japanese Tutorial ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-md w-full"
              
            />
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={() => navigate("/start-learning")}
          className="px-6 py-3 bg-[#657915] text-white rounded-lg hover:bg-[#6b7541] transition"
        >
          Learn Vocabularies
        </button>
      </div>
    </div>
  );
};

export default Tutorial;
