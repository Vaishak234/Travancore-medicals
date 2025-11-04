import type { Metadata } from "next";
import { FiShield, FiUsers, FiAward, FiTruck } from "react-icons/fi";
import HeroImage from "@/components/HeroImage";
import SectionImage from "@/components/SectionImage";
import { APP_CONSTANTS } from "@/constants/app.constant";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${APP_CONSTANTS.name} - ${APP_CONSTANTS.website.description.short}`,
  openGraph: {
    title: `About Us | ${APP_CONSTANTS.name}`,
    description: APP_CONSTANTS.website.description.short,
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
        <div className="absolute inset-0">
          <HeroImage
            src="/images/about.jpg"
            alt={`About ${APP_CONSTANTS.name}`}
            priority
            objectPosition="center 10%"
          />
          <div className="absolute inset-0 "></div>
        </div>
        <div className="relative container-custom h-full flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 leading-tight drop-shadow-lg">
              About {APP_CONSTANTS.name}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-100 drop-shadow-md">
              Your trusted partner in sleep apnea treatment and respiratory care
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Our Values
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <FiShield className="text-primary-600 text-2xl sm:text-3xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                Quality Assurance
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                We only distribute certified, premium medical equipment that
                meets the highest quality standards.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <FiUsers className="text-primary-600 text-2xl sm:text-3xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                Patient Care
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Our primary focus is improving patient outcomes and quality of
                life through effective medical solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <FiAward className="text-primary-600 text-2xl sm:text-3xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                Excellence
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                We strive for excellence in every aspect of our service, from
                product selection to customer support.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <FiTruck className="text-primary-600 text-2xl sm:text-3xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                Reliability
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Trusted by healthcare providers and patients across India for
                reliable products and service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto mb-8 sm:mb-12">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <SectionImage
                src="/images/about1.jpeg"
                alt="Medical Equipment Delivery"
                width={600}
                height={400}
                className="w-full h-48 sm:h-56 md:h-64"
                fallbackText="Equipment Delivery Service"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <SectionImage
                src="/images/about2.avif"
                alt="Patient Care and Support"
                width={600}
                height={400}
                className="w-full h-48 sm:h-56 md:h-64"
                fallbackText="Patient Support Services"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                Our Mission
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                To provide healthcare providers and patients with premium
                medical equipment that enhances treatment outcomes and improves
                quality of life. We are committed to offering expert guidance,
                reliable products, and comprehensive support services.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                Our Vision
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                To become India&apos;s most trusted and preferred distributor of
                medical equipment for sleep apnea treatment and respiratory
                care, recognized for our commitment to quality, patient care,
                and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Why Choose Us?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                  Expert Team
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Our experienced team understands medical equipment and can
                  help you choose the right solution for your specific needs.
                </p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                  Wide Product Range
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  We offer a comprehensive selection of medical equipment from
                  leading manufacturers worldwide.
                </p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                  Comprehensive Support
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  From installation to maintenance, we provide complete support
                  throughout the product lifecycle.
                </p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                  Competitive Pricing
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Best prices in the market with flexible payment options and
                  rental services available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
