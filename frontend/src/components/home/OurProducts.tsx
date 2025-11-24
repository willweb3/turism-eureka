import Image from "next/image";
import Link from "next/link";

export function OurProducts() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="relative bg-[#F9F5EE] rounded-[32px] overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            {/* Text Content */}
            <div className="p-12 lg:p-16 relative z-10">
              <h2 className="text-dark-900 font-lufga font-semibold text-3xl md:text-4xl lg:text-5xl mb-6">
                Our Products
              </h2>

              <p className="text-neutral-700 font-hanken text-base lg:text-lg leading-relaxed mb-8 max-w-md">
                The Azores offer unique treasures from the Atlantic. Our wines
                come from fertile soils, and our cheeses reflect generations of
                care. Each product celebrates purity and tradition, inviting you
                to taste the islands' authentic, premium essence.
              </p>

              <Link
                href="/products"
                style={{
                  width: "315px",
                  height: "58px",
                  paddingLeft: "24px",
                  paddingRight: "24px",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                  background: "white",
                  boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.05)",
                  overflow: "hidden",
                  borderRadius: "40.97px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    color: "#11212D",
                    fontSize: "14px",
                    fontFamily: "Poppins",
                    fontWeight: 500,
                    lineHeight: "21.50px",
                    wordWrap: "break-word",
                  }}
                >
                  View our products
                </div>
              </Link>
            </div>

            {/* Image - positioned 20px upward to overflow the card */}
            <div className="relative h-[400px] lg:h-[500px] -mt-10">
              <Image
                src="/wine-home.png"
                alt="Azorean wine products"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
