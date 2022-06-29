import { FormEvent, ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCreateSubscriberMutation } from "../graphql/generated";

import { Logo } from "../components";
import codeMockupImg from "../../src/public/assets/code-mockup.png";

export const Subscribe = (): ReactElement => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate("/event");
  };

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

          <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Your full name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-pink-500 uppercase py-4 rounded font-bold text-sm hover:bg-pink-700 transition-colors disabled:opacity-50"
            >
              Secure my spot
            </button>
          </form>
        </div>
      </div>

      <img src={codeMockupImg} alt="React code mockup" />
    </div>
  );
};
