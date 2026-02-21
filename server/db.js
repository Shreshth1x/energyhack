import Database from 'better-sqlite3'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dbPath = join(__dirname, 'gridmind.db')

const db = new Database(dbPath)
db.pragma('journal_mode = WAL')

db.exec(`
  CREATE TABLE IF NOT EXISTS applications (
    id TEXT PRIMARY KEY,
    company TEXT NOT NULL,
    type TEXT NOT NULL,
    scale TEXT NOT NULL,
    page_count INTEGER NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending',
    load_mw REAL NOT NULL,
    water_usage_gpd INTEGER NOT NULL,
    full_text TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  )
`)

export function getAllApplications() {
  const rows = db.prepare('SELECT * FROM applications ORDER BY id').all()
  return rows.map(toAppShape)
}

export function getApplicationById(id) {
  const row = db.prepare('SELECT * FROM applications WHERE id = ?').get(id)
  return row ? toAppShape(row) : null
}

export function insertApplication(app) {
  const stmt = db.prepare(`
    INSERT INTO applications (id, company, type, scale, page_count, status, load_mw, water_usage_gpd, full_text)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)
  stmt.run(
    app.id,
    app.company,
    app.type,
    app.scale,
    app.pageCount,
    app.status || 'pending',
    app.keySpecs.loadMW,
    app.keySpecs.waterUsageGPD,
    app.fullText
  )
}

function toAppShape(row) {
  return {
    id: row.id,
    company: row.company,
    type: row.type,
    scale: row.scale,
    pageCount: row.page_count,
    status: row.status,
    keySpecs: {
      loadMW: row.load_mw,
      waterUsageGPD: row.water_usage_gpd,
    },
    fullText: row.full_text,
  }
}

export default db
