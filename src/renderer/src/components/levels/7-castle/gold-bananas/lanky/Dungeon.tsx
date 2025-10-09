import { useLankyDungeonGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const LankyDungeon: React.FC = () => {
  const dungeonGb = useLankyDungeonGb()
  return (
    <CastleCheck
      id={7023}
      name="Lanky's Dungeon Acid Barrel"
      region="Castle Crypt and Dungeon"
      canGetLogic={dungeonGb.in}
      canGetBreak={dungeonGb.out}
    />
  )
}

export default LankyDungeon
