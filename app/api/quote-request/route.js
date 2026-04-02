import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function formatServices(services) {
  if (!Array.isArray(services) || services.length === 0) {
    return "None selected";
  }
  return services.join(", ");
}

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      phone,
      services,
      otherDetails,
      details,
      contactMethod,
      bestTime,
    } = body;

    if (!name || !phone) {
      return Response.json(
        { error: "Name and phone are required." },
        { status: 400 }
      );
    }

    const serviceList = formatServices(services);

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New KB Junk Removal Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Services:</strong> ${serviceList}</p>
        <p><strong>Other:</strong> ${otherDetails || "N/A"}</p>
        <p><strong>Project Details:</strong> ${details || "N/A"}</p>
        <p><strong>Preferred Contact:</strong> ${contactMethod || "N/A"}</p>
        <p><strong>Best Time:</strong> ${bestTime || "N/A"}</p>
      </div>
    `;

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: ["rkitski11@gmail.com"],
      subject: `New Quote Request from ${name}`,
      html: emailHtml,
      reply_to: "rkitski11@gmail.com",
    });

    return Response.json({
      success: true,
      message:
        "Thank you for your request! We appreciate your business and will be in touch with you shortly.",
    });
  } catch (error) {
    console.error("QUOTE REQUEST ERROR:", error);
    return Response.json(
      { error: "Something went wrong while sending your request." },
      { status: 500 }
    );
  }
}
