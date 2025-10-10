// Helpful global declarations to quiet editor/TS errors for path aliases and assets.
declare module '@/components/*' {
  import type { ComponentType } from 'react'
  const Component: ComponentType<any>
  export default Component
}

declare module '@/data/*' {
  // individual data modules can export typed content; use `any` here to avoid
  // resolution errors in the editor. Prefer importing concrete types from the
  // original files where available (e.g., `import type { Member } from '@/data/members'`).
  const value: any
  export default value
}

// Images used in the repo (jpg/png/svg) - allow importing them without errors.
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg' {
  const src: string
  export default src
}
