import styled from 'styled-components';

export const Img = styled.img`
  height: 100%;
  object-fit: cover;
  width: 20vw;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 3rem 15rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-flow: row wrap;
    padding: 0;
    justify-content: center;
    row-gap: 6vh;
  }
`;
export const BlogCard = styled.div`
  border-radius: 5vh;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 20vw;
  background-color: rgb(69, 123, 157);
  height: 60vh;
  overflow: hidden;
  @media (max-width: 768px) and (orientation: landscape) {
    width: 40vw !important;
    height: 60vw !important;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80vw;
    height: fit-content;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 80vw;
    height: 63vh;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  min-height: 49vh;
  @media (max-width: 768px) and (orientation: landscape) {
    margin-bottom: 0vh;
    min-height: 90vh;
  }
`;
export const TitleContentF = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  background-color: rgb(29, 53, 87);
  border: 1px solid rgb(29, 53, 87);
  @media (max-width: 768px) and (orientation: landscape) {
    margin-bottom: 0vh;
  }
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: ivory;
  padding: 2rem 0;

  font-size: ${(props) => (props.title ? '3rem' : '2rem')};
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0;
  }
  @media (orientation: portrait) and (max-width: 640px) {
    letter-spacing: 4px;
    padding: 1rem 0 2rem;
    font-size: 3rem;
  }

  @media (orientation: landscape) {
    padding: 0 0 1rem;
    font-size: 2.5rem;
  }
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 30px 10px;
  color: #e4e6e7;
  font-size: 1em;
  line-height: 24px;

  @media (max-width: 768px) and (orientation: landscape) {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem 0 10px;
  }
`;
export const Cardfooter = styled.p`
  width: 100%;
  height: 20%;
  padding: 0 30px;
  background-color: rgb(29, 53, 87);
  font-style: 2rem;
  line-height: 24px;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #801414;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem;
  background-color: rgb(29, 53, 87);
  border: 1px solid rgb(29, 53, 87);
  height: -webkit-fill-available;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 2rem;
`;
export const Sectionp = styled.section`
  display: ${(props) => (props.grid ? 'grid' : 'flex')};
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  padding: ${(props) => (props.nopadding ? '0' : '32px 48px 0')};
  margin: 0 auto;
  max-width: initial;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  @media (orientation: landscape) {
    padding: 24px 0 0 !important;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;
export const SectionTitlep = styled.h2`
  font-weight: 800;
  align-self: center;
  font-size: ${(props) => (props.main ? '50px' : '56px')};
  line-height: ${(props) => (props.main ? '72px' : '56px')};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => (props.main ? '0px 0 16px' : '0')};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? '56px' : '48px')};
    line-height: ${(props) => (props.main ? '56px' : '48px')};
    margin-bottom: 12px;
    padding: ${(props) => (props.main ? '40px 0 12px' : '0')};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => (props.main ? '28px' : '32px')};
    line-height: ${(props) => (props.main ? '32px' : '40px')};
    margin-bottom: 8px;
    padding: ${(props) => (props.main ? '16px 0 8px' : '0')};
    max-width: 100%;
  }
`;
