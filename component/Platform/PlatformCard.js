import React from "react";
import { CardContainer, IconWrapper, NameText } from "./Platform.styles";
import Image from "next/image";

const PlatformCard = ({ name, icon, url, background }) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <CardContainer onClick={handleClick} background={background}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <IconWrapper>{icon}</IconWrapper>
        <NameText>{name}</NameText>
      </div>
      <Image
        src="/activate/right-arrow.svg"
        alt="arrow"
        width={20}
        height={20}
        style={{ marginLeft: "auto", opacity: 0.6 }}
      />
    </CardContainer>
  );
};

export default PlatformCard;
