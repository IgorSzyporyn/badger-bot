import minimist from 'minimist'
import path from 'path'
import { setShared } from '../utils/shared'
import { runExecute } from './run-execute'
import { runHelp } from './run-help'
import { runVersion } from './run-version'

export function run() {
  const args = process.argv.slice(2)
  const argv = minimist(args)
  const { cwd } = process
  const distPath = path.join(__dirname, '../')

  setShared({ argv, cwd, distPath })

  if (argv.version || argv.v) {
    runVersion()
  } else if (argv.help || argv.h) {
    runHelp()
  } else {
    runExecute()
  }
}
