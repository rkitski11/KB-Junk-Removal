import { Resend } from "resend";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

function formatServices(services) {
  if (!Array.isArray(services) || services.length === 0) {
    return "None selected";
  }
  return services.join(", ");
}

function uploadBufferToCloudinary(buffer, filename) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "kb-junk-removal",
        resource_type: "image",
        public_id: filename ? filename.replace(/\.[^/.]+$/, "") : undefined,
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );

    stream.end(buffer);
  });
}

export async function POST(req) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const formData = await req.formData();

    const name = formData.get("name");
    const phone = formData.get("phone");
    const services = formData.getAll("services");
    const otherDetails = formData.get("otherDetails");
    const details = formData.get("details");
    const contactMethod = formData.get("contactMethod");
    const bestTime = formData.get("bestTime");
    const files = formData.getAll("photos");

    if (!name || !phone) {
      return Response.json(
        { error: "Name and phone are required." },
        { status: 400 }
      );
    }

    const serviceList = formatServices(services);

    const uploadedUrls = [];

    for (const file of files) {
      if (file && typeof file.arrayBuffer === "function" && file.size > 0) {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const result = await uploadBufferToCloudinary(buffer, file.name);
        uploadedUrls.push(result.secure_url);
      }
    }

    const photoLinksHtml =
      uploadedUrls.length > 0
        ? `<p><strong>Photos:</strong></p><ul>${uploadedUrls
            .map((url) => `<li><a href="${url}">${url}</a></li>`)
            .join("")}</ul>`
        : `<p><strong>Photos:</strong> None uploaded</p>`;

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
        ${photoLinksHtml}
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
