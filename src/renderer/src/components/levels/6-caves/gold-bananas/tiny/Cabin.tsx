import GBPool from '@renderer/components/pools/GB'
import Miniboss from '@renderer/components/pools/Miniboss'
import { useTinyCabinGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const TinyCabin: React.FC = () => {
  const cabinCb = useTinyCabinGb()
  return (
  <GBPool>
  <Miniboss>
    <CavesCheck
      id={6033}
      name="Tiny's 5 Door Cabin"
      region="Caves Cabins"
      canGetLogic={cabinCb.in}
      canGetBreak={cabinCb.out}
    />
  </Miniboss>
  </GBPool>
  )
}

export default TinyCabin
