const line =
  'I woke up to find the production database perfectly intact. That is when I realized I was the staging environment.'

function renderLine(shout: boolean): string {
  return shout ? line.toUpperCase() : line
}

function hasFlag(flag: string): boolean {
  return process.argv.slice(2).some((arg) => arg === flag)
}

function main(): void {
  if (hasFlag('--help')) {
    console.error('Usage: node main.ts [--shout] [--help]')
    process.exit(0)
  }

  console.log(renderLine(hasFlag('--shout')))
}

main()
