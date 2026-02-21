export const DEMO_APPLICATIONS = [
  {
    id: 'APP-2024-001',
    company: 'Microsoft Azure Frontier',
    type: 'data_center',
    scale: '480MW Hyperscale Campus',
    pageCount: 847,
    status: 'pending',
    keySpecs: { loadMW: 480, waterUsageGPD: 2_000_000 },
    fullText: `APPLICATION FOR CONDITIONAL USE PERMIT — HYPERSCALE DATA CENTER CAMPUS

Applicant: Microsoft Azure Frontier Division
Location: Parcels 12-18, County Road 407, Loving County, TX 79754
Proposed Use: Hyperscale Cloud Computing & AI Training Facility

PROJECT OVERVIEW
Microsoft Azure proposes construction of a 480-megawatt hyperscale data center campus on 2,400 acres of previously undeveloped ranchland in Loving County, Texas. The facility will comprise six interconnected data halls, each housing approximately 50,000 GPU-class servers optimized for large language model training and inference workloads. Total projected capital investment exceeds $14.2 billion over a 7-year buildout period.

ELECTRICAL INFRASTRUCTURE
The campus requires 480MW of continuous power delivery. Applicant proposes construction of a dedicated 345kV transmission line connecting to the ERCOT grid at the Wink substation (42 miles). On-site power infrastructure includes redundant 2N+1 UPS systems, 96 diesel backup generators (each 3MW), and a 200MW natural gas peaker plant for grid stability. The application states this load represents "a modest addition to regional grid capacity" and is "consistent with existing infrastructure patterns in West Texas."

WATER SYSTEMS
Cooling systems require approximately 2,000,000 gallons per day (GPD) sourced from the Pecos Valley Aquifer via 12 new production wells. The application claims water usage is "sustainable and within aquifer recharge capacity" with a closed-loop cooling design that "minimizes evaporative losses to under 15%." Wastewater will be treated on-site and discharged to an evaporation pond system.

Note: Section 4.2 states cooling demand is 1.2M GPD while Section 7.8 references 2.0M GPD total water demand. The executive summary references "zero net water impact" while the engineering appendix details 2M GPD consumption. Additionally, the traffic study references a 200-acre campus while the site plan shows 2,400 acres.

WORKFORCE
Construction phase: 3,200 workers over 42 months. Operations phase: 185 permanent employees. The application notes Loving County's current population of 64 residents and proposes a $50M community benefit fund.

ENVIRONMENTAL
Phase I Environmental Site Assessment completed. No endangered species identified. Applicant commits to 200MW of renewable energy credits within 5 years. Dark sky compliance measures included for exterior lighting.

The applicant requests expedited review under the county's standard commercial permitting process, estimating a 90-day approval timeline.`,
  },
  {
    id: 'APP-2024-002',
    company: 'Tesla Megapack Division',
    type: 'battery_storage',
    scale: '1.2GWh Grid Storage',
    pageCount: 312,
    status: 'pending',
    keySpecs: { loadMW: 300, waterUsageGPD: 15_000 },
    fullText: `APPLICATION FOR BATTERY ENERGY STORAGE SYSTEM (BESS) FACILITY

Applicant: Tesla Megapack Division
Location: FM 2781, Mile Marker 4, Loving County, TX
Proposed Use: Utility-Scale Battery Energy Storage System

PROJECT OVERVIEW
Tesla proposes a 1.2 gigawatt-hour (GWh) battery energy storage facility using next-generation Megapack 3 units. The facility will provide grid stabilization, peak shaving, and renewable energy time-shifting services to ERCOT. Total footprint is 45 acres with 800 Megapack units arranged in a grid pattern with 15-foot separation for thermal management.

BATTERY SPECIFICATIONS
Chemistry: LFP (Lithium Iron Phosphate). Total capacity: 1,200 MWh. Peak discharge rate: 300MW for 4 hours. Cycle life: 10,000+ cycles. Operating temperature range: -20°C to 50°C with active liquid cooling.

FIRE SAFETY
The application references NFPA 855 compliance for energy storage systems. However, the fire suppression plan references "standard commercial sprinkler systems" rather than the specialized clean-agent suppression required for lithium battery installations. The thermal runaway containment section states "no additional measures beyond standard construction required" while simultaneously referencing the need for "specialized deflagration venting panels."

ELECTRICAL INTERCONNECTION
300MW interconnection at the existing Wink-to-Pecos 138kV corridor. The application claims interconnection studies are "underway" but no ERCOT queue position is provided. The grid impact study references a "minimal effect on local distribution" while proposing a 300MW injection point.

HAZARDOUS MATERIALS
Total lithium content: approximately 240 metric tons. Electrolyte volume: 180,000 gallons. The application classifies the facility as "standard commercial storage" and does not include a HAZMAT response plan.

Construction timeline: 14 months. Operational staff: 12 full-time technicians.`,
  },
  {
    id: 'APP-2024-003',
    company: 'ChargePoint National Grid',
    type: 'ev_charging',
    scale: '200-Stall Superhub',
    pageCount: 89,
    status: 'pending',
    keySpecs: { loadMW: 8, waterUsageGPD: 500 },
    fullText: `APPLICATION FOR EV CHARGING SUPERHUB

Applicant: ChargePoint National Grid Division
Location: US-285 & TX-302 Intersection, Loving County, TX
Proposed Use: Electric Vehicle Fast-Charging Station

PROJECT OVERVIEW
ChargePoint proposes construction of a 200-stall electric vehicle fast-charging superhub at the intersection of US-285 and TX-302, targeting the I-20 corridor traffic between Midland/Odessa and New Mexico. The facility includes 200 DC fast chargers (350kW each), a driver's lounge with restrooms, a convenience store, and solar canopy structures.

ELECTRICAL DEMAND
Peak electrical demand: 8MW (all 200 stalls simultaneously at 350kW, accounting for power factor and distribution losses). Average sustained load estimated at 3.2MW. The application requests connection to the existing 12.47kV distribution feeder on US-285. Note: the existing feeder serves 23 customers with a total load of approximately 400kW. The application states the new load is "compatible with existing distribution infrastructure."

SITE IMPROVEMENTS
The site plan shows 4.5 acres of paved area, 1.2 acres of building footprint, and 2.0 acres of solar canopy. Total impervious surface: 7.7 acres. The stormwater plan references "standard detention" without specific calculations. Parking count shows 200 EV stalls plus 40 conventional parking spaces.

TRAFFIC
The traffic impact analysis projects 800-1,200 vehicle visits per day with an average dwell time of 35 minutes. The study does not address the impact on the US-285/TX-302 intersection, which currently handles approximately 2,100 vehicles per day.

SIGNAGE
The application requests a 60-foot illuminated pylon sign visible from I-20, approximately 8 miles from the site. Current county sign ordinance limits height to 20 feet.

Construction: 8 months. Operational staff: 6 full-time.`,
  },
  {
    id: 'APP-2024-004',
    company: 'Amazon Web Services',
    type: 'data_center',
    scale: '200MW Edge Cluster',
    pageCount: 623,
    status: 'pending',
    keySpecs: { loadMW: 200, waterUsageGPD: 850_000 },
    fullText: `APPLICATION FOR DATA CENTER DEVELOPMENT — EDGE COMPUTING CLUSTER

Applicant: Amazon Web Services (AWS) Infrastructure
Location: Section 14, Block C-23, Loving County, TX
Proposed Use: Edge Computing and Content Delivery Network Hub

PROJECT OVERVIEW
AWS proposes a 200-megawatt edge computing facility on 800 acres in Loving County. The campus will consist of three data halls focused on content delivery, edge computing, and disaster recovery services for the US-South region. Capital investment: $6.8 billion.

ELECTRICAL INFRASTRUCTURE
200MW continuous load sourced from a proposed 230kV transmission interconnection. The application includes a letter of intent from Oncor for grid connection but notes the nearest suitable interconnection point is 38 miles away. Backup power: 48 diesel generators at 3MW each (144MW backup capacity — the application notes this provides "full redundancy" despite being 56MW short of the 200MW load).

WATER SYSTEMS
Evaporative cooling requiring 850,000 GPD from the Pecos Valley Aquifer. The application includes a water rights filing but the filing references 500,000 GPD while the engineering plans specify 850,000 GPD. A "drought contingency plan" is mentioned in the table of contents but the referenced section (Appendix K) is blank.

SITE CONSIDERATIONS
The proposed site includes 120 acres of mapped floodplain along Hackberry Creek. The grading plan shows fill placement in the floodplain area but does not include a FEMA CLOMR/LOMR application. The Phase I ESA notes "potential soil contamination from historical oil field operations" and recommends Phase II investigation, which has not been completed.

EMPLOYMENT
Construction: 1,800 workers. Operations: 95 permanent employees.

The application requests standard commercial building permit processing.`,
  },
  {
    id: 'APP-2024-005',
    company: 'Enel Green Power',
    type: 'battery_storage',
    scale: '800MWh Solar+Storage',
    pageCount: 445,
    status: 'pending',
    keySpecs: { loadMW: 200, waterUsageGPD: 25_000 },
    fullText: `APPLICATION FOR SOLAR GENERATION + BATTERY STORAGE FACILITY

Applicant: Enel Green Power North America
Location: Parcels 8-11, County Road 210, Loving County, TX
Proposed Use: Utility-Scale Solar Generation with Co-located Battery Storage

PROJECT OVERVIEW
Enel Green Power proposes a combined 400MW solar photovoltaic generation facility with 800MWh of co-located lithium-ion battery storage. The project occupies 3,200 acres of leased ranchland with bifacial solar panels on single-axis trackers. Battery storage uses CATL 314Ah LFP cells in containerized units.

ELECTRICAL INTERCONNECTION
400MW AC interconnection proposed at the Loving County switching station. The application references ERCOT interconnection study #INR-24-0847 but the study status shows "suspended — restudy required due to cluster reassignment." The application states interconnection is "approved and proceeding" despite the suspended status.

ENVIRONMENTAL IMPACT
The biological survey identifies two active golden eagle nesting sites within 0.5 miles of the proposed array. The application states "no impact anticipated" and does not include an avian risk assessment or consultation with USFWS. The decommissioning plan estimates panel recycling costs at $2/panel; industry standard estimates are $12-15/panel. The application's decommissioning bond is calculated at $8M; recalculation at industry rates yields $48M-$60M.

WATER
Panel washing requires 25,000 GPD during peak season. Source: trucked water from Pecos municipal supply, 47 miles. No on-site water rights requested.

LAND USE
Current zoning: Agricultural/Ranch. No solar-specific zoning exists in county code. The application requests processing under "accessory agricultural use" classification, citing solar as "crop production (photon harvesting)."

FIRE SAFETY
Battery storage fire plan references Tesla Megapack specifications despite using CATL cells. Suppression system design does not match the proposed battery chemistry.

Construction: 22 months. Operations: 25 permanent, 60 seasonal maintenance.`,
  },
  {
    id: 'APP-2024-006',
    company: 'Google DeepMind Infrastructure',
    type: 'data_center',
    scale: '350MW AI Research Campus',
    pageCount: 1204,
    status: 'pending',
    keySpecs: { loadMW: 350, waterUsageGPD: 1_500_000 },
    fullText: `APPLICATION FOR AI RESEARCH AND COMPUTING CAMPUS

Applicant: Google DeepMind Infrastructure Division
Location: Sections 22-26, Block C-26, Loving County, TX
Proposed Use: Artificial Intelligence Research and Training Facility

PROJECT OVERVIEW
Google DeepMind proposes a 350-megawatt AI research campus on 1,800 acres in Loving County. The facility will house custom TPU v6 accelerator clusters for frontier AI model training. Total investment: $11.4 billion over 5 years. The campus includes four data halls, a research office complex, a 50MW on-site solar array, and a dedicated natural gas turbine plant.

ELECTRICAL
350MW baseload from a new 345kV double-circuit transmission line. On-site generation: 150MW natural gas combined-cycle turbine (the application classifies this as "backup power" while the operating plan shows continuous operation). 50MW solar with 100MWh battery storage for "renewable energy compliance." The application claims the facility will be "100% carbon neutral from day one" while the energy plan shows 70% natural gas dependence.

WATER
1,500,000 GPD for direct liquid cooling of TPU clusters. The application proposes a "revolutionary water recycling system achieving 95% recapture" but the engineering specs show standard single-pass cooling towers with 60% recapture. Appendix D references a "partnership with Loving County Water Authority" — no such entity exists (Loving County has no public water system).

COMMUNITY IMPACT
The application projects 400 permanent high-skill jobs with average salary $185,000. Housing analysis notes current county housing stock of 33 units. The application includes a "$200M community development commitment" but the commitment letter is unsigned and marked "DRAFT — NOT FOR EXECUTION."

TRAFFIC
Construction traffic: 500 heavy truck trips/day for 36 months on County Road 407 (current classification: unpaved ranch road, design capacity: 50 vehicles/day).

ENVIRONMENTAL
The application states "no environmental review required" under categorical exclusion. The facility site includes mapped habitat for the Texas horned lizard (state threatened species).

Requested processing time: 60 days under standard commercial permit.`,
  },
  {
    id: 'APP-2024-007',
    company: 'Rivian Charging Network',
    type: 'ev_charging',
    scale: '50-Stall Adventure Hub',
    pageCount: 56,
    status: 'pending',
    keySpecs: { loadMW: 2.5, waterUsageGPD: 300 },
    fullText: `APPLICATION FOR EV CHARGING AND ADVENTURE TOURISM HUB

Applicant: Rivian Charging Network LLC
Location: US-285, Mile Marker 112, Loving County, TX
Proposed Use: Electric Vehicle Charging Station with Adventure Tourism Amenities

PROJECT OVERVIEW
Rivian proposes a 50-stall EV charging station combined with an "Adventure Hub" featuring outdoor recreation equipment rental, a cafe, and trailhead facilities. The station targets Rivian R1T/R1S owners traversing the Trans-Pecos region. Total site: 3.2 acres.

ELECTRICAL
Peak load: 2.5MW from 50 Level 3 DC fast chargers (50kW each). Connection requested to existing 12.47kV distribution. The application includes a load study showing the existing feeder has 1.8MW of available capacity. The application proposes 2.5MW of new load on a feeder with 1.8MW available, stating "load diversity ensures actual demand will not exceed feeder capacity."

SITE DESIGN
The site plan includes a 1,200 sq ft cafe building, 800 sq ft equipment rental shop, restroom facilities, and a 2-acre native landscaping area. Parking: 50 EV stalls + 15 conventional. The application includes a septic system design for 25 users/day; the traffic study projects 180 visitors/day.

WATER
300 GPD from a proposed on-site well. Septic system designed for 25-person equivalent. No commercial well permit included in the application.

SIGNAGE
Two 30-foot illuminated signs on US-285. Highway-adjacent parcel requires TxDOT access permit (not included).

ENVIRONMENTAL
The site is within 500 feet of an unnamed seasonal creek. No floodplain analysis included. The grading plan shows drainage directed toward the creek.

Construction: 6 months. Operations: 4 full-time, 8 part-time.`,
  },
  {
    id: 'APP-2024-008',
    company: 'Anonymous LLC (Delaware)',
    type: 'building_use_change',
    scale: 'Residential → Unknown Industrial',
    pageCount: 12,
    status: 'pending',
    keySpecs: { loadMW: 15, waterUsageGPD: 50_000 },
    fullText: `APPLICATION FOR CHANGE OF USE — RESIDENTIAL TO INDUSTRIAL

Applicant: West Texas Holdings LLC (registered agent: CT Corporation, Wilmington, DE)
Location: 847 Mentone Road, Loving County, TX 79754
Proposed Use: "General Industrial Processing"

PROJECT OVERVIEW
Applicant requests change of use for an existing 3,200 sq ft residential structure and surrounding 12-acre parcel from residential to "general industrial processing." The application does not specify the nature of industrial processing to be conducted. When asked to elaborate, the applicant's attorney stated the use would be "light manufacturing consistent with agricultural zone permitted uses."

ELECTRICAL
The application requests a new 15MW electrical service. The existing residential service is 200A single-phase (approximately 48kW). A 15MW load for a 3,200 sq ft structure represents a power density of approximately 4,700 watts per square foot — roughly 100x that of a typical data center. The application does not explain the electrical demand or include any equipment specifications.

WATER
50,000 GPD from "existing and proposed wells." The current residential well is permitted for 500 GPD. The application does not include well permit applications for the additional 49,500 GPD capacity. No wastewater plan is included.

STRUCTURAL
The application includes no structural analysis for the proposed use change. The existing structure is a 1978 wood-frame residence. No fire suppression plan is included. The application checks "N/A" for hazardous materials storage despite the industrial classification.

PARKING AND ACCESS
The application shows the existing residential driveway as the sole access point. No loading facilities, no truck turning radius, no ADA compliance analysis.

OWNERSHIP
West Texas Holdings LLC was incorporated 17 days before this application. The registered agent is a corporate filing service. No individual owners or officers are identified in the application. The property was purchased 12 days before the application filing for $45,000 (county assessed value: $62,000).

The application requests "immediate approval" under residential permitting procedures.

NOTE: This application contains significant deficiencies and potential red flags that warrant careful review by county officials.`,
  },
]
