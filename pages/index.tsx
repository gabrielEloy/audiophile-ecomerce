import { ProductOffering } from '../src/components/ProductOffering';
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

  const announcementsGrid = {
    main: {
      title: 'ZX9 SPEAKER',
      description: 'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.',
      img: 'https://audiophile-assets.s3.amazonaws.com/image-speaker-zx9.png',
    },
  };

  return {
    props: {
      highlight,
      listings,
      announcementsGrid,
    },
  };
}

export interface IAnnouncements {
  main: Main;
}
export interface Main {
  title: string;
  description: string;
  img: string;
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
  announcementsGrid: IAnnouncements;
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
        <ProductsGrid announcements={props.announcementsGrid} />
      </div>
    </HomeStyles>
  );
};

export default Home;
