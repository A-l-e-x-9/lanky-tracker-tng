import WrinklyPool from '@renderer/src/components/pools/WrinklyDoors'
import { useForestLobbyGeneric } from '@renderer/src/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const ForestLobbyChunky: React.FC = () => {
  return (
    <WrinklyPool>
        <IslesCheck
          id={46}
          name="Forest Lobby Chunky"
          region="Wrinkly Kong Doors"
          canGetLogic={useForestLobbyGeneric()}
        />
    </WrinklyPool>
  )
}

export default ForestLobbyChunky
