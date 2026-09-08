import WrinklyPool from '@renderer/components/pools/WrinklyDoors'
import { useFactoryLobbyLower } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const FactoryLobbyDK: React.FC = () => {
const canDo = useFactoryLobbyLower()
  return (
    <WrinklyPool>
        <IslesCheck
          id={39}
          name="Factory Lobby DK"
          region="Wrinkly Kong Doors"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
        <IslesCheck
          id={38}
          name="Factory Lobby Diddy"
          region="Wrinkly Kong Doors"
          canGetLogic={check.in}
          canGetBreak={check.out}
        />
        <IslesCheck
          id={44}
          name="Factory Lobby Lanky"
          region="Wrinkly Kong Doors"
          canGetLogic={check.in}
          canGetBreak={check.out}
        />
        <IslesCheck
          id={45}
          name="Factory Lobby Tiny"
          region="Wrinkly Kong Doors"
          canGetLogic={check.in}
          canGetBreak={check.out}
        />
        <IslesCheck
          id={37}
          name="Factory Lobby Chunky"
          region="Wrinkly Kong Doors"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
    </WrinklyPool>
  )
}

export default FactoryLobbyDK
