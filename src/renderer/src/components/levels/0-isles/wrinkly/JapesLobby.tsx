import WrinklyPool from '@renderer/components/pools/WrinklyDoors'
import { useJapesLobbyGeneric } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const JapesLobby: React.FC = () => {
const canDo = useJapesLobbyGeneric()

  return (
    <WrinklyPool>
        <IslesCheck
          id={65}
          name="Japes Lobby DK"
          region="Wrinkly Kong Doors"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
        <IslesCheck
          id={64}
          name="Japes Lobby Diddy"
          region="Wrinkly Kong Doors"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
        <IslesCheck
          id={66}
          name="Japes Lobby Lanky"
          region="Wrinkly Kong Doors"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
        <IslesCheck
          id={67}
          name="Japes Lobby Tiny"
          region="Wrinkly Kong Doors"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
        <IslesCheck
          id={63}
          name="Japes Lobby Chunky"
          region="Wrinkly Kong Doors"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
    </WrinklyPool>
  )
}

export default JapesLobby
