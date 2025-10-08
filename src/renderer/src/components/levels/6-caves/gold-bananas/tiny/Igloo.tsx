import { useTinyIglooGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const TinyIgloo: React.FC = () => (
  <CavesCheck
    id={6032}
    name="Tiny's 5 Door Igloo"
    region="Caves Igloo"
    canGetLogic={useTinyIglooGb()}
  />
)

export default TinyIgloo
