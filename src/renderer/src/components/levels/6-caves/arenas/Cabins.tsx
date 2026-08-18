import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing, useDkRotateGb } from '@renderer/hooks/caves'
import { useShuffledArenas } from '@renderer/hooks/settings'
import { useRocket, useBalloon, useBongos, useTrombone } from '@renderer/hooks/kongs'
import CavesCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const hasJetbarrel = useRocket()
const hasBalloon = useBalloon()
const hasBongoes = useBongos()
const hasTrombone = useTrombone()
const canReachVanillaArena = useDkRotateGb()
  return (
    <ArenaPool>
      <CavesCheck
        id={16000}
        name="Shuffled Battle Arena: Vanilla Arena (in DK's rotating cabin)"
        region="Caves Cabins"
        canGetLogic={canReachVanillaArena.in}
        canGetBreak={canReachVanillaArena.out}
      />
      <CavesCheck
        id={16000}
        name="Shuffled Battle Arena: Opposite DK's 5DC room entrance"
        region="Caves Cabins"
        canGetLogic={isBreathing.in && hasBongoes}
        canGetBreak={isBreathing.out && hasBongoes}
      />
      <CavesCheck
        id={16000}
        name="Shuffled Battle Arena: Called to the carpet of Lanky's cabin"
        region="Caves Cabins"
        canGetLogic={isBreathing.in && hasBalloon && hasTrombone}
        canGetBreak={isBreathing.out && hasJetbarrel && hasTrombone}
      />
      <CavesCheck
        id={16000}
        name="Shuffled Battle Arena: Near the headphones"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16000}
        name="Shuffled Battle Arena: Ledge near headphones"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16000}
        name="Shuffled Battle Arena: Near Lanky's cabin"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16000}
        name="Shuffled Battle Arena: Left of the rotating cabin"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16000}
        name="Shuffled Battle Arena: Next to the rotating cabin"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16000}
        name="Shuffled Battle Arena: Right of the rotating cabin"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16000}
        name="Shuffled Battle Arena: Cabin Kasplat pillar"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16000}
        name="Shuffled Battle Arena: Near cabin area Jetbarrel"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16000}
        name="Shuffled Battle Arena: Near Tiny's 5DC room"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16000}
        name="Shuffled Battle Arena: Near 5DC Tag Barrel"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16000}
        name="Shuffled Battle Arena: Near Diddy's upper 5DC room"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16000}
        name="Shuffled Battle Arena: Also near Diddy's upper 5DC room, closer to door"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16000}
        name="Shuffled Battle Arena: Vanilla Warp 2 at DK's rotating cabin"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16000}
        name="Shuffled Battle Arena: Vanilla Warp 5 at 5DC"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
    </ArenaPool>
  )
}

const CabinArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default CabinArenas
