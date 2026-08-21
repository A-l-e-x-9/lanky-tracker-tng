import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralThing, useIceCastleKasplat, useFunkyKasplat, usePillarKasplat, useCabinKasplat, useIglooKasplat, useCanAccessSnide, useTinyCaveGb, useChunkyClearGb, useSlamCaves, useCavesIgloo } from '@renderer/hooks/caves'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { useAnyGun, useAnyMusic, useDive, useBalloon, useHighGrab, useMonkeyport, useGuitar, useBongos } from '@renderer/hooks/kongs'
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
      <CavesCheck
        id={56000}
        name="Shuffled Kasplat: DK's Vanilla Location (behind the Ice Castle)"
        region="Crystal Caves Main"
        canGetLogic={DKVanillaKasplat.in}
        canGetBreak={DKVanillaKasplat.out}
      />
      <CavesCheck
        id={56002}
        name="Shuffled Kasplat: Lanky's Vanilla Location (a high platform near Funky's)"
        region="Crystal Caves Main"
        canGetLogic={lankyVanillaKasplat.in}
        canGetBreak={lankyVanillaKasplat.out}
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
        id={56019}
        name="Shuffled Kasplat: At the vanilla level entrance"
        region="Crystal Caves Main"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
    </KasplatPool>
  )
}

const MainKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default MainKasplats
