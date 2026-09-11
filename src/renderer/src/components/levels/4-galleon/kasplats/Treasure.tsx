import KasplatPool from '@renderer/components/pools/Kasplats'
import { useDiddyGoldGb, useLankyGoldGb } from '@renderer/hooks/galleon'
import { useShuffleKasplats } from '@renderer/hooks/settings'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
const canDoLankyGoldTower = useLankyGoldGb()
const DKVanillaKasplat = useDiddyGoldGb()
  return (
    <KasplatPool>
      <GalleonCheck
        id={54000}
        name="Shuffled Kasplat: DK's Vanilla Location (on Diddy's gold pile)"
        region="Treasure Room"
        canGetLogic={DKVanillaKasplat.in}
        canGetBreak={DKVanillaKasplat.out}
      />
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
