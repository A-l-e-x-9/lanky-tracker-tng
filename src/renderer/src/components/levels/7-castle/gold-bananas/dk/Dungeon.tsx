import { useDkDungeonGb } from '@renderer/src/hooks/castle'
import CastleCheck from '../../check'

const DkDungeon: React.FC = () => (
  <CastleCheck
    id={7004}
    name="Castle DK Dungeon"
    region="Castle Underground"
    canGetLogic={useDkDungeonGb()}
  />
)

export default DkDungeon
