// VideoPlayer.jsx file ------------------------------------------------------------

export default function VideoPlayer({ lesson }) {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">{lesson?.title}</h2>

            <video controls className="w-full">
                <source src={lesson?.videoUrl} type="video/mp4" />
            </video>
        </div>
    );
}