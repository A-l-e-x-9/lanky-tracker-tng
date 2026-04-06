import CratePool from '@renderer/components/pools/Crates'
import CavesLobbyCrates from './CavesLobby'
import CastleLobbyCrates from './CastleLobby'
import HelmLobbyCrates from './HelmLobby'

const CavesHelmArenas: React.FC = () => {
  return (
    <CratePool>
      <CavesLobbyCrates />
      <CastleLobbyCrates />
      <HelmLobbyCrates />
    </CratePool>
  )
}

export default CavesHelmCrates
