import GBPool from '@renderer/components/pools/GB'
import { useLankyMausoleumGb } from '@renderer/hooks/castle'
import CastleCheck from '../../check'

const LankyMausoleum: React.FC = () => {
  const mausoleumGb = useLankyMausoleumGb()
  return (
  <GBPool>
    <CastleCheck
      id={7022}
      name="Lanky's Mausoleum Room"
      region="Castle Crypt"
      canGetLogic={mausoleumGb.in}
      canGetBreak={mausoleumGb.out}
    />
    </GBPool>
  )
}

export default LankyMausoleum
