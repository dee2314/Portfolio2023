import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full font-medium text-lg dark:text-light sm:text-base
        "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; Dee | All Rights Reserved</span>
        <div className="flex item-center lg:py-2">
        <span className="text-primary dark:text-primaryDark
           text-2xl px-1">&#9825;</span>
          &nbsp;
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
