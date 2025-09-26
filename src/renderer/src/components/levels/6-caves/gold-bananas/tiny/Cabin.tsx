import Miniboss from '@renderer/components/pools/Miniboss'
import { useTinyCabinGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const TinyCabin: React.FC = () => {
  const cabinCb = useTinyCabinGb()
  return (
  <Miniboss>
    <CavesCheck
      id={6033}
      name="Caves Tiny 5 Door Cabin"
      region="Cabins Area"
      canGetLogic={cabinCb}
    />
  </Miniboss>
  )
}

export default TinyCabin
