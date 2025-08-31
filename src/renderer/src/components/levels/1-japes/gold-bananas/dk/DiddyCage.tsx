import { useDkFreeDiddyGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const DiddyCage: React.FC = () => (
  <JapesCheck
    id={1005}
    name="Diddy's Cage"
    region="Japes Hillside"
    canGetLogic={useDkFreeDiddyGb()}
  />
)

export default DiddyCage
