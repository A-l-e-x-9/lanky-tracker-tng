import GBPool from '@renderer/components/pools/GB'
import { useCheckTinyAztecLobby } from '@renderer/hooks/isles'
import IslesCheck from '../../check'

const AztecBarrel: React.FC = () => {
  const checkTinyAztec = useCheckTinyAztecLobby()
  return (
  <GBPool>
    <IslesCheck
      id={32}
      name="Aztec Lobby Barrel"
      region="Japes-Forest Lobbies"
      canGetLogic={checkTinyAztec.in}
      canGetBreak={checkTinyAztec.out}
    />
  </GBPool>
  )
}
export default AztecBarrel
