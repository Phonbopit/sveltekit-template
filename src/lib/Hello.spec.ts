import { render, screen } from '@testing-library/svelte'
import Hello from './Hello.svelte'

describe('Hello.svelte', () => {
  it('should render', () => {
    render(Hello)
    expect(screen.getByText('Hello World!!!')).toBeInTheDocument()
  })
})
