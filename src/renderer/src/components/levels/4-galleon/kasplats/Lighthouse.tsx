import KasplatPool from '@renderer/components/pools/Kasplats'
import { useGalleonLighthousePlatform } from '@renderer/hooks/galleon'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
const canReachLighthouseBase = useGalleonLighthousePlatform()
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
