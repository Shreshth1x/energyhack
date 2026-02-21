import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import SummarySection from '../SummarySection'
import CompletenessLayer from '../CompletenessLayer'
import ConsistencyLayer from '../ConsistencyLayer'
import ComplianceLayer from '../ComplianceLayer'
import ImpactLayer from '../ImpactLayer'
import ReviewQuestions from '../ReviewQuestions'
import RegulatoryDraft from '../RegulatoryDraft'
import AuditReport from '../AuditReport'
import { MOCK_RESPONSES } from '../../lib/mockResponses'

const msftMock = MOCK_RESPONSES['APP-2024-001']

describe('SummarySection', () => {
  it('renders text content', () => {
    render(<SummarySection text="Testing the summary section" isStreaming={false} />)
    expect(screen.getByText(/Testing the summary/)).toBeInTheDocument()
  })

  it('shows cursor when streaming', () => {
    const { container } = render(<SummarySection text="Streaming..." isStreaming={true} />)
    expect(container.querySelector('.animate-pulse')).not.toBeNull()
  })
})

describe('CompletenessLayer', () => {
  it('renders score', () => {
    render(<CompletenessLayer data={msftMock.completeness} />)
    expect(screen.getByText(/62/)).toBeInTheDocument()
  })

  it('shows pass/fail/missing counts', () => {
    render(<CompletenessLayer data={msftMock.completeness} />)
    expect(screen.getByText(/8 passed/)).toBeInTheDocument()
  })

  it('renders item status colors', () => {
    render(<CompletenessLayer data={msftMock.completeness} />)
    expect(screen.getByText(/Site plan/)).toBeInTheDocument()
  })
})

describe('ConsistencyLayer', () => {
  it('shows finding count', () => {
    render(<ConsistencyLayer data={msftMock.consistency} />)
    expect(screen.getByText(/4 CONTRADICTIONS/)).toBeInTheDocument()
  })

  it('renders severity badges', () => {
    render(<ConsistencyLayer data={msftMock.consistency} />)
    expect(screen.getAllByText(/critical/i).length).toBeGreaterThan(0)
  })

  it('shows conflicting claims', () => {
    render(<ConsistencyLayer data={msftMock.consistency} />)
    expect(screen.getByText(/1,200,000 GPD/)).toBeInTheDocument()
  })
})

describe('ComplianceLayer', () => {
  it('renders code sections', () => {
    render(<ComplianceLayer data={msftMock.compliance} />)
    expect(screen.getByText(/LCC §4.02/)).toBeInTheDocument()
  })

  it('shows NO CODE EXISTS section', () => {
    render(<ComplianceLayer data={msftMock.compliance} />)
    expect(screen.getByText(/NO_CODE_EXISTS/)).toBeInTheDocument()
  })

  it('shows gap count', () => {
    render(<ComplianceLayer data={msftMock.compliance} />)
    expect(screen.getByText(/4 CODE GAPS/)).toBeInTheDocument()
  })
})

describe('ImpactLayer', () => {
  it('shows 6000% figure for Microsoft', () => {
    render(<ImpactLayer data={msftMock.impact} />)
    expect(screen.getAllByText(/6,000%/).length).toBeGreaterThan(0)
  })

  it('shows UNSUBSTANTIATED verdict in red', () => {
    render(<ImpactLayer data={msftMock.impact} />)
    expect(screen.getAllByText(/UNSUBSTANTIATED/).length).toBeGreaterThan(0)
  })

  it('shows grid and water sections', () => {
    render(<ImpactLayer data={msftMock.impact} />)
    expect(screen.getByText(/GRID IMPACT/i)).toBeInTheDocument()
    expect(screen.getByText(/WATER IMPACT/i)).toBeInTheDocument()
  })
})

describe('ReviewQuestions', () => {
  it('renders questions list', () => {
    render(<ReviewQuestions questions={msftMock.report.reviewQuestions} />)
    expect(screen.getByText(/zero net water impact/)).toBeInTheDocument()
  })

  it('renders all questions', () => {
    render(<ReviewQuestions questions={msftMock.report.reviewQuestions} />)
    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(5)
  })
})

describe('RegulatoryDraft', () => {
  it('renders ordinance language when present', () => {
    render(<RegulatoryDraft text={msftMock.report.draftOrdinanceLanguage} />)
    expect(screen.getByText(/PROPOSED AMENDMENT/)).toBeInTheDocument()
  })

  it('renders nothing when no text', () => {
    const { container } = render(<RegulatoryDraft text="" />)
    expect(container.textContent).toBe('')
  })
})

describe('AuditReport', () => {
  it('renders overall status badge', () => {
    render(<AuditReport report={msftMock.report} />)
    expect(screen.getByText('CRITICAL')).toBeInTheDocument()
  })

  it('renders exactly 3 actions', () => {
    render(<AuditReport report={msftMock.report} />)
    expect(screen.getByText(/APPLICANT/)).toBeInTheDocument()
    expect(screen.getByText(/COUNTY/)).toBeInTheDocument()
    expect(screen.getByText(/BOTH/)).toBeInTheDocument()
  })

  it('renders executive summary', () => {
    render(<AuditReport report={msftMock.report} />)
    expect(screen.getByText(/\$14\.2 billion/)).toBeInTheDocument()
  })
})
