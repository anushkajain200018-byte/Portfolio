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
   without touching the layout below.
──────────────────────────────────────────────────────────────── */

// Set to false to replace the prices with "Shared on your call".
const SHOW_PRICES = true;

const HERO = {
    eyebrow: 'Rebirth Club · Coaching for women',
    // Two lines on purpose, so the second sentence never breaks mid-phrase.
    headline: ['Rebuild your life.', 'On your own terms.'],
    support:
        'Private coaching with Anushka Jain for women who are starting again: rebuilding their confidence, finding their direction, and creating their own income and opportunities.',
    reassurance: 'Every woman starts with a free 20-minute call.',
};

const womenComeWhen = [
    'After losing a job',
    'After a heartbreak that took their confidence with it',
    'When a 9-to-5 no longer fits and they want an income of their own',
    "When they know they want to change and don't know where to begin",
];

const forYou = [
    'You feel you have outgrown your current life and are not sure what comes next',
    'You want to be known for what you are good at',
    'You are ready to do the work, with someone beside you',
];

const steps = [
    { title: 'Apply', text: 'Two minutes, honest answers.' },
    { title: 'Talk to me', text: 'A free 20-minute video call. We look at where you are and what you need.' },
    { title: 'Start', text: 'One private session, or 30 days of working with me.' },
];

const offers = [
    {
        name: 'Private session',
        price: '₹5,000',
        summary: 'One hour with me, one to one, on one clear problem or decision.',
        includes: ['A one-hour private video session', 'A written next step to act on'],
    },
    {
        name: 'Rebirth Club, 30 days',
        price: '₹25,000',
        summary: 'A month of private work with me, from direction to a personal brand that is live.',
        includes: [
            'Four private sessions, one a week',
            'Your LinkedIn profile rewritten, and four posts written with you',
            'WhatsApp support from me for the 30 days',
            'A written 90-day plan, and a check-in a month later',
        ],
        featured: true,
    },
];

const outcomes = [
    'A clear direction: what you are leaving, and what you are building',
    'A personal brand that is live, with your profile rewritten and your first posts published',
    'A plan for the next 90 days, with one income step in it',
    'Someone in your corner while you do it',
];

const story = [
    'At 21, I was made to leave my job. I was a girl from a small town in Uttar Pradesh with no plan B, and it shook my confidence and my mental health.',
    'I rebuilt in three steps. I got honest about what had ended. I decided who I wanted to become. And I made myself visible.',
    'Today I have a community of nearly 100,000 and have worked with over 200 brands. Rebirth Club is those same three steps, done privately with me.',
];

const channels = [
    {
        name: 'LinkedIn',
        stat: '58,000+',
        label: 'followers',
        href: 'https://www.linkedin.com/in/anushka-jain-408b81211/',
        cta: 'Follow on LinkedIn',
    },
    {
        name: 'Instagram',
        stat: '39,000+',
        label: 'followers',
        href: 'https://www.instagram.com/anushkajaiinn/',
        cta: 'Follow on Instagram',
    },
];

const sectionHeading =
    'text-2xl md:text-4xl font-bold font-serif bg-gradient-to-r from-anushka-700 to-rose-700 bg-clip-text text-transparent';

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

    return (
        <>
            {/* ══════════════════════════════════════════════════════════
                1. HERO — Full-bleed editorial split
            ══════════════════════════════════════════════════════════ */}
            <section className="relative min-h-screen flex items-start md:items-center overflow-hidden bg-gradient-to-br from-anushka-50 via-rose-50 to-cream">

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
                            <p className="text-xl text-gray-800 font-semibold leading-snug mb-3 max-w-xs mx-auto">
                                {HERO.headline.map((line) => (
                                    <span key={line} className="block">{line}</span>
                                ))}
                            </p>
                            <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-sm mx-auto">
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
                                className="text-2xl lg:text-[1.7rem] text-gray-800 font-semibold leading-snug mb-4 max-w-[440px]"
                                initial={reduced ? undefined : { opacity: 0, y: 18 }}
                                animate={reduced ? undefined : { opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.18 }}
                            >
                                {HERO.headline.map((line) => (
                                    <span key={line} className="block">{line}</span>
                                ))}
                            </motion.p>

                            <motion.p
                                className="text-base text-gray-600 mb-9 max-w-[420px] leading-relaxed"
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
                2. WHY REBIRTH EXISTS
            ══════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="max-w-2xl mx-auto text-center"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h2 className={`${sectionHeading} mb-8`}>
                            Why Rebirth Exists
                        </h2>

                        <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                            <p>Most women don&apos;t need more motivation.</p>
                            <p>
                                They need someone to sit with them, look honestly at where they are, and help them build what comes next.
                            </p>
                            <p className="text-gray-800 font-medium">
                                Rebirth is where they start again.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════
                3. WHO COMES TO REBIRTH
            ══════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-anushka-50 via-rose-50 to-cream">
                <div className="container mx-auto px-6">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-anushka-200/50">
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

                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-anushka-200/50">
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
                4. HOW IT WORKS
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
                5. TWO WAYS TO WORK WITH ME
            ══════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-anushka-50 via-rose-50 to-cream">
                <div className="container mx-auto px-6">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className={`${sectionHeading} text-center mb-4`}>
                            Two Ways to Work With Me
                        </h2>
                        <p className="text-center text-gray-600 text-lg mb-12">
                            We decide together on your free call which one fits.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            {offers.map((offer) => (
                                <div
                                    key={offer.name}
                                    className={`flex flex-col bg-white/90 backdrop-blur-sm rounded-2xl p-8 border ${offer.featured ? 'border-anushka-400 shadow-lg' : 'border-anushka-200/50'}`}
                                >
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 font-serif">
                                        {offer.name}
                                    </h3>
                                    <p className="mt-2 text-3xl font-bold text-anushka-600">
                                        {SHOW_PRICES ? offer.price : 'Shared on your call'}
                                    </p>
                                    <p className="mt-4 text-gray-700 text-lg leading-relaxed">{offer.summary}</p>
                                    <ul className="mt-6 space-y-3">
                                        {offer.includes.map((item) => (
                                            <li key={item} className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-anushka-500 mt-1 shrink-0" />
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════
                6. WHAT YOU LEAVE WITH
            ══════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="max-w-2xl mx-auto text-center"
                    >
                        <h2 className={`${sectionHeading} mb-10`}>
                            What You Leave With
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
                7. MY STORY
            ══════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-anushka-50 via-rose-50 to-cream">
                <div className="container mx-auto px-6">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="max-w-2xl mx-auto"
                    >
                        <Image
                            src={storyPortrait}
                            alt="Anushka Jain"
                            width={192}
                            height={192}
                            className="rounded-full shadow-lg w-24 h-24 object-cover border-2 border-anushka-400/40 mx-auto mb-6"
                        />
                        <h2 className={`${sectionHeading} text-center mb-10`}>
                            My Story
                        </h2>
                        <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                            {story.map((paragraph, i) => (
                                <p key={i} className={i === 0 ? 'text-gray-900 font-medium' : undefined}>
                                    {paragraph}
                                </p>
                            ))}
                            <p className="text-anushka-700 font-semibold">
                                Whatever has ended for you, you are allowed to build something new, and you don&apos;t have to do it alone.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════
                8. WHAT WOMEN SAY
            ══════════════════════════════════════════════════════════ */}
            <TestimonialsSection />

            {/* ══════════════════════════════════════════════════════════
                9. WHERE I SHOW UP
            ══════════════════════════════════════════════════════════ */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-anushka-50 via-rose-50 to-cream">
                <div className="container mx-auto px-6">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="max-w-2xl mx-auto"
                    >
                        <h2 className={`${sectionHeading} md:text-3xl text-center mb-10`}>
                            Where I Show Up
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {channels.map((channel) => (
                                <div
                                    key={channel.name}
                                    className="bg-white/90 rounded-2xl p-8 border border-anushka-200/50 text-center"
                                >
                                    <p className="text-sm font-semibold tracking-[0.18em] uppercase text-anushka-500">
                                        {channel.name}
                                    </p>
                                    <p className="mt-3 text-4xl font-bold text-gray-800">{channel.stat}</p>
                                    <p className="text-gray-500">{channel.label}</p>
                                    <a
                                        href={channel.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-6 inline-flex items-center gap-2 text-anushka-600 font-semibold hover:text-anushka-700 underline underline-offset-4"
                                    >
                                        {channel.cta}
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════════════
                10. APPLY FLOW — Multi-step form + Topmate booking
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
                                Ready to Begin?
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
