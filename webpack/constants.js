import { path as PROJECT_ROOT } from 'app-root-path'
import { resolve } from 'path'

export const HOST = 'localhost'
export const PORT = 3000

export { PROJECT_ROOT }
export const SOURCE = resolve(PROJECT_ROOT, './src')
export const BUILD = resolve(PROJECT_ROOT, './build')
// export const STATIC = resolve(PROJECT_ROOT, './static')
