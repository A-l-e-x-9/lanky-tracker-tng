import GBPool from '@renderer/components/pools/GB'
import { useDkDungeonGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const DkDungeon: React.FC = () => {
const canDo = useDkDungeonGb()
return (
<GBPool>
  <CastleCheck
    id={7004}
    name="DK's Face Puzzle"
    region="Castle Crypt and Dungeon"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
  </GBPool>
)
}

export default DkDungeon
