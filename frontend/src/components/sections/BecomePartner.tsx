import Image from 'next/image';
import Link from 'next/link';

const STEPS = [
  {
    number: 1,
    title: 'Basic Information',
  },
  {
    number: 2,
    title: 'Submit your activity for review',
  },
  {
    number: 3,
    title: 'Start earning',
  },
];

const PARTNER_LOGOS = [
  { name: 'Instacart', logo: '/partners/instacart.svg' },
  { name: 'Shopify', logo: '/partners/shopify.svg' },
  { name: 'Klarna', logo: '/partners/klarna.svg' },
  { name: 'Reddit', logo: '/partners/reddit.svg' },
];

export function BecomePartner() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80"
          alt="Azorean volcanic landscape"
          fill
          className="object-cover"
          priority={false}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Decorative Lines */}
      <div className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none z-10">
        <svg viewBox="0 0 128 600" className="w-full h-full opacity-20">
          <path
            d="M 0 0 Q 64 100 0 200 T 0 400 T 0 600"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 20 0 Q 84 100 20 200 T 20 400 T 20 600"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none z-10">
        <svg viewBox="0 0 128 600" className="w-full h-full opacity-20">
          <path
            d="M 128 0 Q 64 100 128 200 T 128 400 T 128 600"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 108 0 Q 44 100 108 200 T 108 400 T 108 600"
            stroke="white"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-white font-lufga font-semibold text-4xl lg:text-5xl mb-4">
            Become a partner
          </h2>

          {/* Subtitle */}
          <p className="text-white/90 font-hanken text-base lg:text-lg mb-12 max-w-2xl mx-auto">
            Connect seamlessly with 250+ connectivity partners.
            <br />
            Create your activity on Azoreon for free under 30 minutes.
          </p>

          {/* Steps */}
          <div
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              gap: '32px',
              display: 'inline-flex',
              marginBottom: '48px',
            }}
          >
            {/* Step 1 */}
            <div
              style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '8px',
                display: 'flex',
              }}
            >
              <div
                style={{
                  width: '37.50px',
                  height: '38px',
                  position: 'relative',
                  mixBlendMode: 'multiply',
                  background: '#616161',
                  borderRadius: '30px',
                }}
              />
              <div
                style={{
                  width: '22.50px',
                  textAlign: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  color: '#65CDC2',
                  fontSize: '17.50px',
                  fontFamily: 'Lufga',
                  fontWeight: 600,
                  lineHeight: '22.75px',
                  wordWrap: 'break-word',
                  marginLeft: '-30px',
                }}
              >
                1
              </div>
              <div
                style={{
                  flex: '1 1 0',
                  justifyContent: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  color: 'white',
                  fontSize: '16px',
                  fontFamily: 'Hanken Grotesk',
                  fontWeight: 400,
                  lineHeight: '24px',
                  wordWrap: 'break-word',
                }}
              >
                Basic <br />
                Information
              </div>
            </div>

            {/* Divider 1 */}
            <div
              style={{
                width: '60px',
                height: '0px',
                transform: 'rotate(-90deg)',
                transformOrigin: 'top left',
                opacity: 0.5,
                border: '1px #D6D8DF solid',
              }}
            />

            {/* Step 2 */}
            <div
              style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '8px',
                display: 'flex',
              }}
            >
              <div
                style={{
                  width: '37.50px',
                  height: '38px',
                  position: 'relative',
                  mixBlendMode: 'multiply',
                  background: '#616161',
                  borderRadius: '30px',
                }}
              />
              <div
                style={{
                  width: '22.50px',
                  textAlign: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  color: '#65CDC2',
                  fontSize: '17.50px',
                  fontFamily: 'Lufga',
                  fontWeight: 600,
                  lineHeight: '22.75px',
                  wordWrap: 'break-word',
                  marginLeft: '-30px',
                }}
              >
                2
              </div>
              <div
                style={{
                  flex: '1 1 0',
                  justifyContent: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  color: 'white',
                  fontSize: '16px',
                  fontFamily: 'Hanken Grotesk',
                  fontWeight: 400,
                  lineHeight: '24px',
                  wordWrap: 'break-word',
                }}
              >
                Submit your activity for review
              </div>
            </div>

            {/* Divider 2 */}
            <div
              style={{
                width: '60px',
                height: '0px',
                transform: 'rotate(-90deg)',
                transformOrigin: 'top left',
                opacity: 0.5,
                border: '1px #D6D8DF solid',
              }}
            />

            {/* Step 3 */}
            <div
              style={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '8px',
                display: 'flex',
              }}
            >
              <div
                style={{
                  width: '37.50px',
                  height: '38px',
                  position: 'relative',
                  mixBlendMode: 'multiply',
                  background: '#616161',
                  borderRadius: '30px',
                }}
              />
              <div
                style={{
                  width: '22.50px',
                  textAlign: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  color: '#65CDC2',
                  fontSize: '17.50px',
                  fontFamily: 'Lufga',
                  fontWeight: 600,
                  lineHeight: '22.75px',
                  wordWrap: 'break-word',
                  marginLeft: '-30px',
                }}
              >
                3
              </div>
              <div
                style={{
                  justifyContent: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  color: 'white',
                  fontSize: '16px',
                  fontFamily: 'Hanken Grotesk',
                  fontWeight: 400,
                  lineHeight: '24px',
                  wordWrap: 'break-word',
                }}
              >
                Start
                <br />
                earning
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-16">
            <Link
              href="/become-partner"
              className="inline-block px-12 py-4 bg-primary-500 hover:bg-primary-600 text-dark-900 font-hanken font-semibold text-base rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Partner Logos */}
          <div className="flex items-center justify-center gap-12 lg:gap-16 flex-wrap opacity-80">
            {PARTNER_LOGOS.map((partner) => (
              <div
                key={partner.name}
                className="relative h-8 w-24 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="text-white font-hanken font-medium text-sm">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
