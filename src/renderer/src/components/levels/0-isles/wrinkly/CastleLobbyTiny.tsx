import WrinklyPool from '@renderer/components/pools/WrinklyDoors'
import { useCastleLobbyGeneric } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const CastleLobbyTiny: React.FC = () => {
  return (
    <WrinklyPool>
        <IslesCheck
          id={27}
          name="Castle Lobby Tiny"
          region="Wrinkly Kong Doors"
          canGetLogic={useCastleLobbyGeneric()}
        />
    </WrinklyPool>
  )
}

export default CastleLobbyTiny
