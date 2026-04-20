'use client';

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TrustSection from "@/components/trust-section";
import AboutSnippet from "@/components/about-snippet";
import ProjectsSection from "@/components/projects-section";
import ServicesSection from "@/components/services-section";
import ProcessSection from "@/components/process-section";
import ProductsSection from "@/components/products-section";
import Testimonials from "@/components/testimonials";
import ContactSection from "@/components/contact-section";
import WhatsAppButton from "@/components/whatsapp-button";
import Footer from "@/components/footer";
import ProjectModal from "@/components/project-modal";
import ServiceActionModal from "@/components/service-action-modal";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  // Service Modal State
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [selectedServiceName, setSelectedServiceName] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  // Handle body scroll lock
  useEffect(() => {
    if (isProjectModalOpen || isServiceModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isProjectModalOpen, isServiceModalOpen]);

  const handleOpenProjectModal = (project: any) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const handleOpenServiceModal = (serviceName: string) => {
    setSelectedServiceName(serviceName);
    setIsServiceModalOpen(true);
  };

  const handleContinueToForm = (message: string) => {
    setContactMessage(message);
    setIsServiceModalOpen(false);

    // Smooth scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen">
      {/* <Navbar />
      <Hero />
      <TrustSection />
      <AboutSnippet />
      <div className="bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <ProjectsSection onOpenModal={handleOpenProjectModal} />
      </div>
      <ServicesSection onOpenModal={handleOpenServiceModal} />
      <ProcessSection />
      <ProductsSection />
      <Testimonials />
      <ContactSection initialMessage={contactMessage} />
      <WhatsAppButton />
      <Footer /> */}


      <Navbar />
      
      <div className="space-y-0">
        <Hero />
        
        <div className="bg-white dark:bg-zinc-950">
          <TrustSection />
        </div>

        <div className="bg-gray-50 dark:bg-white/[0.02] border-y border-gray-100 dark:border-white/5">
          <ProjectsSection onOpenModal={handleOpenProjectModal} />
        </div>

        <div className="bg-white dark:bg-zinc-950">
          <AboutSnippet />
        </div>

        <div className="bg-gray-50 dark:bg-white/[0.02] border-y border-gray-100 dark:border-white/5">
          <ServicesSection onOpenModal={handleOpenServiceModal} />
        </div>

        <div className="bg-white dark:bg-zinc-950">
          <ProcessSection />
        </div>

        <div className="bg-gray-50 dark:bg-white/[0.02] border-y border-gray-100 dark:border-white/5">
          <Testimonials />
        </div>

        <div className="bg-white dark:bg-zinc-950">
          <ContactSection initialMessage={contactMessage} />
        </div>
      </div>

      <WhatsAppButton />
      <Footer />


      <ProjectModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        project={selectedProject}
      />

      <ServiceActionModal
        isOpen={isServiceModalOpen}
        onClose={() => setIsServiceModalOpen(false)}
        serviceName={selectedServiceName}
        onContinueToForm={handleContinueToForm}
      />
    </main>
  );
}
