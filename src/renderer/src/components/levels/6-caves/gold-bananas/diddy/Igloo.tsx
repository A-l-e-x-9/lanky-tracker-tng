import { useDiddyIglooGb } from '@renderer/hooks/caves'
import CavesCheck from '../../check'

const DiddyIgloo: React.FC = () => (
  <CavesCheck
    id={6011}
    name="Diddy's 5 Door Igloo"
    region="Caves Igloo"
    canGetLogic={useDiddyIglooGb()}
  />
)

export default DiddyIgloo
