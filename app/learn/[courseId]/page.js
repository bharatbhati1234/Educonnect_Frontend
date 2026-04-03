// learn / [courseId] /  page.js file ----------------------------------------------------------


"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getCourseContent, markComplete } from "@/services/learnApi";
import VideoPlayer from "@/components/learn/VideoPlayer";
import Sidebar from "@/components/learn/Sidebar";

export default function LearnPage() {

  const { courseId } = useParams();

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

      // ✅ SAFE CHECK
      if (!data || !data.sections) {
        setCourse(null);
        return;
      }

      setCourse(data);

      const lessons = data.sections.flatMap(s => s?.lessons || []);
      setAllLessons(lessons);

      // ▶ Resume last lesson
      const last = localStorage.getItem("lastLesson");
      const found = lessons.find(l => l._id === last);

      setCurrentLesson(found || lessons[0] || null);

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
    <div className="flex h-screen">

      {/* Sidebar */}
      <Sidebar
        sections={course.sections}
        currentLesson={currentLesson}
        setCurrentLesson={setCurrentLesson}
      />

      {/* Video Section */}
      <div className="flex-1 p-4 overflow-y-auto">

        {/* 🎥 Video */}
        {currentLesson ? (
          <VideoPlayer lesson={currentLesson} />
        ) : (
          <p>No lesson selected</p>
        )}

        {/* ⏭ Controls */}
        <div className="flex gap-3 mt-4">
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

        {/* 📊 Progress Bar */}
        <div className="mt-4">
          <p className="mb-1">Progress: {Math.round(progress)}%</p>
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