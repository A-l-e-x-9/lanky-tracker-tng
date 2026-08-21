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
        id={56003}
        name="Shuffled Kasplat: Tiny's Vanilla Location (a high platform near Candy's)"
        region="Caves Cabins"
        canGetLogic={tinyVanillaKasplat.in}
        canGetBreak={tinyVanillaKasplat.out}
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
        id={56017}
        name="Shuffled Kasplat: In DK's 5DC room"
        region="Caves Cabins"
        canGetLogic={isBreathing.in && hasBongoes}
        canGetBreak={isBreathing.out && hasBongoes}
      />
    </KasplatPool>
  )
}

const CabinKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default CabinKasplats
