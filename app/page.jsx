'use client';
import { useState } from "react";

export default function KBJunkRemovalWebsite() {
  const services = [
    "Yard Waste",
    "Furniture",
    "Hoarder Cleanup",
    "Large Item Removal",
  ];

  const quoteOptions = [
    "Furniture Cleanup",
    "General Trash Removal",
    "Yard Waste",
    "Large Items",
    "Hoarder Cleanup",
    "Appliance Removal",
    "Garage Cleanout",
    "Property Cleanup",
    "Other",
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const selectedServices = formData.getAll("services");

      const payload = new FormData();
      payload.append("name", formData.get("name") || "");
      payload.append("phone", formData.get("phone") || "");
      payload.append("details", formData.get("details") || "");
      payload.append("contactMethod", formData.get("contactMethod") || "");
      payload.append("bestTime", formData.get("bestTime") || "");
      payload.append("otherDetails", formData.get("otherDetails") || "");
      payload.append("services", JSON.stringify(selectedServices));
      payload.append("destinationEmail", "rkitski11@gmail.com");
      payload.append("destinationPhone", "6183675815");

      const photoFiles = formData.getAll("photos");
      photoFiles.forEach((file) => {
        if (file && file.name) {
          payload.append("photos", file);
        }
      });

      const response = await fetch("/api/quote-request", {
        method: "POST",
        body: payload,
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSubmitMessage("Thank you for your request! We appreciate your business and will be in touch with you shortly.");
      form.reset();
    } catch (error) {
      setSubmitMessage(
        "The form design is fixed and ready, but automatic email/text sending still needs the backend route at /api/quote-request connected to a service like Resend + Twilio."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <section className="relative overflow-hidden border-b border-yellow-500/20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_rgba(234,179,8,0.25),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(34,197,94,0.18),_transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-yellow-400/30 bg-zinc-900/70 px-4 py-2 text-sm font-semibold text-yellow-300 shadow-lg shadow-yellow-500/10 backdrop-blur">
                Serving Washington County
              </div>

              <div className="mb-6">
                <h1 className="text-4xl font-black uppercase leading-none tracking-tight md:text-6xl">
                  <span className="text-yellow-400">KB</span>{" "}
                  <span className="text-zinc-100">Junk Removal</span>
                </h1>
                <p className="mt-3 text-lg font-semibold text-zinc-300 md:text-2xl">
                  <span className="text-yellow-400">Reliable Junk Removal Services</span>{" "}
                  <span className="text-white">You Can Trust</span>
                </p>
              </div>

              <p className="max-w-2xl text-base leading-7 text-zinc-300 md:text-lg">
                Fast, dependable junk removal for homes, properties, and cleanup jobs across Washington County.
                We haul away the mess so you do not have to.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:6183675815"
                  className="inline-flex items-center justify-center rounded-2xl bg-yellow-400 px-6 py-4 text-lg font-black text-black shadow-xl shadow-yellow-500/20 transition hover:scale-[1.02]"
                >
                  Call (618) 367-5815
                </a>
                <a
                  href="https://www.facebook.com/share/1ArxuPRrLf/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-blue-500 bg-blue-600 px-6 py-4 text-lg font-bold text-white transition hover:bg-blue-500"
                >
                  Visit Our Facebook
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/80 p-6 shadow-2xl shadow-black/40 backdrop-blur">
                <div className="rounded-[1.5rem] border border-yellow-400/20 bg-gradient-to-br from-zinc-800 to-zinc-950 p-6">
                  <div className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-yellow-300">
                    What We Remove
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {services.map((service) => (
                      <div
                        key={service}
                        className="rounded-2xl border border-zinc-800 bg-black/50 px-4 py-5 text-center text-lg font-bold text-white shadow-lg"
                      >
                        {service}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/10 px-5 py-4 text-center text-sm font-semibold text-green-300">
                    Local service • Straightforward pricing • Quick response
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">Services</h2>
          <p className="mt-3 text-zinc-400">
            Built for quick browsing on phones and easy contact from Facebook, Google, and local customers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "Yard Waste",
              text: "Brush, branches, bags, storm debris, and outdoor cleanup made easy.",
            },
            {
              title: "Furniture Removal",
              text: "Couches, dressers, mattresses, tables, and other bulky furniture hauled away.",
            },
            {
              title: "Hoarder Cleanup",
              text: "Respectful, dependable cleanout help for heavy clutter and difficult jobs.",
            },
            {
              title: "Large Items",
              text: "Appliances, oversized junk, and hard-to-move items removed safely.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-zinc-800 bg-zinc-900 p-6 shadow-xl shadow-black/20"
            >
              <div className="mb-4 inline-flex rounded-full bg-yellow-400/15 px-3 py-1 text-sm font-bold text-yellow-300">
                {item.title}
              </div>
              <p className="leading-7 text-zinc-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <div className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-300">
              Free Quote Request
            </div>
            <h2 className="mt-5 text-3xl font-black tracking-tight md:text-4xl">Get a fast junk removal quote</h2>
            <p className="mt-4 max-w-xl leading-7 text-zinc-400">
              Let customers choose what kind of cleanup they need, leave their contact info, and send you a quick request.
              This works great for Facebook traffic and mobile visitors.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Easy for mobile users",
                "Quick service selection",
                "Helps pre-qualify jobs",
                "Makes quoting faster",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-4 font-semibold text-zinc-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900 p-6 shadow-2xl shadow-black/30">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <h3 className="text-xl font-black text-white">Request a Quote</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Select the services you need and send over a few details.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-zinc-300">Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-yellow-400"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold text-zinc-300">Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="(618) 000-0000"
                    className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-yellow-400"
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm font-bold text-zinc-300">What do you need removed?</label>
                <div className="grid gap-3 sm:grid-cols-2">
                  {quoteOptions.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-zinc-200 transition hover:border-yellow-400/60"
                    >
                      <input
                        type="checkbox"
                        name="services"
                        value={option}
                        className="h-4 w-4 accent-yellow-400"
                      />
                      <span className="font-medium">{option}</span>
                    </label>
                  ))}

                  <input
                    name="otherDetails"
                    type="text"
                    placeholder="If other, please specify..."
                    className="col-span-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-yellow-400"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-zinc-300">Project details</label>
                <textarea
                  name="details"
                  rows={5}
                  placeholder="Tell us what needs to be removed, how much there is, and any helpful details."
                  className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-yellow-400"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-zinc-300">Preferred contact</label>
                  <select
                    name="contactMethod"
                    className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-yellow-400"
                  >
                    <option>Call me</option>
                    <option>Text me</option>
                    <option>Either is fine</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold text-zinc-300">Best time</label>
                  <input
                    name="bestTime"
                    type="text"
                    placeholder="Morning, afternoon, anytime"
                    className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-yellow-400"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-zinc-300">Upload photos (optional)</label>
                <input
                  name="photos"
                  type="file"
                  accept="image/*"
                  multiple
                  className="w-full rounded-2xl border border-dashed border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-zinc-300 outline-none transition file:mr-4 file:rounded-xl file:border-0 file:bg-yellow-400 file:px-4 file:py-2 file:font-bold file:text-black hover:border-yellow-400/60"
                />
                <p className="mt-2 text-xs text-zinc-500">
                  Customers can attach a few pictures to help you price the job faster.
                </p>
              </div>

              {submitMessage ? (
                <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/10 px-4 py-3 text-sm font-medium text-yellow-200">
                  {submitMessage}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-2xl bg-yellow-400 px-6 py-4 text-lg font-black text-black shadow-xl shadow-yellow-500/20 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Submit Quote Request"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-zinc-900/60">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">Why people call KB Junk Removal</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  "Fast response",
                  "Reliable service",
                  "Locally focused",
                  "Easy scheduling",
                  "Clear communication",
                  "Built for mobile calls",
                ].map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-4 font-semibold text-zinc-200"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-yellow-400 to-yellow-500 p-[1px] shadow-2xl shadow-yellow-500/10">
              <div className="rounded-[2rem] bg-zinc-950 p-8 text-center">
                <div className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">Call Today</div>
                <div className="mt-4 text-4xl font-black text-white md:text-5xl">(618) 367-5815</div>
                <p className="mt-4 text-zinc-400">
                  Serving Washington County with dependable junk removal you can trust.
                </p>
                <a
                  href="tel:6183675815"
                  className="mt-6 inline-flex rounded-2xl bg-yellow-400 px-6 py-4 text-lg font-black text-black transition hover:scale-[1.02]"
                >
                  Tap to Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8 pt-10 md:px-10">
        <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/80 p-6 text-sm text-zinc-400">
          <p className="font-semibold text-zinc-200">Automatic send setup</p>
          <p className="mt-2 leading-7">
            The page is now fixed and ready for a backend endpoint at <span className="text-yellow-300">/api/quote-request</span>.
            That endpoint can send the form to <span className="text-yellow-300">rkitski11@gmail.com</span> and text
            <span className="text-yellow-300"> (618) 367-5815</span> using services like Resend and Twilio.
          </p>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-zinc-500 md:px-10">
        <div className="mb-3">
          <a
            href="https://www.facebook.com/share/1ArxuPRrLf/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-blue-400 hover:text-blue-300"
          >
            Follow us on Facebook
          </a>
        </div>
        © {new Date().getFullYear()} KB Junk Removal • Serving Washington County
      </footer>
    </div>
  );
}
