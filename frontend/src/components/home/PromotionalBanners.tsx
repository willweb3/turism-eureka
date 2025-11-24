import Image from 'next/image';

export function PromotionalBanners() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-16">
          {/* First Banner - 20% Previous Travelers */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '74px',
            }}
          >
            {/* Image Card */}
            <div
              style={{
                width: '544px',
                height: '314px',
                position: 'relative',
                flexShrink: 0,
              }}
            >
              <Image
                src="/image-discount-20.png"
                alt="20% discount for previous travelers"
                fill
                className="object-contain"
              />
            </div>

            {/* Text Content */}
            <div
              style={{
                width: '508px',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '24px',
                display: 'inline-flex',
                flexShrink: 0,
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  position: 'relative',
                  background: '#3CB8AC',
                  overflow: 'hidden',
                  borderRadius: '51px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src="/Icon-discount.svg"
                  alt="Discount icon"
                  width={32}
                  height={32}
                />
              </div>

              <div
                style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '12px',
                  display: 'flex',
                }}
              >
                {/* Title */}
                <div
                  style={{
                    width: '467.01px',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    color: '#11212D',
                    fontSize: '36px',
                    fontFamily: 'Lufga',
                    fontWeight: 600,
                    wordWrap: 'break-word',
                  }}
                >
                  Get 20% Discounts for <br />
                  Previous Travelers
                </div>

                {/* Description */}
                <div
                  style={{
                    alignSelf: 'stretch',
                    height: '72.47px',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    color: '#777777',
                    fontSize: '16px',
                    fontFamily: 'Hanken Grotesk',
                    fontWeight: 400,
                    lineHeight: '26.24px',
                    wordWrap: 'break-word',
                  }}
                >
                  Enjoy a 20% discount on exclusive travel packages for our
                  valued travelers. Whether you want early bird specials or
                  last-minute adventures, we have the perfect deal for you!
                </div>
              </div>
            </div>
          </div>

          {/* Second Banner - 10€ Couples */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '74px',
            }}
          >
            {/* Text Content */}
            <div
              style={{
                width: '508px',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '24px',
                display: 'inline-flex',
                flexShrink: 0,
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  position: 'relative',
                  background: '#E57643',
                  overflow: 'hidden',
                  borderRadius: '51px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src="/icon-love.svg"
                  alt="Love icon"
                  width={32}
                  height={32}
                />
              </div>

              <div
                style={{
                  alignSelf: 'stretch',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '12px',
                  display: 'flex',
                }}
              >
                {/* Title */}
                <div
                  style={{
                    width: '467.01px',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    color: '#11212D',
                    fontSize: '36px',
                    fontFamily: 'Lufga',
                    fontWeight: 600,
                    wordWrap: 'break-word',
                  }}
                >
                  Get 10€ Discounts for <br />
                  Couples in Restaurants
                </div>

                {/* Description */}
                <div
                  style={{
                    alignSelf: 'stretch',
                    height: '72.47px',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    color: '#777777',
                    fontSize: '16px',
                    fontFamily: 'Hanken Grotesk',
                    fontWeight: 400,
                    lineHeight: '26.24px',
                    wordWrap: 'break-word',
                  }}
                >
                  Enjoy a 30% discount on exclusive travel packages for our
                  valued travelers. Whether you want early bird specials or
                  last-minute adventures, we have the perfect deal for you!
                </div>
              </div>
            </div>

            {/* Image Card */}
            <div
              style={{
                width: '544px',
                height: '314px',
                position: 'relative',
                flexShrink: 0,
              }}
            >
              <Image
                src="/image-price-couple.png"
                alt="10€ discount for couples"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
