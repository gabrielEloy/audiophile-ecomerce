import type { NextPage } from "next";

import { Header } from "../src/components/Header";
import { H1, H2, H3, H4, H5, H6 } from "../src/foundation/Typography/headers";
import { OverLine } from "../src/foundation/Typography/overLine";
import { SubTitle } from "../src/foundation/Typography/subTitle";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
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
