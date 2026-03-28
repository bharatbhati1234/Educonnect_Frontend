// CourseCurriculum.jsx file ---------------------------------------------------------------


"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, PlayCircle } from "lucide-react";

const CourseCurriculum = ({ sections = [] }) => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  if (!sections.length) {
    return (
      <div className="text-gray-500 text-sm">
        No curriculum available
      </div>
    );
  }

  return (
    <div className="space-y-4">

      {sections.map((section, index) => (
        <div
          key={section._id || index}
          className="border rounded-xl overflow-hidden bg-white"
        >

          {/* HEADER */}
          <button
            onClick={() => toggle(section._id)}
            className="w-full flex justify-between items-center px-5 py-4 bg-gray-50 hover:bg-gray-100 transition"
          >
            <div className="text-left">
              <p className="font-semibold text-gray-800">
                {index + 1}. {section.title}
              </p>
              <p className="text-xs text-gray-500">
                {section.lessons?.length || 0} lessons
              </p>
            </div>

            {openId === section._id ? (
              <ChevronDown size={20} />
            ) : (
              <ChevronRight size={20} />
            )}
          </button>

          {/* LESSONS */}
          {openId === section._id && (
            <div className="px-5 py-4 space-y-3">

              {section.lessons?.map((lesson, i) => (
                <div
                  key={lesson._id || i}
                  className="flex justify-between items-center border-b pb-2 last:border-none"
                >
                  <div className="flex items-center gap-2">
                    <PlayCircle size={16} />
                    <p className="text-sm text-gray-700">
                      {index + 1}.{i + 1} {lesson.title}
                    </p>
                  </div>

                  {lesson.duration && (
                    <span className="text-xs text-gray-500">
                      {lesson.duration}
                    </span>
                  )}
                </div>
              ))}

            </div>
          )}

        </div>
      ))}

    </div>
  );
};

export default CourseCurriculum;