import { ProductOffering } from '../src/components/ProductOffering';
import { H1, H2, H3, H4, H5, H6 } from '../src/foundation/Typography/Headers';
import { OverLine } from '../src/foundation/Typography/OverLine';
import { SubTitle } from '../src/foundation/Typography/Subtitle';
import { IImg } from '../src/interfaces/IImg';
import { Highlight } from '../src/pageSections/home/Highlight';
import { ProductsGrid } from '../src/pageSections/home/ProductsGrid';
import HomeStyles from '../styles/HomeStyles';

export async function getStaticProps() {
  const highlight = {
    label: 'New Product',
    title: 'XX99 Mark II Headphones',
    description:
      'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.',
    path: 'undefined for now',
    img: {
      mobile: 'https://audiophile-assets.s3.amazonaws.com/headphone-transparent-background.png',
      tablet: 'https://audiophile-assets.s3.amazonaws.com/headphone-transparent-background.png',
      desktop: 'https://audiophile-assets.s3.amazonaws.com/headphone-transparent-background.png',
    },
  };

  const listings = [
    {
      name: 'Speakers',
      img: 'https://audiophile-assets.s3.amazonaws.com/image-removebg-preview(38).png',
    },
    {
      name: 'Headphones',
      img: 'https://audiophile-assets.s3.amazonaws.com/image-removebg-preview(41).png',
    },
    {
      name: 'Earphones',
      img: 'https://audiophile-assets.s3.amazonaws.com/image-removebg-preview(42).png',
    },
  ];

  return {
    props: {
      highlight,
      listings,
    },
  };
}

interface IHome {
  highlight: {
    label: string;
    title: string;
    description: string;
    path: string;
    img: IImg;
  };
  listings: {
    name: string;
    img: string;
  }[];
}

const Home = (props: IHome) => {
  return (
    <HomeStyles>
      <Highlight
        label="New Product"
        title="XX99 Mark II
       Headphones"
        description="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
        path="undefined for now"
        img={props.highlight.img}
        className="highlight"
      />
      <div className="content">
        <div className="listings">
          {props.listings.map((listing, index) => (
            <ProductOffering image={listing.img} title={listing.name} key={index} />
          ))}
        </div>
        <ProductsGrid />
      </div>
    </HomeStyles>
  );
};

export default Home;
