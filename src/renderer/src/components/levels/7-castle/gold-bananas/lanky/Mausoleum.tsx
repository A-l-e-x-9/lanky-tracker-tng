import { useLankyMausoleumGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const LankyMausoleum: React.FC = () => {
  const mausoleumGb = useLankyMausoleumGb()
  return (
    <CastleCheck
      id={7022}
      name="Lanky's Mausoleum Room"
      region="Castle Crypt and Dungeon"
      canGetLogic={mausoleumGb.in}
      canGetBreak={mausoleumGb.out}
    />
  )
}

export default LankyMausoleum
