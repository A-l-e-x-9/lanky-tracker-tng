import WrinklyPool from '@renderer/components/pools/WrinklyDoors'
import { useCavesLobbyGeneric } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const CavesLobbyTiny: React.FC = () => {
const canDo = useCavesLobbyGeneric()
  return (
    <WrinklyPool>
        <IslesCheck
          id={36}
          name="Caves Lobby Tiny"
          region="Wrinkly Kong Doors"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
    </WrinklyPool>
  )
}

export default CavesLobbyTiny
