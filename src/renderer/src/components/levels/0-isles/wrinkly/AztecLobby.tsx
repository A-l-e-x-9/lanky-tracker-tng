import WrinklyPool from '@renderer/components/pools/WrinklyDoors'
import { useAztecLobbyGeneric, useAztecLobbyChunky } from '@renderer/hooks/isles'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const AztecLobby: React.FC = () => {
const canDo = useAztecLobbyGeneric()
const chunkyDoor = useAztecLobbyChunky()
const [locked, kongLocked] = useDonkStore(useShallow((state) => [state.settings.lockedWrinklyDoors, state.ui.konglessHintDoorsOff]))
const doorItemCount = useDonkStore(useShallow((state) => state.wrinklyDoors.jungleJapes))
const hasDK = useDk()
const hasDiddy = useDiddy()
const hasLanky = useLanky()
const hasTiny = useTiny()
const hasChunky = useChunky()
const doorItem = useWrinklyDoorItem()
let currentItemCount = 0

switch (doorItem) {
  default: {
    currentItemCount = useCurrentGBCount()
    break
  }
  case 1: {
    currentItemCount = useCurrentBlueprintCount()
    break
  }
  case 2: {
    currentItemCount = useCurrentCrownCount()
    break
  }
  case 3: {
    currentItemCount = useCurrentKeyCount()
    break
  }
  case 4: {
    currentItemCount = useCurrentBananaMedalCount()
    break
  }
  case 5: {
    currentItemCount = useCurrentFairyCount()
    break
  }
  case 6: {
    currentItemCount = useCurrentRainbowCoinCount()
    break
  }
  case 7: {
    currentItemCount = useCurrentPearlCount()
    break
  }
  case 8: {
    currentItemCount = useCurrentCBCount()
  }
}

if (!locked && !kongLocked) {
  return (
    <WrinklyPool>
        <IslesCheck
          id={16}
          name="Wrinkly Door: Aztec DK"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
        <IslesCheck
          id={15}
          name="Wrinkly Door: Aztec Diddy"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
        <IslesCheck
          id={17}
          name="Wrinkly Door: Aztec Lanky"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
        <IslesCheck
          id={18}
          name="Wrinkly Door: Aztec Tiny"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
        <IslesCheck
          id={14}
          name="Wrinkly Door: Aztec Chunky"
          region="Japes-Forest Lobbies"
          canGetLogic={chunkyDoor.in}
          canGetBreak={chunkyDoor.out}
        />
    </WrinklyPool>
  )
  } else if (locked && !kongLocked) {
  return (
    <WrinklyPool>
        <IslesCheck
          id={16}
          name="Wrinkly Door: Aztec DK"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in && (currentItemCount >= doorItemCount)}
          canGetBreak={canDo.out && (currentItemCount >= doorItemCount)}
        />
        <IslesCheck
          id={15}
          name="Wrinkly Door: Aztec Diddy"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in && (currentItemCount >= doorItemCount)}
          canGetBreak={canDo.out && (currentItemCount >= doorItemCount)}
        />
        <IslesCheck
          id={17}
          name="Wrinkly Door: Aztec Lanky"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in && (currentItemCount >= doorItemCount)}
          canGetBreak={canDo.out && (currentItemCount >= doorItemCount)}
        />
        <IslesCheck
          id={18}
          name="Wrinkly Door: Aztec Tiny"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in && (currentItemCount >= doorItemCount)}
          canGetBreak={canDo.out && (currentItemCount >= doorItemCount)}
        />
        <IslesCheck
          id={14}
          name="Wrinkly Door: Aztec Chunky"
          region="Japes-Forest Lobbies"
          canGetLogic={chunkyDoor.in && (currentItemCount >= doorItemCount)}
          canGetBreak={chunkyDoor.out && (currentItemCount >= doorItemCount)}
        />
    </WrinklyPool>
  )
  } else if (!locked && kongLocked) {
  return (
    <WrinklyPool>
        <IslesCheck
          id={16}
          name="Wrinkly Door: Aztec DK"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in && hasDK}
          canGetBreak={canDo.out && hasDK}
        />
        <IslesCheck
          id={15}
          name="Wrinkly Door: Aztec Diddy"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in && hasDiddy}
          canGetBreak={canDo.out && hasDiddy}
        />
        <IslesCheck
          id={17}
          name="Wrinkly Door: Aztec Lanky"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in && hasLanky}
          canGetBreak={canDo.out && hasLanky}
        />
        <IslesCheck
          id={18}
          name="Wrinkly Door: Aztec Tiny"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in && hasTiny}
          canGetBreak={canDo.out && hasTiny}
        />
        <IslesCheck
          id={14}
          name="Wrinkly Door: Aztec Chunky"
          region="Japes-Forest Lobbies"
          canGetLogic={chunkyDoor.in && hasChunky}
          canGetBreak={chunkyDoor.out && hasChunky}
        />
    </WrinklyPool>
  )
  } else {
  return (
    <WrinklyPool>
        <IslesCheck
          id={16}
          name="Wrinkly Door: Aztec DK"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in && hasDK && (currentItemCount >= doorItemCount)}
          canGetBreak={canDo.out && hasDK && (currentItemCount >= doorItemCount)}
        />
        <IslesCheck
          id={15}
          name="Wrinkly Door: Aztec Diddy"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in && hasDiddy && (currentItemCount >= doorItemCount)}
          canGetBreak={canDo.out && hasDiddy && (currentItemCount >= doorItemCount)}
        />
        <IslesCheck
          id={17}
          name="Wrinkly Door: Aztec Lanky"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in && hasLanky && (currentItemCount >= doorItemCount)}
          canGetBreak={canDo.out && hasLanky && (currentItemCount >= doorItemCount)}
        />
        <IslesCheck
          id={18}
          name="Wrinkly Door: Aztec Tiny"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in && hasTiny && (currentItemCount >= doorItemCount)}
          canGetBreak={canDo.out && hasTiny && (currentItemCount >= doorItemCount)}
        />
        <IslesCheck
          id={14}
          name="Wrinkly Door: Aztec Chunky"
          region="Japes-Forest Lobbies"
          canGetLogic={chunkyDoor.in && hasChunky && (currentItemCount >= doorItemCount)}
          canGetBreak={chunkyDoor.out && hasChunky && (currentItemCount >= doorItemCount)}
        />
    </WrinklyPool>
  )
  }
}

export default AztecLobby
