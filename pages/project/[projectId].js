import prisma from "/components/client";
import Head from "next/head";
import Banner from "/components/project/Banner";
import Flag from "/components/project/Flag";
import Info from "/components/project/Info";
import Mockup from "/components/project/Mockup";
import BannerPannel from "/components/project/BannerPannel";
import BonusPannel from "/components/project/BonusPannel";
import Footer from "/components/project/Footer";
import FirstMockup from "/components/project/FirstMockup";
import SideBySide from "/components/project/SideBySide";

/* Get content from Prisma Studio */
export async function getStaticProps({params}) {
  const theProject = await prisma.project.findUnique({
    where: {
      id: parseInt(params.projectId),
    },
  });
  const allRoles = await prisma.role.findMany({
    where: {
      projectId: parseInt(params.projectId),
    },
  });
  const allAdj = await prisma.adj.findMany({
    where: {
      projectId: parseInt(params.projectId),
    },
  });
  const thePage = await prisma.page.findFirst({
    where: {
      projectId: parseInt(params.projectId),
    },
  });
  return {
    props: {
      project: theProject,
      roles: allRoles,
      adj: allAdj,
      page: thePage,
    },
  };
}

/* Get the project ID */
export async function getStaticPaths() {
  return {
    paths: new Array(5).fill(null).map((_, index) => ({
      params: {projectId: `${index + 1}`},
    })),
    fallback: false,
  };
}

/* Project page */
function ProjectPage(props) {
  return (
    <>
      <Head>
        <title>Project | {props.project.name}</title>
      </Head>
      <Banner {...props} />
      <Flag {...props} />
      {/* Modulable sections */}
      {Array(props.page.info)
        .fill(null)
        .map((e, i) => (
          <Info key={`info-${i + 1}`} {...props} />
        ))}
      {Array(props.page.firstMockup)
        .fill(null)
        .map((e, i) => (
          <FirstMockup key={`firstMockup-${i + 1}`} {...props} />
        ))}
      {Array(props.page.mockup)
        .fill(null)
        .map((e, i) => (
          <Mockup key={`mockup-${i + 2}`} {...[props, i + 2]} />
        ))}
      {Array(props.page.sidebyside)
        .fill(null)
        .map((e, i) => (
          <SideBySide key={`sideBySide-${i + 1}`} {...props} />
        ))}
      {Array(props.page.bannerPannel)
        .fill(null)
        .map((e, i) => (
          <BannerPannel key={`bannerPannel-${i + 1}`} {...props} />
        ))}
      {Array(props.page.bonusPannel)
        .fill(null)
        .map((e, i) => (
          <BonusPannel key={`bonusPannel-${i + 1}`} {...props} />
        ))}
      <Footer></Footer>
    </>
  );
}

export default ProjectPage;
