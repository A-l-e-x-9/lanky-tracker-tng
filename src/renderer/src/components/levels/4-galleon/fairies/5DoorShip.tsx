import FairyPool from '@renderer/components/pools/Fairies'
import { useShipFairy, useLanky5DoorShipGb } from '@renderer/hooks/galleon'
import { useShuffleFairies } from '@renderer/hooks/settings'
import { useCamera } from '@renderer/hooks/kongs'
import GalleonCheck from '../check'

const Shuffled: React.FC = () => {
const hasCam = useCamera()
const vanillaFairy2 = useShipFairy()
const canReachLanky5DS = useLanky5DoorShipGb()
  return (
    <FairyPool>
      <GalleonCheck
        id={44001}
        name="Shuffled Fairy: Vanilla Location #2 (Tiny's 5DS room)"
        region="5 Door Ship"
        canGetLogic={vanillaFairy2.in}
        canGetBreak={vanillaFairy2.out}
      />
      <GalleonCheck
        id={44013}
        name="Shuffled Fairy: In Lanky's 5DS room"
        region="5 Door Ship"
        canGetLogic={canReachLanky5DS.in && hasCam}
        canGetBreak={canReachLanky5DS.out && hasCam}
      />
    </FairyPool>
  )
}

const ShipFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default ShipFairies
