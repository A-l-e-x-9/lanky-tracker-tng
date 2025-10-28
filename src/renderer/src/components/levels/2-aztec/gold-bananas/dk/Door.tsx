import GBPool from '@renderer/components/pools/GB'
import { useDk5DoorGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const DonkeyDoorTemple: React.FC = () => {
  const doorGb = useDk5DoorGb()
  return (
  <GBPool>
    <AztecCheck
      id={2003}
      name="DK's 5 Door Temple"
      region="5 Door Temple"
      canGetLogic={doorGb.in}
      canGetBreak={doorGb.out}
    />
    </GBPool>
  )
}

export default DonkeyDoorTemple
