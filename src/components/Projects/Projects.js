import React from 'react';
import BgAnimation from '../BackgrooundAnimation/BackgroundAnimation';
import Churn from '../Projectimages/Churn';
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  Sectionp,
  SectionTitlep,
  Cardfooter,
} from './ProjectsStyles';
import { SectionDivider } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Sectionp nopadding id='projects'>
    <SectionDivider />
    <SectionTitlep main>Projects</SectionTitlep>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <TitleContent>
              <Churn />

              <HeaderThree title>{title}</HeaderThree>

              <CardInfo>{description}</CardInfo>
            </TitleContent>

            <TagList>
              <TitleContent> Built using :</TitleContent>
            </TagList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Sectionp>
);

export default Projects;
