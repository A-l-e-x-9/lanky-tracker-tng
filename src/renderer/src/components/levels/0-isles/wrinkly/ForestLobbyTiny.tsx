import WrinklyPool from '@renderer/components/pools/WrinklyDoors'
import { useForestLobbyGeneric } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const ForestLobbyTiny: React.FC = () => {
  return (
    <WrinklyPool>
        <IslesCheck
          id={57}
          name="Forest Lobby Tiny"
          region="Wrinkly Kong Doors"
          canGetLogic={useForestLobbyGeneric()}
        />
    </WrinklyPool>
  )
}

export default ForestLobbyTiny
