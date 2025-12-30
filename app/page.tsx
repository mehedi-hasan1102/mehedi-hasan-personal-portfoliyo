
import HeroSection from '@/components/home/Hero';
import ResumeSections from '@/components/home/Resume';
import { ScrollProgress } from "@/components/ui/scroll-progress"
import ProjectsHomePage from '@/components/home/ProjectsHomePage';
import BlogHomePage from '@/components/home/BlogHomePage';
import GitHubActivitySection from '@/components/home/GitHub';
import SkillsSection from '@/components/home/Skills';
import ContactHomePage from '@/components/home/ContactHomePage';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import ScrollToTopButton from '@/components/common/ScrollButton';
import { getSortedBlogsData } from '@/lib/blogs';
import WhatIDoSection from '@/components/home/WhatIDoSection';




export default async function Home() {
  const allBlogsData = await getSortedBlogsData();
  const latestBlogs = allBlogsData
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
  return (
    <div className="min-h-screen font-geist relative ">
       <ScrollProgress />

  {/* 1. Hero – Identity & CTA */}
  <HeroSection />

  {/* 2. Skills – Quick Technical Validation */}
  <SkillsSection />

  {/* 3. Featured Projects – Primary Proof */}
  <ProjectsHomePage />


  <WhatIDoSection /> 

  {/* 4. Resume – Hiring Support */}
  <ResumeSections />

  {/* 5. Blog – Thought Leadership (Support) */}
  <BlogHomePage latestBlogs={latestBlogs} />

  {/* 6. GitHub – Activity Proof */}
  <GitHubActivitySection />

  {/* 7. Contact – Conversion */}
  <ContactHomePage />

  {/* UX Enhancements */}
  <WhatsAppButton />
  <ScrollToTopButton />
      
    </div>
  );
}
