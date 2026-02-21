import express from 'express'
import cors from 'cors'
import { getAllApplications, getApplicationById, insertApplication } from './db.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.get('/api/applications', (req, res) => {
  const apps = getAllApplications()
  res.json(apps)
})

app.get('/api/applications/:id', (req, res) => {
  const app = getApplicationById(req.params.id)
  if (!app) return res.status(404).json({ error: 'Application not found' })
  res.json(app)
})

app.post('/api/applications', (req, res) => {
  try {
    insertApplication(req.body)
    res.status(201).json({ id: req.body.id })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

app.listen(PORT, () => {
  console.log(`GridMind API server running on http://localhost:${PORT}`)
})
