

function Footer() {
  return (
    <footer className="h-100 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-8 h-full flex flex-col justify-between py-16">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2
              className="text-4xl text-stone-900 mb-4"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              BookEra
            </h2>

            <p
              className="text-sm leading-relaxed text-stone-600 max-w-xs"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Curating timeless stories, modern classics, and thoughtful reads
              for every kind of reader.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3
              className="text-2xl text-stone-900 mb-5"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Explore
            </h3>

            <ul
              className="space-y-3 text-sm text-stone-600"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <li>
                <a href="#" className="hover:text-stone-900 transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-900 transition-colors">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-900 transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-900 transition-colors">
                  Authors
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              className="text-2xl text-stone-900 mb-5"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Company
            </h3>

            <ul
              className="space-y-3 text-sm text-stone-600"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <li>
                <a href="#" className="hover:text-stone-900 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-900 transition-colors">
                  Journal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-900 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-900 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3
              className="text-2xl text-stone-900 mb-5"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Stay Connected
            </h3>

            <p
              className="text-sm text-stone-600 mb-4"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Receive thoughtful reading recommendations and exclusive releases.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-white border border-stone-300 outline-none text-sm"
                style={{ fontFamily: "Inter, sans-serif" }}
              />

              <button
                className="px-5 bg-stone-900 text-stone-50 text-sm hover:bg-stone-800 transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4">

          <p
            className="text-sm text-stone-500"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            © 2026 BookEra. All rights reserved.
          </p>

          <div
            className="flex items-center gap-8 text-sm text-stone-500"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <a href="#" className="hover:text-stone-900 transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-stone-900 transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-stone-900 transition-colors">
              Pinterest
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer