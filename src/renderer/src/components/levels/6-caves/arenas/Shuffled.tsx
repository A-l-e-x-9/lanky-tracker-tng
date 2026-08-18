import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing, useDkRotateGb, useChunkyClearGb, useTinyPortGb, useTinyCaveGb, useIceWalls, useCavesMiniFunky, useCavesPillar, useCavesIgloo, useLankyIglooGb, useLankyCastleGb } from '@renderer/hooks/caves'
import { useShuffledArenas } from '@renderer/hooks/settings'
import { useMonkeyport, useRocket, useTwirl, usePunch, useChunky, useBarrel, useDk, useBongos, useSax, useGuitar } from '@renderer/hooks/kongs'
import CavesCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const canReachVanillaArena = useDkRotateGb()
const canDoKoshaGB = useChunkyClearGb()
const hasMonkeyport = useMonkeyport()
const canDoTinyIglooGB = useTinyPortGb()
const hasJetbarrel = useRocket()
const isHinaKagiyama = useTwirl()
const canDoShrinkGB = useTinyCaveGb()
const hasPunch = usePunch()
const canGetPastIceWalls = useIceWalls()
const hasChunky = useChunky()
const hasBarrels = useBarrel()
const canReachWarp4 = useCavesMiniFunky()
const hasDK = useDk()
const canDoLankyKasplat = useCavesPillar()
const canReachIgloo = useCavesIgloo()
const hasBongoes = useBongos()
const canDoLanky5DI = useLankyIglooGb()
const hasSax = useSax()
const hasGuitar = useGuitar()
const canDoIceCastle = useLankyCastleGb()
  return (
    <ArenaPool>
      <CavesCheck
        id={16001}
        name="Shuffled Battle Arena: In the Giant Kosha's area"
        region="Caves Igloo"
        canGetLogic={canDoKoshaGB.in && hasMonkeyport}
        canGetBreak={canDoKoshaGB.out && hasMonkeyport}
      />
      <CavesCheck
        id={16002}
        name="Shuffled Battle Arena: In Tiny's Monkeyport igloo"
        region="Caves Igloo"
        canGetLogic={canDoTinyIglooGB.in}
        canGetBreak={canDoTinyIglooGB.out}
      />
      <CavesCheck
        id={16003}
        name="Shuffled Battle Arena: In the Giant Kosha igloo"
        region="Caves Igloo"
        canGetLogic={canDoKoshaGB.in}
        canGetBreak={canDoKoshaGB.out}
      />
      <CavesCheck
        id={16004}
        name="Shuffled Battle Arena: On a pillar near the Monkeyport igloo"
        region="Caves Igloo"
        canGetLogic={hasJetbarrel || isHinaKagiyama}
      />
      <CavesCheck
        id={16008}
        name="Shuffled Battle Arena: In Tiny's Mini Monkey cave near Cranky's"
        region="Crystal Caves Main"
        canGetLogic={canDoShrinkGB.in}
        canGetBreak={canDoShrinkGB.out}
      />
      <CavesCheck
        id={16010}
        name="Shuffled Battle Arena: In giant boulder room"
        region="Crystal Caves Main"
        canGetLogic={hasPunch || canGetPastIceWalls}
      />
      <CavesCheck
        id={16019}
        name="Shuffled Battle Arena: Near Snide's"
        region="Crystal Caves Main"
        canGetLogic={hasPunch || canGetPastIceWalls}
      />
      <CavesCheck
        id={16020}
        name="Shuffled Battle Arena: Under the small boulder"
        region="Crystal Caves Main"
        canGetLogic={hasChunky && hasBarrels}
      />
      <CavesCheck
        id={16023}
        name="Shuffled Battle Arena: In starting Gorilla Gone room"
        region="Crystal Caves Main"
        canGetLogic={hasChunky && hasBarrels}
      />
      <CavesCheck
        id={16027}
        name="Shuffled Battle Arena: In the Warp 4/Monkeyport cave"
        region="Crystal Caves Main"
        canGetLogic={canReachWarp4.in}
        canGetBreak={canReachWarp4.out}
      />
      <CavesCheck
        id={16047}
        name="Shuffled Battle Arena: Vanilla Warp 4, near Funky's"
        region="Crystal Caves Main"
        canGetLogic={canReachWarp4.in}
        canGetBreak={canReachWarp4.out}
      />
      <CavesCheck
        id={16049}
        name="Shuffled Battle Arena: Vanilla Warp 5, near Funky's"
        region="Crystal Caves Main"
        canGetLogic={canDoLankyKasplat.in}
        canGetBreak={canDoLankyKasplat.out}
      />
      <CavesCheck
        id={16050}
        name="Shuffled Battle Arena: Behind DK's 5DI maze"
        region="Caves Igloo"
        canGetLogic={canReachIgloo.in && hasBongoes}
        canGetBreak={canReachIgloo.out && hasBongoes}
      />
      <CavesCheck
        id={16052}
        name="Shuffled Battle Arena: A high platform in Lanky's 5DI room"
        region="Caves Igloo"
        canGetLogic={canDoLanky5DI.in}
        canGetBreak={canDoLanky5DI.out}
      />
      <CavesCheck
        id={16053}
        name="Shuffled Battle Arena: Opposite Tiny's 5DI room entrance"
        region="Caves Igloo"
        canGetLogic={canReachIgloo.in && hasSax}
        canGetBreak={canReachIgloo.out && hasSax}
      />
      <CavesCheck
        id={16056}
        name="Shuffled Battle Arena: Inside Tiny's 5DC room"
        region="Caves Cabins"
        canGetLogic={hasSax}
      />
      <CavesCheck
        id={16057}
        name="Shuffled Battle Arena: Inside Diddy's upper 5DC room"
        region="Caves Cabins"
        canGetLogic={hasGuitar}
      />
    </ArenaPool>
  )
}

const ShuffledArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default ShuffledArenas
