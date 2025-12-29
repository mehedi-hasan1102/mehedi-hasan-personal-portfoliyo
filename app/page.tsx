
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




export default async function Home() {
  const allBlogsData = await getSortedBlogsData();
  const latestBlogs = allBlogsData
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
  return (
    <div className="min-h-screen font-geist relative ">
      <ScrollProgress />
      <HeroSection />
      <ResumeSections />
      <BlogHomePage latestBlogs={latestBlogs} />
      <ProjectsHomePage />
      <GitHubActivitySection />
      <SkillsSection />
      
      <ContactHomePage />    
      <WhatsAppButton />
      <ScrollToTopButton />
      
    </div>
  );
}
