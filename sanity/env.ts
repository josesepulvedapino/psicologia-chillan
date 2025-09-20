export const apiVersion = '2025-09-20'

export const dataset = 'production'

export const projectId = 'pyhk1n2a'

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
