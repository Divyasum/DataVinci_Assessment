import React from 'react';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { CiCircleInfo } from "react-icons/ci";
import { FaHeart } from 'react-icons/fa';
import Popup from 'reactjs-popup';


import 'reactjs-popup/dist/index.css'

import {
  MainContainer,
  SliderWrapper,
  
  StyledSlider,
  Para,
  SlideImage,
  SlideContent,
  SlideText,
  Anchor,

 
  Heading,
  SubHeading,
  InfoButton,
  InfoCard,
  BoldLabel,
  Description,
  ScaleBar,
  ScaleItem,
  CloseButton,
  Container,
  Title,
  RatingRow,
  Hearts,
  ReviewsText,
  Descrip,
  BadgeRow,
  BadgeImage,
  TitleRating,
  RatingReview,
} from './styledComponent';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, left: 10, zIndex: 20, cursor: 'pointer' }}
        onClick={onClick}
      >
        <FaChevronLeft size={24} color="#fff" />
      </div>
    );
  };
  
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, right: 10, zIndex: 20, cursor: 'pointer' }}
        onClick={onClick}
      >
        <FaChevronRight size={24} color="#fff" />
      </div>
    );
  };
const ManukaCarousel = () => {
   


  const images = [
    {
        image: 'https://newzealandhoneyco.com/cdn/shop/files/manuka-honey-umf24-250g-614081.png?v=1715034656&width=1128',
        leftText: 'UMF™ 24+ MGO 1122+',
        rightText: 'Gut, Skin, & Oral Health',
        link: ''
      },
      {image: 'https://newzealandhoneyco.com/cdn/shop/files/manuka-honey-umf26-250g-563830.png?v=1743720346&width=1128',
      leftText: 'UMF™ 26+ MGO 1282+',
      rightText: 'Ease Inflammation & Promote Healing',
      link: ''

      },
      {image: 'https://newzealandhoneyco.com/cdn/shop/files/manuka-honey-umf28-250g-313669.png?v=1743639571&width=1128',
      leftText: 'UMF™ 28+ MGO 1450+',
      rightText: 'Powerful Antibiotic Properties',
      link: ''

      },
      {image: 'https://newzealandhoneyco.com/cdn/shop/files/30_USA.png?v=1733356496&width=1128',
      leftText: 'UMF™ 30+ MGO 162+',
      rightText: 'Clinically Potent',
      link: ''

      },
      {image: 'https://newzealandhoneyco.com/cdn/shop/files/tryme-manuka-honery-kit_NEW.webp?v=1746152832&width=1128',
      leftText: 'UMF™ 20+ MGO 829+',
      rightText: 'Your new wellness ritual',
      link: ''

      },
      {image: 'https://newzealandhoneyco.com/cdn/shop/files/Try_me_Manuak_HOney_Gift_unf_24_NEW.webp?v=1746152707&width=1128',
      leftText: 'UMF™ 24+ MGO 1122+',
      rightText: 'Your new wellness boost',
      link: ''

      },

   
      {image: 'https://newzealandhoneyco.com/cdn/shop/files/manuka-honey-umf20-250g-611528.png?v=1715034656&width=1128',
      leftText: 'UMF™ 24+ MGO 829+',
      rightText: 'Boost Immunity for Colds & Flu',
      link: 'https://www.consumerlab.com/reviews/manuka-honey-comparisons/manuka-honey/'

      }
    
    
    
    
    
  ];


  const badges = [
    'https://newzealandhoneyco.com/cdn/shop/files/umf.jpg?v=1744199012&width=300',
    'https://newzealandhoneyco.com/cdn/shop/files/Non-GMO-Manuka-Honey.png?v=1744199127&width=300',
    'https://newzealandhoneyco.com/cdn/shop/files/Glyphosate-Free-Manuka-Honey.png?v=1744200148&width=300',
    'https://newzealandhoneyco.com/cdn/shop/files/Halal-Manuka-Honey_db3746fe-8b17-4ecf-a583-33cdc9dbb0ae_1.png?v=1744200378&width=300',
    'https://newzealandhoneyco.com/cdn/shop/files/nz-license.jpg?v=1744200737&width=300',
    'https://newzealandhoneyco.com/cdn/shop/files/MGO-Manuka-Honey-NZ-Bl.png?v=1744200635&width=300',
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
 
    autoplay: false,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />, 
  nextArrow: <NextArrow /> 
  };


 
  return (
    <MainContainer>
    <SliderWrapper>
      <StyledSlider {...settings}>
        {images.map((slide, index) => (
          <SlideContent key={index}>
            <SlideText>{slide.leftText}</SlideText>
            <SlideImage src={slide.image} alt={`slide-${index}`} />
            <Para>
              <SlideText>{slide.rightText}</SlideText>
              {slide.link && (
                <Anchor href={slide.link} target="_blank" rel="noopener noreferrer">
                  ConsumerLab.com
                </Anchor>
              )}
            </Para>
          </SlideContent>
        ))}
      </StyledSlider>
    </SliderWrapper>
  
<div>

      <Heading>Manuka Honey</Heading>
      <SubHeading>UMF™ 24+ &nbsp; &nbsp; MGO 1122+</SubHeading>

      
      <div className="popup-container">
   <Popup

   position="bottom center"
   closeOnDocumentClick
   arrow={true}
   
     trigger={
        <InfoButton><CiCircleInfo/> What is UMF and MGO?</InfoButton>
     }
   >
     {close => (
       <>
         
      <InfoCard>
        <BoldLabel>UMF</BoldLabel>
        <Description>
          is the strength and purity rating of Manuka honey.
          The higher the number, the greater the potency and rarity of Manuka honey.
        </Description>
        <ScaleBar>
          <ScaleItem color="#F97316">10+</ScaleItem>
          <ScaleItem color="#EF4444">15+</ScaleItem>
          <ScaleItem color="#C026D3">20+</ScaleItem>
          <ScaleItem color="#8B5CF6">24+</ScaleItem>
          <ScaleItem color="#3B82F6">26+</ScaleItem>
          <ScaleItem color="#22C55E">28+</ScaleItem>
          <ScaleItem color="#10B981">30+</ScaleItem>
        </ScaleBar>
      </InfoCard>

      <InfoCard>
        <BoldLabel>MGO</BoldLabel>
        <Descrip>
          is the key natural compound that gives Manuka honey its special antibacterial strength.
        </Descrip>
        <ScaleBar>
          <ScaleItem color="#F97316">263+</ScaleItem>
          <ScaleItem color="#EF4444">514+</ScaleItem>
          <ScaleItem color="#C026D3">829+</ScaleItem>
          <ScaleItem color="#8B5CF6">1122+</ScaleItem>
          <ScaleItem color="#3B82F6">1282+</ScaleItem>
          <ScaleItem color="#22C55E">1450+</ScaleItem>
          <ScaleItem color="#10B981">1620+</ScaleItem>
        </ScaleBar>
      </InfoCard>
      
      
   
    
    
    
      <CloseButton onClick={close}>Close</CloseButton>
         </>
     )}
   </Popup>
 </div>

 <Container>
    <TitleRating>
      <Title>The Optimiser</Title>
      <RatingReview>
      <RatingRow>
        <Hearts>
          {[...Array(5)].map((_, i) => (
            <FaHeart key={i} />
          ))}
        </Hearts>
        <ReviewsText>825 REVIEWS</ReviewsText>
        
      </RatingRow>
      </RatingReview>
      </TitleRating>
      <Description>
        For those times in life when quality comes first. This pure UMF™ 24+ Manuka Honey is powerfully
        active, sourced from wild and rugged locations around Aotearoa New Zealand and great for almost all
        uses. It has a full, delicious flavour and your body will love you for it.
      </Description>
      <BadgeRow>
        {badges.map((badge, index) => (
          <BadgeImage key={index} src={badge} alt={`Badge ${index + 1}`} />
        ))}
      </BadgeRow>
    </Container>
 
      </div>
    </MainContainer>
  );

};
export default ManukaCarousel;