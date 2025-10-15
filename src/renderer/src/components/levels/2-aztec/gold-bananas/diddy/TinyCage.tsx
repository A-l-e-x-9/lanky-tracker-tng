import { useDiddyFreeTinyGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'
import KongCheck from '@renderer/components/pools/Kong'

const FreeTiny: React.FC = () => {
  const freeGb = useDiddyFreeTinyGb()
  return (
  <KongCheck>
    <AztecCheck
      id={2015}
      name="Tiny's Cage"
      region="Tiny Temple"
      canGetLogic={freeGb.in}
      canGetBreak={freeGb.out}
    />
   </KongCheck>
  )
}

export default FreeTiny
