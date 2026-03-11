"use client";
import React, { useState } from "react";
import AddAds from "@/components/admin/AddAds";
import AdsList from "@/components/admin/AdsList";

export default function AdsPage() {
  const [selectedAd, setSelectedAd] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Manage Advertisements</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <AddAds selectedAd={selectedAd} setSelectedAd={setSelectedAd} />
        </div>
        <div>
          <AdsList setSelectedAd={setSelectedAd} />
        </div>
      </div>
    </div>
  );
}
