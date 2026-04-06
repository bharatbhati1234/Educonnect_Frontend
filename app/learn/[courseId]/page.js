// learn / [courseId] /  page.js file ----------------------------------------------------------


"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getCourseContent, markComplete, getProgress } from "@/services/learnApi";
import VideoPlayer from "@/components/learn/VideoPlayer";
import Sidebar from "@/components/learn/Sidebar";

export default function LearnPage() {

  const { courseId } = useParams();
  console.log("COURSE ID:", courseId);

  const [course, setCourse] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [allLessons, setAllLessons] = useState([]);
  const [completedLessons, setCompletedLessons] = useState([]);

  useEffect(() => {
    if (courseId) fetchCourse();
  }, [courseId]);


  const fetchCourse = async () => {
    try {
      const data = await getCourseContent(courseId);
      setCourse(data);

      const lessons = data.sections.flatMap(s => s.lessons);
      setAllLessons(lessons);

      const last = localStorage.getItem("lastLesson");
      const found = lessons.find(l => l._id === last);

      setCurrentLesson(found || lessons[0]);

      // ✅ NEW: FETCH PROGRESS
      const progressData = await getProgress(courseId);

      setCompletedLessons(
        progressData.completedLessons.map(l => l._id)
      );

    } catch (err) {
      console.log(err);
    }
  };

  // ▶ Save last lesson
  useEffect(() => {
    if (currentLesson) {
      localStorage.setItem("lastLesson", currentLesson._id);
    }
  }, [currentLesson]);

  // ⏭ Next Lesson
  const nextLesson = () => {
    if (!currentLesson) return;

    const index = allLessons.findIndex(l => l._id === currentLesson._id);
    if (index < allLessons.length - 1) {
      setCurrentLesson(allLessons[index + 1]);
    }
  };

  // ⏮ Prev Lesson
  const prevLesson = () => {
    if (!currentLesson) return;

    const index = allLessons.findIndex(l => l._id === currentLesson._id);
    if (index > 0) {
      setCurrentLesson(allLessons[index - 1]);
    }
  };

  // ✅ Mark Complete
  const handleComplete = async () => {
    if (!currentLesson) return;

    try {
      await markComplete(courseId, currentLesson._id);


      setCompletedLessons(prev => {
        if (prev.includes(currentLesson._id)) return prev;
        return [...prev, currentLesson._id];
      });

    } catch (err) {
      console.log(err);
    }
  };

  // 📊 Progress
  const progress = allLessons.length
    ? (completedLessons.length / allLessons.length) * 100
    : 0;

  if (!course) return <p>Loading...</p>;

  if (!course.sections || course.sections.length === 0) {
    return <p>No content available ❌</p>;
  }

 return (
  <div className="flex flex-col md:flex-row min-h-screen">

    {/* 📚 SIDEBAR */}
    <div className="w-full md:w-[330px] border-r bg-gray-100">
      <Sidebar
        sections={course.sections}
        currentLesson={currentLesson}
        setCurrentLesson={setCurrentLesson}
      />
    </div>

    {/* 🎥 MAIN CONTENT */}
    <div className="flex-1 p-4 flex flex-col items-center">

      {/* VIDEO WRAPPER (CENTERED) */}
      <div className="w-full max-w-4xl">
        <div className="w-full aspect-video rounded-lg overflow-hidden bg-black">
          {currentLesson ? (
            <VideoPlayer key={currentLesson?._id} lesson={currentLesson} />
          ) : (
            <p className="text-white text-center mt-10">
              No lesson selected
            </p>
          )}
        </div>
      </div>

      {/* ⏭ CONTROLS */}
      <div className="flex gap-3 mt-6 flex-wrap justify-center">
        <button
          onClick={prevLesson}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Prev
        </button>

        <button
          onClick={nextLesson}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>

        <button
          onClick={handleComplete}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Mark Complete
        </button>
      </div>

      {/* 📊 PROGRESS */}
      <div className="w-full max-w-4xl mt-6">
        <p className="mb-1 text-sm md:text-base">
          Progress: {Math.round(progress)}%
        </p>

        <div className="w-full bg-gray-200 h-2 rounded">
          <div
            className="bg-green-500 h-2 rounded"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

    </div>
  </div>
);




}