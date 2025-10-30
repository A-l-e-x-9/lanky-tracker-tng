import GBPool from '@renderer/components/pools/GB'
import Miniboss from '@renderer/components/pools/Miniboss'
import { useDkCabinGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const DkGauntletCabin: React.FC = () => {
  const cabinGb = useDkCabinGb()
  return (
  <GBPool>
  <Miniboss>
    <CavesCheck
      id={6004}
      name="DK's 5 Door Cabin"
      region="Caves Cabins"
      canGetLogic={cabinGb.in}
      canGetBreak={cabinGb.out}
    />
  </Miniboss>
  </GBPool>
  )
}

export default DkGauntletCabin
