import WrinklyPool from '@renderer/src/components/pools/WrinklyDoors'
import { useForestLobbyGeneric } from '@renderer/src/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const ForestLobbyDiddy: React.FC = () => {
  return (
    <WrinklyPool>
        <IslesCheck
          id={49}
          name="Forest Lobby Diddy"
          region="Wrinkly Kong Doors"
          canGetLogic={useForestLobbyGeneric()}
        />
    </WrinklyPool>
  )
}

export default ForestLobbyDiddy
