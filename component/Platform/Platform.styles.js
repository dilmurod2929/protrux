import styled from "styled-components";

export const PageWrapper = styled.div`
  max-width: 440px;
  margin: 0 auto;
  padding: 120px 0px;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
    padding: 24px 16px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -4%;
  font-weight: 800;
  text-align: center;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #555;
  text-align: center;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 95%;
`;

export const SearchInput = styled.input`
  font-family: Inter;
  width: 100%;
  padding: 10px 12px 10px 36px;
  border: 1px solid #d7d8e0;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -1%;
  outline: none;
  &::placeholder {
    color: #9b9daa;
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  pointer-events: none;
`;

export const CardContainer = styled.div`
  background-color: ${(props) => props.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 12px;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.2s ease;
  @media screen and (max-width: 768px) {
  }
`;

export const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: white;
`;

export const NameText = styled.span`
  font-weight: 600;
  font-size: 1rem;
`;

export const SectionTitle = styled.h3`
  font-family: Inter;
  text-align: start;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.96px;
  margin-bottom: 10px;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CenteredWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding-top: 60px;
  background-color: #f9f9f9;
`;
export const SectionDescription = styled.p`
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.13px;
`;

export const CardBox = styled.div`
  background-color: #fff;
  border: 1px solid #d7d8e0;
  border-radius: 12px;
  padding: 16px 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (max-width: 768px) {
    border: none;
    box-shadow: none;
    border-top: 1px solid #d7d8e0;
    border-radius: 0;
    padding: 0;
    margin-left: -16px;
    margin-right: -16px;
    width: calc(100% + 32px); /* 16 + 16 */
  }
`;

export const ActivatePageWrapper = styled.div`
  background: #f5f5f8;
  min-height: 100vh;

  @media screen and (max-width: 768px) {
    background: #ffffff;
  }
`;
