import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import ArenaPool from '@renderer/components/pools/Arenas'
import { useGeneralThing, useDkRotateGb, useChunkyClearGb, useTinyPortGb, useTinyCaveGb, useIceWalls, useCavesMiniFunky, useCavesPillar, useCavesIgloo, useLankyIglooGb, useLankyCastleGb } from '@renderer/hooks/caves'
import { useShuffledArenas } from '@renderer/hooks/settings'
import { useMonkeyport, useRocket, useTwirl, usePunch, useBalloon, useHighGrab, useChunky, useBarrel, useDk, useBongo, useSax, useGuitar } from '@renderer/hooks/kongs'
import CavesCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralThing()
const canReachVanillaArena = useDkRotateGb()
const canDoKoshaGB = useChunkyClearGb()
const hasMonkeyport = useMonkeyPort()
const canDoTinyIglooGB = useTinyPortGb()
const hasJetbarrel = useRocket()
const isHinaKagiyama = useTwirl()
const canDoShrinkGB = useTinyCaveGb()
const hasPunch = usePunch()
const canGetPastIceWalls = useIceWalls()
const hasBalloon = useBalloon()
const canHighGrab = useHighGrab()
const hasChunky = useChunky()
const hasBarrels = useBarrel()
const canReachWarp4 = useCavesMiniFunky()
const [didCheck] = useDonkStore(useShallow((state) => [state.checks]))
const hasDK = useDk()
const canDoLankyKasplat = useCavesPillar()
const canReachIgloo = useCavesIgloo()
const hasBongoes = useBongo()
const canDoLanky5DI = useLankyIglooGb()
const hasSax = useSax()
const hasGuitar = useGuitar()
const canDoIceCastle = useLankyCastleGb()
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
        id={16006}
        name="Shuffled Battle Arena: Under igloo area's Tag Barrel"
        region="Caves Igloo"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16008}
        name="Shuffled Battle Arena: In Tiny's Mini Monkey cave near Cranky's"
        region="Crystal Caves Main"
        canGetLogic={canDoShrinkGB.in}
        canGetBreak={canDoShrinkGB.out}
      />
      <CavesCheck
        id={16009}
        name="Shuffled Battle Arena: Near ice wall to big boulder"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16010}
        name="Shuffled Battle Arena: In giant boulder room"
        region="Crystal Caves Main"
        canGetLogic={hasPunch || canGetPastIceWalls}
      />
      <CavesCheck
        id={16011}
        name="Shuffled Battle Arena: In front of Cranky's"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16012}
        name="Shuffled Battle Arena: A yellow rock below the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16013}
        name="Shuffled Battle Arena: A blue rock below the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16014}
        name="Shuffled Battle Arena: Tag Barrel at the Ice Castle"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16015}
        name="Shuffled Battle Arena: Near the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16016}
        name="Shuffled Battle Arena: On top of the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={hasBalloon}
        canGetBreak={canHighGrab}
      />
      <CavesCheck
        id={16017}
        name="Shuffled Battle Arena: Near the small boulder"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16018}
        name="Shuffled Battle Arena: Near ice wall to Snide's"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
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
        id={16021}
        name="Shuffled Battle Arena: Near vanilla level entrance"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16022}
        name="Shuffled Battle Arena: Near starting Gorilla Gone room"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16023}
        name="Shuffled Battle Arena: In starting Gorilla Gone room"
        region="Crystal Caves Main"
        canGetLogic={hasChunky && hasBarrels}
      />
      <CavesCheck
        id={16024}
        name="Shuffled Battle Arena: Near Lanky's Kasplat"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16025}
        name="Shuffled Battle Arena: Near Funky's"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16026}
        name="Shuffled Battle Arena: Near Funky's, under Jetbarrel"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16027}
        name="Shuffled Battle Arena: In the Warp 4/Monkeyport cave"
        region="Crystal Caves Main"
        canGetLogic={canReachWarp4.in}
        canGetBreak={canReachWarp4.out}
      />
      <CavesCheck
        id={16028}
        name="Shuffled Battle Arena: Near the headphones"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16029}
        name="Shuffled Battle Arena: Ledge near headphones"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16030}
        name="Shuffled Battle Arena: Near Lanky's cabin"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16031}
        name="Shuffled Battle Arena: Left of the rotating cabin"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16032}
        name="Shuffled Battle Arena: Next to the rotating cabin"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16033}
        name="Shuffled Battle Arena: Right of the rotating cabin"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16034}
        name="Shuffled Battle Arena: Cabin Kasplat pillar"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16035}
        name="Shuffled Battle Arena: Near cabin area Jetbarrel"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16036}
        name="Shuffled Battle Arena: Near Tiny's 5DC room"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16037}
        name="Shuffled Battle Arena: Near 5DC Tag Barrel"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16038}
        name="Shuffled Battle Arena: Near Diddy's upper 5DC room"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16039}
        name="Shuffled Battle Arena: Also near Diddy's upper 5DC room, closer to door"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16040}
        name="Shuffled Battle Arena: Vanilla Warp 1 at level start"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16041}
        name="Shuffled Battle Arena: Vanilla Warp 1 at igloos"
        region="Caves Igloo"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16042}
        name="Shuffled Battle Arena: Vanilla Warp 2 at level start"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16043}
        name="Shuffled Battle Arena: Vanilla Warp 2 at DK's rotating cabin"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16044}
        name="Shuffled Battle Arena: Vanilla Warp 3 at igloos"
        region="Caves Igloo"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={16045}
        name="Shuffled Battle Arena: Vanilla Warp 3 from Tiny's Mini room"
        region="Crystal Caves Main"
        canGetLogic={didCheck[6030]}
      />
      <CavesCheck
        id={16046}
        name="Shuffled Battle Arena: Vanilla Warp 4 on spire near Cranky's"
        region="Crystal Caves Main"
        canGetLogic={hasDK || hasJetbarrel || isHinaKagiyama}
      />
      <CavesCheck
        id={16047}
        name="Shuffled Battle Arena: Vanilla Warp 4, near Funky's"
        region="Crystal Caves Main"
        canGetLogic={canReachWarp4.in}
        canGetBreak={canReachWarp4.out}
      />
      <CavesCheck
        id={16048}
        name="Shuffled Battle Arena: Vanilla Warp 5 at 5DC"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
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
        id={16054}
        name="Shuffled Battle Arena: Opposite DK's 5DC room entrance"
        region="Caves Cabins"
        canGetLogic={hasBongoes}
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
      <CavesCheck
        id={16058}
        name="Shuffled Battle Arena: Called to the carpet of Lanky's cabin"
        region="Caves Cabins"
        canGetLogic={hasBalloon && hasTrombone}
        canGetBreak={hasJetbarrel && hasTrombone}
      />
      <CavesCheck
        id={16059}
        name="Shuffled Battle Arena: Ice Castle, left"
        region="Crystal Caves Main"
        canGetLogic={canDoIceCastle.in}
        canGetBreak={canDoIceCastle.out}
      />
      <CavesCheck
        id={16060}
        name="Shuffled Battle Arena: Ice Castle, right"
        region="Crystal Caves Main"
        canGetLogic={canDoIceCastle.in}
        canGetBreak={canDoIceCastle.out}
      />
    </ArenaPool>
  )
}

const ShuffledArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default ShuffledArenas
