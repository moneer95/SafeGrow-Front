import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";


export default function TopBar() {
          {/* Top bar */}
          <div className="bg-black">
          <div className="flex max-w-[2040px] mx-auto md:justify-between items-center px-4 py-4 text-sm">
            <div>
            <div className="text-white">
              Call us:{" "}
              <a href="tel:+000000000000" className="hover:underline text-white">
                +00000000000 &emsp; |
              </a>
              <a href="mailto:SafeGrow@gmail.com" className="hover:underline text-white">
                &emsp; SafeGrow@gmail.com
              </a>
            </div>
            </div>
            <div>
              {/* Social Media Links */}
              <div className="flex text-white space-x-4">
                <a href="https://facebook.com/yourpage" aria-label="Facebook" className="bg-[#87CA2F] p-1 rounded-full">
                  <FaFacebook className="text-white" />
                </a>
                <a href="https://instagram.com/yourpage" aria-label="Instagram" className="bg-[#87CA2F] p-1 rounded-full">
                  <FaInstagram className="text-white" />
                </a>
                <a href="https://twitter.com/yourpage" aria-label="Twitter" className="bg-[#87CA2F] p-1 rounded-full">
                  <FaTwitter className="text-white" />
                </a>
                <a href="https://linkedin.com/in/yourprofile" aria-label="LinkedIn" className="bg-[#87CA2F] p-1 rounded-full">
                  <FaLinkedinIn className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
}