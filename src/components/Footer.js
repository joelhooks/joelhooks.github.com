import React from 'react'
import { css } from '@emotion/core'
import { bpMinSM } from '../lib/breakpoints'
import SubscribeForm from './Forms/SubscribeForm'
import { Twitter, GitHub } from './Social'
import Container from './Container'

const Footer = ({ author }) => (
  <footer>
    <Container noVerticalPadding>
      <SubscribeForm
        css={css({
          paddingTop: '40px',
          [bpMinSM]: {
            paddingTop: '60px',
          },
        })}
      />
      <div
        css={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '50px 0 30px 0',
          [bpMinSM]: {
            padding: '60px 0 40px 0',
          },
        })}
      >
        <div
          css={css`
            font-size: 90%;
            opacity: 0.7;
          `}
        >
          {author && `${author} \u00A9 ${new Date().getFullYear()}`}
        </div>
        <div>
          <Twitter />
          <GitHub />
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer
