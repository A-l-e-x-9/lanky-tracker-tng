import GBPool from '@renderer/components/pools/GB'
import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useTinyRaceGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const CarRace: React.FC = () => {
const canDo = useTinyRaceGb()
return (
<GBPool>
<ToughGoldenBanana>
  <FactoryCheck
    id={3031}
    name="Tiny's Car Race"
    region="R&D Room"
    canGetLogic={canDo.in}
    canGetBreak={canDo.out}
  />
</ToughGoldenBanana>
</GBPool>
)
}

export default CarRace
