import { useLankyCabinGb } from '@renderer/src/hooks/caves'
import CavesCheck from '../../check'

const SprintCabin: React.FC = () => {
  const cabinGb = useLankyCabinGb()
  return (
    <CavesCheck
      id={6023}
      name="Caves Lanky Sprint Cabin"
      region="Cabins Area"
      canGetLogic={cabinGb.in}
      canGetBreak={cabinGb.out}
    />
  )
}

export default SprintCabin
