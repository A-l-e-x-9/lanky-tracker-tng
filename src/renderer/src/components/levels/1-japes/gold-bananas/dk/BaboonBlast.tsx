import { useDkBlastGb } from '@renderer/src/hooks/japes'
import JapesCheck from '../../check'

const BaboonBlast: React.FC = () => (
  <JapesCheck
    id={1004}
    name="Japes DK Baboon Blast"
    region="Japes Lowlands"
    canGetLogic={useDkBlastGb()}
  />
)

export default BaboonBlast
