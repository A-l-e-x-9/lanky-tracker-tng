import WrinklyPool from '@renderer/components/pools/WrinklyDoors'
import { useFactoryLobbyUpper } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const FactoryLobbyDiddy: React.FC = () => {
  const check = useFactoryLobbyUpper()
  return (
    <WrinklyPool>
        <IslesCheck
          id={38}
          name="Factory Lobby Diddy"
          region="Wrinkly Kong Doors"
          canGetLogic={check.in}
          canGetBreak={check.out}
        />
    </WrinklyPool>
  )
}

export default FactoryLobbyDiddy
