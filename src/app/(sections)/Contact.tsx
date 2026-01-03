import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaTiktok,
  FaInstagram,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
  return (
    <section className='c-space section-spacing' id='contact'>
      <div className='space-y-10'>
        <div className='space-y-4'>
          <h2 className='text-3xl md:text-5xl font-bold'>Contact Me</h2>
          <p className='text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-lg'>
            I am always open to discussing new projects, creative ideas or opportunities to be part
            of your visions.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Contact Info */}
          <div className='p-6 rounded-2xl bg-white border border-gray-100 shadow-sm dark:shadow-none dark:border-none dark:bg-gradient-to-b dark:from-storm dark:to-indigo hover:-translate-y-1 duration-200 flex flex-col justify-center'>
            <h3 className='text-2xl font-bold mb-6'>Get in Touch</h3>
            <div className='space-y-6'>
              <a
                href='tel:+2347077826871'
                className='flex items-center gap-4 text-lg hover:text-royal transition-colors group'
              >
                <span className='p-3 bg-black/5 dark:bg-white/10 rounded-full group-hover:bg-black/10 dark:group-hover:bg-white/20 transition-all'>
                  <FaPhoneAlt />
                </span>
                <span>+234 707 782 6871</span>
              </a>
              <a
                href='mailto:faisalodunuga@gmail.com'
                className='flex items-center gap-4 text-lg hover:text-royal transition-colors group'
              >
                <span className='p-3 bg-black/5 dark:bg-white/10 rounded-full group-hover:bg-black/10 dark:group-hover:bg-white/20 transition-all'>
                  <FaEnvelope />
                </span>
                <span>faisalodunuga@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Socials */}
          <div className='p-6 rounded-2xl bg-white border border-gray-100 shadow-sm dark:shadow-none dark:border-none dark:bg-gradient-to-b dark:from-royal dark:to-lavender hover:-translate-y-1 duration-200 flex flex-col justify-center'>
            <div className='mb-6'>
              <h3 className='text-2xl font-bold mb-2'>Follow Me</h3>
              <p className='text-sm opacity-80'>Stay connected on social media.</p>
            </div>

            <div className='flex flex-wrap gap-4'>
              <SocialLink
                href='https://www.linkedin.com/in/faisal-odunuga'
                icon={<FaLinkedin />}
                label='LinkedIn'
              />
              <SocialLink
                href='https://facebook.com/faisalodunugabosun'
                icon={<FaFacebook />}
                label='Facebook'
              />
              <SocialLink
                href='https://www.tiktok.com/@faisalodunuga'
                icon={<FaTiktok />}
                label='TikTok'
              />
              <SocialLink
                href='https://www.instagram.com/faisalodunugabosun'
                icon={<FaInstagram />}
                label='Instagram'
              />
              <SocialLink href='https://x.com/faisalodunuga' icon={<FaXTwitter />} label='X' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='p-4 bg-black/5 dark:bg-white/10 rounded-full hover:bg-black/10 dark:hover:bg-white/20 hover:scale-110 transition-all text-2xl'
    aria-label={label}
  >
    {icon}
  </a>
);

export default Contact;
