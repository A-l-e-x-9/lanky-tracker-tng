import ArenaPool from '@renderer/components/pools/Arenas'
import { useShuffledArenas } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { usePlayLobby } from '@renderer/hooks/isles'
import { useAnyKong } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const isBreathing = useAnyKong()
const canGetInGalleonLobby = usePlayLobby('Gloomy Galleon')
  return (
    <ArenaPool>
      <IslesCheck
        id={10052}
        name="Shuffled Battle Arena: To the right of the Galleon DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={isBreathing && canGetInGalleonLobby.in}
        canGetBreak={isBreathing && canGetInGalleonLobby.out}
      />
      <IslesCheck
        id={10053}
        name="Shuffled Battle Arena: To the left of the Galleon DK Portal"
        region="Japes-Forest Lobbies"
        canGetLogic={isBreathing && canGetInGalleonLobby.in}
        canGetBreak={isBreathing && canGetInGalleonLobby.out}
      />
    </ArenaPool>
  )
}

const GalleonLobbyArenas: React.FC = () => (useShuffledArenas() ? <Shuffled /> : null)
export default GalleonLobbyArenas
