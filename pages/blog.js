import React from "react";
import Head from "next/head";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import FooterLine from "../components/Footer/FooterLine";
import BlogHero from "../components/Hero/BlogHero";
import Blog from "../components/Blogs/Blog";
import { getPosts } from "../ServicesQl";

const blog = ({ posts }) => {
  const activeTab = "/blog";
  const selectedValue = 3;
  return (
    <>
      <Head>
        <title>RM Coderz | Blog</title>
      </Head>
      <Navbar activeTab={activeTab} selectedValue={selectedValue} />
      <BlogHero />
      <Blog posts={posts} />
      <Footer />
      <FooterLine />
    </>
  );
};

export default blog;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
