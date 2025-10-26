import GBPool from '@renderer/components/pools/GB'
import { useLankyCabinGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const SprintCabin: React.FC = () => {
  const cabinGb = useLankyCabinGb()
  return (
  <GBPool>
    <CavesCheck
      id={6023}
      name="Lanky's Sprint Cabin"
      region="Caves Cabins"
      canGetLogic={cabinGb.in}
      canGetBreak={cabinGb.out}
    />
    </GBPool>
  )
}

export default SprintCabin
