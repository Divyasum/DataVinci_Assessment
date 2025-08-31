// styledComponent.js
import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  font-family:'Roboto';
`;

export const SectionTitle = styled.h5`
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 16px;
  color: #333;
`;

export const VariantTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 20px;
  color: #555;
`;

export const VariantsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const VariantItem = styled.div`
  cursor: pointer;
  border: 2px solid ${props => (props.selected ? "#ffa726" : "#ffffff")};
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  width: 100px;
  transition: border-color 0.3s;

  &:hover {
    border-color: #ffa726;
  }
`;

export const VariantImage = styled.img`
  max-width: 100%;
  align-self: flex-start;
  height: auto;
  margin-bottom: 3px;
`;

