import ContactSection from "../(home-page)/_components/ContactSection/ContactSection";
import ContactInfoSection from "./_components/HeroContactUs/ContactInfomation";
import HeroContactUs from "./_components/HeroContactUs/HeroBanner";

function page() {
  return (
    <div>
      <HeroContactUs />
      <ContactInfoSection />
      <ContactSection />
    </div>
  );
}

export default page;
