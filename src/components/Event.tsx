"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Event {
  title: string;
  description: string;
  image: string;
}

const eventsData: Event[] = [
  {
    title: "E-Summit",
    description:
      "Annually, Team E-Cell NITR sets the stage on fire with E-Summit, its flagship event, a blazing beacon for enthusiastic students and entrepreneurs.",
    image: "/images/event2.jpg",
  },
  {
    title: "E-Carnival",
    description:
      "Annually, Team E-Cell NITR sets the stage on fire with E-Summit, its flagship event, a blazing beacon for enthusiastic students and entrepreneurs.",
    image: "/images/event2.jpg",
  },
  {
    title: "Pe-Charcha",
    description:
      "Annually, Team E-Cell NITR sets the stage on fire with E-Summit, its flagship event, a blazing beacon for enthusiastic students and entrepreneurs.",
    image: "/images/event3.jpg",
  },
 
];
function Event() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  return (
    <section id="Events" className="pb-16">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-6xl flex justify-center p-10 font-semibold ">
          Events
        </h2>{" "}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full gap-8 mx-10">
          {events.map((event, index) => (
        <div
        key={index}
        className="relative bg-[#0064E0] rounded-sm shadow-md overflow-y-auto group transition-all duration-500 ease-in-out  h-[22rem] cursor-pointer scrollbar-thin scrollbar-thumb-[#0068e0] scrollbar-track-gray-200"
      >
         {/* Image, Title, and Description */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col bg-transparent group-hover:bg-[#000000] p-6 transition-all duration-500 ease-in-out">
           {/* Image */}
          <Image
            src="/Nav_Assests/image1-removebg.png"
            alt="logo"
            width={75}
            height={75}
            className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
          />
           {/* Title */}
          <div className="coverpage h-full group-hover:mt-20 max-sm:group-hover:ml-[7%] max-lg:group-hover:-ml-[20%] xl:group-hover:-ml-44 flex flex-row justify-center items-center gap-5">
            <h3 className="text-white font-bold transition-transform duration-500 ease-in-out group-hover:text-[#0064E0] text-3xl
            group-hover:self-start pt-[rem] group-hover:pt-0 self-center group-hover:top-
            group-hover:left- transform group-hover:translate-x-[-0.5rem] group-hover:translate-y-[-2rem]">
              {event.title}
            </h3>
            <button
              className="transition-transform duration-300 ease-in-out animate-horizontal-bounce group-hover:hidden"
              >
              <Image
                src="/Hero_Assests/guidance_up-arrow-removebg-preview.png"
                alt="arrow"
                width={40}
                height={40}
                className="-rotate-90"
              />
            </button>

          </div>
           {/* Description */}
          <p className="absolute top-28 left-4 px-4 text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out mt-4">
            {event.description}
          </p>
        </div>
         {/* Hover Effects - Border and Glow */}
        <div className="absolute inset-0 border border-transparent group-hover:border-white rounded-lg transition-all duration-500 ease-in-out"></div>
      </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Event;
