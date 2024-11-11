export const prerender = false;
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export async function POST({ request }) {
  try {
    const body = await request.json();

    if (!body || Object.keys(body).length === 0) {
      throw new Error("Request body is empty");
    }

    const { to, from, subject, html, text } = body;

    // Debugging log (check server console)
    console.log("Received email data:", { to, from, subject, html, text });

    if (!to || !from || !subject || !html || !text) {
      return new Response(null, {
        status: 404,
        statusText: "Did not provide valid data",
      });
    }

    const send = await resend.emails.send({
      from,
      to,
      subject,
      html,
      text,
    });

    if (send.data) {
      return new Response(
        JSON.stringify({
          message: "Email sent successfully!",
          data: { to, from, subject, text },
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        },
      );
    } else {
      throw new Error("Email sending failed.");
    }
  } catch (error) {
    console.error("Error in POST /api/sendEmail:", error);
    return new Response(
      JSON.stringify({
        error: error.message || "Unknown error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
