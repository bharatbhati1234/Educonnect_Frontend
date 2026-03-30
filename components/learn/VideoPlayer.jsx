// VideoPlayer.jsx file ------------------------------------------------------------

export default function VideoPlayer({ lesson }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">{lesson?.title}</h2>

      <video
        src={lesson?.videoUrl}
        controls
        className="w-full rounded-lg"
      />
    </div>
  );
}