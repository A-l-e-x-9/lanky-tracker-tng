import CratePool from '@renderer/components/pools/Crates'
import { useShuffleCrates } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { usePlayLobby } from '@renderer/hooks/isles'
import { useBoulderTech, useBalloon, useDiddy, useTiny } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const canGetInCastleLobby = usePlayLobby('Creepy Castle')
const hasBoulderTech = useBoulderTech()
const hasBalloon = useBalloon()
const hasDiddy = useDiddy()
const hasTiny = useTiny()
  return (
    <CratePool>
      <IslesCheck
        id={20005}
        name="Shuffled Melon Crate: Under Lanky's Castle Lobby barrel"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCastleLobby.in && hasBoulderTech && hasBalloon}
        canGetBreak={canGetInCastleLobby.out && (hasDiddy || hasTiny)}
      />
      <IslesCheck
        id={20060}
        name="Shuffled Melon Crate: Behind Castle Lobby entrance"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCastleLobby.in}
        canGetBreak={canGetInCastleLobby.out}
      />
      <IslesCheck
        id={20061}
        name="Shuffled Melon Crate: To the right of the Castle Lobby entrance"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCastleLobby.in}
        canGetBreak={canGetInCastleLobby.out}
      />
      <IslesCheck
        id={20062}
        name="Shuffled Melon Crate: To the left of the Castle DK Portal"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCastleLobby.in}
        canGetBreak={canGetInCastleLobby.out}
      />
    </CratePool>
  )
}

const CastleLobbyCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default CastleLobbyCrates
