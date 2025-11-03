import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'

/**
 * Can we skip playing the arcade in Factory for the check and just complete the blast course instead?
 * @returns true if playing the arcade machine in Factory is not required for the check.
**/

export const useFastArcade = (): boolean =>
  useDonkStore(useShallow((state) => state.fastChecks.factoryArcade))

/**
 * Does the mermaid only need one pearl for her check, or five?
 * @returns true if the mermaid only needs one pearl.
 * Alex update: Since V4, the Mermaid can require 2, 3, or 4 Pearls for her check. Updated this variable to reflect that...
 */
export const useFastMermaid = (): number =>
  useDonkStore(useShallow((state) => state.fastChecks.galleonMermaid))
