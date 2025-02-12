import React from "react";
import SectionTitle from "./SectionTitle";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

function FooterSection() {
  return (
    <section
      id="contact"
      className="bg-white text-black flex flex-col items-center py-8"
    >
      <SectionTitle title="CONTACT US" boxColor="#ff8686" lineColor="#d2c4c3" />
      <span className="text-lg mt-2">Ways to Reach Us</span>

      <div className="container text-center mt-6">
        <div className="flex flex-col md:flex-row justify-around">
          {/* Contact Info */}
          <div className="my-4 md:w-1/2 flex flex-col items-center">
            <h4 className="text-xl font-semibold mb-2">Get in Touch</h4>
            <p className="w-fit flex self-center gap-2">
              <Mail />
              Email:
              <a
                href="mailto:thewomenstory.contactus@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline ml-1"
              >
                thewomenstory.contactus@gmail.com
              </a>
            </p>
            <p className="flex gap-2">
              <Phone />
              Phone:
              <a
                href="tel:+919540752245"
                className="text-blue-600 hover:underline ml-1"
              >
                +91 9540752245
              </a>
            </p>
            {/* Social Links */}
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="https://www.instagram.com/the.women.story/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
              <a
                href="https://www.facebook.com/people/TheWomenStory/61555195094833/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
              <a
                href="https://www.linkedin.com/company/the-women-story/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
            </div>
          </div>

          {/* Location Info */}
          <div className="my-4 md:w-1/2">
            <h4 className="text-xl font-semibold mb-2">Location</h4>
            <div className="flex justify-center items-center">
              <MapPin />
              <address>Delhi, India</address>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 border-t pt-4">
          <p className="text-sm">© 2024, TheWomenStory</p>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
