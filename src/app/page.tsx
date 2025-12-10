// src/app/page.tsx
import Header from '@/Component/Header';
import Footer from '@/Component/Footer';
import Banner from '@/Component/Banner';
import ContactUs from '@/Component/ContactUs';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header top */}
      <Header />

      <Banner />
      <ContactUs />
      {/* Footer bottom */}
      <Footer />
    </div>
  );
}
