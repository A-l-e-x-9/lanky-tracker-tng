import { useDiddyDungeonGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const DiddyDungeon: React.FC = () => (
  <CastleCheck
    id={7013}
    name="Diddy's Dungeon Sniper Challenge"
    region="Castle Crypt and Dungeon"
    canGetLogic={useDiddyDungeonGb()}
  />
)

export default DiddyDungeon
