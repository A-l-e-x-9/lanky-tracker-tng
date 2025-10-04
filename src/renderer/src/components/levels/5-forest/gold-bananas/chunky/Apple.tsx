import { useChunkyAppleGb } from '@renderer/hooks/forest'
import ForestCheck from '../../check'

const ChunkyApple: React.FC = () => (
  <ForestCheck
    id={5043}
    name="Chunky's Apple Rescue"
    region="Forest Center And Beanstalk"
    canGetLogic={useChunkyAppleGb()}
  />
)

export default ChunkyApple
