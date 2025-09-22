import { useTinyIglooGb } from '@renderer/src/hooks/caves'
import CavesCheck from '../../check'

const TinyIgloo: React.FC = () => (
  <CavesCheck
    id={6032}
    name="Caves Tiny 5 Door Igloo"
    region="Igloo Area"
    canGetLogic={useTinyIglooGb()}
  />
)

export default TinyIgloo
