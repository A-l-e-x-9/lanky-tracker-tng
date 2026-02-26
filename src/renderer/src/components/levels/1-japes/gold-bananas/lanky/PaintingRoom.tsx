import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'
import GBPool from '@renderer/components/pools/GB'
import Miniboss from '@renderer/components/pools/Miniboss'
import { useLankyPaintingGb } from '@renderer/hooks/japes'
import JapesCheck from '../../check'

const PaintingRoom: React.FC = () => {
  const paintingGb = useLankyPaintingGb()
  const isFairySeed = useDonkStore(useShallow((state) => state.winCondition.fairies))
  const fairiesInRotation = useDonkStore(useShallow((state) => state.settings.poolFairies))
  if (isFairySeed && !fairiesInRotation) {
  return (
  <GBPool>
    <JapesCheck
      id={1023}
      name="Lanky's Painting Room"
      region="Japes Caves and Mines"
      canGetLogic={paintingGb.in}
      canGetBreak={paintingGb.out}
    />
  </GBPool>
  )
  } else {
  return (
  <GBPool>
  <Miniboss>
    <JapesCheck
      id={1023}
      name="Lanky's Painting Room"
      region="Japes Caves and Mines"
      canGetLogic={paintingGb.in}
      canGetBreak={paintingGb.out}
    />
  </Miniboss>
  </GBPool>
  )
  }
}

export default PaintingRoom
