import React from 'react';
import BgAnimation from '../BackgrooundAnimation/BackgroundAnimation';

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
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
              <CardInfo>{description}</CardInfo>
            </TitleContent>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Sectionp>
);

export default Projects;
