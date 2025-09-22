import { useTinyCagedGb } from '@renderer/src/hooks/japes'
import JapesCheck from '../../check'

const TinyTimedCage: React.FC = () => (
  <JapesCheck
    id={1030}
    name="Japes Tiny Timed Cage Banana"
    region="Japes Hillside"
    canGetLogic={useTinyCagedGb()}
  />
)

export default TinyTimedCage
