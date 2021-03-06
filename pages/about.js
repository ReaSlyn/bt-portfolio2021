import prisma from "/components/client";
import Head from "next/head";
import SlidingPuzzle from "/components/about/SlidingPuzzle";
import Info from "/components/about/Info";
import SlidingText from "/components/about/SlidingText";
import Experiences from "/components/about/Experiences";
import Footer from "/components/home/Footer";

/* Get content from Prisma Studio */
export async function getStaticProps() {
  const about = await prisma.about.findMany();
  const recap = await prisma.recap.findMany();
  const exp = await prisma.exp.findMany();
  const footer = await prisma.footer.findMany();
  return {
    props: {
      about: about,
      recap: recap,
      exp: exp,
      footer: footer,
    },
  };
}

/* About page */
function About(props) {
  return (
    <>
      <Head>
        <title>Bich Trâm Cynthia PHAM | About</title>
        {Array(12)
          .fill(0)
          .map((_, index) => (
            <link
              rel="preload"
              href={`/Loader/Animation/images/img_${index}.png`}
              as="image"
              fetchpriority="high"
              key={index}
            />
          ))}
        <link
          rel="preload"
          href="/Loader/Animation/images/img_12.jpg"
          as="image"
          fetchpriority="high"
        />
        <link
          rel="preload"
          href="/Loader/Animation/images/img_13.png"
          as="image"
          fetchpriority="high"
        />
      </Head>
      <SlidingPuzzle />
      <Info {...props} />
      <SlidingText />
      <Experiences {...props} />
      <Footer {...props} />
    </>
  );
}

export default About;
