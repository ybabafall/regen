const PricingSection = () => {
  const pricingTiers = [
    {
      id: 1,
      length: "Courts",
      detail: "au-dessus des épaules",
      price: "180€",
    },
    {
      id: 2,
      length: "Mi-longs",
      detail: "jusqu'aux omoplates",
      price: "200€",
    },
    {
      id: 3,
      length: "Longs",
      detail: "au-delà des omoplates",
      price: "220€",
    },
  ];

  return (
    <section className="py-16 bg-laboratory-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-display font-semibold text-neutral-900 mb-6 tracking-tight">
              Un tarif juste, selon vos cheveux
            </h2>
            <div className="divider-luxe max-w-xs mx-auto mb-6"></div>
            <p className="text-[clamp(0.9375rem,1.75vw,1.0625rem)] text-neutral-900/75 max-w-3xl mx-auto leading-relaxed font-body mb-4">
              Chez RE·GEN, nous valorisons la singularité.<br />
              Notre tarif ne varie pas selon la nature ou la texture de vos cheveux, mais uniquement selon leur longueur réelle :
            </p>
          </div>

          {/* Pricing Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className="bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-neutral-900/10 hover:border-neutral-900/20 transition-all duration-500 hover:shadow-laboratory-medium text-center"
              >
                <h3 className="text-[clamp(1.25rem,2.5vw,1.5rem)] font-display font-semibold text-neutral-900 mb-2 tracking-tight">
                  {tier.length}
                </h3>
                <p className="text-[clamp(0.8125rem,1.5vw,0.875rem)] text-neutral-900/60 font-body mb-4">
                  {tier.detail}
                </p>
                <div className="text-[clamp(2rem,4vw,2.5rem)] font-display font-bold text-neutral-900">
                  {tier.price}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <p className="text-[clamp(0.9375rem,1.75vw,1.0625rem)] text-neutral-900/80 font-body leading-relaxed">
              La coupe des pointes est incluse.
            </p>
            <p className="text-[clamp(0.875rem,1.6vw,1rem)] text-neutral-900/70 font-body leading-relaxed">
              Un acompte de <strong>40 €</strong> est demandé pour confirmer votre réservation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
