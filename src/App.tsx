/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Map, 
  AlertCircle, 
  Lightbulb, 
  LayoutGrid, 
  CheckCircle2, 
  ClipboardList,
  ChevronRight,
  ChevronDown,
  User,
  Star,
  ShieldCheck,
  CreditCard,
  RefreshCcw,
  Info,
  Layers,
  Ruler,
  Search,
  ArrowRight,
  Check
} from 'lucide-react';

import { 
  journeyStages, 
  painPoints, 
  teamIdeas, 
  affinityClusters, 
  solutions 
} from './data';

// --- Components ---

const Navbar = () => {
  const location = useLocation();
  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/journey', label: 'Journey', icon: Map },
    { path: '/pain-points', label: 'Pain Points', icon: AlertCircle },
    { path: '/brainstorm', label: 'Ideas', icon: Lightbulb },
    { path: '/affinity', label: 'Affinity', icon: LayoutGrid },
    { path: '/solutions', label: 'Solutions', icon: CheckCircle2 },
    { path: '/survey', label: 'Survey', icon: ClipboardList },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#E91E8C] rounded-lg flex items-center justify-center text-white font-bold">M</div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">Myntra <span className="text-[#E91E8C]">Design Lab</span></span>
          </div>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path 
                    ? 'text-[#E91E8C] bg-pink-50' 
                    : 'text-gray-600 hover:text-[#E91E8C] hover:bg-gray-50'
                }`}
              >
                <item.icon size={16} />
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 mt-20">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p className="text-gray-400 text-sm mb-2">Design Thinking Lab | Experiment Showcase</p>
      <p className="text-lg font-medium mb-4">Rizvi College of Engineering</p>
      <div className="inline-block px-4 py-1 bg-gray-800 rounded-full text-xs text-gray-300 border border-gray-700">
        Course Code: 2994512 (DTL)
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-xs">
        &copy; 2026 Myntra Design Thinking Project. For Educational Purposes Only.
      </div>
    </div>
  </footer>
);

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
    className="min-h-screen pt-8 pb-20 px-4 max-w-7xl mx-auto"
  >
    {children}
  </motion.div>
);

// --- Pages ---

const HomePage = () => (
  <PageWrapper>
    <div className="text-center mb-16">
      <motion.h1 
        className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
      >
        Emotional & Psychological Challenges in <br />
        <span className="text-[#E91E8C]">Myntra's Customer Experience</span>
      </motion.h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        A Design Thinking Journey — From Empathy to Solution. Exploring how users feel, why they struggle, and how we can innovate.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: 'Journey Map', path: '/journey', icon: Map, color: 'bg-blue-500', desc: 'Visualizing the user experience timeline.' },
        { title: 'Pain Points', path: '/pain-points', icon: AlertCircle, color: 'bg-red-500', desc: 'Identifying frustrations and HMW statements.' },
        { title: 'Brainstorming', path: '/brainstorm', icon: Lightbulb, color: 'bg-yellow-500', desc: 'Creative ideas from our team members.' },
        { title: 'Affinity Diagram', path: '/affinity', icon: LayoutGrid, color: 'bg-purple-500', desc: 'Clustering insights into meaningful themes.' },
        { title: 'Solutions', path: '/solutions', icon: CheckCircle2, color: 'bg-green-500', desc: 'Interactive prototypes for key problems.' },
        { title: 'Experience Survey', path: '/survey', icon: ClipboardList, color: 'bg-pink-500', desc: 'Share your emotional shopping journey.' },
      ].map((card) => (
        <Link 
          key={card.path} 
          to={card.path}
          className="group relative overflow-hidden bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
        >
          <div className={`${card.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
            <card.icon size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
          <p className="text-gray-500 text-sm mb-4">{card.desc}</p>
          <div className="flex items-center text-[#E91E8C] font-semibold text-sm">
            Explore Section <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      ))}
    </div>

    <div className="mt-20 bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Project</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          This project is part of the Design Thinking Lab at Rizvi College of Engineering. Our goal was to apply the 5 stages of Design Thinking (Empathize, Define, Ideate, Prototype, Test) to a real-world platform like Myntra, focusing specifically on the emotional toll of digital shopping.
        </p>
        <div className="flex flex-wrap gap-4">
          <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200">Experiment 1-6</span>
          <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200">UX Research</span>
          <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200">Psychological Mapping</span>
        </div>
      </div>
    </div>
  </PageWrapper>
);

const JourneyPage = () => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <PageWrapper>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Customer Journey Map</h1>
            <p className="text-gray-600">Tracking the emotional highs and lows of a Myntra shopper.</p>
          </div>

          {/* Timeline */}
          <div className="relative mb-12">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 rounded-full"></div>
            <div className="relative flex justify-between items-center">
              {journeyStages.map((stage, idx) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(idx)}
                  className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    activeStage === idx 
                      ? 'bg-[#E91E8C] text-white scale-125 shadow-lg ring-4 ring-pink-100' 
                      : 'bg-white text-gray-400 border-2 border-gray-200 hover:border-[#E91E8C]'
                  }`}
                >
                  {idx + 1}
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {stage.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Stage Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">{journeyStages[activeStage].title}</h2>
                    <p className="text-gray-500">Stage {activeStage + 1} of 5</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-4xl mb-1">{journeyStages[activeStage].emoji}</span>
                    <span className="text-sm font-bold text-gray-700">{journeyStages[activeStage].emotion}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                      <CheckCircle2 size={16} className="text-green-500" /> User Actions
                    </h3>
                    <ul className="space-y-3">
                      {journeyStages[activeStage].actions.map((action, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#E91E8C] mt-2 shrink-0"></div>
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                      <Map size={16} className="text-blue-500" /> Touchpoints
                    </h3>
                    <p className="text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100">
                      {journeyStages[activeStage].touchpoints}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h3 className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                    <AlertCircle size={16} className="text-red-500" /> Pain Points
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {journeyStages[activeStage].painPoints.map((pp, i) => (
                      <span key={i} className="px-3 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-full border border-red-100">
                        {pp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Sentiment Bar */}
              <div className="h-2 flex">
                <div className={`h-full transition-all duration-500 ${
                  journeyStages[activeStage].sentiment === 'positive' ? 'w-full bg-green-500' :
                  journeyStages[activeStage].sentiment === 'neutral' ? 'w-1/2 bg-yellow-400' :
                  'w-1/4 bg-red-500'
                }`}></div>
                <div className="flex-1 bg-gray-100"></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Persona Sidebar */}
        <div className="lg:w-80 shrink-0">
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm sticky top-24">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center text-[#E91E8C]">
                <User size={32} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Aarav Mehta</h3>
                <p className="text-sm text-gray-500">21, College Student</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase mb-1">Goals</p>
                <p className="text-sm text-gray-700">Wants trendy clothes for college fests without breaking his budget.</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase mb-1">Frustrations</p>
                <p className="text-sm text-gray-700">Hates when the size doesn't fit and he has to wait 10 days for a refund.</p>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase mb-2">Shopping Habits</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-100 rounded text-[10px] font-bold text-gray-600">Mobile First</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-[10px] font-bold text-gray-600">Review Reader</span>
                  <span className="px-2 py-1 bg-gray-100 rounded text-[10px] font-bold text-gray-600">Coupon Hunter</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

const PainPointsPage = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const icons: Record<string, any> = {
    Layers: Layers,
    ShieldCheck: ShieldCheck,
    Ruler: Ruler,
    Info: Info,
    CreditCard: CreditCard,
    RefreshCcw: RefreshCcw
  };

  return (
    <PageWrapper>
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Pain Points & HMW Statements</h1>
        <p className="text-gray-600">Defining the core problems and framing them as opportunities for innovation.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {painPoints.map((pp) => {
          const IconComp = icons[pp.icon];
          const isExpanded = expanded === pp.id;

          return (
            <div 
              key={pp.id}
              className={`bg-white border rounded-3xl overflow-hidden transition-all duration-300 ${
                isExpanded ? 'border-[#E91E8C] shadow-lg ring-1 ring-pink-100' : 'border-gray-100 shadow-sm'
              }`}
            >
              <button 
                onClick={() => setExpanded(isExpanded ? null : pp.id)}
                className="w-full text-left p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl ${isExpanded ? 'bg-[#E91E8C] text-white' : 'bg-pink-50 text-[#E91E8C]'}`}>
                    <IconComp size={24} />
                  </div>
                  <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-full border border-gray-100">
                    <span className="text-xs font-bold text-gray-600">{pp.emotion}</span>
                    <span>{pp.emoji}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{pp.title}</h3>
                <div className="flex items-center text-xs font-bold text-[#E91E8C]">
                  {isExpanded ? 'Hide HMW Statements' : 'View HMW Statements'}
                  <ChevronDown size={14} className={`ml-1 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </div>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="bg-pink-50 rounded-2xl p-4 border border-pink-100">
                        <p className="text-[10px] font-bold text-[#E91E8C] uppercase tracking-widest mb-3">How Might We...</p>
                        <ul className="space-y-3">
                          {pp.hmw.map((statement, i) => (
                            <li key={i} className="text-sm text-gray-700 italic leading-relaxed">
                              "{statement}"
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </PageWrapper>
  );
};

const BrainstormPage = () => {
  const [activeMember, setActiveMember] = useState<string | 'All'>('All');
  const members = ['All', ...Object.keys(teamIdeas)];

  const allIdeas = Object.entries(teamIdeas).flatMap(([member, ideas]) => 
    ideas.map(idea => ({ ...idea, member }))
  );

  const filteredIdeas = activeMember === 'All' 
    ? allIdeas 
    : allIdeas.filter(i => i.member === activeMember);

  const categoryColors: Record<string, string> = {
    AI: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    UX: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    Trust: 'bg-amber-100 text-amber-700 border-amber-200',
    Checkout: 'bg-rose-100 text-rose-700 border-rose-200',
    'Post-Purchase': 'bg-sky-100 text-sky-700 border-sky-200'
  };

  return (
    <PageWrapper>
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Brainstorming Ideas</h1>
        <p className="text-gray-600">Divergent thinking from our team to solve the identified pain points.</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {members.map(m => (
          <button
            key={m}
            onClick={() => setActiveMember(m)}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
              activeMember === m 
                ? 'bg-[#E91E8C] text-white shadow-md' 
                : 'bg-white text-gray-600 border border-gray-200 hover:border-[#E91E8C]'
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredIdeas.map((idea, idx) => (
            <motion.div
              layout
              key={`${idea.member}-${idea.title}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`px-2 py-1 rounded text-[10px] font-bold border ${categoryColors[idea.category]}`}>
                  {idea.category}
                </span>
                {activeMember === 'All' && (
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">By {idea.member}</span>
                )}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{idea.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{idea.description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </PageWrapper>
  );
};

const AffinityPage = () => (
  <PageWrapper>
    <div className="mb-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Affinity Diagram</h1>
      <p className="text-gray-600">Clustering individual observations into thematic groups to find root causes.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
      {affinityClusters.map((cluster, idx) => (
        <div key={idx} className={`rounded-3xl border-2 p-6 flex flex-col h-full ${cluster.color}`}>
          <h3 className="font-bold text-gray-900 mb-6 text-center">{cluster.title}</h3>
          <div className="flex-1 space-y-3 mb-6">
            {cluster.issues.map((issue, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-white/50 text-sm text-gray-700 font-medium rotate-1 hover:rotate-0 transition-transform cursor-default">
                {issue}
              </div>
            ))}
          </div>
          <div className="bg-white/40 p-3 rounded-xl border border-white/20">
            <p className="text-[10px] font-bold text-gray-500 uppercase mb-1">Key Insight</p>
            <p className="text-xs text-gray-800 leading-relaxed italic">"{cluster.insight}"</p>
          </div>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Search className="text-[#E91E8C]" size={20} /> Root Causes Identified
        </h2>
        <ul className="space-y-4">
          {[
            "Lack of standardized sizing across different brands leads to user anxiety.",
            "Information asymmetry between sellers and buyers creates trust gaps.",
            "Over-reliance on algorithmic sorting without human-centric filters.",
            "Fragmented post-purchase communication channels."
          ].map((cause, i) => (
            <li key={i} className="flex gap-4">
              <span className="w-6 h-6 rounded-full bg-pink-100 text-[#E91E8C] flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span>
              <p className="text-gray-700 text-sm leading-relaxed">{cause}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-900 text-white rounded-3xl p-8 shadow-xl">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <LayoutGrid className="text-[#E91E8C]" size={20} /> Major Problem Themes
        </h2>
        <div className="space-y-6">
          {[
            { title: "The Trust Paradox", desc: "Users want variety but fear the lack of quality control that comes with it." },
            { title: "The Choice Fatigue", desc: "Infinite scrolling leads to decision paralysis rather than satisfaction." },
            { title: "The Fit Gap", desc: "Digital interfaces struggle to replicate the physical certainty of a trial room." }
          ].map((theme, i) => (
            <div key={i}>
              <h4 className="font-bold text-[#E91E8C] mb-1">{theme.title}</h4>
              <p className="text-sm text-gray-400">{theme.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </PageWrapper>
);

const SolutionsPage = () => {
  const [activeSolution, setActiveSolution] = useState(solutions[0].id);
  
  // Mock UI States
  const [sizeInput, setSizeInput] = useState({ h: '', w: '' });
  const [sizeResult, setSizeResult] = useState<string | null>(null);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [returnStatus, setReturnStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSizeCalc = () => {
    if (sizeInput.h && sizeInput.w) {
      const bmi = Number(sizeInput.w) / ((Number(sizeInput.h) / 100) ** 2);
      setSizeResult(bmi < 20 ? 'S' : bmi < 25 ? 'M' : bmi < 30 ? 'L' : 'XL');
    }
  };

  return (
    <PageWrapper>
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Proposed Solutions Prototype</h1>
        <p className="text-gray-600">High-fidelity concepts addressing the most critical user pain points.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Solution Selector */}
        <div className="lg:w-80 shrink-0 space-y-3">
          {solutions.map(sol => (
            <button
              key={sol.id}
              onClick={() => setActiveSolution(sol.id)}
              className={`w-full text-left p-5 rounded-2xl border transition-all ${
                activeSolution === sol.id 
                  ? 'bg-[#E91E8C] text-white border-[#E91E8C] shadow-lg' 
                  : 'bg-white text-gray-600 border-gray-100 hover:border-[#E91E8C]'
              }`}
            >
              <h3 className="font-bold mb-1">{sol.title}</h3>
              <p className={`text-xs ${activeSolution === sol.id ? 'text-pink-100' : 'text-gray-400'}`}>
                {sol.description}
              </p>
            </button>
          ))}
        </div>

        {/* Prototype Viewport */}
        <div className="flex-1 bg-white border border-gray-100 rounded-[32px] shadow-sm overflow-hidden flex flex-col">
          <div className="p-8 border-b border-gray-50">
            <div className="flex items-center gap-2 text-[10px] font-bold text-[#E91E8C] uppercase tracking-widest mb-2">
              <CheckCircle2 size={12} /> Addressing HMW
            </div>
            <p className="text-gray-900 font-medium italic">
              "{solutions.find(s => s.id === activeSolution)?.linkedHmw}"
            </p>
          </div>

          <div className="flex-1 p-8 bg-gray-50 flex items-center justify-center min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeSolution === 'ai-size' && (
                <motion.div 
                  key="ai-size"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 w-full max-w-md"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                      <Ruler size={20} />
                    </div>
                    <h4 className="font-bold text-gray-900">AI Size Recommender</h4>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-bold text-gray-400 uppercase">Height (cm)</label>
                      <input 
                        type="number" 
                        value={sizeInput.h}
                        onChange={e => setSizeInput({...sizeInput, h: e.target.value})}
                        className="w-full mt-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E91E8C]" 
                        placeholder="e.g. 175"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-400 uppercase">Weight (kg)</label>
                      <input 
                        type="number" 
                        value={sizeInput.w}
                        onChange={e => setSizeInput({...sizeInput, w: e.target.value})}
                        className="w-full mt-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E91E8C]" 
                        placeholder="e.g. 70"
                      />
                    </div>
                    <button 
                      onClick={handleSizeCalc}
                      className="w-full py-4 bg-[#E91E8C] text-white font-bold rounded-xl shadow-lg hover:bg-pink-600 transition-colors"
                    >
                      Calculate Best Fit
                    </button>
                    {sizeResult && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 p-6 bg-green-50 border border-green-100 rounded-2xl text-center"
                      >
                        <p className="text-sm text-green-700 font-medium mb-1">Your Recommended Size</p>
                        <p className="text-4xl font-black text-green-800">{sizeResult}</p>
                        <p className="text-[10px] text-green-600 mt-2">98% Match based on similar users</p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}

              {activeSolution === 'trust-badge' && (
                <motion.div 
                  key="trust-badge"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-3xl shadow-xl border border-gray-100 w-full max-w-sm overflow-hidden"
                >
                  <div className="aspect-[3/4] bg-gray-200 relative">
                    <img src="https://picsum.photos/seed/fashion/600/800" alt="Product" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white shadow-sm">
                      <ShieldCheck size={14} className="text-green-500" />
                      <span className="text-[10px] font-bold text-gray-800">TRUST SCORE: 9.4</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-gray-900">Premium Cotton Shirt</h4>
                      <span className="text-[#E91E8C] font-bold">₹1,299</span>
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star size={12} fill="currentColor" />
                        <span className="text-xs font-bold text-gray-700">4.8</span>
                      </div>
                      <span className="text-xs text-gray-400">1.2k Verified Reviews</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Check size={14} className="text-green-500" /> Seller: Myntra Retail (Verified)
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Check size={14} className="text-green-500" /> 100% Authentic Guarantee
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeSolution === 'simple-checkout' && (
                <motion.div 
                  key="simple-checkout"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 w-full max-w-md"
                >
                  <div className="flex justify-between mb-10 relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2"></div>
                    {[1, 2, 3].map(step => (
                      <div 
                        key={step}
                        className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                          checkoutStep >= step ? 'bg-[#E91E8C] text-white' : 'bg-white text-gray-400 border-2 border-gray-100'
                        }`}
                      >
                        {step}
                      </div>
                    ))}
                  </div>

                  <div className="min-h-[200px] flex flex-col justify-center text-center">
                    {checkoutStep === 1 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h4 className="text-lg font-bold mb-2">Review Your Cart</h4>
                        <p className="text-sm text-gray-500 mb-6">2 items in your bag. Total: ₹2,598</p>
                        <button onClick={() => setCheckoutStep(2)} className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold">Next: Payment</button>
                      </motion.div>
                    )}
                    {checkoutStep === 2 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h4 className="text-lg font-bold mb-6">Select Payment</h4>
                        <div className="space-y-3 mb-6">
                          <div className="p-4 border-2 border-[#E91E8C] bg-pink-50 rounded-xl flex items-center gap-3">
                            <CreditCard size={20} className="text-[#E91E8C]" />
                            <span className="text-sm font-bold">Saved Card (.... 4242)</span>
                          </div>
                          <div className="p-4 border border-gray-100 rounded-xl flex items-center gap-3">
                            <div className="w-5 h-5 border rounded-full"></div>
                            <span className="text-sm font-medium text-gray-600">UPI / Google Pay</span>
                          </div>
                        </div>
                        <button onClick={() => setCheckoutStep(3)} className="w-full py-3 bg-[#E91E8C] text-white rounded-xl font-bold">Pay ₹2,598</button>
                      </motion.div>
                    )}
                    {checkoutStep === 3 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Check size={32} />
                        </div>
                        <h4 className="text-lg font-bold mb-2">Order Confirmed!</h4>
                        <p className="text-sm text-gray-500 mb-6">Arriving by Thursday, 19th March.</p>
                        <button onClick={() => setCheckoutStep(1)} className="text-[#E91E8C] font-bold text-sm">Back to Home</button>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}

              {activeSolution === 'return-portal' && (
                <motion.div 
                  key="return-portal"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 w-full max-w-md"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                      <RefreshCcw size={20} />
                    </div>
                    <h4 className="font-bold text-gray-900">Easy Return Portal</h4>
                  </div>

                  {returnStatus === 'idle' && (
                    <div className="space-y-6">
                      <div className="p-4 border border-gray-100 rounded-2xl flex items-center gap-4">
                        <img src="https://picsum.photos/seed/shirt/100/100" className="w-12 h-12 rounded-lg object-cover" alt="Item" />
                        <div>
                          <p className="text-sm font-bold">Blue Denim Shirt</p>
                          <p className="text-xs text-gray-400">Delivered yesterday</p>
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-bold text-gray-400 uppercase mb-2 block">Reason for Return</label>
                        <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm">
                          <option>Size too small</option>
                          <option>Size too large</option>
                          <option>Quality not as expected</option>
                          <option>Different color received</option>
                        </select>
                      </div>
                      <button 
                        onClick={() => {
                          setReturnStatus('submitting');
                          setTimeout(() => setReturnStatus('success'), 1500);
                        }}
                        className="w-full py-4 bg-orange-500 text-white font-bold rounded-xl shadow-lg hover:bg-orange-600 transition-colors"
                      >
                        Request Return Pickup
                      </button>
                    </div>
                  )}

                  {returnStatus === 'submitting' && (
                    <div className="py-12 text-center">
                      <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-gray-500 font-medium">Processing your request...</p>
                    </div>
                  )}

                  {returnStatus === 'success' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-6">
                      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check size={32} />
                      </div>
                      <h4 className="text-lg font-bold mb-2">Pickup Scheduled!</h4>
                      <p className="text-sm text-gray-500 mb-6">Our agent will arrive tomorrow between 10 AM - 12 PM.</p>
                      <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl text-left">
                        <p className="text-[10px] font-bold text-blue-600 uppercase mb-1">Refund Status</p>
                        <p className="text-xs text-blue-800">Instant refund to Myntra Credit will be initiated upon pickup.</p>
                      </div>
                      <button onClick={() => setReturnStatus('idle')} className="mt-6 text-gray-400 text-xs hover:underline">Start another return</button>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

const SurveyPage = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    anxiety: 5,
    painPoints: [] as string[],
    confidence: '',
    feedback: ''
  });

  const painPointOptions = ["Choice Overload", "Trust Issues", "Size Confusion", "Payment Anxiety", "Return Hassle"];

  const handlePainPointToggle = (pp: string) => {
    setAnswers(prev => ({
      ...prev,
      painPoints: prev.painPoints.includes(pp) 
        ? prev.painPoints.filter(i => i !== pp) 
        : [...prev.painPoints, pp]
    }));
  };

  return (
    <PageWrapper>
      <div className="max-w-2xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Emotional Experience Survey</h1>
          <p className="text-gray-600">Help us understand your shopping psychology.</p>
        </div>

        <div className="bg-white border border-gray-100 rounded-[32px] shadow-xl overflow-hidden">
          {/* Progress Bar */}
          <div className="h-1.5 bg-gray-100 flex">
            <div className="h-full bg-[#E91E8C] transition-all duration-500" style={{ width: `${(step / 5) * 100}%` }}></div>
          </div>

          <div className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-8">How much anxiety do you feel while browsing thousands of products?</h3>
                  <div className="space-y-8">
                    <input 
                      type="range" min="1" max="10" 
                      value={answers.anxiety}
                      onChange={e => setAnswers({...answers, anxiety: Number(e.target.value)})}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#E91E8C]" 
                    />
                    <div className="flex justify-between text-xs font-bold text-gray-400 uppercase">
                      <span>Very Calm (1)</span>
                      <span className="text-[#E91E8C] text-lg">{answers.anxiety}</span>
                      <span>Very Stressed (10)</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Which of these pain points have you experienced?</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {painPointOptions.map(pp => (
                      <button
                        key={pp}
                        onClick={() => handlePainPointToggle(pp)}
                        className={`p-4 rounded-2xl border-2 text-left transition-all flex justify-between items-center ${
                          answers.painPoints.includes(pp) 
                            ? 'border-[#E91E8C] bg-pink-50 text-[#E91E8C]' 
                            : 'border-gray-100 text-gray-600 hover:border-gray-200'
                        }`}
                      >
                        <span className="font-bold">{pp}</span>
                        {answers.painPoints.includes(pp) && <Check size={18} />}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">How confident do you feel during checkout?</h3>
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { emoji: '😟', label: 'Anxious' },
                      { emoji: '😐', label: 'Neutral' },
                      { emoji: '😊', label: 'Confident' },
                      { emoji: '😍', label: 'Excited' }
                    ].map(item => (
                      <button
                        key={item.label}
                        onClick={() => setAnswers({...answers, confidence: item.label})}
                        className={`flex flex-col items-center p-4 rounded-2xl border-2 transition-all ${
                          answers.confidence === item.label 
                            ? 'border-[#E91E8C] bg-pink-50' 
                            : 'border-gray-100 hover:border-gray-200'
                        }`}
                      >
                        <span className="text-4xl mb-2">{item.emoji}</span>
                        <span className="text-[10px] font-bold text-gray-500 uppercase">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">What would make your Myntra experience better?</h3>
                  <textarea 
                    value={answers.feedback}
                    onChange={e => setAnswers({...answers, feedback: e.target.value})}
                    placeholder="Tell us your thoughts..."
                    className="w-full h-40 p-6 bg-gray-50 border border-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#E91E8C] resize-none"
                  ></textarea>
                </motion.div>
              )}

              {step === 5 && (
                <motion.div key="step5" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                  <div className="w-20 h-20 bg-pink-100 text-[#E91E8C] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-500 mb-10">Your insights help us design a more empathetic future.</p>
                  
                  <div className="bg-gray-50 rounded-3xl p-6 text-left border border-gray-100">
                    <h4 className="text-xs font-bold text-gray-400 uppercase mb-4 tracking-widest">Your Profile Insight</h4>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                        <Info size={20} className="text-[#E91E8C]" />
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Based on your responses, you are a <span className="font-bold text-[#E91E8C]">Value-Conscious Explorer</span>. You enjoy the variety but feel friction during the decision-making phase. Our AI Size Recommender would likely reduce your anxiety by 40%.
                      </p>
                    </div>
                  </div>
                  
                  <button onClick={() => setStep(1)} className="mt-8 text-sm font-bold text-gray-400 hover:text-[#E91E8C] transition-colors">Retake Survey</button>
                </motion.div>
              )}
            </AnimatePresence>

            {step < 5 && (
              <div className="mt-12 flex justify-between items-center">
                <button 
                  disabled={step === 1}
                  onClick={() => setStep(step - 1)}
                  className={`text-sm font-bold ${step === 1 ? 'text-gray-300' : 'text-gray-500 hover:text-gray-900'}`}
                >
                  Back
                </button>
                <button 
                  onClick={() => setStep(step + 1)}
                  className="px-8 py-3 bg-[#E91E8C] text-white font-bold rounded-xl shadow-lg hover:bg-pink-600 transition-all flex items-center gap-2"
                >
                  {step === 4 ? 'Finish' : 'Next'} <ArrowRight size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="bg-white text-gray-900 font-sans selection:bg-pink-100 selection:text-[#E91E8C]">
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/journey" element={<JourneyPage />} />
            <Route path="/pain-points" element={<PainPointsPage />} />
            <Route path="/brainstorm" element={<BrainstormPage />} />
            <Route path="/affinity" element={<AffinityPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/survey" element={<SurveyPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
