import React from 'react'
import { Link } from 'gatsby'
import tw from 'tailwind.macro'
import { css } from '@emotion/core'
import { useTheme } from './Theming'
import { bpMinSM, bpMinMD, bpMinLG, bpMinXL } from 'lib/breakpoints'
import Search from './Search'
import Container from './Container'
import Logo from './Logo'
import ThemeToggler from './ThemeToggler'

const Header = ({ siteTitle }) => {
  const theme = useTheme()
  return (
    <header
      css={css`
        ${tw`w-full flex-shrink-0 py-5 md:py-8 lg:py-12`}
        background: ${theme.colors.bodyBg};
      `}
    >
      <Container noVerticalPadding>
        <nav
          css={css`
            ${tw`w-full flex justify-between items-center`}
          `}
        >
          <Link
            to="/"
            aria-label="go to homepage"
            activeClassName="active"
            css={css({
              display: 'flex',
              color: theme.colors.text,
              '@media (hover: hover)': {
                ':hover': {
                  color: theme.colors.primary,
                },
              },
              [bpMinXL]: {
                transform: 'translate(-70px, 0)',
              },
            })}
          >
            <Logo
              css={css({
                width: '60px',
                height: '50px',
                [bpMinMD]: {
                  width: '100px',
                  height: '82px',
                },
                [bpMinLG]: {
                  width: '140px',
                  height: '115px',
                },
              })}
            />
            <span
              css={css({
                display: 'none',
                margin: '65px 0 0 15px',
                fontSize: '14px',
                color: theme.colors.text,
                [bpMinSM]: {
                  display: 'block',
                },
                [bpMinMD]: {
                  margin: '60px 0 0 20px',
                  fontSize: '16px',
                },
                [bpMinLG]: {
                  margin: '60px 0 0 20px',
                  fontSize: '18px',
                },
              })}
            >
              {siteTitle}
            </span>
          </Link>
          <div
            css={{
              marginTop: '35px',
              display: 'flex',
            }}
          >
            <Search />

            <ThemeToggler
              css={{}}
              toggleTheme={theme.toggleTheme}
              themeName={theme.themeName}
            />
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header
