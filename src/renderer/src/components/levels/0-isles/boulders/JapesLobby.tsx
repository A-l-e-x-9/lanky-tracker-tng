import BoulderPool from '@renderer/src/components/pools/Boulders'
import { useJapesLobby } from '@renderer/src/hooks/isles'
import IslesCheck from '../check'

/*Version 5 of the Randomizer now allows you to have major rewards in the boulders that Chunky can toss. This is for the boulder in Japes Lobby, on top of the Trombone Pad.*/
const JapesLobby: React.FC = () => {
  return (
    <BoulderPool>
        <IslesCheck
          id={9}
          name="Isles Boulder: In Japes Lobby"
          region="Japes-Forest Lobbies"
          canGetLogic={useJapesLobby()}
        />
    </BoulderPool>
  )
}

export default JapesLobby
