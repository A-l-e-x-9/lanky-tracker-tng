import FairyPool from '@renderer/components/pools/Fairies'
import { useTinyClams } from '@renderer/hooks/galleon'
import { useShuffleFairies } from '@renderer/hooks/settings'
import { useCamera } from '@renderer/hooks/kongs'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
const hasCam = useCamera()
const canReachHypeChest = useTinyClams()
  return (
    <FairyPool>
      <GalleonCheck
        id={44016}
        name="Shuffled Fairy: In the Hype Chest"
        region="Treasure Room"
        canGetLogic={canReachHypeChest.in && hasCam}
        canGetBreak={canReachHypeChest.out && hasCam}
      />
    </FairyPool>
  )
}

const TreasureFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default TreasureFairies
