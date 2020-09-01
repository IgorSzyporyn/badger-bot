import { PROJECT_ID } from '../constants'
import minimist from 'minimist'

export type Shared = {
  argv: minimist.ParsedArgs
  cwd: string
  distPath: string
}

const root: Record<string, any> = global

root[PROJECT_ID] = {
  argv: {},
  cwd: '',
  distPath: '',
}

export function getShared() {
  return root[PROJECT_ID] as Shared
}

export function setShared(toSet: Record<string, any>) {
  Object.keys(toSet).forEach((key) => {
    root[PROJECT_ID][key] = toSet[key]
  })
}
