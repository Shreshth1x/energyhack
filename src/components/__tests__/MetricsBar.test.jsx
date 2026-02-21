import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import MetricsBar from '../MetricsBar'
import { useWarRoom } from '../../store/warRoom'

describe('MetricsBar', () => {
  beforeEach(() => {
    useWarRoom.getState().reset()
  })

  it('renders GRIDMIND heading', () => {
    render(<MetricsBar />)
    expect(screen.getByText(/GRIDMIND/)).toBeInTheDocument()
  })

  it('renders LOVING COUNTY', () => {
    render(<MetricsBar />)
    expect(screen.getByText(/LOVING COUNTY/i)).toBeInTheDocument()
  })

  it('shows application count', () => {
    render(<MetricsBar />)
    expect(screen.getByText(/APPS TODAY/)).toBeInTheDocument()
  })

  it('shows backlog days', () => {
    render(<MetricsBar />)
    expect(screen.getByText(/847/)).toBeInTheDocument()
  })
})
