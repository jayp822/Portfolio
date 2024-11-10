import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);
export async function GET({ params, request }) {
  const send = await resend.emails.send({
    from: "main@jaydpatel.com",
    to: "jaydpat0822@gmail.com",
    subject: "Hi from astro",
    html: "<p>Hi</p>",
    text: "Hi",
  });

  if (send.data) {
    return new Response(
      JSON.stringify({
        message: send.data,
      }),
      {
        status: 200,
        statusText: "OK",
      },
    );
  } else
  {
    return new Response(
      JSON.stringify({
        message: send.error,
      }),
      {
        status: 500,
        statusText: "Internal Server Error",
      },
    );
  }

  return new Response(
    JSON.stringify({
      name: "Astro",
      url: "https://astro.build/",
    }),
  );
}
