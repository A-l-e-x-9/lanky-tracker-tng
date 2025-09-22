import { useDiddyCagedGb } from '@renderer/src/hooks/japes'
import JapesCheck from '../../check'

const DiddyTimedCage: React.FC = () => (
  <JapesCheck
    id={1010}
    name="Japes Diddy Timed Caged Banana"
    region="Japes Hillside"
    canGetLogic={useDiddyCagedGb()}
  />
)

export default DiddyTimedCage
