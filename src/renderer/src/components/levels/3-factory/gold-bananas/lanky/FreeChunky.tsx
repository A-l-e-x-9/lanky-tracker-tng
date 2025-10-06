import { useLankyFreeChunkyGb } from '@renderer/hooks/factory'
import FactoryCheck from '../../check'

const FreeChunky: React.FC = () => (
  <FactoryCheck
    id={3022}
    name="Freeing Chunky Kong"
    region="Storage and Arcade Area"
    canGetLogic={useLankyFreeChunkyGb()}
  />
)

export default FreeChunky
