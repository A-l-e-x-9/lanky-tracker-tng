import CratePool from '@renderer/components/pools/Crates'
import JapesLobbyCrates from './JapesLobby'
import AztecLobbyCrates from './AztecLobby'
import FactoryLobbyCrates from './FactoryLobby'
import GalleonLobbyCrates from './GalleonLobby'
import ForestLobbyCrates from './ForestLobby'

const JapesForestCrates: React.FC = () => {
  return (
    <CratePool>
      <JapesLobbyCrates />
      <AztecLobbyCrates />
      <FactoryLobbyCrates />
      <GalleonLobbyCrates />
      <ForestLobbyCrates />
    </CratePool>
  )
}

export default JapesForestCrates
