import WrinklyPool from '@renderer/src/components/pools/WrinklyDoors'
import { useCavesLobbyGeneric } from '@renderer/src/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const CavesLobbyChunky: React.FC = () => {
  return (
    <WrinklyPool>
        <IslesCheck
          id={28}
          name="Caves Lobby Chunky"
          region="Wrinkly Kong Doors"
          canGetLogic={useCavesLobbyGeneric()}
        />
    </WrinklyPool>
  )
}

export default CavesLobbyChunky
