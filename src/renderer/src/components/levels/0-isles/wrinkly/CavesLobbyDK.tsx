import WrinklyPool from '@renderer/components/pools/WrinklyDoors'
import { useCavesLobbyGeneric } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const CavesLobbyDK: React.FC = () => {
  return (
    <WrinklyPool>
        <IslesCheck
          id={34}
          name="Caves Lobby DK"
          region="Wrinkly Kong Doors"
          canGetLogic={useCavesLobbyGeneric()}
        />
    </WrinklyPool>
  )
}

export default CavesLobbyDK
