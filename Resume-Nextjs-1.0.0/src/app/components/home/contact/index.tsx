"use client";

import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";

type ContactItem = {
  type: string;
  label: string;
  link: string;
};

type SocialItem = {
  platform: string;
  href: string;
};

type ContactLinks = {
  contactInfo: ContactItem[];
  socialLinks: SocialItem[];
};

const Contact = () => {
  const [contactData, setContactData] = useState<ContactLinks | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();

        setContactData(data?.contactLinks ?? null);
      } catch (error) {
        console.error("Error fetching contact data:", error);
        setContactData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Safe fallback arrays
  const contactInfo = contactData?.contactInfo ?? [];
  const socialLinks = contactData?.socialLinks ?? [];

  return (
    <section className="no-print">
      <div className="container">
        <div className="pt-16 md:pt-32 pb-20">

          {/* Header */}
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-12 md:mb-16">
            <h2>Contact Me</h2>
            <p className="text-xl text-orange-500">( 05 )</p>
          </div>

          {/* Content */}
          <div className="flex flex-col items-center justify-center text-center gap-10">

            {/* Intro */}
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-semibold">Get in Touch</h3>

              <p className="text-secondary max-w-md">
                Feel free to reach out. I usually respond quickly and I’m open
                to new opportunities.
              </p>
            </div>

            {/* Loading */}
            {loading && (
              <p className="text-gray-400">
                Loading contact info...
              </p>
            )}

            {/* Contact Info */}
            {!loading && contactInfo.length > 0 && (
              <div className="flex flex-col items-center gap-4">

                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="text-lg text-primary hover:underline transition"
                  >
                    {item.label}
                  </a>
                ))}

                {/* Social Links */}
                <div className="flex items-center gap-6 mt-4">

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/martin-dangev-b6181a20a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition duration-300"
                  >
                    <Image
                      src={getImgPath("/images/icon/linkedin-icon.svg")}
                      alt="LinkedIn"
                      width={36}
                      height={36}
                    />
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/martin.dangev.73"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition duration-300"
                  >
                    <Image
                      src={getImgPath("/images/icon/facebook-icon.svg")}
                      alt="Facebook"
                      width={36}
                      height={36}
                    />
                  </a>

                </div>
              </div>
            )}

            {/* Optional fallback */}
            {!loading && contactInfo.length === 0 && (
              <p className="text-gray-400">
                No contact information available.
              </p>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;