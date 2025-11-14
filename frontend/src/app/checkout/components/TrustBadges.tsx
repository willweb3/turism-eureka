import { CheckCircle2, Lock, Shield } from 'lucide-react';

export default function TrustBadges() {
  return (
    <div className="space-y-4">
      {/* Free Cancellation */}
      <div className="p-6 bg-white rounded-3xl flex items-center gap-4">
        <CheckCircle2 className="w-7 h-7 text-[#10B981] flex-shrink-0" />
        <div>
          <h3 className="text-base font-medium text-[#11212D] font-hanken">
            Free cancellation
          </h3>
          <p className="text-sm text-[#777777] font-hanken">
            Cancel up to 24 hours in advance and get a full refund.
          </p>
        </div>
      </div>

      {/* Security Badges */}
      <div className="p-6 bg-white rounded-3xl flex items-center justify-center gap-4 text-[#A2A3A4]">
        {/* SSL Encryption */}
        <div className="flex items-center gap-2">
          <Lock className="w-[34px] h-[34px]" />
          <div className="text-[9px] font-bold tracking-[0.9px] leading-[10.8px] uppercase font-hanken">
            SECURE<br />SSL ENCRYPTION
          </div>
        </div>

        {/* Safe Checkout */}
        <div className="flex items-center gap-2">
          <Shield className="w-[34px] h-[34px]" />
          <div className="text-[9px] font-bold tracking-[0.9px] leading-[10.8px] uppercase font-hanken">
            GUARANTEED<br />SAFE CHECKOUT
          </div>
        </div>

        {/* Money Back */}
        <div className="flex items-center gap-2">
          <div className="w-[32px] h-[31px] bg-[#A2A3A4] rounded flex items-center justify-center flex-shrink-0">
            <Lock className="w-4 h-4 text-white" />
          </div>
          <div className="text-[9px] font-bold tracking-[0.9px] leading-[10.8px] uppercase font-hanken">
            MONEY BACK<br />GUARANTEE
          </div>
        </div>
      </div>
    </div>
  );
}
