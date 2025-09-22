import { useDiddyFreeTinyGb } from '@renderer/src/hooks/aztec'
import AztecCheck from '../../check'

const FreeTiny: React.FC = () => {
  const freeGb = useDiddyFreeTinyGb()
  return (
    <AztecCheck
      id={2015}
      name="Tiny's Cage"
      region="Tiny Temple"
      canGetLogic={freeGb.in}
      canGetBreak={freeGb.out}
    />
  )
}

export default FreeTiny
