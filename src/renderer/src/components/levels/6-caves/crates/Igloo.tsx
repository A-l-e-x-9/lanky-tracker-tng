import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CratePool from '@renderer/components/pools/Crates'
import { useGeneralThing, useDkRotateGb, useChunkyClearGb, useTinyPortGb, useTinyCaveGb, useIceWalls, useCavesMiniFunky, useCavesPillar, useCavesIgloo, useLankyIglooGb, useLankyCastleGb, useChunkyCabinGb } from '@renderer/hooks/caves'
import { useShuffleCrates } from '@renderer/hooks/settings'
import { useMonkeyport, useRocket, usePunch, useBalloon, useHighGrab, useChunky, useBarrel, useBongos, useSax, useGuitar, useTrombone, useTriangle } from '@renderer/hooks/kongs'
import CavesCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const canReachVanillaArena = useDkRotateGb()
const canDoKoshaGB = useChunkyClearGb()
const hasMonkeyport = useMonkeyport()
const canDoTinyIglooGB = useTinyPortGb()
const hasJetbarrel = useRocket()
const canDoShrinkGB = useTinyCaveGb()
const hasPunch = usePunch()
const canGetPastIceWalls = useIceWalls()
const hasBalloon = useBalloon()
const canHighGrab = useHighGrab()
const hasChunky = useChunky()
const hasBarrels = useBarrel()
const canReachWarp4 = useCavesMiniFunky()
const [didCheck] = useDonkStore(useShallow((state) => [state.checks]))
const canDoLankyKasplat = useCavesPillar()
const canReachIgloo = useCavesIgloo()
const hasBongoes = useBongos()
const canDoLanky5DI = useLankyIglooGb()
const hasSax = useSax()
const hasGuitar = useGuitar()
const canDoIceCastle = useLankyCastleGb()
const hasTrombone = useTrombone()
const canDoChunky5DC = useChunkyCabinGb()
const hasTriangle = useTriangle()
  return (
    <CratePool>
      <CavesCheck
        id={26007}
        name="Shuffled Melon Crate: In front of the 5DI"
        region="Caves Igloo"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26041}
        name="Shuffled Melon Crate: Vanilla Warp 1 at igloos"
        region="Caves Igloo"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26044}
        name="Shuffled Melon Crate: Vanilla Warp 3 at igloos"
        region="Caves Igloo"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26050}
        name="Shuffled Melon Crate: Behind DK's 5DI maze"
        region="Caves Igloo"
        canGetLogic={canReachIgloo.in && hasBongoes}
        canGetBreak={canReachIgloo.out && hasBongoes}
      />
      <CavesCheck
        id={26051}
        name="Shuffled Melon Crate: In Diddy's 5DI room"
        region="Caves Igloo"
        canGetLogic={canReachIgloo.in && hasGuitar}
        canGetBreak={canReachIgloo.out && hasGuitar}
      />
      <CavesCheck
        id={26053}
        name="Shuffled Melon Crate: Opposite Tiny's 5DI room entrance"
        region="Caves Igloo"
        canGetLogic={canReachIgloo.in && hasSax}
        canGetBreak={canReachIgloo.out && hasSax}
      />
    </CratePool>
  )
}

const IglooCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default IglooCrates
