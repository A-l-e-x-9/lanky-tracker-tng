import GBPool from '@renderer/components/pools/GB'
import { useDiddyFreeTinyGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const FreeTiny: React.FC = () => {
  const freeGb = useDiddyFreeTinyGb()
  return (
  <GBPool>
    <AztecCheck
      id={2010}
      name="Freeing Tiny Kong"
      region="Tiny Temple"
      canGetLogic={freeGb.in}
      canGetBreak={freeGb.out}
    />
    </GBPool>
  )
}

export default FreeTiny
