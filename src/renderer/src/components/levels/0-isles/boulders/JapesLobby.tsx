import BoulderPool from '@renderer/components/pools/Boulders'
import { useJapesLobby } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Version 5 of the Randomizer now allows you to have major rewards in the boulders that Chunky can toss. This is for the boulder in Japes Lobby, on top of the Trombone Pad.*/
const JapesLobby: React.FC = () => {
const canDo = useJapesLobby()
  return (
    <BoulderPool>
        <IslesCheck
          id={9}
          name="Japes Lobby Boulder"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
    </BoulderPool>
  )
}

export default JapesLobby
