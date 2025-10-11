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

// Minimal declarations for the `ai` SDK packages used in the repo.
// These keep TypeScript happy in environments where the upstream types
// are not installed or when using the lightweight `ai` package.
declare module 'ai' {
  export function generateText(...args: any[]): any
  const _default: any
  export default _default
}

declare module 'ai/react' {
  // useChat is a small hook used by the client UI. Use any to avoid
  // coupling to a specific SDK version in the repository.
  export function useChat(opts?: any): any
}

declare module '@ai-sdk/google' {
  // The SDK exposes a `google` factory for models. Keep type `any`.
  export function google(modelName?: string): any
  const _default: any
  export default _default
}
