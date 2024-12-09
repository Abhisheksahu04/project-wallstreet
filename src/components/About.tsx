"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

function CountUp({ end, trigger }: { end: number; trigger: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let current = 0;
    const increment = Math.ceil(end / 50);
    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [end, trigger]);

  return <span className="text-xl md:text-4xl">{count.toLocaleString()}</span>;
}

function About() {
  const [triggerCount, setTriggerCount] = useState(false);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggerCount) {
            setTriggerCount(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentRef = aboutRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [triggerCount]);

  return (
    <div id="About" ref={aboutRef} className="bg-black">
      <div className="text-[#0064E0] text-6xl font-poppins flex justify-center p-10 font-bold">
        About Us
      </div>
      <div className="p-8 font-[poppins] text-xl text-white flex justify-center text-center">
        Entrepreneurship Cell, NIT Rourkela, established in 2007 under the
        Technical Society of SAC, aims to foster innovation, incubation, and
        entrepreneurship among students. It promotes entrepreneurial traits and
        supports budding entrepreneurs in achieving their goals. Key
        initiatives include the National Entrepreneurship Summit, Arthayan, and
        year-round weekend activities. These events encourage an entrepreneurial
        culture and assist students in pursuing their ventures. ECell strives
        to nurture talents and empower future entrepreneurs.
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-10 text-center">
        {[
          { end: 1000, label: "STUDENTS", image: "vxpelexapiilpx2ea2dt.png" },
          { end: 20, label: "SPEAKERS", image: "ejgkbujnve7ucg71pjtn.png" },
          { end: 50, label: "STARTUPS", image: "c8zubzp0auwolg1sbpzm.png" },
          { end: 100, label: "INVESTORS", image: "wkd5g56ao9mewqhhqg2n.png" },
        ].map((item, index) => (
          <div key={index} className="p-4 flex flex-col justify-between h-full">
            <div className="flex flex-col items-center gap-4 text-white">
              <Image
                src={`https://res.cloudinary.com/dnw1mcx2h/image/upload/v1733031788/${item.image}`}
                alt={item.label.toLowerCase()}
                width={200}
                height={200}
                className="mx-auto"
              />
              <div className="flex flex-row gap-1">
                <CountUp end={item.end} trigger={triggerCount} />
                <div>+</div>
              </div>
            </div>
            <span className="block text-[#0064E0] sm:text-4xl text-xl md:text-4xl mt-4 font-bold">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
