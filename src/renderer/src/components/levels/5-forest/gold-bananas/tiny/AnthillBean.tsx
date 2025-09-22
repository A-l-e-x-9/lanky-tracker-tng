import MiscPool from '@renderer/src/components/pools/Misc'
import { useTinyAntGb } from '@renderer/src/hooks/forest'
import ForestCheck from '../../check'

const AnthillBean: React.FC = () => (
  <MiscPool>
    <ForestCheck
      id={5034}
      name="THE BEAN!!! (Forest Tiny Anthill Second Reward)"
      region="Owl Tree"
      canGetLogic={useTinyAntGb()}
    />
  </MiscPool>
)

export default AnthillBean
