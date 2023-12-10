import styled from "styled-components";
import background from "../../img/about-background.png";
import SectionTitle from "../SectionTitle";
import watchIcon from "../../img/stopwatch-solid.svg";
import burgerIcon from "../../img/hamburger-solid.svg";
import walletIcon from "../../img/wallet-solid.svg";

const StyledAbout = styled.section`
  width: 100vw;
  margin-bottom: 40px;
`;

const AboutWrapper = styled.article`
  max-width: 1250px;
  justify-content: center;
  min-height: 300px;
  width: 100vw;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  margin: 0 auto;

  & > * {
    flex: 1 0 1;
    margin-top: -50px;
    @media screen and (min-width: 950px) {
      width: 50%;
      margin-top: 0;
    }
  }
`;
const ImgSection = styled.div`
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  max-width: 400px;
  margin: 0 auto;
  @media screen and (min-width: 950px) {
    margin-top: -45px;
  }
`;
const HistorySection = styled.div`
  text-align: center;
  padding: 50px 15px;
  margin-left: -6px;
  display: flex;
  justify-content: flex-start;
  flex-flow: column;
  align-items: center;

  @media screen and (min-width: 950px) {
    max-width: 600px;
    margin-right: -100px;
    align-items: flex-start;
  }
`;
const Features = styled.div`
  display: flex;
  gap: 30px;
  opacity: 0.8;
  margin: 40px auto 20px;
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.5s ease;
  }
  & div:hover {
    transform: scale(1.1);
  }
  & div h4 {
    margin-bottom: 0;
  }
`;
const Icon = styled.img`
  width: 40px;
`;
export default function About() {
  return (
    <StyledAbout>
      <AboutWrapper className="flex">
        <HistorySection>
          <SectionTitle>About Us</SectionTitle>

          <p>
            At Quickbites, we pride ourselves on delivering an exceptional dining experience. Our story is one of dedication to quality, affordability, and speed. We believe in using the finest ingredients, offering competitive prices, and ensuring swift service to cater to your needs.
          </p>
          <Features>
            <div>
              <Icon src={burgerIcon} alt="best-ingredients" />
              <h4>Quality</h4>
            </div>
            <div>
              <Icon src={walletIcon} alt="best-prices" />
              <h4>Prices</h4>
            </div>
            <div>
              <Icon src={watchIcon} alt="super-fast" />
              <h4>Speed</h4>
            </div>
          </Features>
        </HistorySection>
        <ImgSection>
          <Image src={background} alt="burger"></Image>
        </ImgSection>
      </AboutWrapper>
    </StyledAbout>
  );
}
