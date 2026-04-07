// instructors/page.js file --------------------------------------------------------

"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInstructors } from "@/redux/slices/instructorSlice";
import Link from "next/link";
import { BASE_URL } from "@/utils/constants";


export default function InstructorsPage() {
    const dispatch = useDispatch();
    const { instructors } = useSelector((state) => state.instructors);
    console.log(instructors);

    useEffect(() => {
        dispatch(fetchInstructors());
    }, [dispatch]);

    return (
        <div className="max-w-[1200px] mx-auto px-4 py-20">
            <h1 className="text-3xl font-bold mb-10 text-center">
                All Instructors
            </h1>

            <div className="grid md:grid-cols-3 gap-6">
                {instructors?.map((inst) => (
                    <Link key={inst._id} href={`/instructors/${inst._id}`}>
                        <div className="bg-white shadow p-4 rounded cursor-pointer hover:shadow-lg">

                            <img
                                src={`${BASE_URL}${inst.profileImage}`}
                                className="w-full h-48 object-cover rounded"
                            />
                            <h3 className="mt-3 font-semibold">{inst.name}</h3>
                            <p className="text-sm text-gray-500">{inst.email}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}