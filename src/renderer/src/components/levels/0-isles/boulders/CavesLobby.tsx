import BoulderPool from '@renderer/components/pools/Boulders'
import { useCavesLobby } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Version 5 of the Randomizer now allows you to have major rewards in the boulders that Chunky can toss. This is for the boulder in Caves Lobby, needed for access to the Wrinkly doors in the original game but useless in most Randomizer seeds.*/
const CavesLobby: React.FC = () => {
  return (
    <BoulderPool>
        <IslesCheck
          id={8}
          name="Isles Boulder: In Caves Lobby"
          region="Caves-Helm Lobbies"
          canGetLogic={useCavesLobby()}
        />
    </BoulderPool>
  )
}

export default CavesLobby
