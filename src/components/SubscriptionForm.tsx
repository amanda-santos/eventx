import { FormEvent, ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCreateSubscriberMutation } from "../graphql/generated";

export const SubscriptionForm = (): ReactElement => {
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
  );
};
