export function TheAzoresIntro() {
  return (
    <section className="bg-[#F1F6F8] pb-16 lg:pb-20 relative z-20">
      <div
        className="container mx-auto px-6 lg:px-12 max-w-7xl"
        style={{ position: "relative", height: "300px" }}
      >
        <div
          className="flex flex-col lg:flex-row gap-6"
          style={{ position: "absolute", top: "-50px" }}
        >
          {/* About Block - Larger */}
          <div className="flex-1 bg-white rounded-3xl p-6 shadow-lg">
            <h2 className="text-[#11212D] font-hanken font-bold text-2xl mb-4">
              About São Miguel
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-[#777777] font-hanken text-base leading-6">
                <p className="mb-4">
                  Known as the Green Island, São Miguel is the largest and most
                  diverse of Portugal's Azores archipelago. Nestled in the heart
                  of the Atlantic Ocean, this island is a paradise of lush
                  landscapes, volcanic wonders, and breathtaking coastal views.
                </p>
                <p>
                  Explore the enchanting Sete Cidades twin lakes, where shades
                  of blue and green create a picture-perfect scene. Relax in the
                  natural hot springs of Furnas, surrounded by steaming
                  fumaroles and botanical gardens.
                </p>
              </div>
              <div className="text-[#777777] font-hanken text-base leading-6">
                <p className="mb-4">
                  Adventure seekers can hike along crater rims, dive into
                  emerald lagoons, or go whale watching in the deep blue waters
                  offshore.
                </p>
                <p>
                  São Miguel also offers a taste of authentic Azorean culture —
                  from cozy seaside villages to fresh local cuisine featuring
                  seafood, pineapples, and the unique Cozido das Furnas, a
                  traditional stew slow-cooked underground by volcanic heat.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Block - Smaller */}
          <div className="lg:w-[281px] bg-white rounded-3xl p-6 shadow-lg flex flex-col justify-between">
            {/* Population */}
            <div className="flex flex-col gap-1">
              <div className="text-[#11212D]/70 font-hanken text-lg">
                Population
              </div>
              <div className="text-black font-lufga font-medium text-2xl">
                137,800
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#ECE8E8] my-4"></div>

            {/* Area */}
            <div className="flex flex-col gap-1">
              <div className="text-[#11212D]/70 font-hanken text-lg">Area</div>
              <div className="text-black font-lufga font-medium text-2xl">
                747km²
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#ECE8E8] my-4"></div>

            {/* Capital */}
            <div className="flex flex-col gap-1">
              <div className="text-[#11212D]/70 font-hanken text-lg">
                Capital
              </div>
              <div className="text-black font-lufga font-medium text-2xl">
                Ponta Delgada
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
