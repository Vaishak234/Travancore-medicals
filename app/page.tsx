import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { FiPhone, FiArrowRight, FiCheck } from "react-icons/fi";
import ProductImage from "@/components/ProductImage";
import HeroCarousel from "@/components/HeroCarousel";
import FeaturesSection from "@/components/FeaturesSection";
import type { Metadata } from "next";
import { APP_CONSTANTS } from "@/constants/app.constant";

export const metadata: Metadata = {
  description: `${APP_CONSTANTS.name} - ${APP_CONSTANTS.website.description.short}`,
  openGraph: {
    title: `${APP_CONSTANTS.name} - Premium Medical Equipment`,
    description: APP_CONSTANTS.website.description.short,
  },
};

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  // Hero carousel images - add your images here
  const heroImages = ["/img/home.webp", "/img/resmed/resmed.webp"];

  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="relative h-[500px] sm:h-[700px] md:h-[800px] lg:h-[800px] overflow-hidden">
        <div className="absolute inset-0">
          <HeroCarousel
            images={heroImages}
            alt="Medical Equipment for Sleep Apnea and Respiratory Care"
          />
        </div>
        <div className="relative container-custom h-full flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
              Premium Medical Equipment for Sleep & Respiratory Care
            </h1>
            <p className="hidden md:block text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-primary-50 drop-shadow-lg">
              Leading distributor of Auto CPAP, BiPAP, Oxygen Concentrators, and
              world-class respiratory care equipment in India.
            </p>
            <div className="flex flex-row gap-2 sm:gap-4">
              <Link
                href="/products"
                className="btn-primary text-center bg-white text-primary-600 hover:bg-primary-50 shadow-xl text-xs sm:text-base px-4 py-2 sm:px-6 sm:py-3 flex-1 sm:flex-none"
              >
                View Products
              </Link>
              <a
                href={APP_CONSTANTS.contact.phone.tel}
                className="text-center bg-primary-700 text-white border-2 border-white hover:bg-primary-800 shadow-xl text-xs sm:text-base px-4 py-2 sm:px-6 sm:py-3 flex-1 sm:flex-none rounded-lg font-semibold transition-all duration-200"
              >
                <span className="flex items-center justify-center space-x-1 sm:space-x-2">
                  <FiPhone className="w-3 h-3 sm:w-auto sm:h-auto" />
                  <span>Call Us</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Featured Products Section */}
      <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 px-4">
            <div className="inline-block mb-3 sm:mb-4 px-4 sm:px-6 py-1.5 sm:py-2 bg-primary-100 text-primary-700 rounded-full text-xs sm:text-sm font-semibold">
              Featured Products
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Our Exclusive Medical Equipment
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Premium quality medical devices from{" "}
              <span className="font-bold text-primary-600">
                {APP_CONSTANTS.name}
              </span>{" "}
              - Your trusted partner for sleep apnea treatment and respiratory
              care
            </p>
          </div>

          {/* Products Side-by-Side Layout */}
          <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 mb-12 sm:mb-16">
            {featuredProducts.map((product, index) => {
              const productImage = product.image;

              return (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className={`group block ${
                    index % 2 === 0
                      ? "md:flex md:items-center md:gap-8 lg:gap-12"
                      : "md:flex md:flex-row-reverse md:items-center md:gap-8 lg:gap-20"
                  }`}
                >
                  {/* Image Section - Wider */}
                  <div className="md:w-2/5 mb-6 sm:mb-8 md:mb-0">
                    <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-primary-50 to-accent-50 shadow-xl">
                      <ProductImage
                        src={productImage}
                        alt={product.name}
                        fill
                        className={`object-cover object-${product.position}`}
                        showFallback={false}
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:w-3/5 px-4 sm:px-0">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 text-gray-900">
                      {product.name}
                    </h3>
                    {/* Product Label */}
                    {product.label && (
                      <p className="text-lg sm:text-xl md:text-2xl text-primary-600 font-medium mb-4 sm:mb-6">
                        {product.label}
                      </p>
                    )}

                    {/* Full Description Details */}
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                      {product.fullDescription}
                    </p>

                    {/* Key Features */}
                    <div className="mb-4 sm:mb-6 space-y-2 sm:space-y-3">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                        Key Features:
                      </h4>
                      {product.features?.slice(0, 4).map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 sm:gap-3"
                        >
                          <FiCheck
                            className="text-primary-600 mt-1 flex-shrink-0"
                            size={18}
                          />
                          <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-gray-200">
                      <div className="flex items-center gap-2 sm:gap-3 text-primary-600 font-semibold text-base sm:text-lg group-hover:gap-3 sm:group-hover:gap-4 transition-all">
                        <span>View Full Details</span>
                        <FiArrowRight
                          className="group-hover:translate-x-1 transition-transform"
                          size={18}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold text-lg hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>Explore All Products</span>
              <FiArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Need Expert Advice?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-primary-100 max-w-2xl mx-auto">
            Our medical equipment specialists are ready to help you find the
            perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href={APP_CONSTANTS.contact.phone.tel}
              className="btn-primary bg-white text-primary-600 hover:bg-primary-50 text-sm sm:text-base"
            >
              <span className="flex items-center justify-center space-x-2">
                <FiPhone />
                <span>Call {APP_CONSTANTS.contact.phone.formatted}</span>
              </span>
            </a>
            <Link
              href="/contact"
              className="btn-secondary border-white text-primary-600 hover:bg-white text-sm sm:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
