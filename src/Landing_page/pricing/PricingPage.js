import OpenAccount from "../OpenAccount";
import Hero from "../pricing/Hero";
import Brokerage from "../pricing/Brokerage";
export default function PricingPage() {
  return (
    <div>
      <Hero />
      <OpenAccount />
      <Brokerage />
    </div>
  );
}
