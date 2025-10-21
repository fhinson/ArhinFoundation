#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'

async function main() {
  const [,, inPath, outPath] = process.argv
  if (!inPath || !outPath) {
    console.error('Usage: node scripts/remove-bg.mjs <inputImage> <outputPng>')
    process.exit(1)
  }
  const apiKey = process.env.REMOVE_BG_API_KEY
  if (!apiKey) {
    console.error('Missing REMOVE_BG_API_KEY environment variable. Skipping.')
    process.exit(2)
  }
  const absIn = path.resolve(inPath)
  const absOut = path.resolve(outPath)
  if (!fs.existsSync(absIn)) {
    console.error('Input file not found:', absIn)
    process.exit(3)
  }

  const form = new FormData()
  form.append('size', 'auto')
  form.append('type', 'person')
  form.append('image_file', new Blob([fs.readFileSync(absIn)]), path.basename(absIn))

  const res = await fetch('https://api.remove.bg/v1.0/removebg', {
    method: 'POST',
    headers: { 'X-Api-Key': apiKey },
    body: form,
  })
  if (!res.ok) {
    const text = await res.text()
    console.error('remove.bg failed:', res.status, text)
    process.exit(4)
  }
  const buf = Buffer.from(await res.arrayBuffer())
  fs.mkdirSync(path.dirname(absOut), { recursive: true })
  fs.writeFileSync(absOut, buf)
  console.log('Saved cutout to', absOut)
}

main().catch((err) => {
  console.error(err)
  process.exit(10)
})


