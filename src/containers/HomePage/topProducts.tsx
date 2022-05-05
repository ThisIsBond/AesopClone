import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { Product } from "../../components/product";
import '../../App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SCREENS } from "../../components/responsive";

const CarouselWrapper = styled.div`
 min-height: 200px;
 min-width: 200px;
  ${tw`
    w-full
    h-auto
  `};
  @media(max-width: ${SCREENS.sm}){
    margin-top: 25em;
  }

  @media(max-width: ${SCREENS.md}){
    margin-top: 15em;
  }

  @media(max-width: ${SCREENS.lg}){
    margin-top: 0em;
  }

  @media(max-width: ${SCREENS.xl}){
    margin-top: 0em;
  }
`;

const SliderWrapper = styled.div`

  ${tw`
    pl-10
    pr-10
    justify-center
    items-center
  `};
`;

const MyComponent = styled.div`
  z-index: 20px;
  white-space: nowrap;

  ${tw`
    text-2xl
    text-black
    relative
  `};
`;

const NextArrow = styled.div`

display: block;
position: absolute;
transform: rotate(360deg);

&.slick-next::before {
  content: '';
  position : absolute;
  top: -50%;
  width: 2rem;
  height: 3px;
  transform: rotate(45deg);
  background-color: rgba(0,0,0,0.8);
  transition: all 0.2s;
}
&.slick-next::after {
  content: '';
  top: 50%;
  position : absolute;
  width: 2rem;
  height: 3px;
  transform: rotate(-45deg);
  background-color: rgba(0,0,0,0.8);
  transition: all 0.2s;
}
&.slick-next:hover::before {
  top: -40%;
  transform: rotate(35deg);
}
&.slick-next:hover::after {
  top: 40%;
  transform: rotate(-35deg);
}
`;

const PrevArrow = styled.div`
display: block;
position: absolute;

&.slick-prev::before {
  content: '';
  position : absolute;
  top: -50%;
  width: 2rem;
  height: 3px;
  transform: rotate(-45deg);
  background-color: rgba(0,0,0,0.8);
  transition: all 0.2s;
}
&.slick-prev::after {
  content: '';
  top: 50%;
  position : absolute;
  width: 2rem;
  height: 3px;
  transform: rotate(45deg);
  background-color: rgba(0,0,0,0.8);
  transition: all 0.2s;
}
&.slick-prev:hover::before {
  top: -40%;
  transform: rotate(-35deg);
}
&.slick-prev:hover::after {
  top: 40%;
  transform: rotate(35deg);
}
`;

const Wrapper = styled.div`
  ${tw`
      flex
      items-center
      justify-center
  `};
  @media (min-width: 640px) { // when resolution is above 640px
    &:hover ${NextArrow} { // if DeleteButtonContainer is not under an hovered ContainerSection
      display: none;
    }
  }
`;

function SampleNextArrow(props: any) {
  const { className } = props;
  return (
    <NextArrow className={className} />
  );
}

function SamplePrevArrow(props: any) {
  const { className } = props;
  return (
    <PrevArrow className={className} />
  );
}

export default function TopProducts() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: SampleNextArrow("slick-arrow"),
    prevArrow: SamplePrevArrow("slick-arrow"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <CarouselWrapper>
      <SliderWrapper>
        <Slider {...settings}>
          <MyComponent>
            <Wrapper>
              <Product name="Beacon" thumbnailSrc="https://www.aesop.com/u1nb1km7t5q7/4IdmMVMdZok6iuxnyVH8fS/e270af13627b427d3443c2f696585924/Aesop_Kits_Beacon_Web_Large_1584x962px.png" description="Formulation of express gratitude" />
            </Wrapper>
          </MyComponent>
          <MyComponent>
            <Wrapper>
              <Product name="Beacon" thumbnailSrc="https://www.aesop.com/u1nb1km7t5q7/4IdmMVMdZok6iuxnyVH8fS/e270af13627b427d3443c2f696585924/Aesop_Kits_Beacon_Web_Large_1584x962px.png" description="Formulation of express gratitude" />
            </Wrapper>
          </MyComponent>
          <MyComponent>
            <Wrapper>
              <Product name="Beacon" thumbnailSrc="https://www.aesop.com/u1nb1km7t5q7/4IdmMVMdZok6iuxnyVH8fS/e270af13627b427d3443c2f696585924/Aesop_Kits_Beacon_Web_Large_1584x962px.png" description="Formulation of express gratitude" />
            </Wrapper>
          </MyComponent>
          <MyComponent>
            <Wrapper>
              <Product name="Beacon" thumbnailSrc="https://www.aesop.com/u1nb1km7t5q7/4IdmMVMdZok6iuxnyVH8fS/e270af13627b427d3443c2f696585924/Aesop_Kits_Beacon_Web_Large_1584x962px.png" description="Formulation of express gratitude" />
            </Wrapper>
          </MyComponent>
          <MyComponent>
            <Wrapper>
              <Product name="Beacon" thumbnailSrc="https://www.aesop.com/u1nb1km7t5q7/4IdmMVMdZok6iuxnyVH8fS/e270af13627b427d3443c2f696585924/Aesop_Kits_Beacon_Web_Large_1584x962px.png" description="Formulation of express gratitude" />
            </Wrapper>
          </MyComponent>
          <MyComponent>
            <Wrapper>
              <Product name="Beacon" thumbnailSrc="https://www.aesop.com/u1nb1km7t5q7/4IdmMVMdZok6iuxnyVH8fS/e270af13627b427d3443c2f696585924/Aesop_Kits_Beacon_Web_Large_1584x962px.png" description="Formulation of express gratitude" />
            </Wrapper>
          </MyComponent>
        </Slider>
      </SliderWrapper>
    </CarouselWrapper>
  );
}



