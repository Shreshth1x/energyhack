import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import BuildingProfile from '../BuildingProfile'
import { useBuildingProfiles } from '../../store/buildingProfiles'

describe('BuildingProfile', () => {
  beforeEach(() => {
    useBuildingProfiles.getState().reset()
  })

  it('renders building address', () => {
    render(<BuildingProfile />)
    expect(screen.getByText(/100 Congress Ave/)).toBeInTheDocument()
  })

  it('renders current use', () => {
    render(<BuildingProfile />)
    expect(screen.getByText(/Current Use:/)).toBeInTheDocument()
  })

  it('renders energy systems', () => {
    render(<BuildingProfile />)
    expect(screen.getByText(/ENERGY SYSTEMS/)).toBeInTheDocument()
  })

  it('renders change history', () => {
    render(<BuildingProfile />)
    expect(screen.getByText(/CHANGE HISTORY/)).toBeInTheDocument()
    expect(screen.getByText(/Original construction/)).toBeInTheDocument()
  })
})
