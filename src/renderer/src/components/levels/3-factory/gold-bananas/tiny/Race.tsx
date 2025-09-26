import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useTinyRaceGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const CarRace: React.FC = () => (
<ToughGoldenBanana>
  <FactoryCheck
    id={3031}
    name="Factory Tiny Car Race"
    region="R&D Area"
    canGetLogic={useTinyRaceGb()}
  />
</ToughGoldenBanana>
)

export default CarRace
