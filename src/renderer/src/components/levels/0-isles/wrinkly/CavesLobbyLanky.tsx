import WrinklyPool from '@renderer/src/components/pools/WrinklyDoors'
import { useCavesLobbyGeneric } from '@renderer/src/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const CavesLobbyLanky: React.FC = () => {
  return (
    <WrinklyPool>
        <IslesCheck
          id={35}
          name="Caves Lobby Lanky"
          region="Wrinkly Kong Doors"
          canGetLogic={useCavesLobbyGeneric()}
        />
    </WrinklyPool>
  )
}

export default CavesLobbyLanky
