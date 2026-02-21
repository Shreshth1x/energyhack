import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import PermitCard from '../PermitCard'

const mockApp = {
  id: 'APP-2024-001',
  company: 'Microsoft Azure Frontier',
  type: 'data_center',
  scale: '480MW Hyperscale Campus',
  pageCount: 847,
  status: 'pending',
}

describe('PermitCard', () => {
  it('renders company name', () => {
    render(<PermitCard application={mockApp} onClick={() => {}} />)
    expect(screen.getByText(/Microsoft/)).toBeInTheDocument()
  })

  it('renders type', () => {
    render(<PermitCard application={mockApp} onClick={() => {}} />)
    expect(screen.getByText(/data_center/i)).toBeInTheDocument()
  })

  it('renders scale', () => {
    render(<PermitCard application={mockApp} onClick={() => {}} />)
    expect(screen.getByText(/480MW/)).toBeInTheDocument()
  })

  it('renders page count', () => {
    render(<PermitCard application={mockApp} onClick={() => {}} />)
    expect(screen.getByText(/847/)).toBeInTheDocument()
  })

  it('shows correct status color for pending', () => {
    render(<PermitCard application={mockApp} onClick={() => {}} />)
    expect(screen.getByText(/PENDING/i)).toBeInTheDocument()
  })

  it('fires onClick handler', () => {
    const handler = vi.fn()
    render(<PermitCard application={mockApp} onClick={handler} />)
    fireEvent.click(screen.getByText(/Microsoft/))
    expect(handler).toHaveBeenCalledWith('APP-2024-001')
  })

  it('shows critical status color', () => {
    render(<PermitCard application={{ ...mockApp, status: 'critical' }} onClick={() => {}} />)
    expect(screen.getByText(/CRITICAL/i)).toBeInTheDocument()
  })

  it('shows reviewing status', () => {
    render(<PermitCard application={{ ...mockApp, status: 'reviewing' }} onClick={() => {}} />)
    expect(screen.getByText(/REVIEWING/i)).toBeInTheDocument()
  })
})
