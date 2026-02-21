import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

describe('Smoke test', () => {
  it('renders a basic React component', () => {
    function Hello() {
      return <div>GridMind</div>
    }
    render(<Hello />)
    expect(screen.getByText('GridMind')).toBeInTheDocument()
  })
})
