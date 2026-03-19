import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralThing, useIceCastleKasplat, useFunkyKasplat, usePillarKasplat, useCabinKasplat, useIglooKasplat, useSlamCastle } from '@renderer/hooks/castle'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { useAnyGun, useAnyMusic, useDive, useBalloon, useHighGrab, useMonkeyport, useGuitar, useBongos } from '@renderer/hooks/kongs'
import CastleCheck from '../check'

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
const is5DIOpen = useCavesIgloo()
const hasAGun = useAnyGun()
const hasAnInstrument = useAnyMusic()
const hasDiving = useDive()
const hasBalloon = useBalloon()
const hasSlam = useSlamCaves()
const canHighGrab = useHighGrab()
const hasMonkeyport = useMonkeyport()
const hasGuitar = useGuitar()
const hasBongoes = useBongos()
  return (
    <KasplatPool>
      <CastleCheck
        id={57000}
        name="Shuffled Kasplat: DK's Vanilla Location (behind the Ice Castle)"
        region="Crystal Caves Main"
        canGetLogic={DKVanillaKasplat.in}
        canGetBreak={DKVanillaKasplat.out}
      />
      <CastleCheck
        id={57001}
        name="Shuffled Kasplat: Diddy's Vanilla Location (in Tiny's room near Funky's)"
        region="Crystal Caves Main"
        canGetLogic={diddyVanillaKasplat.in}
        canGetBreak={diddyVanillaKasplat.out}
      />
      <CastleCheck
        id={57002}
        name="Shuffled Kasplat: Lanky's Vanilla Location (a high platform near Funky's)"
        region="Crystal Caves Main"
        canGetLogic={lankyVanillaKasplat.in}
        canGetBreak={lankyVanillaKasplat.out}
      />
      <CastleCheck
        id={57003}
        name="Shuffled Kasplat: Tiny's Vanilla Location (a high platform near Candy's)"
        region="Caves Cabins"
        canGetLogic={tinyVanillaKasplat.in}
        canGetBreak={tinyVanillaKasplat.out}
      />
      <CastleCheck
        id={57004}
        name="Shuffled Kasplat: Chunky's Vanilla Location (top of the 5DI)"
        region="Caves Igloo"
        canGetLogic={chunkyVanillaKasplat.in}
        canGetBreak={chunkyVanillaKasplat.out}
      />
      <CastleCheck
        id={57005}
        name="Shuffled Kasplat: Why doesn't Snide kill this one himself?"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in && canReachSnide}
        canGetBreak={isBreathing.out && canReachSnide}
      />
      <CastleCheck
        id={57006}
        name="Shuffled Kasplat: Stuck in Tiny's cave near the 5DI"
        region="Crystal Caves Main"
        canGetLogic={canDoTinyMiniGB.in}
        canGetBreak={canDoTinyMiniGB.out}
      />
      <CastleCheck
        id={57007}
        name="Shuffled Kasplat: Guarding the Monkeyport pad to the giant Kosha"
        region="Caves Igloo"
        canGetLogic={canDoGiantKoshaGB.in}
        canGetBreak={canDoGiantKoshaGB.out}
      />
      <CastleCheck
        id={57008}
        name="Shuffled Kasplat: At warp 5, 5DC-side"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={57009}
        name="Shuffled Kasplat: Across the river from Candy's"
        region="Caves Cabins"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={57010}
        name="Shuffled Kasplat: In the big rock room"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in && canReachSnide}
        canGetBreak={isBreathing.out && canReachSnide}
      />
      <CastleCheck
        id={57011}
        name="Shuffled Kasplat: In the water, under DK's Blast pad"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in && hasDiving.in && hasAnInstrument}
        canGetBreak={isBreathing.out && hasDiving.out}
      />
      <CastleCheck
        id={57012}
        name="Shuffled Kasplat: In the water, anchored to vanilla warp 4 near Cranky's"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in && hasDiving.in && (hasAGun || hasAnInstrument)}
        canGetBreak={isBreathing.out && hasDiving.out}
      />
      <CastleCheck
        id={57013}
        name="Shuffled Kasplat: In between Funky's and the Ice Castle"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <CastleCheck
        id={57014}
        name="Shuffled Kasplat: In Lanky's beetle race! D:"
        region="Crystal Caves Main"
        canGetBreak={(isBreathing.in || isBreathing.out) && hasSlam && (hasBalloon || canHighGrab)}
      />
      <CastleCheck
        id={57015}
        name="Shuffled Kasplat: Guarding the giant Kosha"
        region="Caves Igloo"
        canGetLogic={canDoGiantKoshaGB.in && hasMonkeyport}
        canGetBreak={canDoGiantKoshaGB.out && hasMonkeyport}
      />
      <CastleCheck
        id={57016}
        name="Shuffled Kasplat: In Diddy's 5DI room"
        region="Caves Igloo"
        canGetLogic={is5DIOpen.in && hasGuitar}
        canGetBreak={is5DIOpen.out && hasGuitar}
      />
      <CastleCheck
        id={57017}
        name="Shuffled Kasplat: In DK's 5DC room"
        region="Caves Cabins"
        canGetLogic={isBreathing.in && hasBongoes}
        canGetBreak={isBreathing.out && hasBongoes}
      />
      <CastleCheck
        id={57018}
        name="Shuffled Kasplat: In Chunky's cave at the start"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in && canReachSnide}
        canGetBreak={isBreathing.out && canReachSnide}
      />
      <CastleCheck
        id={57019}
        name="Shuffled Kasplat: At the vanilla level entrance"
        region="Forest Area 1"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
    </KasplatPool>
  )
}

const ShuffledKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default ShuffledKasplats
