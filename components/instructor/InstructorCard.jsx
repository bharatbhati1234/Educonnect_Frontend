// InstructorCard.jsx file -------------------------------------------------------


import { BASE_URL } from "@/utils/constants";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { useRouter } from "next/navigation";

const InstructorCard = ({ instructor }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/instructors/${instructor._id}`)}
      className="relative bg-white rounded-xl shadow hover:shadow-lg transition p-4 cursor-pointer overflow-hidden group"
    >
      {/* IMAGE */}
      <div className="relative">
        <img
          src={`${BASE_URL}${instructor.profileImage}`}
          className="w-full h-48 object-cover rounded-lg"
        />

        {/* SOCIAL ICONS */}
        <div className="absolute top-4 right-[-60px] 
                        group-hover:right-4 
                        transition-all duration-300 
                        flex flex-col gap-3">

          <a
            href={instructor.socialLinks?.facebook || "https://www.facebook.com/"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-[#1ab69d] hover:text-white transition">
              <Facebook size={16} />
            </div>
          </a>

          <a
            href={instructor.socialLinks?.linkedin || "https://www.linkedin.com/"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-[#1ab69d] hover:text-white transition">
              <Linkedin size={16} />
            </div>
          </a>

          <a
            href={instructor.socialLinks?.twitter || "https://www.twitter.com/"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-[#1ab69d] hover:text-white transition">
              <Twitter size={16} />
            </div>
          </a>

        </div>
      </div>

      {/* INFO */}
      <div className="mt-4 text-center">
        <h3 className="font-semibold text-lg">
          {instructor.name}
        </h3>

        <p className="text-sm text-gray-500">
          {instructor.expertise || "Instructor"}
        </p>
      </div>
    </div>
  );
};

export default InstructorCard;