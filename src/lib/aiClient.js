import OpenAI from 'openai'

let client = null

function getClient() {
  if (!client) {
    const apiKey = import.meta.env.VITE_XAI_API_KEY
    if (!apiKey) throw new Error('VITE_XAI_API_KEY not set')
    client = new OpenAI({
      apiKey,
      baseURL: 'https://api.x.ai/v1',
      dangerouslyAllowBrowser: true,
    })
  }
  return client
}

export async function streamGrok(system, user, onToken) {
  const stream = await getClient().chat.completions.create({
    model: 'grok-4-1-fast',
    messages: [
      { role: 'system', content: system },
      { role: 'user', content: user },
    ],
    stream: true,
  })

  let full = ''
  for await (const chunk of stream) {
    const delta = chunk.choices[0]?.delta?.content || ''
    if (delta) {
      full += delta
      if (onToken) onToken(delta)
    }
  }
  return full
}

export async function callGrok(system, user) {
  const response = await getClient().chat.completions.create({
    model: 'grok-4-1-fast',
    messages: [
      { role: 'system', content: system },
      { role: 'user', content: user },
    ],
  })
  return response.choices[0]?.message?.content || ''
}
