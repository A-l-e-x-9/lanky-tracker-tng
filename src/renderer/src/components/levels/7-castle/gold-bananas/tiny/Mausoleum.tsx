import GBPool from '@renderer/components/pools/GB'
import { useTinyMausoleumGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const TinyMausoleum: React.FC = () => {
  const mausoleumGb = useTinyMausoleumGb()
  return (
  <GBPool>
    <CastleCheck
      id={7032}
      name="Tiny's Mausoleum Hand Walk"
      region="Castle Crypt"
      canGetLogic={mausoleumGb.in}
      canGetBreak={mausoleumGb.out}
    />
    </GBPool>
  )
}

export default TinyMausoleum
