import WrinklyPool from '@renderer/components/pools/WrinklyDoors'
import { useCastleLobbyGeneric } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const CastleLobbyDiddy: React.FC = () => {
const canDo = useCastleLobbyGeneric()
  return (
    <WrinklyPool>
        <IslesCheck
          id={24}
          name="Castle Lobby Diddy"
          region="Wrinkly Kong Doors"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
    </WrinklyPool>
  )
}

export default CastleLobbyDiddy
