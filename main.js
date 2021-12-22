#!/usr/bin/env node

const {
  Command
} = require('commander')
const {
  exec
} = require('child_process');

const program = new Command()

program
  .option('-s, --src <path>', 'source dir path', './')
  .option('-d, --out-dir <path>', 'output dir path')
  .option('-o, --out-file <path>', 'output file path')

program.parse(process.argv)

const options = program.opts()
console.log('options', options)

let outStr = ''
if (options.outDir) {
  outStr = `-d ${options.outDir}`
} else if (options.outFile) {
  outStr = `-o ${options.outFile}`
} else {
  outStr = '-d ./dist/'
}

exec(`npx rimraf ./dist && npx babel --config-file ./.babelrc ${options.src} ${outStr} --ignore "node_modules/"`, (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
})
