import Miniboss from '@renderer/components/pools/Miniboss'
import { useLankyPaintingGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const PaintingRoom: React.FC = () => {
  const paintingGb = useLankyPaintingGb()
  return (
  <Miniboss>
    <JapesCheck
      id={1023}
      name="Lanky's Painting Room"
      region="Japes Caves and Mines"
      canGetLogic={paintingGb.in}
      canGetBreak={paintingGb.out}
    />
  </Miniboss>
  )
}

export default PaintingRoom
