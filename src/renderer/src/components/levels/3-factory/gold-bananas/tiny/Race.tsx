import ToughGoldenBanana from '@renderer/components/pools/ToughGoldenBanana'
import { useTinyRaceGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const CarRace: React.FC = () => (
<ToughGoldenBanana>
  <FactoryCheck
    id={3031}
    name="Tiny's Car Race"
    region="R&D Room"
    canGetLogic={useTinyRaceGb()}
  />
</ToughGoldenBanana>
)

export default CarRace
