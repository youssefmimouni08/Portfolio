import React from 'react';
import Link from 'next/link';

import { Div1 } from '../Header/HeaderStyles';
import { SocialIcons } from './HeroStyles';

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiFillMail,
  AiFillLinkedin,
} from 'react-icons/ai';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <SectionText>Hi there, my name is</SectionText>
          Youssef Mimouni.
        </SectionTitle>
        <SectionText>
          An undergraduate software engineer and a Full Stack web developer from
          Tunisia specializing in building websites and a music producer when
          not solving bugs.
        </SectionText>
        <Link href='#projects'>
          <Button>Learn More</Button>
        </Link>

        <Div1>
          <SocialIcons href='https://github.com/youssefmimouni08'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/youssef-mimouni/'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons href='mailto:youssef.mimouni1@esprit.tn'>
            <AiFillMail size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.youtube.com/c/YouzarsifBeats'>
            <AiFillYoutube size='3rem' />
          </SocialIcons>
        </Div1>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
