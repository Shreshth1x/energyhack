import { useState } from 'react'
import MetricsBar from './MetricsBar'
import PermitInbox from './PermitInbox'
import ApplicationReview from './ApplicationReview'
import BuildingProfile from './BuildingProfile'
import IntentBox from './IntentBox'

export default function WarRoom() {
  const [activeTab, setActiveTab] = useState('warroom')

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <MetricsBar />
      {/* Tab Navigation */}
      <div className="flex border-b border-border">
        <button
          onClick={() => setActiveTab('warroom')}
          className={`px-6 py-2 text-xs font-bold tracking-widest transition-colors ${
            activeTab === 'warroom'
              ? 'text-accent border-b-2 border-accent'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          WAR ROOM
        </button>
        <button
          onClick={() => setActiveTab('building')}
          className={`px-6 py-2 text-xs font-bold tracking-widest transition-colors ${
            activeTab === 'building'
              ? 'text-accent border-b-2 border-accent'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          BUILDING PROFILE
        </button>
      </div>

      {activeTab === 'warroom' ? (
        <div className="flex-1 grid grid-cols-[400px_1fr] gap-0">
          <div className="border-r border-border flex flex-col">
            <div className="px-4 py-3 border-b border-border">
              <h2 className="text-xs font-bold tracking-widest text-text-secondary">PERMIT INBOX</h2>
            </div>
            <PermitInbox />
          </div>
          <div className="flex flex-col">
            <div className="px-4 py-3 border-b border-border">
              <h2 className="text-xs font-bold tracking-widest text-text-secondary">AUDIT REVIEW</h2>
            </div>
            <ApplicationReview />
          </div>
        </div>
      ) : (
        <div className="flex-1 p-6 max-w-4xl mx-auto w-full">
          <BuildingProfile />
          <div className="mt-6">
            <IntentBox />
          </div>
        </div>
      )}
    </div>
  )
}
