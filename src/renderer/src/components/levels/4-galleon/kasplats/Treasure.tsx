import KasplatPool from '@renderer/components/pools/Kasplats'
import { useDiddyGoldGb, useKevin, useChunkySeasickGb, useGalleonLighthouseInside, useDiddyMechGb, useLankyGoldGb } from '@renderer/hooks/galleon'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import { useClimbing } from '@renderer/hooks/kongs'
import GalleonCheck from '../check'
import CavernKasplats from './Caverns'
import OutskirtKasplats from './Outskirts'

const Shuffled: React.FC = () => {
const DKVanillaKasplat = useDiddyGoldGb()
const diddyVanillaKasplat = useKevin()
const canGoInLighthouse = useGalleonLighthouseInside()
const mechfishAgenda = useDiddyMechGb()
const canDoLankyGoldTower = useLankyGoldGb()
const canDoChunkyShip = useChunkySeasickGb()
const hasClimbing = useClimbing()
  return (
    <KasplatPool>
      <GalleonCheck
        id={54010}
        name="Shuffled Kasplat: On Lanky's gold tower"
        region="Treasure Room"
        canGetLogic={canDoLankyGoldTower.in}
        canGetBreak={canDoLankyGoldTower.out}
      />
    </KasplatPool>
  )
}

const TreasureKasplats: React.FC = () => (useShuffleKasplats() ? <Shuffled /> : null)
export default TreasureKasplats
