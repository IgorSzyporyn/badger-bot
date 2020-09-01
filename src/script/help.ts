import { getPckJson } from '../utils/get-pck-json'
import { print } from '../utils/print'

export function helpMain() {
  const { name } = getPckJson()

  print.help({
    type: 'main',
    message: ['Add a description about your program here'],
    args: [
      {
        name: '--help, -h',
          description: `Show the help for ${name}`
      },
      {
        name: '--version, -v',
        description: 'Show the current version',
      },
    ],
  })
}

