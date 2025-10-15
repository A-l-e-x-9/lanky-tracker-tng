import { useLankyCagedGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const LankyTimedCage: React.FC = () => (
  <JapesCheck
    id={1020}
    name="Lanky's Timed Cage Banana"
    region="Japes Hillside"
    canGetLogic={useLankyCagedGb()}
  />
)

export default LankyTimedCage
