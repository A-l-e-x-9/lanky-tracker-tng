import GBPool from '@renderer/components/pools/GB'
import { useTiny5DoorGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const TinyDoorTemple: React.FC = () => {
  const doorGb = useTiny5DoorGb()
  return (
  <GBPool>
    <AztecCheck
      id={2031}
      name="Tiny's 5 Door Temple"
      region="5 Door Temple"
      canGetLogic={doorGb.in}
      canGetBreak={doorGb.out}
    />
    </GBPool>
  )
}

export default TinyDoorTemple
