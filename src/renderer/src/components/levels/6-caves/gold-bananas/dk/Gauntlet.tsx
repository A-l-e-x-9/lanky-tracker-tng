import { useDkCabinGb } from '@renderer/src/hooks/caves'
import CavesCheck from '../../check'

const DkGauntletCabin: React.FC = () => {
  const cabinGb = useDkCabinGb()
  return (
    <CavesCheck
      id={6004}
      name="Caves DK 5 Door Cabin"
      region="Cabins Area"
      canGetLogic={cabinGb.in}
      canGetBreak={cabinGb.out}
    />
  )
}

export default DkGauntletCabin
