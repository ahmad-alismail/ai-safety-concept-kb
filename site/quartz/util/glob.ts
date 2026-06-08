import path from "path"
import { FilePath } from "./path"
import { globby } from "globby"

export function toPosixPath(fp: string): string {
  return fp.split(path.sep).join("/")
}

export async function glob(
  pattern: string,
  cwd: string,
  ignorePatterns: string[],
): Promise<FilePath[]> {
  const fps = (
    await globby(pattern, {
      cwd,
      ignore: ignorePatterns,
      // gitignore disabled: content/ is generated from ../wiki and is git-ignored,
      // but globby honors ancestor .gitignore files, which would exclude the whole
      // folder from scanning. All needed exclusions are declared in
      // quartz.config.ts -> ignorePatterns instead.
      gitignore: false,
    })
  ).map(toPosixPath)
  return fps as FilePath[]
}
