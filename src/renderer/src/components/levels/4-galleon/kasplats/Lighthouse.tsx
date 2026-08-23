import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGalleonLighthousePlatform, useKevin, useChunkySeasickGb } from '@renderer/hooks/galleon'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
const canReachLighthouseBase = useGalleonLighthousePlatform()
const diddyVanillaKasplat = useKevin()
const canDoChunkyShip = useChunkySeasickGb()
  return (
    <KasplatPool>
      <GalleonCheck
        id={54001}
        name="Shuffled Kasplat: Diddy's Vanilla Location (Kevin)"
        region="Lighthouse Area"
        canGetLogic={diddyVanillaKasplat.in}
        canGetBreak={diddyVanillaKasplat.out}
      />
      <GalleonCheck
        id={54005}
        name="Shuffled Kasplat: Base of the Lighthouse"
        region="Lighthouse Area"
        canGetLogic={canReachLighthouseBase.in}
        canGetBreak={canReachLighthouseBase.out}
      />
      <GalleonCheck
        id={54011}
        name="Shuffled Kasplat: Inside Chunky's ship"
        region="Lighthouse Area"
        canGetLogic={canDoChunkyShip.in}
        canGetBreak={canDoChunkyShip.out}
      />
    </KasplatPool>
  )
}

const LighthouseKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default LighthouseKasplats
