"use client";

import { HiMapPin, HiPhone, HiEnvelope } from "react-icons/hi2";

export default function Contact() {
  return (
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
                    <a href="tel:+15552345678" className="t hover:underline">
                      +1 (555) 234-5678
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
  );
}
