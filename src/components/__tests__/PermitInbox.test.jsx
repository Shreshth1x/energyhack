import { render, screen, fireEvent } from '@testing-library/react'
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

  it('shows START DEMO button when empty', () => {
    render(<PermitInbox />)
    expect(screen.getByText(/START DEMO/)).toBeInTheDocument()
  })

  it('renders cards when applications exist', async () => {
    vi.useFakeTimers()
    vi.spyOn(Math, 'random').mockReturnValue(0.5)
    await useWarRoom.getState().startFlood()
    vi.advanceTimersByTime(3500 * 2)
    vi.useRealTimers()

    render(<PermitInbox />)
    expect(screen.getByText(/Microsoft/)).toBeInTheDocument()
  })

  it('clicking card sets active application', async () => {
    vi.useFakeTimers()
    vi.spyOn(Math, 'random').mockReturnValue(0.5)
    await useWarRoom.getState().startFlood()
    vi.advanceTimersByTime(3500)
    vi.useRealTimers()

    render(<PermitInbox />)
    fireEvent.click(screen.getByText(/Microsoft/))
    // reviewApplication is async, but the sync part sets activeApplication
    expect(useWarRoom.getState().activeApplication).toBe('APP-2024-001')
  })
})
