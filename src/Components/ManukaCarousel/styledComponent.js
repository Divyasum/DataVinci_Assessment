import styled from 'styled-components';
import Slider from 'react-slick';

export const MainContainer= styled.div`
@media (max-width: 767px) {
   display:flex;
   flex-direction:column;
   flex:1;
   justify-content:center;
  }
@media (min-width: 1024px) {
    display:flex;
    flex-direction:row;
    flex:1;
    align-items: flex-start;
    justify-content:center;
    
}
    font-family:'Roboto';

`;

export const SliderWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;


  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

export const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Style custom arrows */
  .slick-prev,
  .slick-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20;
    width: 40px;
    height: 40px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    display: flex !important;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .slick-prev {
    left: 10px;
  }

  .slick-next {
    right: 10px;
  }

  /* Hide default slick arrows */
  .slick-prev:before,
  .slick-next:before {
    display: none;
  }
`;
export const SlideContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: nowrap;
 width: 500px;
  padding: 1rem;
`;



export const Heading = styled.h2`
  font-size: 1.5rem;
  text-align: left;
  margin-bottom: 0.2rem;
  font-weight: 300;
`;

export const SubHeading = styled.h3`
  font-size: 1.25rem;
  text-align: left;
  margin-bottom: 1rem;
  font-weight: 300;
`;

export const InfoButton = styled.button`
  display: inline-block;
  margin: 0 0 1.5rem auto;
  background: #e5e5e5;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-size: 0.9rem;
  cursor: pointer;
  
`;

export const InfoCard = styled.div`
  background: #fafafa;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

export const BoldLabel = styled.div`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;

export const Para = styled.p`
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
`;

export const ScaleBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const ScaleItem = styled.div`
  color: ${props => props.color || '#ccc'};
  text-decoration: underline;
  text-decoration-color: ${props => props.color || '#ccc'};
  text-decoration-thickness: 2px;
  font-size: 0.75rem;
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
`;


export const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SlideImage = styled.img`
  width: 250px;
  height: auto;
  
`;


export const SlideText = styled.div`
  
  
  font-size: 1rem;
  text-align: center; /* center the text */
`;

export const Anchor = styled.a`
  
  
  
  text-align: center; 
`;





export const CloseButton = styled.button`
display: block;
margin: 1rem auto 0 auto;  /* center horizontally */
padding: 0.5rem 1rem;
font-size: 1rem;
cursor: pointer;
border: none;
text-decoration:underline;
color: black;
background-color:transparent;
border-radius: 5px;
`;



export const Container = styled.div`
  max-width: 700px;
  
  font-family: 'Arial', sans-serif;
  color: #1a1a1a;
  
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 1.5rem;

  font-weight: 300;
  text-align: left;
`;

export const RatingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 1rem;
`;

export const Hearts = styled.div`
  color: #fbbf24; /* amber-400 */
  display: flex;
  gap: 0.2rem;
`;

export const ReviewsText = styled.span`
  font-size: 0.85rem;
  letter-spacing: 0.1em;
`;

export const Descrip = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  max-width: 600px;
  margin-bottom: 1.5rem;
`;

export const BadgeRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

export const BadgeImage = styled.img`
  height: 48px;
  width: auto;
  object-fit: contain;
`;
export const TitleRating=styled.div`
display: flex;
justify-content:space-between;


`;
export const RatingReview = styled.div`
display: flex;
justify-content:space-around;

`;