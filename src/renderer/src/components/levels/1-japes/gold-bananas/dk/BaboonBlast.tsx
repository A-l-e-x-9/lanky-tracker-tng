import { useDkBlastGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const BaboonBlast: React.FC = () => (
  <JapesCheck
    id={1004}
    name="Baboon Blast Course"
    region="Japes Lowlands"
    canGetLogic={useDkBlastGb()}
  />
)

export default BaboonBlast
