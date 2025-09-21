import WrinklyPool from '@renderer/src/components/pools/WrinklyDoors'
import { useCastleLobbyGeneric } from '@renderer/src/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const CastleLobbyDiddy: React.FC = () => {
  return (
    <WrinklyPool>
        <IslesCheck
          id={24}
          name="Castle Lobby Diddy"
          region="Wrinkly Kong Doors"
          canGetLogic={useCastleLobbyGeneric()}
        />
    </WrinklyPool>
  )
}

export default CastleLobbyDiddy
