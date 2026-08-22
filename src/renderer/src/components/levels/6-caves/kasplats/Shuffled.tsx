import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralThing, useFunkyKasplat, useCanAccessSnide, useTinyCaveGb, useChunkyClearGb, useSlamCaves } from '@renderer/hooks/caves'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { useBalloon, useHighGrab, useMonkeyport } from '@renderer/hooks/kongs'
import CavesCheck from '../check'
import CabinKasplats from './Cabins'

const Shuffled: React.FC = () => {
const diddyVanillaKasplat = useFunkyKasplat()
const isBreathing = useGeneralThing()
const canReachSnide = useCanAccessSnide()
const canDoTinyMiniGB = useTinyCaveGb()
const canDoGiantKoshaGB = useChunkyClearGb()
const hasBalloon = useBalloon()
const hasSlam = useSlamCaves()
const canHighGrab = useHighGrab()
const hasMonkeyport = useMonkeyport()
  return (
    <KasplatPool>
      <CabinKasplats />
      <CavesCheck
        id={56001}
        name="Shuffled Kasplat: Diddy's Vanilla Location (in Tiny's room near Funky's)"
        region="Crystal Caves Main"
        canGetLogic={diddyVanillaKasplat.in}
        canGetBreak={diddyVanillaKasplat.out}
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
        id={56010}
        name="Shuffled Kasplat: In the big rock room"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in && canReachSnide}
        canGetBreak={isBreathing.out && canReachSnide}
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
        id={56018}
        name="Shuffled Kasplat: In Chunky's cave at the start"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in && canReachSnide}
        canGetBreak={isBreathing.out && canReachSnide}
      />
    </KasplatPool>
  )
}

const ShuffledKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default ShuffledKasplats
