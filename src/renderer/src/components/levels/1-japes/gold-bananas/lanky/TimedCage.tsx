import { useLankyCagedGb } from '@renderer/src/hooks/japes'
import JapesCheck from '../../check'

const LankyTimedCage: React.FC = () => (
  <JapesCheck
    id={1020}
    name="Japes Lanky Timed Cage Banana"
    region="Japes Hillside"
    canGetLogic={useLankyCagedGb()}
  />
)

export default LankyTimedCage
