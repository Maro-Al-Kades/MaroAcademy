"use client";

import React from "react";
import { Link, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

const footerLinks = {
  courses: [
    { name: "Web Development", href: "#" },
    { name: "Data Science", href: "#" },
    { name: "Business", href: "#" },
    { name: "Design", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Blog", href: "#" },
  ],
  resources: [
    { name: "Help Center", href: "#" },
    { name: "Community", href: "#" },
    { name: "Partners", href: "#" },
    { name: "Newsletter", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

const socialLinks = [
  { name: "Twitter", icon: "lucide:twitter", href: "#" },
  { name: "LinkedIn", icon: "lucide:linkedin", href: "#" },
  { name: "GitHub", icon: "lucide:github", href: "#" },
  { name: "YouTube", icon: "lucide:youtube", href: "#" },
];

export function Footer() {
  return (
    <footer className="w-full bg-primary-500 border-t border-divider">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Icon
                icon="gravity-ui:mortarboard"
                className="text-2xl text-white"
              />
              <span className="font-bold text-xl text-white">MaroAcademy</span>
            </div>
            <p className="text-sm text-white/70 mb-4">
              Empowering learners worldwide with quality education and
              innovative learning solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  isExternal
                  className="text-white hover:text-primary"
                >
                  <Icon icon={social.icon} className="text-xl" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Courses</h3>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Divider />

        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} MaroAcademy. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-white hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
