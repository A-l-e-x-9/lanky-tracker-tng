import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGeneralThing, useDiddyGoldGb, useKevin, useCannonKasplat, useVineKasplat, useCactusKasplat, useGalleonLighthousePlatform, useChunkySeasickGb, useGalleonLighthouseInside, useDiddyMechGb, useLankyGoldGb } from '@renderer/hooks/galleon'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { useClimbing, usePunch } from '@renderer/hooks/kongs'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
const DKVanillaKasplat = useDiddyGoldGb()
const diddyVanillaKasplat = useKevin()
const lankyVanillaKasplat = useCannonKasplat()
const tinyVanillaKasplat = useVineKasplat()
const chunkyVanillaKasplat = useCactusKasplat()
const isBreathing = useGeneralThing()
const canReachLighthouseBase = useGalleonLighthousePlatform()
const canGoInLighthouse = useGalleonLighthouseInside()
const mechfishAgenda = useDiddyMechGb()
const canDoLankyGoldTower = useLankyGoldGb()
const canDoChunkyShip = useChunkySeasickGb()
const hasClimbing = useClimbing()
const hasPrimatePunch = usePunch()
  return (
    <KasplatPool>
      <GalleonCheck
        id={54003}
        name="Shuffled Kasplat: Tiny's Vanilla Location (near vanilla warp 3 in the cave)"
        region="Galleon Caves"
        canGetLogic={tinyVanillaKasplat.in}
        canGetBreak={tinyVanillaKasplat.out}
      />
      <GalleonCheck
        id={54007}
        name="Shuffled Kasplat: In front of Cranky's"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={54012}
        name="Shuffled Kasplat: Just above the cave to Chunky's chests"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
      <GalleonCheck
        id={54013}
        name="Shuffled Kasplat: At the vanilla level start"
        region="Galleon Caves"
        canGetLogic={isBreathing.in}
        canGetBreak={isBreathing.out}
      />
    </KasplatPool>
  )
}

const CavernKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default CavernKasplats
