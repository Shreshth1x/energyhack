import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import IntentBox from '../IntentBox'
import { useBuildingProfiles } from '../../store/buildingProfiles'

describe('IntentBox', () => {
  beforeEach(() => {
    useBuildingProfiles.getState().reset()
  })

  it('renders text input', () => {
    render(<IntentBox />)
    expect(screen.getByPlaceholderText(/describe/i)).toBeInTheDocument()
  })

  it('typing triggers permit cascade', () => {
    render(<IntentBox />)
    const input = screen.getByPlaceholderText(/describe/i)
    fireEvent.change(input, { target: { value: 'convert top floor to data center' } })
    fireEvent.click(screen.getByText(/ANALYZE/))

    const state = useBuildingProfiles.getState()
    expect(state.permitCascade.length).toBeGreaterThan(0)
  })

  it('shows permit cascade results', () => {
    render(<IntentBox />)
    const input = screen.getByPlaceholderText(/describe/i)
    fireEvent.change(input, { target: { value: 'convert to data center with 5000kw electrical' } })
    fireEvent.click(screen.getByText(/ANALYZE/))
    expect(screen.getByText(/ZONING/)).toBeInTheDocument()
  })
})
