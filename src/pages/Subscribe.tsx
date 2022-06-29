import { ReactElement } from "react";

import { Logo, SubscriptionForm } from "../components";
import codeMockupImg from "../../src/public/assets/code-mockup.png";

export const Subscribe = (): ReactElement => {
  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex flex-col lg:flex-row items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]  px-12">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            The best platform <br />
            to host your <br />
            <strong className="text-pink-300">online events</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Your best platform to host your online tech events. Here you'll be
            able to add live and recorded lessons with your videos and a
            customized schedule.
          </p>
        </div>

        <div className="p-8 bg-gray-700 lg:border lg:border-gray-500 rounded mt-12 w-full">
          <strong className="text-2xl mb-6 block">
            Subscribe to see a live example
          </strong>

          <SubscriptionForm />
        </div>
      </div>

      <img src={codeMockupImg} alt="React code mockup" />
    </div>
  );
};
