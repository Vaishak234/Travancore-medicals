import Link from "next/link";
import { products, categories } from "@/data/products";
import ProductImage from "@/components/ProductImage";
import HeroImage from "@/components/HeroImage";
import type { Metadata } from "next";
import { APP_CONSTANTS } from "@/constants/app.constant";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse our complete range of medical equipment including Auto CPAP, BiPAP, Oxygen Concentrators, Travel CPAP, Portable Oxygen Concentrators, Home Sleep Study devices, and NIV Masks.",
  openGraph: {
    title: `Medical Equipment Products | ${APP_CONSTANTS.name}`,
    description:
      "Complete range of medical equipment for sleep apnea treatment and respiratory care.",
  },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
        <div className="absolute inset-0">
          <HeroImage
            src="/images/product.avif"
            alt="Our Products - Medical Equipment"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
        </div>
        <div className="relative container-custom h-full flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 leading-tight drop-shadow-lg">
              Our Products
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-100 drop-shadow-md">
              Premium medical equipment for sleep apnea treatment and
              respiratory care
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      {/*
      <section className="py-8 bg-gray-50 border-b">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4">
            <Link
              href="/products"
              className="px-6 py-2 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors"
            >
              All Products
            </Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.slug}`}
                className="px-6 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-primary-50 hover:text-primary-600 transition-colors border border-gray-200"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section> */}

      {/* Products Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-400 hover:-translate-y-1"
              >
                {/* Image Section with Medical Badge */}
                <div className="relative h-56 sm:h-64 md:h-72 bg-gradient-to-br from-slate-50 via-white to-primary-50 overflow-hidden">
                  <ProductImage
                    src={product.image}
                    alt={product.name}
                    fill
                    className={`object-cover object-${product.position}`}
                    showFallback={false}
                  />

                  {/* Category Badge */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 z-20">
                    <span className="bg-white/95 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs font-bold text-primary-700 shadow-md border border-primary-100">
                      {categories.find((c) => c.id === product.category)?.name}
                    </span>
                  </div>

                  {/* Overlay Gradient */}
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-6 lg:p-7">
                  {/* Product Title */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-primary-600 transition-colors text-gray-900 leading-tight">
                    {product.name}
                  </h3>

                  {/* Manufacturer Section */}
                  {product.manufacturer && (
                    <div className="mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-gray-100">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1 h-5 sm:h-6 bg-gradient-to-b from-primary-500 to-primary-700 rounded-full"></div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                            Manufactured by
                          </p>
                          <p className="text-sm sm:text-base font-bold text-gray-900">
                            {product.manufacturer}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-5 line-clamp-3 leading-relaxed overflow-hidden text-ellipsis">
                    {product.shortDescription}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-primary-600 font-bold text-xs sm:text-sm inline-flex items-center group-hover:gap-2 gap-1.5 transition-all">
                      View Details
                      <span className="group-hover:translate-x-1 transition-transform text-sm sm:text-base">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-white py-10 sm:py-12 md:py-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">
              Medical Equipment for Sleep Apnea and Respiratory Care
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              {APP_CONSTANTS.name} offers a comprehensive range of medical
              equipment designed to improve the quality of life for patients
              with sleep apnea and respiratory conditions.
            </p>
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="pb-3 sm:pb-4 border-b border-gray-100">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">
                  Auto CPAP Machines
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Advanced automatic continuous positive airway pressure devices
                  that adjust pressure levels throughout the night for optimal
                  sleep apnea treatment.
                </p>
              </div>
              <div className="pb-3 sm:pb-4 border-b border-gray-100">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">
                  BiPAP Machines
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Bi-level positive airway pressure devices providing
                  comfortable respiratory support with dual pressure settings.
                </p>
              </div>
              <div className="pb-3 sm:pb-4 border-b border-gray-100">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">
                  Oxygen Concentrators
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Reliable stationary and portable oxygen concentrators for
                  continuous home oxygen therapy.
                </p>
              </div>
              <div className="pb-3 sm:pb-4 border-b border-gray-100">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">
                  Travel CPAP
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Compact, portable CPAP machines perfect for maintaining
                  therapy while traveling.
                </p>
              </div>
              <div className="pb-3 sm:pb-4 border-b border-gray-100">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">
                  Portable Oxygen Concentrators
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Lightweight, battery-powered devices for active patients
                  requiring supplemental oxygen.
                </p>
              </div>
              <div className="pb-3 sm:pb-4 border-b border-gray-100">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">
                  Home Sleep Study Devices
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Comprehensive home sleep testing solutions for convenient
                  sleep apnea diagnosis.
                </p>
              </div>
              <div className="pb-3 sm:pb-4">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">
                  NIV Masks
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Comfortable and effective non-invasive ventilation masks for
                  CPAP/BiPAP therapy.
                </p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              All our products are sourced from world-renowned manufacturers and
              come with comprehensive warranty and support services. Contact us
              today to find the perfect medical equipment solution for your
              needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
