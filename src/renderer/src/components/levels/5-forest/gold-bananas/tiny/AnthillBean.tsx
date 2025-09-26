import Miniboss from '@renderer/components/pools/Miniboss'
import MiscPool from '@renderer/components/pools/Misc'
import { useTinyAntGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const AnthillBean: React.FC = () => (
<Miniboss>
  <MiscPool>
    <ForestCheck
      id={5034}
      name="THE BEAN!!! (Forest Tiny Anthill Second Reward)"
      region="Owl Tree"
      canGetLogic={useTinyAntGb()}
    />
  </MiscPool>
</Miniboss>
)

export default AnthillBean
