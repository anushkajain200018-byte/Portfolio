'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselDots } from "@/components/ui/carousel";
import testimonials from '../testimonials.jsx';

const TOPMATE_URL = 'https://topmate.io/anushka_jain10/';
const TOPMATE_RATING = '4.9';
const TOPMATE_BOOKINGS = '150+';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

function TopmateRating() {
  return (
    <a
      href={TOPMATE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex flex-col items-center bg-white/90 px-8 py-8 md:px-12 rounded-2xl shadow-md border border-anushka-200/50 hover:border-anushka-400 transition-colors"
    >
      <span className="flex items-center gap-1 text-anushka-500" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} className="w-5 h-5 fill-current" />
        ))}
      </span>
      <span className="mt-3 text-4xl font-bold text-gray-800">{TOPMATE_RATING} out of 5</span>
      <span className="mt-1 text-gray-600 text-lg">on Topmate, across {TOPMATE_BOOKINGS} bookings</span>
      <span className="mt-5 inline-flex items-center gap-2 text-anushka-600 font-semibold underline underline-offset-4">
        Read the reviews on Topmate
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
    </a>
  );
}

export default function TestimonialsSection() {
  const hasTestimonials = testimonials.length > 0;

  return (
    <motion.section id="testimonial" className="scroll-mt-24 py-16 md:py-24 bg-gradient-to-br from-anushka-50 via-rose-50 to-cream relative overflow-hidden" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
      <div className="container mx-auto px-6 text-center relative">
        <h2 className="text-2xl md:text-4xl font-bold mb-10 font-serif bg-gradient-to-r from-anushka-700 to-rose-700 bg-clip-text text-transparent">What Women Say</h2>

        {hasTestimonials && (
          <Carousel className="w-full max-w-2xl mx-auto mb-10">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="bg-white/90 p-8 md:p-10 rounded-2xl shadow-md border border-anushka-200/50 text-center">
                      <blockquote className="text-lg md:text-xl italic text-gray-700 mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</blockquote>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-anushka-700 to-rose-700 bg-clip-text text-transparent font-serif">{testimonial.name}</h3>
                      {testimonial.about && (
                        <p className="text-anushka-600 font-medium text-sm mt-1">{testimonial.about}</p>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {testimonials.length > 1 && (
              <>
                <CarouselPrevious className="border-anushka-300 text-anushka-600 hover:bg-anushka-100" />
                <CarouselNext className="border-anushka-300 text-anushka-600 hover:bg-anushka-100" />
                <CarouselDots />
              </>
            )}
          </Carousel>
        )}

        <TopmateRating />
      </div>
    </motion.section>
  );
}
