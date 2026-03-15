import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralThing, useIceCastleKasplat, useFunkyKasplat, usePillarKasplat, useCabinKasplat, useIglooKasplat, useCanAccessSnide, useTinyCaveGb, useChunkyClearGb, useSlamCaves, useCavesIgloo } from '@renderer/hooks/caves'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { useClimbing, useAnyGun, useAnyMusic, useOrange, useDive, useBalloon, useDiddy, useChunky, useHighGrab, useMonkeyport, useGuitar, useBongo } from '@renderer/hooks/kongs'
import CavesCheck from '../check'

const Shuffled: React.FC = () => {
const DKVanillaKasplat = useIceCastleKasplat()
const diddyVanillaKasplat = useFunkyKasplat()
const lankyVanillaKasplat = usePillarKasplat()
const tinyVanillaKasplat = useCabinKasplat()
const chunkyVanillaKasplat = useIglooKasplat()
const isBreathing = useGeneralThing()
const canReachSnide = useCanAccessSnide()
const canDoTinyMiniGB = useTinyCaveGb()
const canDoGiantKoshaGB = useChunkyClearGb()
const 5DIOpen = useCavesIgloo()
const hasClimbing = useClimbing()
const hasAGun = useAnyGun()
const hasAnInstrument = useAnyMusic()
const hasOranges = useOrange()
const hasDiving = useDive()
const hasBalloon = useBalloon()
const hasDiddy = useDiddy()
const hasChunky = useChunky()
const hasSlam = useSlamCaves()
const canHighGrab = useHighGrab()
const hasMonkeyport = useMonkeyport()
const hasGuitar = useGuitar()
const hasBongoes = useBongo()
  return (
    <KasplatPool>
      <CavesCheck
        id={56000}
        name="Shuffled Kasplat: DK's Vanilla Location (behind the Ice Castle)"
        region="Crystal Caves Main"
        canGetLogic={DKVanillaKasplat.in}
        canGetBreak={DKVanillaKasplat.out}
      />
      <CavesCheck
        id={56001}
        name="Shuffled Kasplat: Diddy's Vanilla Location (in Tiny's room near Funky's)"
        region="Crystal Caves Main"
        canGetLogic={diddyVanillaKasplat.in}
        canGetBreak={diddyVanillaKasplat.out}
      />
      <CavesCheck
        id={56002}
        name="Shuffled Kasplat: Lanky's Vanilla Location (a high platform near Funky's)"
        region="Crystal Caves Main"
        canGetLogic={lankyVanillaKasplat.in}
        canGetBreak={lankyVanillaKasplat.out}
      />
      <CavesCheck
        id={56003}
        name="Shuffled Kasplat: Tiny's Vanilla Location (a high platform near Candy's)"
        region="Caves Cabins"
        canGetLogic={tinyVanillaKasplat.in}
        canGetBreak={tinyVanillaKasplat.out}
      />
      <CavesCheck
        id={56004}
        name="Shuffled Kasplat: Chunky's Vanilla Location (top of the 5DI)"
        region="Caves Igloo"
        canGetLogic={chunkyVanillaKasplat.in}
        canGetBreak={chunkyVanillaKasplat.out}
      />
      <CavesCheck
        id={56005}
        name="Shuffled Kasplat: Why doesn't Snide kill this one himself?"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in && canReachSnide}
        canGetBreak={isBreathing.out && canReachSnide}
      />
      <CavesCheck
        id={56006}
        name="Shuffled Kasplat: Stuck in Tiny's cave near the 5DI"
        region="Crystal Caves Main"
        canGetLogic={canDoTinyMiniGB.in}
        canGetBreak={canDoTinyMiniGB.out}
      />
      <CavesCheck
        id={56007}
        name="Shuffled Kasplat: Guarding the Monkeyport pad to the giant Kosha"
        region="Caves Igloo"
        canGetLogic={canDoGiantKoshaGB.in}
        canGetBreak={canDoGiantKoshaGB.out}
      />
      <CavesCheck
        id={56008}
        name="Shuffled Kasplat: At warp 5, 5DC-side"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={56009}
        name="Shuffled Kasplat: Across the river from Candy's"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={56010}
        name="Shuffled Kasplat: In the big rock room"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in && canReachSnide}
        canGetBreak={isBreathing.out && canReachSnide}
      />
      <CavesCheck
        id={56011}
        name="Shuffled Kasplat: In the water, under DK's Blast pad"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in && hasDiving.in && hasAnInstrument}
        canGetBreak={isBreathing.out && hasDiving.out}
      />
      <CavesCheck
        id={56012}
        name="Shuffled Kasplat: In the water, anchored to vanilla warp 4 near Cranky's"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in && hasDiving.in && (hasAGun || hasAnInstrument)}
        canGetBreak={isBreathing.out && hasDiving.out}
      />
      <CavesCheck
        id={56013}
        name="Shuffled Kasplat: In between Funky's and the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CavesCheck
        id={56014}
        name="Shuffled Kasplat: In Lanky's beetle race! D:"
        region="Crystal Caves Main"
        canGetBreak={(isBreathing.in || isBreathing.out) && hasSlam && (hasBalloon || canHighGrab)}
      />
      <CavesCheck
        id={56015}
        name="Shuffled Kasplat: Guarding the giant Kosha"
        region="Caves Igloo"
        canGetLogic={canDoGiantKoshaGB.in && hasMonkeyport}
        canGetBreak={canDoGiantKoshaGB.out && hasMonkeyport}
      />
      <CavesCheck
        id={56016}
        name="Shuffled Kasplat: In Diddy's 5DI room"
        region="Caves Igloo"
        canGetLogic={5DIOpen.in && hasGuitar}
        canGetBreak={5DIOpen.out && hasGuitar}
      />
      <CavesCheck
        id={56017}
        name="Shuffled Kasplat: In DK's 5DC room"
        region="Caves Cabins"
        canGetLogic={isBreathing.in && hasBongoes}
        canGetBreak={isBreathing.out && hasBongoes}
      />
      <CavesCheck
        id={56018}
        name="Shuffled Kasplat: Not afraid of spiders"
        region="Forest Area 1"
        canGetLogic={canReachSpydar.in}
        canGetBreak={canReachSpydar.out}
      />
      <CavesCheck
        id={56019}
        name="Shuffled Kasplat: In the winch room"
        region="Forest Area 1"
        canGetLogic={isBreathing.in && hasClimbing && hasDiddy && hasSlam && isNight.in}
        canGetBreak={isBreathing.out && hasClimbing && hasDiddy && hasSlam && isNight.out}
      />
      <CavesCheck
        id={56020}
        name="Shuffled Kasplat: In Chunky's face puzzle room"
        region="Inside the Giant Mushroom"
        canGetLogic={canReachTopOfShroom.in && hasChunky && hasSlam}
        canGetBreak={canReachTopOfShroom.out && hasChunky && hasSlam}
      />
    </KasplatPool>
  )
}

const ShuffledKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default ShuffledKasplats
