import Link from 'next/link';
import React from 'react';
import { DiCssdeck } from 'react-icons/di';

import {
  Div1LOGO,
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  Span,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1LOGO>
      <Link href='/'>
        <a
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <DiCssdeck size='3rem' /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1LOGO>
    <Div3>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='/Resume.pdf' target='_blank'>
          <NavLink
            style={{
              border: '1px solid rgb(241, 250, 238)',
              borderRadius: '3px',
              padding: '12px 17px',
              boxShadow:
                'rgb(241 250 238 / 11%) 0px 4px 6px, rgb(241 250 238 / 8%) 0px 1px 3px',
            }}
          >
            Resume
          </NavLink>
        </Link>
      </li>
    </Div3>
  </Container>
);

export default Header;
