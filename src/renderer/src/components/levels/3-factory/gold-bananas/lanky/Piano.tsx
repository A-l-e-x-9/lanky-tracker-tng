import { useLankyPianoGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const PianoGame: React.FC = () => (
  <FactoryCheck
    id={3021}
    name="Lanky's Piano Game"
    region="R&D Room"
    canGetLogic={useLankyPianoGb()}
  />
)

export default PianoGame
