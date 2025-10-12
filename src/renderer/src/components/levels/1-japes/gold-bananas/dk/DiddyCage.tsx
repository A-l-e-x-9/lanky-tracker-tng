import { useDkFreeDiddyGb } from '@renderer/hooks/japes'
import KongCheck from '@renderer/components/pools/Kong'
import JapesCheck from '../../check'

const DiddyCage: React.FC = () => (
<KongCheck>
  <JapesCheck
    id={1005}
    name="Diddy's Cage"
    region="Japes Hillside"
    canGetLogic={useDkFreeDiddyGb()}
  />
</KongCheck>
)

export default DiddyCage
