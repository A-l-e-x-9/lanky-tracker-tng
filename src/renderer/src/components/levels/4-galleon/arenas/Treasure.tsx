import ArenaPool from '@renderer/components/pools/Arenas'
import { useLankyGoldGb, useDiddyGoldGb } from '@renderer/hooks/galleon'
import { useShuffledArenas } from '@renderer/hooks/settings'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
const canReachLankyGold = useLankyGoldGb()
const canReachDiddyGold = useDiddyGoldGb()
  return (
    <ArenaPool>
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: Top of Lanky's gold tower"
        region="Treasure Room"
        canGetLogic={canReachLankyGold.in}
        canGetBreak={canReachLankyGold.out}
      />
      <GalleonCheck
        id={14000}
        name="Shuffled Battle Arena: Vanilla Warp 4, on Diddy's gold tower"
        region="Treasure Room"
        canGetLogic={canReachDiddyGold.in}
        canGetBreak={canReachDiddyGold.out}
      />
    </ArenaPool>
  )
}

const TreasureArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default TreasureArenas
