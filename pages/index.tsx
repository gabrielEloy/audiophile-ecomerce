import type { NextPage } from "next";

import { H1, H2, H3, H4, H5, H6 } from "../src/foundation/Typography/Headers";
import { OverLine } from "../src/foundation/Typography/OverLine";
import { SubTitle } from "../src/foundation/Typography/subTitle";
import { Highlight } from "../src/pageSections/home/Highlight";

export async function getStaticProps() {
  const highlight = {
    label: "New Product",
    title: "XX99 Mark II Headphones",
    description:
      "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
    path: "undefined for now",
    img: `https://audiophile-assets.s3.amazonaws.com/earphone.png`,
  };

  return {
    props: {
      highlight,
    },
  };
}

interface IHome {
  label: string;
  title: string;
  description: string;
  path: string;
  img: string;
}



const Home = (props: IHome) => {
  console.log({ props });
  return (
    <div>
      <Highlight
        label="New Product"
        title="XX99 Mark II
       Headphones"
        description="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
        path="undefined for now"
        img={props.img}
      />
      <H1>teste de H1</H1>
      <H2>teste de H2</H2>
      <H3>teste de H3</H3>
      <H4>teste de H4</H4>
      <H5>teste de H5</H5>
      <H6>teste de H6</H6>
      <OverLine>Teste de overline</OverLine>
      <SubTitle>Teste de subtitle</SubTitle>
    </div>
  );
};

export default Home;
