import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ApplicationForm from "../CreateBusinessForm";
import CreateBusinessForm from "../CreateBusinessForm";

const ChoosePlans = () => {
  const router = useRouter();
  const [isPlanSelected, setIsPlanSelected] = useState("");
  const plans = [
    {
      id: "Free",
      name: "Basic Plan",
      price: "FREE",
      features: [
        "Business Name",
        "Contact Details",
        "Location",
        "Description",
        "Working Hour",
        "Website Links & Social Media",
        "Profile and Cover Photos",
        "3 Gallery Photos",
      ],
    },
    {
      id: "Premium",
      name: "Premium Plan",
      price: "$3.99/Month",
      features: [
        "Business Name",
        "Contact Details",
        "Location",
        "Description",
        "Working Hour",
        "Website Links & Social Media",
        "Profile and Cover Photos",
        "12 Gallery Photos",
        "Premium Verification Badge",
        "Faster Support",
        "Priority Listing",
      ],
    },
  ];

  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">អាជីវកម្ម</h2>
        <p className="text-gray-600">Choose your plan</p>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {plans.map((plan, index) => (
            <Card key={index} className="p-6 shadow-lg w-80 flex flex-col">
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <h5 className="text-lg font-bold mt-3 text-primary">{plan.price}</h5>
              <ul className="mt-3 list-disc list-inside text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button
                  className={`w-full mt-4 !text-white border border-primary hover:!text-primary transition-all duration-300`}
                  onClick={() => router.push(`/business-directory/application-form?plan=${plan.id}`)}
                >
                  Sign Up
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChoosePlans;
