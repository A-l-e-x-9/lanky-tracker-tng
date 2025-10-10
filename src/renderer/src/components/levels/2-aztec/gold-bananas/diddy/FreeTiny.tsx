import { useDiddyFreeTinyGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const FreeTiny: React.FC = () => {
  const freeGb = useDiddyFreeTinyGb()
  return (
    <AztecCheck
      id={2010}
      name="Freeing Tiny Kong"
      region="Tiny Temple"
      canGetLogic={freeGb.in}
      canGetBreak={freeGb.out}
    />
  )
}

export default FreeTiny
