import React from 'react'
import Button from './Button'

const ThemeToggler = ({ toggleTheme, themeName }) => (
  <Button
    onClick={() => toggleTheme(themeName === 'dark' ? 'default' : 'dark')}
  >
    {themeName === 'dark' ? 'default' : 'dark'}
  </Button>
)

export default ThemeToggler
