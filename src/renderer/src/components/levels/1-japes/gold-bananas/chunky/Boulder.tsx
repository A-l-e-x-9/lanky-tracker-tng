import { useChunkyBoulderGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const Boulder: React.FC = () => {
  const chunkyBoulderGb = useChunkyBoulderGb()
  return (
    <JapesCheck
      id={1040}
      name="Boulder Over Chunky's Cave"
      region="Japes Lowlands"
      canGetLogic={chunkyBoulderGb}
    />
  )
}

export default Boulder
