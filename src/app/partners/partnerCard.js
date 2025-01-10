"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function PartnerCard({ partner, index }) {
  return (
    <motion.div
      initial={{ x: "10px", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      onClick={() => {
        window.open(partner.attributes.link, "_blank");
      }}
      className="flex flex-col gap-2 flex-grow p-4 border border-black/30 border-dotted rounded-lg cursor-pointer hover:scale-[1.05] transition-all duration-200"
    >
      <div className="w-full flex justify-center items-center">
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${partner.attributes.logo.data.attributes.url}`}
          alt="partner"
          className="max-h-24 w-auto"
          width={200}
          height={200}
        />
      </div>
      <div className="text-sky-950 text-2xl font-bold h-1/10 text-center">
        {partner.attributes.name}
      </div>
    </motion.div>
  );
}

export default PartnerCard;
