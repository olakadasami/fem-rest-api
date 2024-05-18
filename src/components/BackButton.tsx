"use client";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.back()}
      className="flex items-center bg-primary gap-3 cursor-pointer px-6 py-3 drop-shadow-md rounded hover:shadow-lg hover:-translate-y-1 transition-all shadow max-w-fit"
    >
      <FaArrowLeftLong />
      <span>Back</span>
    </div>
  );
}

export default BackButton;
