import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import WarRoom from '../WarRoom'
import { useWarRoom } from '../../store/warRoom'

describe('WarRoom', () => {
  beforeEach(() => {
    useWarRoom.getState().reset()
  })

  it('renders without crash', () => {
    render(<WarRoom />)
    expect(screen.getByText(/METROPOLIS/)).toBeInTheDocument()
  })

  it('shows PERMIT INBOX heading', () => {
    render(<WarRoom />)
    expect(screen.getByText(/PERMIT INBOX/i)).toBeInTheDocument()
  })

  it('shows AUDIT REVIEW heading', () => {
    render(<WarRoom />)
    expect(screen.getByText('AUDIT REVIEW')).toBeInTheDocument()
  })
})
