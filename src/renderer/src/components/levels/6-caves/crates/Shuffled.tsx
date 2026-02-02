import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import CratePool from '@renderer/components/pools/Crates'
import { useGeneralThing, useDkRotateGb, useChunkyClearGb, useTinyPortGb, useTinyCaveGb, useIceWalls, useCavesMiniFunky, useCavesPillar, useCavesIgloo, useLankyIglooGb, useLankyCastleGb, useChunkyCabinGb } from '@renderer/hooks/caves'
import { useShuffleCrates } from '@renderer/hooks/settings'
import { useMonkeyport, useRocket, useTwirl, usePunch, useBalloon, useHighGrab, useChunky, useBarrel, useDk, useBongos, useSax, useGuitar, useTrombone, useTriangle } from '@renderer/hooks/kongs'
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
const hasBalloon = useBalloon()
const canHighGrab = useHighGrab()
const hasChunky = useChunky()
const hasBarrels = useBarrel()
const canReachWarp4 = useCavesMiniFunky()
const [didCheck] = useDonkStore(useShallow((state) => [state.checks]))
const hasDK = useDk()
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
        id={26000}
        name="Shuffled Melon Crate: Inside DK's rotating cabin"
        region="Caves Cabins"
        canGetLogic={canReachVanillaArena.in}
        canGetBreak={canReachVanillaArena.out}
      />
      <CavesCheck
        id={26001}
        name="Shuffled Melon Crate: In the Giant Kosha's area"
        region="Caves Igloo"
        canGetLogic={canDoKoshaGB.in && hasMonkeyport}
        canGetBreak={canDoKoshaGB.out && hasMonkeyport}
      />
      <CavesCheck
        id={26002}
        name="Shuffled Melon Crate: In Tiny's Monkeyport igloo"
        region="Caves Igloo"
        canGetLogic={canDoTinyIglooGB.in}
        canGetBreak={canDoTinyIglooGB.out}
      />
      <CavesCheck
        id={26003}
        name="Shuffled Melon Crate: In the Giant Kosha igloo"
        region="Caves Igloo"
        canGetLogic={canDoKoshaGB.in}
        canGetBreak={canDoKoshaGB.out}
      />
      <CavesCheck
        id={26007}
        name="Shuffled Melon Crate: In front of the 5DI"
        region="Caves Igloo"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26008}
        name="Shuffled Melon Crate: In Tiny's Mini Monkey cave near Cranky's"
        region="Crystal Caves Main"
        canGetLogic={canDoShrinkGB.in}
        canGetBreak={canDoShrinkGB.out}
      />
      <CavesCheck
        id={26009}
        name="Shuffled Melon Crate: Near ice wall to big boulder"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26010}
        name="Shuffled Melon Crate: In giant boulder room"
        region="Crystal Caves Main"
        canGetLogic={hasPunch || canGetPastIceWalls}
      />
      <CavesCheck
        id={26012}
        name="Shuffled Melon Crate: A yellow rock below the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26013}
        name="Shuffled Melon Crate: A blue rock below the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26014}
        name="Shuffled Melon Crate: Tag Barrel at the Ice Castle"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26015}
        name="Shuffled Melon Crate: Near the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26016}
        name="Shuffled Melon Crate: On top of the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={hasBalloon}
        canGetBreak={canHighGrab}
      />
      <CavesCheck
        id={26017}
        name="Shuffled Melon Crate: Near the small boulder"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26018}
        name="Shuffled Melon Crate: Near ice wall to Snide's"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26019}
        name="Shuffled Melon Crate: Near Snide's"
        region="Crystal Caves Main"
        canGetLogic={hasPunch || canGetPastIceWalls}
      />
      <CavesCheck
        id={26021}
        name="Shuffled Melon Crate: Near vanilla level entrance"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26022}
        name="Shuffled Melon Crate: Near starting Gorilla Gone room"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26023}
        name="Shuffled Melon Crate: In starting Gorilla Gone room"
        region="Crystal Caves Main"
        canGetLogic={hasChunky && hasBarrels}
      />
      <CavesCheck
        id={26024}
        name="Shuffled Melon Crate: Near Lanky's Kasplat"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26025}
        name="Shuffled Melon Crate: Near Funky's"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26026}
        name="Shuffled Melon Crate: Near Funky's, under Jetbarrel"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26027}
        name="Shuffled Melon Crate: In the Warp 4/Monkeyport cave"
        region="Crystal Caves Main"
        canGetLogic={canReachWarp4.in}
        canGetBreak={canReachWarp4.out}
      />
      <CavesCheck
        id={26028}
        name="Shuffled Melon Crate: Near the headphones"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26029}
        name="Shuffled Melon Crate: Ledge near headphones"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26030}
        name="Shuffled Melon Crate: Near Lanky's cabin"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26031}
        name="Shuffled Melon Crate: Left of the rotating cabin"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26032}
        name="Shuffled Melon Crate: Next to the rotating cabin"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26033}
        name="Shuffled Melon Crate: Right of the rotating cabin"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26035}
        name="Shuffled Melon Crate: Near cabin area Jetbarrel"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26036}
        name="Shuffled Melon Crate: Near Tiny's 5DC room"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26037}
        name="Shuffled Melon Crate: Near 5DC Tag Barrel"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26038}
        name="Shuffled Melon Crate: Near Diddy's upper 5DC room"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26039}
        name="Shuffled Melon Crate: Also near Diddy's upper 5DC room, closer to door"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26040}
        name="Shuffled Melon Crate: Vanilla Warp 1 at level start"
        region="Crystal Caves Main"
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
        id={26042}
        name="Shuffled Melon Crate: Vanilla Warp 2 at level start"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26043}
        name="Shuffled Melon Crate: Vanilla Warp 2 at DK's rotating cabin"
        region="Caves Cabins"
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
        id={26045}
        name="Shuffled Melon Crate: Vanilla Warp 3 from Tiny's Mini room"
        region="Crystal Caves Main"
        canGetLogic={didCheck[6030]}
      />
      <CavesCheck
        id={26046}
        name="Shuffled Melon Crate: Vanilla Warp 4 on spire near Cranky's"
        region="Crystal Caves Main"
        canGetLogic={hasDK || hasJetbarrel || isHinaKagiyama}
      />
      <CavesCheck
        id={26047}
        name="Shuffled Melon Crate: Vanilla Warp 4, near Funky's"
        region="Crystal Caves Main"
        canGetLogic={canReachWarp4.in}
        canGetBreak={canReachWarp4.out}
      />
      <CavesCheck
        id={26048}
        name="Shuffled Melon Crate: Vanilla Warp 5 at 5DC"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={26049}
        name="Shuffled Melon Crate: Vanilla Warp 5, near Funky's"
        region="Crystal Caves Main"
        canGetLogic={canDoLankyKasplat.in}
        canGetBreak={canDoLankyKasplat.out}
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
        id={26052}
        name="Shuffled Melon Crate: A high platform in Lanky's 5DI room"
        region="Caves Igloo"
        canGetLogic={canDoLanky5DI.in}
        canGetBreak={canDoLanky5DI.out}
      />
      <CavesCheck
        id={26053}
        name="Shuffled Melon Crate: Opposite Tiny's 5DI room entrance"
        region="Caves Igloo"
        canGetLogic={canReachIgloo.in && hasSax}
        canGetBreak={canReachIgloo.out && hasSax}
      />
      <CavesCheck
        id={26054}
        name="Shuffled Melon Crate: Opposite DK's 5DC room entrance"
        region="Caves Cabins"
        canGetLogic={hasBongoes}
      />
      <CavesCheck
        id={26055}
        name="Shuffled Melon Crate: In the back left corner of Chunky's 5DC room"
        region="Caves Cabins"
        canGetLogic={canDoChunky5DC.in}
        canGetBreak={hasTriangle}
      />
      <CavesCheck
        id={26056}
        name="Shuffled Melon Crate: Inside Tiny's 5DC room"
        region="Caves Cabins"
        canGetLogic={hasSax}
      />
      <CavesCheck
        id={26057}
        name="Shuffled Melon Crate: Inside Diddy's upper 5DC room"
        region="Caves Cabins"
        canGetLogic={hasGuitar}
      />
      <CavesCheck
        id={26058}
        name="Shuffled Melon Crate: Called to the carpet of Lanky's cabin"
        region="Caves Cabins"
        canGetLogic={hasBalloon && hasTrombone}
        canGetBreak={hasJetbarrel && hasTrombone}
      />
      <CavesCheck
        id={26059}
        name="Shuffled Melon Crate: Ice Castle, left"
        region="Crystal Caves Main"
        canGetLogic={canDoIceCastle.in}
        canGetBreak={canDoIceCastle.out}
      />
      <CavesCheck
        id={26060}
        name="Shuffled Melon Crate: Ice Castle, right"
        region="Crystal Caves Main"
        canGetLogic={canDoIceCastle.in}
        canGetBreak={canDoIceCastle.out}
      />
    </CratePool>
  )
}

const ShuffledCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default ShuffledCrates
