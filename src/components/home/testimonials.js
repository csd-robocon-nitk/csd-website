"use client";
import {
  motion,
  useScroll,
  serTransform,
  useMotionValue,
  animate,
} from "framer-motion";
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import Image from "next/image";
import Quote from "@/../../public/assets/images/quote.svg"

function Card({ testimonial }) {
  const imgsrc =
    process.env.NEXT_PUBLIC_STRAPI_API_URL +
    "/" +
    testimonial.attributes.photo.data.attributes.formats.thumbnail.url;
  return (
    <div className="w-[500px] p-4 border bg-shark-900/95 text-white rounded-md flex-shrink-0">
      <div className="flex gap-4 items-center relative h-full">
        <Image src={Quote} className="h-28 w-28 absolute opacity-50 inset-0 z-0"/>
        <Image className="rounded-full w-1/4" width={60} height={60} src={imgsrc} />
        <div className="w-3/4 flex flex-col justify-between h-full gap-8">
        
            <div className="text-right flex flex-col gap-0 p-4">
                <span className="text-justify z-10">{testimonial.attributes.testimonial}</span>
            </div>
            <div className="flex flex-col gap-0 items-end">
                <span className="text-xl font-bold">{testimonial.attributes.name}</span>
                <span className="text-right text-white/80">{testimonial.attributes.work}</span>
            </div>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  const [testimonials, setTestimonials] = useState(null);

  const token = process.env.NEXT_PUBLIC_TOKEN;
  if (!token) {
    throw new Error("Token not found!");
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/testimonials?populate=*`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          cache: "no-cache",
        }
      );

      if (!res.ok) {
        throw new Error(
          `Failed to fetch data: ${res.status} ${res.statusText}`
        );
      }

      const data = await res.json();
      const data_to_set = await data.data;

      setTestimonials(data_to_set);
    };

    fetchData();
  }, []);

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width/2 -16;
    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 15,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width, testimonials]);

  return (
    <div className="pb-8 flex items-center gap-8 flex-col overflow-x-hidden relative">
      <div className="text-4xl font-bold">Testimonials</div>
      <motion.div
        className="flex gap-4"
        ref={ref}
        style={{ x: xTranslation }}
      >
        {testimonials ? (
          [...testimonials, ...testimonials].map((testimonial, index) => (
            <Card key={index} testimonial={testimonial} />
          ))
        ) : (
          <ClipLoader color="#000" />
        )}
      </motion.div>
    </div>
  );
}

export default Testimonials;
