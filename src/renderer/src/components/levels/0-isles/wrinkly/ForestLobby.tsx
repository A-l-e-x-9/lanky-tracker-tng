import WrinklyPool from '@renderer/components/pools/WrinklyDoors'
import { useForestLobbyGeneric } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const ForestLobbyDK: React.FC = () => {
const canDo = useForestLobbyGeneric()
  return (
    <WrinklyPool>
        <IslesCheck
          id={55}
          name="Forest Lobby DK"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
        <IslesCheck
          id={49}
          name="Forest Lobby Diddy"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
        <IslesCheck
          id={56}
          name="Forest Lobby Lanky"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
        <IslesCheck
          id={57}
          name="Forest Lobby Tiny"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
        <IslesCheck
          id={46}
          name="Forest Lobby Chunky"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
    </WrinklyPool>
  )
}

export default ForestLobbyDK
