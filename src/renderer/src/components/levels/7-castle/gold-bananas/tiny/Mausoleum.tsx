import { useTinyMausoleumGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const TinyMausoleum: React.FC = () => {
  const mausoleumGb = useTinyMausoleumGb()
  return (
    <CastleCheck
      id={7032}
      name="Tiny's Mausoleum Hand Walk"
      region="Castle Crypt and Dungeon"
      canGetLogic={mausoleumGb.in}
      canGetBreak={mausoleumGb.out}
    />
  )
}

export default TinyMausoleum
