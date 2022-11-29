import {render, screen} from '@testing-library/react'
import App from './App'

test('renders name on main page', () => {
  render(<App />)
  const linkElement = screen.getByText(/Clara McCreery/i)
  expect(linkElement).toBeInTheDocument()
})
