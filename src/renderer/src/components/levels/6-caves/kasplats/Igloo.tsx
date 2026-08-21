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
        id={56004}
        name="Shuffled Kasplat: Chunky's Vanilla Location (top of the 5DI)"
        region="Caves Igloo"
        canGetLogic={chunkyVanillaKasplat.in}
        canGetBreak={chunkyVanillaKasplat.out}
      />
      <CavesCheck
        id={56016}
        name="Shuffled Kasplat: In Diddy's 5DI room"
        region="Caves Igloo"
        canGetLogic={is5DIOpen.in && hasGuitar}
        canGetBreak={is5DIOpen.out && hasGuitar}
      />
    </KasplatPool>
  )
}

const IglooKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default IglooKasplats
