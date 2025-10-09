import { useDkDungeonGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const DkDungeon: React.FC = () => (
  <CastleCheck
    id={7004}
    name="DK's Face Puzzle"
    region="Castle Crypt and Dungeon"
    canGetLogic={useDkDungeonGb()}
  />
)

export default DkDungeon
