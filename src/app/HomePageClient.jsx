'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

import RebirthApplication from '../components/RebirthApplication';
import TestimonialsSection from '../components/TestimonialsSection';

import profileBackground from '../assets/new-profile-backgroud.jpg';
import storyPortrait from '../assets/Linkedin_Profile_4.png';

/* ── Content ─────────────────────────────────────────────────────
   Everything a visitor reads lives here, so the copy can be changed
   without touching the layout below. No prices appear on the site:
   they are discussed on the free call.
──────────────────────────────────────────────────────────────── */

const HERO = {
    eyebrow: 'Rebirth Club · by Anushka Jain',
    // Two lines on purpose, so the sentence never breaks mid-phrase.
    headline: ['I was the shy girl from Jhansi', 'nobody believed in.'],
    support:
        'I rebuilt my life until I could not recognise myself. Now I help ambitious women do the same.',
    reassurance: 'Every woman starts with a free 20-minute call.',
};

// Proof strip under the hero. Items with an href are links.
const proof = [
    { stat: '58,000+', label: 'on LinkedIn', href: 'https://www.linkedin.com/in/anushka-jain-408b81211/' },
    { stat: '39,000+', label: 'on Instagram', href: 'https://www.instagram.com/anushkajaiinn/' },
    { stat: '4.9 / 5', label: 'on Topmate', href: 'https://topmate.io/anushka_jain10/' },
    { stat: '200+', label: 'brand collaborations' },
];

// Each pillar pairs something Anushka lived with what she now helps women do.
const pillars = [
    {
        lived: 'I could not speak to anyone.',
        title: 'Rebuild your confidence',
        text: 'Stop shrinking. Find your voice again, and use it in every room you walk into.',
    },
    {
        lived: 'At 21, I lost my identity.',
        title: 'Find yourself again',
        text: 'After a heartbreak, a job that ended, or years of living for everyone else, get clear on who you are now and what you want.',
    },
    {
        lived: 'Nobody believed in me.',
        title: 'Become visible',
        text: 'Build a personal brand that shows the world what you are good at, so opportunities start coming to you.',
    },
    {
        lived: 'I did not want the life I was living.',
        title: 'Live on your own terms',
        text: 'Your own income, your own decisions, and a life you once only dreamed of.',
    },
];

const womenComeWhen = [
    'After losing a job',
    'After a heartbreak that took their confidence with it',
    'When a 9-to-5 no longer fits and they want an income of their own',
    "When they know they want to change and don't know where to begin",
];

const forYou = [
    'You are ambitious, and you know you were made for more than this',
    'You feel you have outgrown your current life and are not sure what comes next',
    'You are ready to do the work, with someone beside you',
];

const story = {
    greeting: "Hi, I'm Anushka.",
    then: {
        label: 'Then',
        place: 'Jhansi, Uttar Pradesh',
        items: [
            'A small-town girl, so shy I could not speak to anyone',
            'Bullied, and rejected by my own teachers',
            'Nobody believed in me',
            'Toxic friendships, and the most toxic relationship of my life',
            'At 21, a heartbreak that took my identity with it',
            'Depressed, and living a life I did not want',
        ],
    },
    turningPoint: 'I told myself the old version of me had to die, so that a new one could be born.',
    now: {
        label: 'Now',
        place: 'Mumbai',
        items: [
            'A woman that girl would not recognise',
            'Speaking every day to a community of nearly 100,000',
            'Trusted by more than 200 brands',
            'Living a life I once only dreamed of, on my own terms',
            'Helping other women through their own rebirth',
        ],
    },
    closing: 'Rebirth is not built from a textbook. It is built from my own life, and everything it took to rebuild it.',
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

    const ApplyButton = ({ className = '', onClick = scrollToApply }) => (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`group inline-flex items-center gap-3 bg-gradient-to-r from-anushka-500 to-rose-500 hover:from-anushka-600 hover:to-rose-600 text-white font-semibold rounded-full transition-all duration-300 ${className}`}
        >
            Apply for Rebirth
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
    );

    const headlineLines = HERO.headline.map((line) => (
        <span key={line} className="block">{line}</span>
    ));

    return (
        <>
            {/* ══════════════════════════════════════════════════════════
                1. HERO — Full-bleed editorial split
            ══════════════════════════════════════════════════════════ */}
            <section className={`relative min-h-screen flex items-start md:items-center overflow-hidden ${pinkSection}`}>

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
                            <p className="text-[1.35rem] text-gray-800 font-semibold leading-snug mb-3 mx-auto">
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
                    <div className="hidden md:flex items-center min-h-screen">
                        <div className="pl-12 lg:pl-20 xl:pl-28 pr-4 max-w-[52%] lg:max-w-[48%] py-24">

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
                                className="text-2xl lg:text-[1.7rem] text-gray-800 font-semibold leading-snug mb-4"
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
                2. MY STORY — then, the decision, now
            ══════════════════════════════════════════════════════════ */}
            <section id="my-story" className="py-16 md:py-24 bg-white scroll-mt-4">
                <div className="container mx-auto px-6">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="max-w-4xl mx-auto"
                    >
                        <Image
                            src={storyPortrait}
                            alt="Anushka Jain"
                            width={224}
                            height={224}
                            className="rounded-full shadow-lg w-28 h-28 object-cover border-2 border-anushka-400/40 mx-auto mb-6"
                        />
                        <h2 className={`${sectionHeading} text-center mb-3`}>
                            The Girl From Jhansi
                        </h2>
                        <p className="text-center text-lg md:text-xl text-gray-800 font-semibold mb-12">
                            {story.greeting}
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                            {/* Then */}
                            <div className="rounded-2xl p-8 bg-gray-50 border border-gray-200">
                                <p className="text-sm font-semibold tracking-[0.18em] uppercase text-gray-500">
                                    {story.then.label}
                                </p>
                                <h3 className="mt-1 text-xl md:text-2xl font-bold text-gray-800 font-serif mb-6">
                                    {story.then.place}
                                </h3>
                                <ul className="space-y-4">
                                    {story.then.items.map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <span className="mt-[0.7rem] w-2 h-2 rounded-full bg-gray-400 shrink-0" aria-hidden="true" />
                                            <span className="text-gray-600 text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Now */}
                            <div className={`rounded-2xl p-8 border border-anushka-300 shadow-md ${pinkSection}`}>
                                <p className="text-sm font-semibold tracking-[0.18em] uppercase text-anushka-500">
                                    {story.now.label}
                                </p>
                                <h3 className="mt-1 text-xl md:text-2xl font-bold text-gray-800 font-serif mb-6">
                                    {story.now.place}
                                </h3>
                                <ul className="space-y-4">
                                    {story.now.items.map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <Sparkles className="w-5 h-5 text-anushka-500 mt-1 shrink-0" />
                                            <span className="text-gray-800 text-lg font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* The decision */}
                        <blockquote className="mt-12 max-w-3xl mx-auto text-center font-serif text-2xl md:text-4xl leading-snug text-anushka-700">
                            &ldquo;{story.turningPoint}&rdquo;
                        </blockquote>
                        <p className="mt-8 max-w-2xl mx-auto text-center text-lg md:text-xl text-gray-700 leading-relaxed">
                            {story.closing}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════
                3. WHAT I HELP WOMEN WITH
            ══════════════════════════════════════════════════════════ */}
            <section className={`py-16 md:py-24 ${pinkSection}`}>
                <div className="container mx-auto px-6">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                    >
                        <h2 className={`${sectionHeading} text-center mb-5`}>
                            What I Help Women With
                        </h2>
                        <p className="text-center text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto mb-12">
                            Most women don&apos;t need more motivation. They need someone beside them while they rebuild.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                            {pillars.map((pillar) => (
                                <div key={pillar.title} className="rounded-2xl p-8 border border-anushka-200/60 bg-white/90">
                                    <p className="font-serif italic text-lg text-anushka-600 mb-3">
                                        &ldquo;{pillar.lived}&rdquo;
                                    </p>
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
                4. WHO COMES TO REBIRTH
            ══════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                            <div className={`rounded-2xl p-8 border border-anushka-200/50 ${pinkSection}`}>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 font-serif">
                                    Women come to Rebirth:
                                </h3>
                                <ul className="space-y-4">
                                    {womenComeWhen.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Sparkles className="w-5 h-5 text-anushka-500 mt-1 shrink-0" />
                                            <span className="text-gray-700 text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={`rounded-2xl p-8 border border-anushka-200/50 ${pinkSection}`}>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 font-serif">
                                    Rebirth is for you if:
                                </h3>
                                <ul className="space-y-4">
                                    {forYou.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-anushka-500 mt-1 shrink-0" />
                                            <span className="text-gray-700 text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
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

                        <div className="mt-12">
                            <ApplyButton className="py-4 px-10 shadow-lg hover:shadow-xl" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════
                6. HOW IT WORKS
            ══════════════════════════════════════════════════════════ */}
            <section id="how-it-works" className="py-16 md:py-24 bg-white scroll-mt-4">
                <div className="container mx-auto px-6">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className={`${sectionHeading} text-center mb-12`}>
                            How It Works
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
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════
                7. WHAT WOMEN SAY
            ══════════════════════════════════════════════════════════ */}
            <TestimonialsSection />

            {/* ══════════════════════════════════════════════════════════
                8. APPLY FLOW — Multi-step form + Topmate booking
            ══════════════════════════════════════════════════════════ */}
            <section id="apply-section" className="py-16 md:py-24 bg-white scroll-mt-4" ref={applyRef}>
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
