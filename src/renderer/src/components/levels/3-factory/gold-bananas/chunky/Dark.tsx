import { useChunkyDarkGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const DarkRoom: React.FC = () => (
  <FactoryCheck
    id={3041}
    name="Chunky's Dark Room"
    region="Storage and Arcade Area"
    canGetLogic={useChunkyDarkGb()}
  />
)

export default DarkRoom
