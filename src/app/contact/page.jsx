import Navbar from "../../components/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar
        darkMode={true}
      />

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
              <div>
                <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900">Get in touch</h2>
                <p className="mt-4 text-base/7 text-gray-600">
                  .
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base/7 font-semibold text-gray-900">Email Contacts</h3>
                  <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                    <div>
                      <dt className="sr-only">Info Email</dt>
                      <dd>
                        <a href="mailto:info@safe-grow.com" className="font-semibold text-[#009688]">
                          info@safe-grow.com
                        </a>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Programs Email</dt>
                      <dd>
                        <a href="mailto:programs@safe-grow.com" className="font-semibold text-[#009688]">
                          programs@safe-grow.com
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>


    </>
  );
}
