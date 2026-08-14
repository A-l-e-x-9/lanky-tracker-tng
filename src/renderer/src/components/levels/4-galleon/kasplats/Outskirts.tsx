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
        id={54004}
        name="Shuffled Kasplat: Chunky's Vanilla Location (the &quot;cactus&quot;)"
        region="Shipyard Outskirts"
        canGetLogic={chunkyVanillaKasplat.in}
        canGetBreak={chunkyVanillaKasplat.out}
      />
      <GalleonCheck
        id={54015}
        name="Shuffled Kasplat: Also on the &quot;cactus&quot;"
        region="Shipyard Outskirts"
        canGetLogic={chunkyVanillaKasplat.in}
        canGetBreak={chunkyVanillaKasplat.out}
      />
    </KasplatPool>
  )
}

const OutskirtKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default OutskirtKasplats
