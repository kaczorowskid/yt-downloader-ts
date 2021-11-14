import path from 'path'
import fs from 'fs'

export const createFolder = () => {
    const dir = path.join(__dirname, `../music`);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
}

export const removeFolder = () => {
    fs.rmdirSync(path.join(__dirname, `../music`), { recursive: true })
}