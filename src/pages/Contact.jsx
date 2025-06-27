import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Facebook,
  Instagram,
} from "react-feather";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[oklch(76.8%_0.233_130.85)] via-green-400 to-lime-500 p-8 flex flex-col items-center justify-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white text-gray-800 rounded-2xl shadow-2xl p-10 max-w-5xl w-full grid md:grid-cols-2 gap-8"
      >
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-sea mb-6">Get in Touch</h2>
          <div className="space-y-4">
            <p className="flex items-center gap-3">
              <Mail className="text-sea" /> hello@seacatering.com
            </p>
            <p className="flex items-center gap-3">
              <Phone className="text-sea" /> +62 812 3456 7890
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="text-sea" /> Jl. Kesehatan No. 123, Banjarmasin
            </p>
          </div>

          {/* Social Media */}
          <div className="mt-6">
            <p className="text-lg font-semibold mb-2">Follow us:</p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="hover:text-sea transition" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="hover:text-sea transition" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="hover:text-sea transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="w-full h-64 md:h-full rounded-lg overflow-hidden">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.4895011235347!2d114.5930362758053!3d-3.3194375427378625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de4234b9a346739%3A0xf239e4454e719f07!2sBanjarmasin!5e0!3m2!1sen!2sid!4v1719541280872!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}
