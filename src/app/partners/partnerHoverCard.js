"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LinkIcon } from "lucide-react";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

function PartnerHoverCard({ partner, index }) {
  return (
    <Link
      href={partner.attributes.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.div
        initial={{ x: "10px", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="flex-grow"
      >
        <HoverCard openDelay={200}>
          <HoverCardTrigger asChild>
            <Button
              variant="outline"
              className="w-full h-full p-4 hover:scale-[1.05] transition-all duration-200"
            >
              <div className="flex flex-col gap-2 items-center">
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${partner.attributes.logo.data.attributes.url}`}
                  alt={partner.attributes.name}
                  className="max-h-24 w-auto"
                  width={200}
                  height={200}
                />
              </div>
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <div className="space-y-1">
                <h4 className="text-lg font-semibold">
                  {partner.attributes.name}
                </h4>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </motion.div>
    </Link>
  );
}

export default PartnerHoverCard;
