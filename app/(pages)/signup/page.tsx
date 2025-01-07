export const runtime = "edge";

import {
  SignupSteps,
  SignupHero,
  SignupInfo,
  SignupPopup,
} from "@/app/components";
import { registerVisit } from "@/app/api/registerVisit";

export default async function Signup() {
  async function handleVisitRegistration() {
    try {
      const priceData = await registerVisit();
      return priceData;
    } catch (error) {
      console.error("Failed to handle visit registration:", error);
    }
  }

  await handleVisitRegistration();
  return (
    <>
      <SignupSteps />
      <SignupHero />
      <SignupInfo />
      <SignupPopup />
    </>
  );
}
