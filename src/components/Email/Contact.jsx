import { useRef, useState } from "react";

export default function Contact() {
  const [isSubmited, setIsSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      from: "main@jaydpatel.com",
      to: "main@jaydpatel.com",
      subject: event.target.subject.value,
      html: "<p>Sent</p>",
      text: `Sender's Email: ${event.target.email.value} \nMessage: ${event.target.text.value}`,
    };

    try {
      const response = await fetch("/api/sendEmail.json", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send email");

      const result = await response.json();

      // Set the state to true when the email is successfully sent
      setIsSubmitted(true);

      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex w-full flex-col mb-[100px]">
      <h1 className="relative mx-auto mb-[40px] mt-[8rem] inline-block text-nowrap text-center text-2xl font-bold before:absolute before:-bottom-1 before:left-0 before:h-[0.3rem] before:w-full before:rounded-full before:bg-pink-500 sm:text-3xl lg:text-4xl">
        Contact
      </h1>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mx-auto flex w-[85%] max-w-[40rem] flex-col items-center justify-center gap-4 text-balance rounded-lg border bg-neutral-800 px-4 py-6 text-xl text-black shadow-md sm:w-[75%] md:w-[65%] lg:w-[55%]"
      >
        <div className="flex w-[85%] flex-col">
          <label htmlFor="email" className="font-medium text-white">
            Email:
          </label>
          <input
            type="email"
            name="email"
            required
            className="mt-1 rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex w-[85%] flex-col">
          <label htmlFor="subject" className="font-medium text-white">
            Name:
          </label>
          <input
            type="text"
            name="subject"
            required
            className="mt-1 rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex w-[85%] flex-col">
          <label htmlFor="text" className="font-medium text-white">
            Message:
          </label>
          <textarea
            name="text"
            required
            className="mt-1 h-24 rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Conditionally rendering the submit button */}
        <button
          type="submit"
          disabled={isSubmited} // Disable button if isSubmited is true
          className={`w-[85%] max-w-[20rem] rounded-md sm:w-[75%] md:w-[65%] lg:w-[55%] ${
            isSubmited
              ? "bg-blue-600 opacity-60"
              : "bg-blue-600 transition duration-200 ease-out hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 sm:hover:bg-pink-500"
          } px-4 py-2 font-semibold text-white focus:outline-none`}
        >
          {isSubmited ? "Message Sent!" : "Send"}
        </button>
      </form>
    </div>
  );
}
