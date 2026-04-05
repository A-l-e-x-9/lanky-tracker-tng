import CratePool from '@renderer/components/pools/Crates'
import { useShuffleCrates } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { usePlayLobby, useCheckTinyGalleonLobby } from '@renderer/hooks/isles'

const Shuffled: React.FC = () => {
const canGetInGalleonLobby = usePlayLobby('Gloomy Galleon')
const canGetInGalleonTiny = useCheckTinyGalleonLobby()
return (
    <CratePool>
      <IslesCheck
        id={20052}
        name="Shuffled Melon Crate: To the right of the Galleon DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInGalleonLobby.in}
        canGetBreak={canGetInGalleonLobby.out}
      />
      <IslesCheck
        id={20053}
        name="Shuffled Melon Crate: To the left of the Galleon DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInGalleonLobby.in}
        canGetBreak={canGetInGalleonLobby.out}
      />
      <IslesCheck
        id={20054}
        name="Shuffled Melon Crate: Galleon Lobby Mini Monkey room"
        region="Japes-Forest Lobbies"
        canGetLogic={canGetInGalleonTiny.in}
        canGetBreak={canGetInGalleonTiny.out}
      />
    </CratePool>
  )
}

const GalleonLobbyCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default GalleonLobbyCrates
