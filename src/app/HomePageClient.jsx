'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

import RebirthApplication from '../components/RebirthApplication';
import TestimonialsSection from '../components/TestimonialsSection';

import profileBackground from '../assets/new-profile-backgroud.jpg';
import storyPortrait from '../assets/Linkedin_Profile_4.png';
import journeySummit from '../assets/journey/summit.jpg';
import journeyAccenture from '../assets/journey/accenture.jpg';
import journeyOnStage from '../assets/journey/on-stage.jpg';
import journeyStudentTeam from '../assets/journey/student-team.jpg';
import journeySchoolStage from '../assets/journey/school-stage.jpg';

/* ── Content ─────────────────────────────────────────────────────
   Everything a visitor reads lives here, so the copy can be changed
   without touching the layout below. The page is about Rebirth Club
   first; Anushka's own story lives in the About section. No prices
   appear on the site: they are discussed on the free call.
──────────────────────────────────────────────────────────────── */

const NAV_LINKS = [
    { label: 'What it is', target: 'what-is-rebirth' },
    { label: 'About me', target: 'about' },
    { label: 'How it works', target: 'how-it-works' },
];

const HERO = {
    eyebrow: 'Rebirth Club · For ambitious women',
    // Two lines on purpose, so the sentence never breaks mid-phrase.
    headline: ['Turn your pain', 'into power.'],
    support:
        'Rebirth means reborn. We help ambitious women rebuild their lives and build a life they are proud of.',
    reassurance: 'Every woman starts with a free 20-minute call.',
};

// Proof strip under the hero. Items with an href are links.
const proof = [
    { stat: '58,000+', label: 'on LinkedIn', href: 'https://www.linkedin.com/in/anushka-jain-408b81211/' },
    { stat: '39,000+', label: 'on Instagram', href: 'https://www.instagram.com/anushkajaiinn/' },
    { stat: '4.9 / 5', label: 'on Topmate', href: 'https://topmate.io/anushka_jain10/' },
    { stat: '200+', label: 'women spoken to, one to one' },
];

const whatIs = {
    lead: 'Rebirth means reborn.',
    body: 'Rebirth Club is for ambitious women who want more from life and do not know how to start. We help you rebuild your life and become the version of yourself you have always dreamed of.',
};

const pillars = [
    {
        title: 'Rebuild your confidence',
        text: 'Stop shrinking. Find your voice again, and use it in every room you walk into.',
    },
    {
        title: 'Find yourself again',
        text: 'Get clear on who you are now, what you are leaving behind, and what you want next.',
    },
    {
        title: 'Become visible',
        text: 'Build a personal brand that shows the world what you are good at, so opportunities start coming to you.',
    },
    {
        title: 'Build your dream life',
        text: 'Your own income, your own decisions, and a life you are proud to wake up to.',
    },
];

const youWant = [
    'Become the best version of yourself',
    'Earn your own money',
    'Live in the city you dream of',
    'Be with the partner of your dreams',
    'Live your best life, and have it all',
];

const evenIf = [
    'You come from a small town',
    'You grew up in a dysfunctional environment',
    'You carry a lot of trauma',
    'You have been through more than anyone knows',
    'You have no idea where to start',
];

const about = {
    greeting: "Hi, I'm Anushka.",
    paragraphs: [
        'I grew up in Jhansi, a small town in Uttar Pradesh, in a very conservative environment and a dysfunctional upbringing. I did not come from privilege. I was shy and insecure, I was bullied, and I believed I did not deserve anything.',
        'At 19, I got into the worst relationship of my life. By 21, I had been through a heartbreak so painful that it forced me to change.',
        'At 22, I got an offer letter from Accenture in Mumbai. I landed in a big city with no idea how much my life was about to change.',
        'At 23, I went through my biggest spiritual awakening. I came close to the universe, and I began to see patterns in myself that I never knew existed: why I kept attracting the same toxic, karmic relationships and friendships, and the same kind of problems.',
        'I escaped one identity and built a completely new one. I was reborn.',
        'By 24, I had left corporate completely, because I knew the universe wanted more from me. I believe I was put on this earth for a purpose.',
        'Today I cannot find that shy, insecure girl in me any more. I live in a big city, with confidence, purpose and a life I love. I am manifesting my dream relationship, and I am going to have it all, on my own.',
        'I made this life out of extreme pain and suffering. In 2025 I started Rebirth Club, because that is what it is about: being reborn. You can always rebuild your life if you want to.',
    ],
    // Index of the paragraph shown as the pull quote.
    turningPoint: 4,
};

// The "before" photo, shown just above the journey photos.
const before = {
    heading: 'The Girl I Was',
    text: 'This is me on a school stage. I was so nervous, and all I could think was:',
    thought: 'I do not deserve to be here.',
    src: journeySchoolStage,
    alt: 'Anushka as a schoolgirl, speaking nervously into a microphone on a school stage',
};

// Photos shown under the About story. `wide` photos take two columns.
// `position` keeps Anushka in frame when a photo is cropped to fit.
const journey = {
    heading: 'The Woman I Became',
    intro: 'The new version of me did things the old me never thought she could. I spoke on stages, got into a multinational company, and became a version of myself I never knew I could be.',
    photos: [
        {
            src: journeySummit,
            alt: 'Anushka speaking into a microphone on stage at an Entrepreneurship Summit',
            caption: 'Speaking at an Entrepreneurship Summit, January 2025',
            wide: true,
            position: 'object-[30%_60%]',
            order: 'md:order-2',
        },
        {
            src: journeyAccenture,
            alt: 'Anushka standing in front of the Accenture sign in Mumbai',
            caption: 'Got into Accenture, Mumbai',
            wide: false,
            position: 'object-[50%_30%]',
            order: 'md:order-1',
        },
        {
            src: journeyOnStage,
            alt: 'Anushka on stage beside a screen introducing her as a speaker',
            caption: 'On stage as a guest speaker',
            wide: false,
            position: 'object-[68%_50%]',
            order: 'md:order-4',
        },
        {
            src: journeyStudentTeam,
            alt: 'Anushka with the student team after her session',
            caption: 'With the student team after my session',
            wide: true,
            position: 'object-[50%_60%]',
            order: 'md:order-3',
        },
    ],
};

const outcomes = [
    'You stop doubting yourself in every room',
    'You know who you are, and what you want next',
    'You show up as yourself, online and offline, and people notice',
    'You have a plan for your own income and opportunities',
    'You have someone in your corner the whole way',
];

const steps = [
    { title: 'Apply', text: 'Two minutes, honest answers.' },
    { title: 'Talk to me', text: 'A free 20-minute video call. We look at where you are and where you want to be.' },
    { title: 'Begin', text: 'If we are a fit, we decide together how we will work, and we start.' },
];

const sectionHeading =
    'text-2xl md:text-4xl font-bold font-serif bg-gradient-to-r from-anushka-700 to-rose-700 bg-clip-text text-transparent';

const pinkSection = 'bg-gradient-to-br from-anushka-50 via-rose-50 to-cream';

export default function HomePage() {
    const reduced = useReducedMotion();
    const [showApplyForm, setShowApplyForm] = useState(false);
    const applyRef = useRef(null);

    /* ── Animation variants ──────────────────────────────────────── */
    const fadeInUp = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
    };

    const formReveal = {
        hidden: { opacity: 0, height: 0, marginTop: 0 },
        visible: {
            opacity: 1,
            height: 'auto',
            marginTop: 32,
            transition: { duration: 0.4, ease: 'easeOut' }
        }
    };

    /* ── Scroll helpers ──────────────────────────────────────────── */
    const scrollToId = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToApply = () => scrollToId('apply-section');

    const ApplyButton = ({ className = '', onClick = scrollToApply, showArrow = true }) => (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`group inline-flex items-center gap-3 bg-gradient-to-r from-anushka-500 to-rose-500 hover:from-anushka-600 hover:to-rose-600 text-white font-semibold rounded-full transition-all duration-300 ${className}`}
        >
            Apply for Rebirth
            {showArrow && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
        </motion.button>
    );

    const headlineLines = HERO.headline.map((line) => (
        <span key={line} className="block">{line}</span>
    ));

    return (
        <>
            {/* ══════════════════════════════════════════════════════════
                TOP BAR — brand, section links and the Apply button
            ══════════════════════════════════════════════════════════ */}
            <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-md border-b border-anushka-100">
                <div className="container mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-4">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="font-serif text-xl font-bold bg-gradient-to-r from-anushka-700 to-rose-700 bg-clip-text text-transparent"
                    >
                        Rebirth Club
                    </button>
                    <nav aria-label="Sections" className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link.target}
                                onClick={() => scrollToId(link.target)}
                                className="text-sm font-medium text-gray-600 hover:text-anushka-600 transition-colors"
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>
                    <ApplyButton showArrow={false} className="py-2.5 px-5 text-sm shadow-md" />
                </div>
            </header>

            {/* ══════════════════════════════════════════════════════════
                1. HERO — Full-bleed editorial split
            ══════════════════════════════════════════════════════════ */}
            <section className={`relative min-h-screen flex items-start md:items-center overflow-hidden pt-16 ${pinkSection}`}>

                {/* ── DESKTOP photo — right 68%, full height ─────────── */}
                <div className="hidden md:block absolute inset-y-0 right-0 w-[68%] pointer-events-none select-none">
                    <Image
                        src={profileBackground}
                        alt="Anushka Jain"
                        priority
                        placeholder="blur"
                        fill
                        sizes="68vw"
                        className="object-cover object-top"
                    />
                    {/* Wide left-edge fade — photo dissolves into bg */}
                    <div className="absolute inset-y-0 left-0 w-[72%] z-10"
                        style={{ background: 'linear-gradient(to right, #fdf2f8 0%, #fdf5fa 15%, rgba(253,242,248,0.55) 45%, rgba(253,242,248,0.15) 70%, transparent 100%)' }} />
                    {/* Top fade */}
                    <div className="absolute inset-x-0 top-0 h-28 z-10"
                        style={{ background: 'linear-gradient(to bottom, #fdf2f8 0%, transparent 100%)' }} />
                    {/* Bottom fade */}
                    <div className="absolute inset-x-0 bottom-0 h-36 z-10"
                        style={{ background: 'linear-gradient(to top, #fef7f0 0%, transparent 100%)' }} />
                </div>

                {/* ── Content layer (above image on desktop) ─────────── */}
                <div className="relative z-20 w-full">

                    {/* ── MOBILE layout ────────────────────────────────── */}
                    <div className="md:hidden flex flex-col w-full">
                        <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                            <Image
                                src={profileBackground}
                                alt="Anushka Jain"
                                priority
                                placeholder="blur"
                                fill
                                sizes="100vw"
                                className="object-cover object-top"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                                style={{ background: 'linear-gradient(to bottom, transparent 0%, #fdf2f8 50%, #fef7f0 100%)' }} />
                            <div className="absolute inset-y-0 left-0 w-12 pointer-events-none"
                                style={{ background: 'linear-gradient(to right, #fdf2f8, transparent)' }} />
                            <div className="absolute inset-y-0 right-0 w-12 pointer-events-none"
                                style={{ background: 'linear-gradient(to left, #fef7f0, transparent)' }} />
                        </div>
                        <motion.div
                            className="mt-4 pb-14 px-6 text-center"
                            initial={reduced ? undefined : { opacity: 0 }}
                            animate={reduced ? undefined : { opacity: 1 }}
                            transition={{ duration: 0.55 }}
                        >
                            <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-anushka-500 mb-4">
                                {HERO.eyebrow}
                            </span>
                            <h1 className="text-[3.25rem] leading-[0.88] font-bold tracking-tight mb-5">
                                <span className="bg-gradient-to-r from-anushka-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">
                                    Rebirth
                                </span>
                            </h1>
                            <p className="text-[1.75rem] text-gray-800 font-semibold leading-tight mb-4 mx-auto">
                                {headlineLines}
                            </p>
                            <p className="text-base text-gray-600 leading-relaxed mb-8 max-w-sm mx-auto">
                                {HERO.support}
                            </p>
                            <ApplyButton className="py-[14px] px-9 text-[15px] shadow-[0_8px_30px_rgba(236,72,153,0.35)] hover:shadow-[0_12px_40px_rgba(236,72,153,0.45)]" />
                            <p className="mt-5 text-sm text-gray-500">{HERO.reassurance}</p>
                            <button
                                onClick={() => scrollToId('how-it-works')}
                                className="mt-3 text-sm text-anushka-600 underline underline-offset-4"
                            >
                                See how it works
                            </button>
                        </motion.div>
                    </div>

                    {/* ── DESKTOP layout ───────────────────────────────── */}
                    <div className="hidden md:flex items-center min-h-[calc(100vh-4rem)]">
                        <div className="pl-12 lg:pl-20 xl:pl-28 pr-4 max-w-[52%] lg:max-w-[48%] py-20">

                            <motion.span
                                className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-anushka-500 mb-5"
                                initial={reduced ? undefined : { opacity: 0, y: 12 }}
                                animate={reduced ? undefined : { opacity: 1, y: 0 }}
                                transition={{ duration: 0.45 }}
                            >
                                {HERO.eyebrow}
                            </motion.span>

                            <motion.h1
                                className="text-[5rem] lg:text-[6.5rem] xl:text-[8rem] leading-[0.86] font-bold tracking-tight mb-6"
                                initial={reduced ? undefined : { opacity: 0, y: 28 }}
                                animate={reduced ? undefined : { opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.08 }}
                            >
                                <span className="bg-gradient-to-r from-anushka-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">
                                    Rebirth
                                </span>
                            </motion.h1>

                            <motion.p
                                className="text-3xl lg:text-[2.4rem] text-gray-800 font-semibold leading-tight mb-5"
                                initial={reduced ? undefined : { opacity: 0, y: 18 }}
                                animate={reduced ? undefined : { opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.18 }}
                            >
                                {headlineLines}
                            </motion.p>

                            <motion.p
                                className="text-lg text-gray-600 mb-9 max-w-[430px] leading-relaxed"
                                initial={reduced ? undefined : { opacity: 0, y: 14 }}
                                animate={reduced ? undefined : { opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.28 }}
                            >
                                {HERO.support}
                            </motion.p>

                            <motion.div
                                initial={reduced ? undefined : { opacity: 0, y: 14 }}
                                animate={reduced ? undefined : { opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.38 }}
                            >
                                <div className="flex items-center gap-5">
                                    <ApplyButton className="py-4 px-10 text-base shadow-[0_8px_32px_rgba(236,72,153,0.38)] hover:shadow-[0_14px_44px_rgba(236,72,153,0.48)]" />
                                    <button
                                        onClick={() => scrollToId('how-it-works')}
                                        className="text-sm text-gray-500 hover:text-anushka-500 transition-colors underline underline-offset-4"
                                    >
                                        See how it works
                                    </button>
                                </div>
                                <p className="mt-5 text-sm text-gray-500">{HERO.reassurance}</p>
                            </motion.div>

                        </div>
                    </div>

                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════
                PROOF STRIP
            ══════════════════════════════════════════════════════════ */}
            <section aria-label="Anushka in numbers" className="bg-gradient-to-r from-anushka-600 to-rose-600 text-white">
                <ul className="container mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-4 text-center">
                    {proof.map((item) => {
                        const body = (
                            <>
                                <span className="block text-2xl md:text-3xl font-bold leading-tight">{item.stat}</span>
                                <span className="block text-sm md:text-base text-white/85">{item.label}</span>
                            </>
                        );
                        return (
                            <li key={item.label}>
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block rounded-lg px-2 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white transition-colors"
                                    >
                                        {body}
                                    </a>
                                ) : body}
                            </li>
                        );
                    })}
                </ul>
            </section>

            {/* ══════════════════════════════════════════════════════════
                2. WHAT REBIRTH CLUB IS
            ══════════════════════════════════════════════════════════ */}
            <section id="what-is-rebirth" className="py-16 md:py-24 bg-white scroll-mt-16">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                    >
                        <h2 className={`${sectionHeading} text-center mb-6`}>
                            What Is Rebirth Club?
                        </h2>
                        <p className="text-center font-serif text-2xl md:text-3xl text-anushka-700 mb-5">
                            {whatIs.lead}
                        </p>
                        <p className="text-center text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto mb-12">
                            {whatIs.body}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                            {pillars.map((pillar, i) => (
                                <div key={pillar.title} className={`rounded-2xl p-8 border border-anushka-200/60 ${pinkSection}`}>
                                    <span className="block text-sm font-semibold tracking-[0.18em] text-anushka-500 mb-3">
                                        0{i + 1}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-serif mb-3">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-gray-700 text-lg leading-relaxed">{pillar.text}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════
                3. YOU WANT MORE — even if
            ══════════════════════════════════════════════════════════ */}
            <section className={`py-16 md:py-24 ${pinkSection}`}>
                <div className="container mx-auto px-6">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className={`${sectionHeading} text-center mb-12`}>
                            You Want More From Life
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                            <div className="bg-white/85 rounded-2xl p-8 border border-anushka-200/50">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 font-serif">
                                    You want to:
                                </h3>
                                <ul className="space-y-4">
                                    {youWant.map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <Sparkles className="w-5 h-5 text-anushka-500 mt-1 shrink-0" />
                                            <span className="text-gray-800 text-lg font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white/85 rounded-2xl p-8 border border-anushka-200/50">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 font-serif">
                                    Even if:
                                </h3>
                                <ul className="space-y-4">
                                    {evenIf.map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-anushka-500 mt-1 shrink-0" />
                                            <span className="text-gray-700 text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <p className="font-serif text-2xl md:text-3xl text-anushka-700 mb-8">
                                Just like me.
                            </p>
                            <ApplyButton className="py-4 px-10 shadow-lg hover:shadow-xl" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════
                4. ABOUT ME
            ══════════════════════════════════════════════════════════ */}
            <section id="about" className="py-16 md:py-24 bg-white scroll-mt-16">
                <div className="container mx-auto px-6">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="max-w-2xl mx-auto"
                    >
                        <Image
                            src={storyPortrait}
                            alt="Anushka Jain"
                            width={224}
                            height={224}
                            className="rounded-full shadow-lg w-28 h-28 object-cover border-2 border-anushka-400/40 mx-auto mb-6"
                        />
                        <h2 className={`${sectionHeading} text-center mb-10`}>
                            About Me
                        </h2>
                        <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                            <p className="text-gray-900 font-semibold">{about.greeting}</p>
                            {about.paragraphs.map((paragraph, i) => (
                                i === about.turningPoint ? (
                                    <p
                                        key={i}
                                        className="font-serif text-2xl md:text-3xl leading-snug text-anushka-700 border-l-4 border-anushka-400 pl-5 py-1"
                                    >
                                        {paragraph}
                                    </p>
                                ) : (
                                    <p
                                        key={i}
                                        className={i === about.paragraphs.length - 1 ? 'text-gray-900 font-semibold' : undefined}
                                    >
                                        {paragraph}
                                    </p>
                                )
                            ))}
                        </div>
                    </motion.div>

                    {/* Where she started: the nervous girl on a school stage */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="max-w-4xl mx-auto mt-16 md:mt-20 grid md:grid-cols-2 gap-6 md:gap-10 items-center"
                    >
                        <figure className="relative aspect-[4/3] w-full max-w-md mx-auto overflow-hidden rounded-2xl bg-anushka-50 shadow-md">
                            <Image
                                src={before.src}
                                alt={before.alt}
                                fill
                                placeholder="blur"
                                sizes="(min-width: 768px) 420px, 100vw"
                                className="object-cover"
                            />
                        </figure>
                        <div className="text-center md:text-left">
                            <h3 className="text-xl md:text-3xl font-bold font-serif text-anushka-700">
                                {before.heading}
                            </h3>
                            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                                {before.text}
                            </p>
                            <p className="mt-3 text-2xl md:text-3xl font-serif italic text-gray-900 leading-snug">
                                &ldquo;{before.thought}&rdquo;
                            </p>
                        </div>
                    </motion.div>

                    {/* What the new version of her went on to do */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="max-w-4xl mx-auto mt-16 md:mt-20"
                    >
                        <h3 className="text-xl md:text-3xl font-bold font-serif text-anushka-700 text-center">
                            {journey.heading}
                        </h3>
                        <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-gray-700 leading-relaxed">
                            {journey.intro}
                        </p>
                        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                            {journey.photos.map((photo) => (
                                <figure
                                    key={photo.caption}
                                    className={`relative overflow-hidden rounded-2xl bg-anushka-50 shadow-md md:h-80 ${photo.order} ${
                                        photo.wide ? 'col-span-2 aspect-[3/2] md:aspect-auto' : 'aspect-[3/4] md:aspect-auto'
                                    }`}
                                >
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        fill
                                        placeholder="blur"
                                        sizes={photo.wide ? '(min-width: 768px) 600px, 100vw' : '(min-width: 768px) 300px, 50vw'}
                                        className={`object-cover ${photo.position}`}
                                    />
                                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-3 pt-10 pb-3 md:px-4 md:pb-4 text-white text-xs md:text-sm font-medium leading-snug">
                                        {photo.caption}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════
                5. WHAT WE WORK TOWARDS
            ══════════════════════════════════════════════════════════ */}
            <section className={`py-16 md:py-24 ${pinkSection}`}>
                <div className="container mx-auto px-6">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="max-w-2xl mx-auto text-center"
                    >
                        <h2 className={`${sectionHeading} mb-10`}>
                            What We Work Towards
                        </h2>

                        <ul className="space-y-5 text-left max-w-xl mx-auto">
                            {outcomes.map((item, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-start gap-4"
                                    initial={reduced ? undefined : { opacity: 0, x: -16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08, duration: 0.4 }}
                                >
                                    <Sparkles className="w-5 h-5 text-anushka-500 mt-1 shrink-0" />
                                    <span className="text-gray-800 text-lg font-medium">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════
                6. HOW IT WORKS
            ══════════════════════════════════════════════════════════ */}
            <section id="how-it-works" className="py-16 md:py-24 bg-white scroll-mt-16">
                <div className="container mx-auto px-6">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className={`${sectionHeading} text-center mb-12`}>
                            How to Apply for Rebirth
                        </h2>
                        <ol className="grid md:grid-cols-3 gap-8">
                            {steps.map((step, i) => (
                                <li key={step.title} className="text-center md:text-left">
                                    <span className="block text-5xl font-bold font-serif text-anushka-200 leading-none mb-3">
                                        {i + 1}
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">{step.text}</p>
                                </li>
                            ))}
                        </ol>
                        <div className="mt-12 text-center">
                            <ApplyButton className="py-4 px-10 shadow-lg hover:shadow-xl" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════
                7. WOMEN WHO COME TO REBIRTH — stories and the Topmate rating
            ══════════════════════════════════════════════════════════ */}
            <TestimonialsSection />

            {/* ══════════════════════════════════════════════════════════
                8. APPLY FLOW — Multi-step form + Topmate booking
            ══════════════════════════════════════════════════════════ */}
            <section id="apply-section" className="py-16 md:py-24 bg-white scroll-mt-16" ref={applyRef}>
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-2xl mx-auto"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="text-center mb-10">
                            <h2 className={`${sectionHeading} mb-3`}>
                                Ready for Your Rebirth?
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Take two minutes and answer honestly. Your free call is the next step.
                            </p>
                        </div>

                        {!showApplyForm && (
                            <div className="text-center">
                                <ApplyButton
                                    onClick={() => setShowApplyForm(true)}
                                    className="py-4 px-10 text-lg shadow-lg hover:shadow-xl"
                                />
                            </div>
                        )}

                        <AnimatePresence>
                            {showApplyForm && (
                                <motion.div
                                    variants={formReveal}
                                    initial="hidden"
                                    animate="visible"
                                    className="overflow-hidden"
                                >
                                    <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-anushka-500/50 via-rose-500/30 to-anushka-600/50">
                                        <div className="rounded-2xl bg-white/90 backdrop-blur-sm p-4 md:p-6 text-left">
                                            <RebirthApplication />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
