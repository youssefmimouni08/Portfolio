import React from 'react';
import BgAnimation from '../BackgrooundAnimation/BackgroundAnimation';
import Churn from '../Projectimages/Churn';
import Kidzy from '../Projectimages/Kidzy';
import Reacticon from '../Projectimages/Reacticon';
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
  TitleContentF,
} from './ProjectsStyles';
import { SectionDivider } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Networky from '../Projectimages/Networky';
import Nodejs from '../Projectimages/nodejs';
import Mongo from '../Projectimages/Mongo';
import Spark from '../Projectimages/Spark';
import Elastic from '../Projectimages/Elastic';
import Kibana from '../Projectimages/Kibana';
import Symfony from '../Projectimages/Symfony';
import Java from '../Projectimages/Java';
import Mysql from '../Projectimages/Mysql';

const Projects = () => (
  <Sectionp nopadding id='projects'>
    <SectionDivider />
    <SectionTitlep main>Projects</SectionTitlep>
    <GridContainer>
      <BlogCard key={1}>
        <TitleContent>
          <Churn />

          <HeaderThree title>Customer Churn</HeaderThree>

          <CardInfo>
            Machine learning model capable of predicting customer churn rate.
            With "DevOps".
          </CardInfo>
        </TitleContent>
        <TitleContentF> Built using :</TitleContentF>
        <TagList>
          <Elastic />
          <Spark />
          <Kibana />
        </TagList>
      </BlogCard>
      <BlogCard key={2}>
        <TitleContent>
          <Networky />

          <HeaderThree title>Networky</HeaderThree>

          <CardInfo>
            Collaborative Social Network application that helps developpers find
            their dream jobs and share ideas.
          </CardInfo>
        </TitleContent>
        <TitleContentF> Built using :</TitleContentF>
        <TagList>
          <Reacticon />
          <Nodejs />
          <Mongo />
        </TagList>
      </BlogCard>
      <BlogCard key={3}>
        <TitleContent>
          <Kidzy />

          <HeaderThree title>Kidzy</HeaderThree>

          <CardInfo>
            Cross-Platform management application (web,desktop,mobile) created
            for an online KinderGarden.
          </CardInfo>
        </TitleContent>
        <TitleContentF> Built using :</TitleContentF>
        <TagList>
          <Symfony />
          <Java />
          <Mysql />
        </TagList>
      </BlogCard>
    </GridContainer>
  </Sectionp>
);

export default Projects;
