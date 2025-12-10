import GBPool from '@renderer/components/pools/GB'
import { useLankyDungeonGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const LankyDungeon: React.FC = () => {
  const dungeonGb = useLankyDungeonGb()
  return (
  <GBPool>
    <CastleCheck
      id={7023}
      name="Lanky's Dungeon Acid Barrel"
      region="Castle Dungeon"
      canGetLogic={dungeonGb.in}
      canGetBreak={dungeonGb.out}
    />
    </GBPool>
  )
}

export default LankyDungeon
