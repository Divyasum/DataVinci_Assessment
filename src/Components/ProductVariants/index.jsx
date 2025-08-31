import React, { useState } from "react";
import {
  Container,
  SectionTitle,
  VariantTitle,
  VariantsGrid,
  VariantItem,
  VariantImage,
 

} from "./styledComponent";

 const variants = [
    { id: 1, label: "125g | 4.4oz", img: "https://newzealandhoneyco.com/cdn/shop/files/manuka-honey-nz-umf24-125g-708601.png?v=1743981077&width=713" },
    { id: 2, label: "250g | 8.8oz", img: "https://newzealandhoneyco.com/cdn/shop/files/manuka-honey-umf24-250g-614081.png?v=1715034656&width=713" },
    { id: 3, label: "250g | 8.8oz + 12cm Spoon", img: "https://newzealandhoneyco.com/cdn/shop/files/manuka-honey-umf24-250g-spoon-353657.png?v=1743981077&width=713" },
    { id: 4, label: "500g | 17.6oz", img: "https://newzealandhoneyco.com/cdn/shop/files/manuka-honey-umf24-500g-813039.png?v=1743981077&width=713" },
    {id: 5, label:"500g | 17.6oz + 12cm Spoon",img:"https://newzealandhoneyco.com/cdn/shop/files/manuka-honey-umf24-500g-Spoon-655456.png?v=1743981077&width=713"},
    {id:6, label:"500g | 17.6oz - Squeezy",img:"https://newzealandhoneyco.com/cdn/shop/files/SQUEEZYWEBSITETILES_USSHIPINGONLY_04.png?v=1743981077&width=713"},
    {id:7,label:"250g | 8.8oz + 16 Drops",img:"https://newzealandhoneyco.com/cdn/shop/files/4._16_Drops_24_Product_page_Bundle_2000_x_2000_ce8b8d2b-7bab-47ab-9200-dae924d152e1.png?v=1754349609&width=713"}


  ];


const ProductVariants = () => {
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);

  const handleVariantClick = (variant) => {
    setSelectedVariant(variant);
  };

  return (
    <Container>
      <SectionTitle>SIZE (SELECT ONE)</SectionTitle>
      <VariantTitle>Variant: {selectedVariant.label}</VariantTitle>

      <VariantsGrid>
        {variants.map((variant) => (
          <VariantItem
            key={variant.id}
            selected={variant.id === selectedVariant.id}
            onClick={() => handleVariantClick(variant)}
          >
            <VariantImage src={variant.img} alt={variant.label} />
            
          </VariantItem>
        ))}
      </VariantsGrid>
    </Container>
  );
};

export default ProductVariants;