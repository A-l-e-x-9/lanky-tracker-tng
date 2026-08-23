import KasplatPool from '@renderer/components/pools/Kasplats'
import { useDiddyGoldGb, useGalleonLighthouseInside } from '@renderer/hooks/galleon'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { useClimbing } from '@renderer/hooks/kongs'
import GalleonCheck from '../check'
import CavernKasplats from './Caverns'
import OutskirtKasplats from './Outskirts'

const Shuffled: React.FC = () => {
const DKVanillaKasplat = useDiddyGoldGb()
const canGoInLighthouse = useGalleonLighthouseInside()
const hasClimbing = useClimbing()
  return (
    <KasplatPool>
      <CavernKasplats />
      <OutskirtKasplats />
      <GalleonCheck
        id={54000}
        name="Shuffled Kasplat: DK's Vanilla Location (on Diddy's gold pile)"
        region="Treasure Room"
        canGetLogic={DKVanillaKasplat.in}
        canGetBreak={DKVanillaKasplat.out}
      />
      <GalleonCheck
        id={54008}
        name="Shuffled Kasplat: Top of the Whomp's Fortress ripoff area"
        region="Lighthouse Area"
        canGetLogic={canGoInLighthouse.in && hasClimbing}
        canGetBreak={canGoInLighthouse.out && hasClimbing}
      />
    </KasplatPool>
  )
}

const ShuffledKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default ShuffledKasplats
