import WrinklyPool from '@renderer/components/pools/WrinklyDoors'
import { useFactoryLobbyLower } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const FactoryLobbyDK: React.FC = () => {
  return (
    <WrinklyPool>
        <IslesCheck
          id={39}
          name="Factory Lobby DK"
          region="Wrinkly Kong Doors"
          canGetLogic={useFactoryLobbyLower()}
        />
    </WrinklyPool>
  )
}

export default FactoryLobbyDK
