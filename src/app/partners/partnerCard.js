"use client"
import React from "react";
import Image from "next/image";

function PartnerCard({ partner }) {
  return (
    <div
      onClick={() => {
        window.open(partner.attributes.link, "_blank");
      }}
      className="flex flex-col gap-2 flex-grow p-4 border border-black rounded-lg cursor-pointer hover:scale-[1.05] transition-all duration-200"
    >
      <div className="text-sky-950 text-2xl font-bold h-1/10">
        {partner.attributes.name}
      </div>
      <div className="w-full flex justify-center items-center">
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${partner.attributes.logo.data.attributes.url}`}
          alt="partner"
          className="max-h-24 w-auto"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}

export default PartnerCard;
