import { DEMO_APPLICATIONS } from '../src/lib/demoApplications.js'
import { insertApplication } from './db.js'
import db from './db.js'

// Clear existing data
db.exec('DELETE FROM applications')

for (const app of DEMO_APPLICATIONS) {
  insertApplication(app)
  console.log(`Seeded: ${app.id} — ${app.company}`)
}

console.log(`\nDone. ${DEMO_APPLICATIONS.length} applications seeded.`)
db.close()
