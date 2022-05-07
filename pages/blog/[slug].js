import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Footer from "../../components/Footer/Footer";
import FooterLine from "../../components/Footer/FooterLine";
import Navbar from "../../components/Navbar/Navbar";
import DetailBlog from "../../components/Blogs/DetailBlog";
import BlogHero from "../../components/Hero/BlogHero";
import Loader from "../../components/Blogs/Loader";
import { getPostDetails, getPosts } from "../../ServicesQl";

const PostDetails = ({ post, slug }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }
  const activeTab = `/blog/${slug}`;
  const selectedValue = 3;
  return (
    <>
      <Head>
        <title>RM Coderz | Blog</title>
      </Head>
      <Navbar activeTab={activeTab} selectedValue={selectedValue} />
      <BlogHero />
      <DetailBlog blog={post} />
      <Footer />
      <FooterLine />
    </>
  );
};

export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
