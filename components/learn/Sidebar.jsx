// Sidebar.jsx file --------------------------------------------------------------------

export default function Sidebar({ sections, currentLesson, setCurrentLesson }) {
  return (
    <div className="w-80 bg-gray-100 p-4 overflow-y-auto">

      {sections.map((section) => (
        <div key={section._id}>
          <h3 className="font-bold mb-2">{section.title}</h3>

          {section.lessons.map((lesson) => (
            <div
              key={lesson._id}
              onClick={() => setCurrentLesson(lesson)}
              className={`p-2 cursor-pointer rounded ${
                currentLesson?._id === lesson._id
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {lesson.title}
            </div>
          ))}
        </div>
      ))}

    </div>
  );
}