import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import RainbowCoinPool from '@renderer/components/pools/RainbowCoins'
import { useGeneralDirt, useKoshaDirt, useDkRotateGb, useChunkyClearGb, useTinyPortGb, useTinyCaveGb, useIceWalls, useCavesMiniFunky, useCavesPillar, useCavesIgloo, useLankyIglooGb, useLankyCastleGb, useChunkyCabinGb } from '@renderer/hooks/caves'
import { useShuffleDirt } from '@renderer/hooks/settings'
import { useShockwave, useMonkeyport, useRocket, useTwirl, usePunch, useBalloon, useHighGrab, useChunky, useBarrel, useDk, useBongos, useSax, useGuitar, useTrombone, useTriangle } from '@renderer/hooks/kongs'
import CavesCheck from '../check'

const Shuffled: React.FC = () => {
const isBreathing = useGeneralDirt()
const hasShockwave = useShockwave()
const canReachVanillaArena = useDkRotateGb()
const vanillaDirt = useKoshaDirt()
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
    <RainbowCoinPool>
      <CavesCheck
        id={36000}
        name="Shuffled Dirt Patch: Inside DK's rotating cabin"
        region="Caves Cabins"
        canGetLogic={canReachVanillaArena.in && hasShockwave}
        canGetBreak={canReachVanillaArena.out && hasShockwave}
      />
      <CavesCheck
        id={36001}
        name="Shuffled Dirt Patch: Vanilla Dirt (in the Giant Kosha's area)"
        region="Caves Igloo"
        canGetLogic={vanillaDirt.in}
        canGetBreak={vanillaDirt.out}
      />
      <CavesCheck
        id={36002}
        name="Shuffled Dirt Patch: In Tiny's Monkeyport igloo"
        region="Caves Igloo"
        canGetLogic={canDoTinyIglooGB.in && hasShockwave}
        canGetBreak={canDoTinyIglooGB.out && hasShockwave}
      />
      <CavesCheck
        id={36003}
        name="Shuffled Dirt Patch: In the Giant Kosha igloo"
        region="Caves Igloo"
        canGetLogic={canDoKoshaGB.in && hasShockwave}
        canGetBreak={canDoKoshaGB.out && hasShockwave}
      />
      <CavesCheck
        id={36004}
        name="Shuffled Dirt Patch: On a pillar near the Monkeyport igloo"
        region="Caves Igloo"
        canGetLogic={isBreathing.in && (hasJetbarrel || isHinaKagiyama)}
        canGetBreak={isBreathing.out && (hasJetbarrel || isHinaKagiyama)}
      />
      <CavesCheck
        id={36005}
        name="Shuffled Dirt Patch: On top of the 5DI"
        region="Caves Igloo"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36006}
        name="Shuffled Dirt Patch: Under the 5DI area's Tag Barrel"
        region="Caves Igloo"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36008}
        name="Shuffled Dirt Patch: In Tiny's Mini Monkey cave near Cranky's"
        region="Crystal Caves Main"
        canGetLogic={canDoShrinkGB.in && hasShockwave}
        canGetBreak={canDoShrinkGB.out && hasShockwave}
      />
      <CavesCheck
        id={36009}
        name="Shuffled Dirt Patch: Near ice wall to big boulder"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36010}
        name="Shuffled Dirt Patch: In giant boulder room"
        region="Crystal Caves Main"
        canGetLogic={(hasPunch || canGetPastIceWalls) && hasShockwave}
      />
      <CavesCheck
        id={36011}
        name="Shuffled Dirt Patch: In front of Cranky's"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36012}
        name="Shuffled Dirt Patch: A yellow rock below the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36013}
        name="Shuffled Dirt Patch: A blue rock below the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36014}
        name="Shuffled Dirt Patch: Tag Barrel at the Ice Castle"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36015}
        name="Shuffled Dirt Patch: Near the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36016}
        name="Shuffled Dirt Patch: On top of the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={hasBalloon && hasShockwave}
        canGetBreak={canHighGrab && hasShockwave}
      />
      <CavesCheck
        id={36017}
        name="Shuffled Dirt Patch: Near the small boulder"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36018}
        name="Shuffled Dirt Patch: Near ice wall to Snide's"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36019}
        name="Shuffled Dirt Patch: Near Snide's"
        region="Crystal Caves Main"
        canGetLogic={(hasPunch || canGetPastIceWalls) && hasShockwave}
      />
      <CavesCheck
        id={36021}
        name="Shuffled Dirt Patch: Near vanilla level entrance"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36022}
        name="Shuffled Dirt Patch: Near starting Gorilla Gone room"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36023}
        name="Shuffled Dirt Patch: In starting Gorilla Gone room"
        region="Crystal Caves Main"
        canGetLogic={(hasChunky && hasBarrels) && hasShockwave}
      />
      <CavesCheck
        id={36024}
        name="Shuffled Dirt Patch: Near Lanky's Kasplat"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36025}
        name="Shuffled Dirt Patch: Near Funky's"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36026}
        name="Shuffled Dirt Patch: Near Funky's, under Jetbarrel"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36027}
        name="Shuffled Dirt Patch: In the Warp 4/Monkeyport cave"
        region="Crystal Caves Main"
        canGetLogic={canReachWarp4.in}
        canGetBreak={canReachWarp4.out}
      />
      <CavesCheck
        id={36028}
        name="Shuffled Dirt Patch: Near the headphones"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36029}
        name="Shuffled Dirt Patch: Ledge near headphones"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36030}
        name="Shuffled Dirt Patch: Near Lanky's cabin"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36031}
        name="Shuffled Dirt Patch: Left of the rotating cabin"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36032}
        name="Shuffled Dirt Patch: Next to the rotating cabin"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36033}
        name="Shuffled Dirt Patch: Right of the rotating cabin"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36034}
        name="Shuffled Dirt Patch: At the pillar the Cabin Kasplat is on in vanilla"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36035}
        name="Shuffled Dirt Patch: Near cabin area Jetbarrel"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36036}
        name="Shuffled Dirt Patch: Near Tiny's 5DC room"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36037}
        name="Shuffled Dirt Patch: Near 5DC Tag Barrel"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36038}
        name="Shuffled Dirt Patch: Near Diddy's upper 5DC room"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36039}
        name="Shuffled Dirt Patch: Also near Diddy's upper 5DC room, closer to door"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36040}
        name="Shuffled Dirt Patch: Vanilla Warp 1 at level start"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36041}
        name="Shuffled Dirt Patch: Vanilla Warp 1 at igloos"
        region="Caves Igloo"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36042}
        name="Shuffled Dirt Patch: Vanilla Warp 2 at level start"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36043}
        name="Shuffled Dirt Patch: Vanilla Warp 2 at DK's rotating cabin"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36044}
        name="Shuffled Dirt Patch: Vanilla Warp 3 at igloos"
        region="Caves Igloo"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36045}
        name="Shuffled Dirt Patch: Vanilla Warp 3 from Tiny's Mini room"
        region="Crystal Caves Main"
        canGetLogic={didCheck[6030] && hasShockwave}
      />
      <CavesCheck
        id={36046}
        name="Shuffled Dirt Patch: Vanilla Warp 4 on spire near Cranky's"
        region="Crystal Caves Main"
        canGetLogic={(hasDK || hasJetbarrel || isHinaKagiyama) && hasShockwave}
      />
      <CavesCheck
        id={36047}
        name="Shuffled Dirt Patch: Vanilla Warp 4, near Funky's"
        region="Crystal Caves Main"
        canGetLogic={canReachWarp4.in && hasShockwave}
        canGetBreak={canReachWarp4.out && hasShockwave}
      />
      <CavesCheck
        id={36048}
        name="Shuffled Dirt Patch: Vanilla Warp 5 at 5DC"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={36049}
        name="Shuffled Dirt Patch: Vanilla Warp 5, near Funky's"
        region="Crystal Caves Main"
        canGetLogic={canDoLankyKasplat.in && hasShockwave}
        canGetBreak={canDoLankyKasplat.out && hasShockwave}
      />
      <CavesCheck
        id={36050}
        name="Shuffled Dirt Patch: Behind DK's 5DI maze"
        region="Caves Igloo"
        canGetLogic={canReachIgloo.in && hasBongoes && hasShockwave}
        canGetBreak={canReachIgloo.out && hasBongoes && hasShockwave}
      />
      <CavesCheck
        id={36051}
        name="Shuffled Dirt Patch: In Diddy's 5DI room"
        region="Caves Igloo"
        canGetLogic={canReachIgloo.in && hasGuitar && hasShockwave}
        canGetBreak={canReachIgloo.out && hasGuitar && hasShockwave}
      />
      <CavesCheck
        id={36052}
        name="Shuffled Dirt Patch: A high platform in Lanky's 5DI room"
        region="Caves Igloo"
        canGetLogic={canDoLanky5DI.in && hasShockwave}
        canGetBreak={canDoLanky5DI.out && hasShockwave}
      />
      <CavesCheck
        id={36053}
        name="Shuffled Dirt Patch: Opposite Tiny's 5DI room entrance"
        region="Caves Igloo"
        canGetLogic={canReachIgloo.in && hasSax && hasShockwave}
        canGetBreak={canReachIgloo.out && hasSax && hasShockwave}
      />
      <CavesCheck
        id={36054}
        name="Shuffled Dirt Patch: Opposite DK's 5DC room entrance"
        region="Caves Cabins"
        canGetLogic={hasBongoes && hasShockwave}
      />
      <CavesCheck
        id={36055}
        name="Shuffled Dirt Patch: In the back left corner of Chunky's 5DC room"
        region="Caves Cabins"
        canGetLogic={canDoChunky5DC.in && hasShockwave}
        canGetBreak={hasTriangle && hasShockwave}
      />
      <CavesCheck
        id={36056}
        name="Shuffled Dirt Patch: Inside Tiny's 5DC room"
        region="Caves Cabins"
        canGetLogic={hasSax && hasShockwave}
      />
      <CavesCheck
        id={36057}
        name="Shuffled Dirt Patch: Inside Diddy's upper 5DC room"
        region="Caves Cabins"
        canGetLogic={hasGuitar && hasShockwave}
      />
      <CavesCheck
        id={36058}
        name="Shuffled Dirt Patch: Called to the carpet of Lanky's cabin"
        region="Caves Cabins"
        canGetLogic={hasBalloon && hasTrombone && hasShockwave}
        canGetBreak={hasJetbarrel && hasTrombone && hasShockwave}
      />
      <CavesCheck
        id={36059}
        name="Shuffled Dirt Patch: Ice Castle, left"
        region="Crystal Caves Main"
        canGetLogic={canDoIceCastle.in && hasShockwave}
        canGetBreak={canDoIceCastle.out && hasShockwave}
      />
      <CavesCheck
        id={36060}
        name="Shuffled Dirt Patch: Ice Castle, right"
        region="Crystal Caves Main"
        canGetLogic={canDoIceCastle.in && hasShockwave}
        canGetBreak={canDoIceCastle.out && hasShockwave}
      />
    </RainbowCoinPool>
  )
}

const ShuffledDirt: React.FC = () => (useShuffleDirt() ? <Shuffled /> : null)
export default ShuffledDirt
