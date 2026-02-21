import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import FloodIndicator from '../FloodIndicator'
import { useWarRoom } from '../../store/warRoom'

describe('FloodIndicator', () => {
  beforeEach(() => {
    useWarRoom.getState().reset()
  })

  it('is hidden when fewer than 4 apps', () => {
    const { container } = render(<FloodIndicator appCount={2} />)
    expect(container.textContent).toBe('')
  })

  it('is visible when 4+ apps', () => {
    render(<FloodIndicator appCount={4} />)
    expect(screen.getByText(/backlog/i)).toBeInTheDocument()
  })

  it('shows backlog days', () => {
    render(<FloodIndicator appCount={5} />)
    expect(screen.getByText(/847/)).toBeInTheDocument()
  })
})
