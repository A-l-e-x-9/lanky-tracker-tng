import { useDiddy5DoorGb } from '@renderer/hooks/aztec'
import AztecCheck from '../../check'

const DiddyDoorTemple: React.FC = () => {
  const doorGb = useDiddy5DoorGb()
  return (
    <AztecCheck
      id={2013}
      name="Diddy's 5 Door Temple"
      region="5 Door Temple"
      canGetLogic={doorGb.in}
      canGetBreak={doorGb.out}
    />
  )
}

export default DiddyDoorTemple
