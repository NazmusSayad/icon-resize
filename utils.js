import fs from 'fs'

export function cleanDirSync(dir) {
  if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true })
  fs.mkdirSync(dir, { recursive: true })
}
