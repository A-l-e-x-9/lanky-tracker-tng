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
        id={54005}
        name="Shuffled Kasplat: Base of the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseBase.in}
        canGetBreak={canReachLighthouseBase.out}
      />
    </KasplatPool>
  )
}

const LighthouseKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default LighthouseKasplats
