import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import PermitInbox from '../PermitInbox'
import { useWarRoom } from '../../store/warRoom'

beforeEach(() => {
  globalThis.fetch = vi.fn().mockRejectedValue(new Error('no server'))
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe('PermitInbox', () => {
  beforeEach(() => {
    useWarRoom.getState().reset()
  })

  it('auto-loads applications on mount', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.5)
    render(<PermitInbox />)
    // startFlood is async (fetch fallback + dynamic import), then timers fire at real speed
    // Wait for first application to appear
    await waitFor(() => {
      expect(screen.getByText(/Microsoft/)).toBeInTheDocument()
    }, { timeout: 5000 })
    vi.restoreAllMocks()
  })

  it('renders pre-loaded applications', async () => {
    vi.useFakeTimers()
    vi.spyOn(Math, 'random').mockReturnValue(0.5)
    await useWarRoom.getState().startFlood()
    vi.advanceTimersByTime(3500 * 8)
    vi.useRealTimers()

    render(<PermitInbox />)
    expect(screen.getAllByText(/Microsoft/).length).toBeGreaterThan(0)
  })

  it('clicking card sets active application', async () => {
    vi.useFakeTimers()
    vi.spyOn(Math, 'random').mockReturnValue(0.5)
    await useWarRoom.getState().startFlood()
    vi.advanceTimersByTime(3500 * 8)
    vi.useRealTimers()

    render(<PermitInbox />)
    fireEvent.click(screen.getAllByText(/Microsoft/)[0])
    expect(useWarRoom.getState().activeApplication).toBe('APP-2024-001')
  })
})
