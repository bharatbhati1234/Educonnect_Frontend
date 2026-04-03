// VideoPlayer.jsx file ------------------------------------------------------------

"use client";

export default function VideoPlayer({ lesson }) {

  if (!lesson) return <p>Select a lesson</p>;

  const url = lesson.videoUrl;

  const isYouTube = url?.includes("youtube") || url?.includes("youtu.be");

  const getYouTubeId = (url) => {
    if (!url) return null;

    if (url.includes("youtu.be")) {
      return url.split("/")[3]?.split("?")[0];
    }

    if (url.includes("v=")) {
      return url.split("v=")[1]?.split("&")[0];
    }

    return null;
  };

  const videoId = getYouTubeId(url);
  const embedUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}`
    : null;

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">{lesson.title}</h2>

      {/* 🎯 FIXED HEIGHT CONTAINER */}
      <div className="w-full h-[400px]">

        {isYouTube && embedUrl ? (
          <iframe
            key={embedUrl}
            src={embedUrl}
            className="w-full h-full rounded"
            allowFullScreen
          />
        ) : (
          <video
            key={url}
            src={url}
            controls
            className="w-full h-full rounded"
          />
        )}

      </div>
    </div>
  );
}