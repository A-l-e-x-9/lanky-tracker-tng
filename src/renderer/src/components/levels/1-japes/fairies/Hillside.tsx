import FairyPool from '@renderer/components/pools/Fairies'
import { useShuffleFairies } from '@renderer/hooks/settings'
import JapesCheck from '../check'
import { useMtnCrate } from '@renderer/hooks/japes'
import { useCamera } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
  const canReachUpperArea = useMtnCrate()
  const hasCam = useCamera()
  return (
    <FairyPool>
      <JapesCheck
        id={41002}
        name="Shuffled Fairy: In front of Diddy's cage"
        region="Japes Hillside"
        canGetLogic={canReachUpperArea.in && hasCam}
        canGetBreak={canReachUpperArea.out && hasCam}
      />
      <JapesCheck
        id={41003}
        name="Shuffled Fairy: Overlooking Diddy's mine"
        region="Japes Hillside"
        canGetLogic={canReachUpperArea.in && hasCam}
        canGetBreak={canReachUpperArea.out && hasCam}
      />
    </FairyPool>
  )
}

const HillsideFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default HillsideFairies
