import React from 'react';
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const Lesson = () => {
  const navigate = useNavigate();
  const { lesson_no } = useParams();
  const vocabularies = useLoaderData();

  const [modalData, setModalData] = React.useState(null);

  const openModal = (vocab) => {
    setModalData(vocab);
    document.getElementById("vocab_modal").showModal();
  };

  const getCardColor = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100";
      case "medium":
        return "bg-yellow-100";
      case "difficult":
        return "bg-red-200";
      default:
        return "bg-gray-200";
    }
  };

  const speakVocabulary = (word) => {
    const speech = new SpeechSynthesisUtterance(word);
    speech.lang = 'ja-JP'; 
    window.speechSynthesis.speak(speech); 
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#caf12d] text-center mb-8">Lesson {lesson_no} Vocabulary</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vocabularies.map((vocab) => (
          <div
            key={vocab.id}
            className={`p-4 rounded-lg glow-on-hover shadow-md ${getCardColor(vocab.difficulty)}`}
            onClick={() => speakVocabulary(vocab.word)} 
          >
            <h2 className="text-xl font-semibold text-black">{vocab.word}</h2>
            <p className="text-sm text-black">Pronunciation: {vocab.pronunciation}</p>
            <p className="text-sm text-black">Meaning: {vocab.meaning}</p>
            <p className="text-sm text-black">Part of Speech: {vocab.part_of_speech}</p>
            <button
              className="mt-3 px-4 py-2 bg-lime-900 text-white rounded hover:bg-lime-600"
              onClick={() => openModal(vocab)}
            >
              When to Say
            </button>
          </div>
        ))}
      </div>

      <button
        className="mt-8 px-6 py-3 bg-[#5f7215] text-white rounded hover:bg-gray-600"
        onClick={() => navigate("/start-learning")}
      >
        Back to Lessons
      </button>

      <dialog id="vocab_modal" className="modal modal-bottom sm:modal-middle">
        {modalData && (
          <div className="modal-box">
            <h3 className="font-bold text-lg">{modalData.word}</h3>
            <p className="py-2">
              <strong>Meaning:</strong> {modalData.meaning}
            </p>
            <p className="py-2">
              <strong>When to Say:</strong> {modalData.when_to_say}
            </p>
            <p className="py-2">
              <strong>Example:</strong> {modalData.example}
            </p>
            <div className="modal-action">
              <button className="btn" onClick={() => document.getElementById("vocab_modal").close()}>
                Close
              </button>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
};

export default Lesson;