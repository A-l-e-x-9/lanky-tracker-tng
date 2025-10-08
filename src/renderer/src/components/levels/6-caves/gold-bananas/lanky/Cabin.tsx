import { useLankyCabinGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const SprintCabin: React.FC = () => {
  const cabinGb = useLankyCabinGb()
  return (
    <CavesCheck
      id={6023}
      name="Lanky's Sprint Cabin"
      region="Caves Cabins"
      canGetLogic={cabinGb.in}
      canGetBreak={cabinGb.out}
    />
  )
}

export default SprintCabin
