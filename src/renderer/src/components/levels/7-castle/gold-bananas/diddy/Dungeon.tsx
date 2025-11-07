import GBPool from '@renderer/components/pools/GB'
import { useDiddyDungeonGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const DiddyDungeon: React.FC = () => {
const canDo = useDiddyDungeonGb()
return (
<GBPool>
  <CastleCheck
    id={7013}
    name="Diddy's Dungeon Sniper Challenge"
    region="Castle Crypt and Dungeon"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
)
}

export default DiddyDungeon
