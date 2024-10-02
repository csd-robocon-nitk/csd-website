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
    testimonial.attributes.photo.data.attributes.formats.small.url;
  return (
    <div className="w-[500px] p-2 border border-shark-950 rounded-md shadow-sm flex-shrink-0">
      <div className="flex gap-4 items-center h-full">
        <Image className="rounded-full w-1/4" width={60} height={60} src={imgsrc} />
        <div className="w-3/4 flex flex-col items-end justify-between h-full">
            <div className="text-lg">
                <Image src={Quote} className="h-16 w-16"/>
                <span className="text-justify">{testimonial.attributes.testimonial}</span>
            </div>
            <div className="flex flex-col gap-1 items-end">
                <span className="text-xl font-bold">{testimonial.attributes.name}</span>
                <span className="text-right text-shark-800">{testimonial.attributes.work}</span>
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
  }, [xTranslation, testimonials]);

  return (
    <div className="pb-8 flex items-center gap-8 flex-col overflow-x-hidden">
      <div className="text-4xl font-bold">Testimonials</div>
      <motion.div
        className="flex gap-4 w-screen"
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
