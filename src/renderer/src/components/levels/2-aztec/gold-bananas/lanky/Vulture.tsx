import GBPool from '@renderer/components/pools/GB'
import { useLankyVultureGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const VultureShoot: React.FC = () => {
  const vultureGb = useLankyVultureGb()
  return (
  <GBPool>
    <AztecCheck
      id={2020}
      name="Lanky's Vulture Shooting"
      region="Tiny Temple"
      canGetLogic={vultureGb.in}
      canGetBreak={vultureGb.out}
    />
    </GBPool>
  )
}

export default VultureShoot
