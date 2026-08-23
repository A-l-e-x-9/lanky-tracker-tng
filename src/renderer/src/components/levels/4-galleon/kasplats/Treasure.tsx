import KasplatPool from '@renderer/components/pools/Kasplats'
import { useLankyGoldGb } from '@renderer/hooks/galleon'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
const canDoLankyGoldTower = useLankyGoldGb()
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
