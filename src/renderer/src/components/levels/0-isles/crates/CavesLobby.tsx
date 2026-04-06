import CratePool from '@renderer/components/pools/Crates'
import { useShuffleCrates } from '@renderer/hooks/settings'
import IslesCheck from '../check'
import { usePlayLobby, useCavesKasplat } from '@renderer/hooks/isles'
import { useStrong, useOrange, useTwirl, useBoulderTech, useRocket } from '@renderer/hooks/kongs'

const Shuffled: React.FC = () => {
const canGetInCavesKasplat = useCavesKasplat()
const hasStrongKong = useStrong()
const orangeYourself = useOrange()
const hasBoulderTech = useBoulderTech()
const hasJetbarrel = useRocket()
const isHinaKagiyama = useTwirl()
const canGetInCavesLobby = usePlayLobby('Crystal Caves')
  return (
    <CratePool>
      <IslesCheck
        id={20056}
        name="Shuffled Melon Crate: Somehow not frying in the Caves Lobby lava room"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesKasplat.in && hasStrongKong}
        canGetBreak={canGetInCavesKasplat.out && (orangeYourself || isHinaKagiyama)}
      />
      <IslesCheck
        id={20057}
        name="Shuffled Melon Crate: To the right of the Caves DK Portal"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesLobby.in}
        canGetBreak={canGetInCavesLobby.out}
      />
      <IslesCheck
        id={20058}
        name="Shuffled Melon Crate: Diddy's ledge in Caves Lobby"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesLobby.in && hasJetbarrel}
        canGetBreak={canGetInCavesLobby.out && hasBoulderTech && isHinaKagiyama}
      />
      <IslesCheck
        id={20059}
        name="Shuffled Melon Crate: Caves Lobby boulder room"
        region="Caves-Helm Lobbies"
        canGetLogic={canGetInCavesKasplat.in}
        canGetBreak={canGetInCavesKasplat.out}
      />
    </CratePool>
  )
}

const CavesLobbyCrates: React.FC = () => (useShuffleCrates() ? <Shuffled /> : null)
export default CavesLobbyCrates
