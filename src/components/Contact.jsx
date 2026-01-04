"use client";

import { HiMapPin, HiPhone, HiEnvelope } from "react-icons/hi2";

export default function Contact() {
  return (
    <>
      <section className="relative bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                Have a questions? <br /> Contact us now
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                Proin volutpat consequat porttitor cras nullam gravida at. Orci
                molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
              </p>

              <dl className="mt-12 space-y-12 text-gray-700">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <span className="flex h-15 w-15 items-center justify-center rounded-full bg-sky-500 text-white">
                    <HiMapPin className="h-8 w-8" />
                  </span>
                  <div>
                    <dt className="font-bold text-xl">Address</dt>
                    <dd className="mt-1 text-sm">
                      545 ABC Island <br />
                      Shahjahanpur, UP, India
                    </dd>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <span className="flex h-15 w-15 items-center justify-center rounded-full bg-sky-500 text-white">
                    <HiPhone className="h-8 w-8" />
                  </span>

                  <div>
                    <dt className="font-bold text-xl">Telephone</dt>
                    <dd className="mt-1 text-sm">
                      <a href="tel:+919935470545" className="t hover:underline">
                        +91 9935470545
                      </a>
                    </dd>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <span className="flex h-15 w-15 items-center justify-center rounded-full bg-sky-500 text-white">
                    <HiEnvelope className="h-8 w-8" />
                  </span>

                  <div>
                    <dt className="font-bold text-xl">Email</dt>
                    <dd className="mt-1 text-sm">
                      <a
                        href="mailto:info@springpremiumwater.com"
                        className="hover:underline"
                      >
                        info@springpremiumwater.com
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            {/* RIGHT FORM */}
            <form className="rounded-2xl bg-gray-50 p-8 shadow-lg">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112855.03924784278!2d79.76467412180301!3d27.879871040729924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399fbcd7421e411d%3A0x52d38f42aa04eb79!2sShahjahanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1767520705752!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </div>
    </>
  );
}
