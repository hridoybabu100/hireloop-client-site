import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-r from-violet-600 to-purple-500 text-white font-bold">
                P
              </div>

              <div>
                <h2 className="font-bold text-white">Programming Hero</h2>
                <p className="text-sm text-gray-400">Learn. Build. Grow.</p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              Empowering developers with practical skills, real-world projects,
              and career opportunities.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-5 font-semibold text-white">Product</h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/jobs"
                  className="text-gray-400 transition hover:text-white"
                >
                  Browse Jobs
                </Link>
              </li>

              <li>
                <Link
                  href="/courses"
                  className="text-gray-400 transition hover:text-white"
                >
                  Courses
                </Link>
              </li>

              <li>
                <Link
                  href="/roadmaps"
                  className="text-gray-400 transition hover:text-white"
                >
                  Roadmaps
                </Link>
              </li>

              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 transition hover:text-white"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 font-semibold text-white">Company</h3>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 transition hover:text-white"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 transition hover:text-white"
                >
                  Careers
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 transition hover:text-white"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 transition hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-5 font-semibold text-white">Stay Updated</h3>

            <p className="mb-4 text-sm text-gray-400">
              Get the latest news and updates directly in your inbox.
            </p>

            <div className="flex overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full bg-transparent px-4 py-3 text-white outline-none"
              />

              <button className="bg-white px-5 font-medium text-black">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
          <p>© 2026 Programming Hero. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>

            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>

            <Link href="/cookies" className="hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
