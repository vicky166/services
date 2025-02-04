"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Review {
  id: number;
  name: string;
  initial: string;
  bgColor: string;
  textColor: string;
  date: string;
  rating: number;
  content: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Samuel Kinyanjui",
    initial: "S",
    bgColor: "bg-[#795548]",
    textColor: "text-white",
    date: "13 days ago",
    rating: 5,
    content:
      "After just a few sessions of PRP at Nexus Clinic, my hair looks and feels so much healthier. The bald spots I was so self-conscious about are fading.",
  },
  {
    id: 2,
    name: "Arul Chelven",
    initial: "A",
    bgColor: "bg-[#004D40]",
    textColor: "text-white",
    date: "14 days ago",
    rating: 5,
    content:
      "Compliments to Bella, a female consultant. Bella was very attentive and prompt. She was very professional and ensured all my concerns were addressed.",
  },
  {
    id: 3,
    name: "Lukesh Pillai",
    initial: "L",
    bgColor: "bg-[#FF5722]",
    textColor: "text-white",
    date: "a month ago",
    rating: 5,
    content:
      "Amazing results with Stem Cell Treatment at Nexus Aesthetic Clinic! I recently had the privilege of experiencing the stem cell treatment and am delighted.",
  },
];

export default function GoogleReviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % reviews.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (current) => (current - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-24 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Google Reviews :</h2>
        <p className="text-lg mb-12">
          These compelling testimonials are a collection of genuine feedback and
          experiences shared by real users:
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/3">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/img/nexus.jpg"
              alt="Clinic"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <h3 className="font-medium text-lg">
                Nexus Clinic - Aesthetic Clinic
              </h3>
              <p className="text-sm text-muted-foreground">Kuala Lumpur</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <div className="text-2xl font-medium">4.8</div>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 fill-yellow-400 text-yellow-400 ${
                    i === 4 ? "opacity-50" : ""
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="text-sm text-muted-foreground mb-4">
            Based on 390 reviews
          </div>
          <div className="flex items-center gap-1 mb-4">
            <span className="text-sm text-muted-foreground">
              powered by Google
            </span>
          </div>
          <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
            Review us on G
          </button>
        </div>

        <div className="w-full md:w-2/3 relative">
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10"
            aria-label="Previous review"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <Card key={review.id} className="flex-shrink-0 w-full">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div
                        className={`w-12 h-12 ${review.bgColor} ${review.textColor} rounded-full flex items-center justify-center font-medium text-xl flex-shrink-0`}
                      >
                        {review.initial}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <div>
                            <div className="font-medium flex items-center gap-2">
                              {review.name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {review.date}
                            </div>
                          </div>
                        </div>
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <p className="text-gray-600 line-clamp-3">
                          {review.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10"
            aria-label="Next review"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
