/**
 * Type-safe wrapper around the global Whop pixel.
 *
 * The pixel bootstrap in layout.tsx creates `window.whop` with a `.track()`
 * method.  This helper guards against SSR (window undefined) and against the
 * pixel not yet being loaded.
 */

type WhopTrackOptions = {
  value?: number
  currency?: string
  [key: string]: unknown
}

export function whopTrack(
  event: string,
  options?: WhopTrackOptions,
): void {
  if (typeof window === 'undefined') return
  const w = window as unknown as { whop?: { track: (name: string, opts?: WhopTrackOptions) => void } }
  if (!w.whop?.track) return
  if (options) {
    w.whop.track(event, options)
  } else {
    w.whop.track(event)
  }
}
