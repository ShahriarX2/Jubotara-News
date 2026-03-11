"use client";
import React from "react";
import NewsForm from "@/components/admin/NewsForm";
import { useRouter } from "next/navigation";

export default function AddNewsPage() {
  const router = useRouter();

  const handleSuccess = () => {
    router.push("/newslist");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <NewsForm onSuccess={handleSuccess} />
    </div>
  );
}
