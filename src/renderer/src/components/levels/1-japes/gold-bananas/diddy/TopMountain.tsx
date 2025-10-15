import { useDiddyMountainGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const TopMountain: React.FC = () => (
  <JapesCheck
    id={1011}
    name="Top of Diddy's Mountain"
    region="Japes Hillside"
    canGetLogic={useDiddyMountainGb()}
  />
)

export default TopMountain
