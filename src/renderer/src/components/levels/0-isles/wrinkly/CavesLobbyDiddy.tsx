import WrinklyPool from '@renderer/src/components/pools/WrinklyDoors'
import { useCavesLobbyDiddy } from '@renderer/src/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const CavesLobbyDiddy: React.FC = () => {
  const check = useCavesLobbyDiddy()
  return (
    <WrinklyPool>
        <IslesCheck
          id={29}
          name="Caves Lobby Diddy"
          region="Wrinkly Kong Doors"
          canGetLogic={check.in}
          canGetBreak={check.out}
        />
    </WrinklyPool>
  )
}

export default CavesLobbyDiddy
