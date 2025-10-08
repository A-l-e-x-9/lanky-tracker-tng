import Miniboss from '@renderer/components/pools/Miniboss'
import { useDiddyGauntletGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const DiddyGauntletCabin: React.FC = () => {
  const cabinGauntlet = useDiddyGauntletGb()
  return (
  <Miniboss>
    <CavesCheck
      id={6012}
      name="Diddy's Lower 5-Door Cabin"
      region="Caves Cabins"
      canGetLogic={cabinGauntlet.in}
      canGetBreak={cabinGauntlet.out}
    />
  </Miniboss>
  )
}

export default DiddyGauntletCabin
