import FairyPool from '@renderer/components/pools/Fairies'
import { useShuffleFairies } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { useCavesKasplat } from '@renderer/hooks/isles'
import { useCamera } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
  const hasCam = useCamera()
  const iceWallBreakdown = useCavesKasplat()
  return (
    <FairyPool>
      <IslesCheck
        id={40013}
        name="Shuffled Fairy: At DK's lava Banana"
        region="Caves-Helm Lobbies"
        canGetLogic={iceWallBreakdown.in && hasCam}
        canGetBreak={iceWallBreakdown.out && hasCam}
      />
    </FairyPool>
  )
}

const CavesLobbyFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default CavesLobbyFairies
