import React from 'react';
import {Container} from 'react-bootstrap';
import MasonryGrid from 'react-masonry-css';
import styled from 'styled-components';

import ContentPage from '#root/components/ContentPage';
import Layout from '#root/components/Layout';

const items = [
  {
    src: '/img/marine-one.jpg'
  },
  {
    src: '/img/national-guard-class.jpg'
  },
  {
    src: '/img/national-guard-class-2.jpg'
  },
  {
    src: '/img/national-guard-class-3.jpg'
  },
  {
    src: '/img/national-guard-class-4.jpg'
  },
  {
    src: '/img/range-2.jpg'
  },
  {
    src: '/img/range-3.jpg'
  },
  {
    src: '/img/range-4.jpg'
  },
  {
    src: '/img/range-5.jpg'
  },
  {
    src: '/img/holster.jpg'
  },
  {
    src: '/img/range.jpg'
  },

  {
    src: '/img/brian-dalton-2.jpg'
  },
  {
    src: '/img/brian-dalton-3.jpg'
  },
  {
    src: '/img/brian-dalton-training.jpg'
  },
  {
    src: '/img/classroom.jpg'
  },
  {
    src: '/img/club-utah-class.jpg'
  },
  {
    src: '/img/firearms-class-2.jpg'
  },
  {
    src: '/img/firearms-class-2.jpg'
  },
  {
    src: '/img/firearms-class-3.jpg'
  },
  {
    src: '/img/firearms-class-4.jpg'
  },
  {
    src: '/img/firearms-class-5.jpg'
  },
  {
    src: '/img/firearms-class-6.jpg'
  },
  {
    src: '/img/firearms-class-7.jpg'
  },
  {
    src: '/img/firearms-class.jpg'
  },
  {
    src: '/img/handicap-accessible.jpg'
  },
  {
    src: '/img/travel-class.jpg'
  },
  {
    src: '/img/travel-class-2.jpg'
  },
  {
    src: '/img/travel-class-3.jpg'
  },
  {
    src: '/img/travel-class-4.jpg'
  },
  {
    src: '/img/travel-class-5.jpg'
  },
  {
    src: '/img/travel-class-6.jpg'
  }
];

const Gallery = styled.div`
  .gallery-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -15px; /* gutter size offset */
    width: auto;
  }
  .gallery-grid__column {
    padding-left: 15px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .gallery-grid__column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: whitesmoke;
    margin-bottom: 15px;
  }
`;

const GridItem = styled.div`
  img {
    height: auto;
    max-width: 100%;
  }
`;

const GalleryPage = () => {
  return (
    <Layout>
      <Container>
        <ContentPage title="Photos">
          <Gallery>
            <MasonryGrid
              breakpointCols={{
                default: 4,
                900: 3,
                700: 2,
                500: 1
              }}
              className="gallery-grid"
              columnClassName="gallery-grid__column"
            >
              {items.map((item, index) => {
                return (
                  <GridItem key={index}>
                    <img key={index} src={item.src} />
                  </GridItem>
                );
              })}
            </MasonryGrid>
          </Gallery>
        </ContentPage>
      </Container>
    </Layout>
  );
};

export default GalleryPage;
