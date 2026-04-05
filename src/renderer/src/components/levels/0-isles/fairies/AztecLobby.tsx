import FairyPool from '@renderer/components/pools/Fairies'
import { useShuffleFairies } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { useAztecLobbyChunky } from '@renderer/hooks/isles'
import { useCamera } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const canReachAztecLobbyChunky = useAztecLobbyChunky()
const hasCam = useCamera()
return (
    <FairyPool>
      <IslesCheck
        id={40011}
        name="Shuffled Fairy: Inside Chunky's room in Aztec Lobby"
        region="Japes-Forest Lobbies"
        canGetLogic={canReachAztecLobbyChunky.in && hasCam}
        canGetBreak={canReachAztecLobbyChunky.out && hasCam}
      />
    </FairyPool>
  )
}

const AztecLobbyFairies: React.FC = () => (useShuffleFairies() ? <Shuffled /> : null)
export default AztecLobbyFairies
