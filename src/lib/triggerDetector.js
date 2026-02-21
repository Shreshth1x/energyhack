const TRIGGER_CONFIGS = {
  ZONING: {
    timelineDays: 120,
  },
  ELECTRICAL: {
    timelineDays: 90,
  },
  FIRE_SAFETY: {
    timelineDays: 60,
  },
  OCCUPANCY: {
    timelineDays: 45,
  },
  STRUCTURAL: {
    timelineDays: 75,
  },
}

export function detectPermitTriggers(buildingProfile, proposedChange) {
  const triggers = []

  if (proposedChange.newUse && proposedChange.newUse !== buildingProfile.currentUse) {
    triggers.push({
      type: 'ZONING',
      reason: `Use change from "${buildingProfile.currentUse}" to "${proposedChange.newUse}" requires zoning review/variance`,
      timelineDays: TRIGGER_CONFIGS.ZONING.timelineDays,
    })
  }

  if (proposedChange.newLoadKW && proposedChange.newLoadKW > buildingProfile.electricalCapacityKW * 1.2) {
    triggers.push({
      type: 'ELECTRICAL',
      reason: `Electrical load increase from ${buildingProfile.electricalCapacityKW}kW to ${proposedChange.newLoadKW}kW exceeds 20% threshold`,
      timelineDays: TRIGGER_CONFIGS.ELECTRICAL.timelineDays,
    })
  }

  if (proposedChange.addHazmat && !buildingProfile.hazmatStorage) {
    triggers.push({
      type: 'FIRE_SAFETY',
      reason: 'Addition of hazardous materials storage requires fire safety review and HAZMAT plan',
      timelineDays: TRIGGER_CONFIGS.FIRE_SAFETY.timelineDays,
    })
  }

  if (proposedChange.newOccupancy && proposedChange.newOccupancy > buildingProfile.occupancy * 1.5) {
    triggers.push({
      type: 'OCCUPANCY',
      reason: `Occupancy increase from ${buildingProfile.occupancy} to ${proposedChange.newOccupancy} exceeds 50% threshold`,
      timelineDays: TRIGGER_CONFIGS.OCCUPANCY.timelineDays,
    })
  }

  if (proposedChange.structuralModification) {
    triggers.push({
      type: 'STRUCTURAL',
      reason: 'Proposed structural modifications require engineering review',
      timelineDays: TRIGGER_CONFIGS.STRUCTURAL.timelineDays,
    })
  }

  return triggers
}
