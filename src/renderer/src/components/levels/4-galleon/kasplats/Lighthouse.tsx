import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGalleonLighthousePlatform, useKevin } from '@renderer/hooks/galleon'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
const canReachLighthouseBase = useGalleonLighthousePlatform()
const diddyVanillaKasplat = useKevin()
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
    </KasplatPool>
  )
}

const LighthouseKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default LighthouseKasplats
