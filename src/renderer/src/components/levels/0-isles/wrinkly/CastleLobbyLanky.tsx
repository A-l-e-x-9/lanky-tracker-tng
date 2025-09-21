import WrinklyPool from '@renderer/src/components/pools/WrinklyDoors'
import { useCastleLobbyGeneric } from '@renderer/src/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const CastleLobbyLanky: React.FC = () => {
  return (
    <WrinklyPool>
        <IslesCheck
          id={26}
          name="Castle Lobby Lanky"
          region="Wrinkly Kong Doors"
          canGetLogic={useCastleLobbyGeneric()}
        />
    </WrinklyPool>
  )
}

export default CastleLobbyLanky
