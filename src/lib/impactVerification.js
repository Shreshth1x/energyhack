export const TEXAS_GRID_BASELINES = {
  averageCountyPeakMW: 8,
  aquiferRechargeRateGPD: 2_400_000,
  ercotPeakGW: 85,
}

export function verifyGridImpactClaim(loadMW, peakMW) {
  const percentOfPeak = (loadMW / peakMW) * 100

  let verdict, severity, analysis

  if (percentOfPeak <= 25) {
    verdict = 'SUBSTANTIATED'
    severity = 'info'
    analysis = `Proposed ${loadMW}MW load represents ${percentOfPeak.toFixed(0)}% of county peak demand (${peakMW}MW). Within acceptable range for existing infrastructure.`
  } else if (percentOfPeak <= 100) {
    verdict = 'NEEDS_REVIEW'
    severity = 'warning'
    analysis = `Proposed ${loadMW}MW load represents ${percentOfPeak.toFixed(0)}% of county peak demand (${peakMW}MW). Significant infrastructure upgrades required. Grid stability analysis needed.`
  } else {
    verdict = 'UNSUBSTANTIATED'
    severity = 'critical'
    analysis = `Proposed ${loadMW}MW load represents ${percentOfPeak.toFixed(0)}% of county peak demand (${peakMW}MW). This single facility would require ${(percentOfPeak / 100).toFixed(0)}x the county's entire current grid capacity. The applicant's claim of "modest addition to regional capacity" is unsupported by the data.`
  }

  return { loadMW, peakMW, percentOfPeak, verdict, severity, analysis }
}

export function verifyWaterUsageClaim(usageGPD, rechargeRateGPD) {
  const percentOfRecharge = (usageGPD / rechargeRateGPD) * 100

  let verdict, severity, analysis

  if (percentOfRecharge <= 20) {
    verdict = 'SUBSTANTIATED'
    severity = 'info'
    analysis = `Proposed ${usageGPD.toLocaleString()} GPD represents ${percentOfRecharge.toFixed(1)}% of aquifer recharge rate. Sustainable within current water budget.`
  } else if (percentOfRecharge <= 50) {
    verdict = 'NEEDS_REVIEW'
    severity = 'warning'
    analysis = `Proposed ${usageGPD.toLocaleString()} GPD represents ${percentOfRecharge.toFixed(1)}% of aquifer recharge rate. Cumulative impact assessment required with existing permitted withdrawals.`
  } else {
    verdict = 'UNSUBSTANTIATED'
    severity = 'critical'
    analysis = `Proposed ${usageGPD.toLocaleString()} GPD represents ${percentOfRecharge.toFixed(1)}% of aquifer recharge rate. A single facility consuming ${percentOfRecharge.toFixed(0)}% of the aquifer's recharge capacity is unsustainable. The applicant's claim of "sustainable water usage" is contradicted by hydrogeological data.`
  }

  return { usageGPD, rechargeRateGPD, percentOfRecharge, verdict, severity, analysis }
}
