import { useDkCagedGb } from '@renderer/src/hooks/japes'
import JapesCheck from '../../check'

export const FloorCage: React.FC = () => (
  <JapesCheck
    id={1003}
    name="Japes DK Floor Cage Banana"
    region="Japes Lowlands"
    canGetLogic={useDkCagedGb()}
  />
)

export default FloorCage
