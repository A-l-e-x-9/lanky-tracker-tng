import GBPool from '@renderer/components/pools/GB'
import { useDiddyDungeonGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const DiddyDungeon: React.FC = () => (
<GBPool>
  <CastleCheck
    id={7013}
    name="Diddy's Dungeon Sniper Challenge"
    region="Castle Crypt and Dungeon"
    canGetLogic={useDiddyDungeonGb()}
  />
  </GBPool>
)

export default DiddyDungeon
