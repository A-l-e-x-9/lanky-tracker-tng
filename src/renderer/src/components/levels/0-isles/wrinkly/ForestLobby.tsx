import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'
import WrinklyPool from '@renderer/components/pools/WrinklyDoors'
import { useForestLobbyGeneric } from '@renderer/hooks/isles'
import { useDk, useDiddy, useLanky, useTiny, useChunky, useGrab } from '@renderer/hooks/kongs'
import { useWrinklyDoorItem } from '@renderer/hooks/settings'
import { useCurrentGBCount, useCurrentBlueprintCount, useCurrentKeyCount, useCurrentBananaMedalCount, useCurrentCrownCount, useCurrentFairyCount, useCurrentRainbowCoinCount, useCurrentPearlCount, useCurrentCBCount } from '@renderer/hooks/consumables'
import IslesCheck from '../check'

/*Since Version 4 of the DK64 Randomizer, you can have major rewards in Wrinkly Kong's hint doors (and hints on checks).*/
const ForestLobby: React.FC = () => {
const canDo = useForestLobbyGeneric()
const [locked, kongLocked, grabLocked] = useDonkStore(useShallow((state) => [state.settings.lockedWrinklyDoors, state.ui.konglessHintDoorsOff, state.ui.fungiLobbyOptionOff]))
const doorItemCount = useDonkStore(useShallow((state) => state.wrinklyDoors.fungiForest))
const hasDK = useDk()
const hasDiddy = useDiddy()
const hasLanky = useLanky()
const hasTiny = useTiny()
const hasChunky = useChunky()
const doorItem = useWrinklyDoorItem()
let currentItemCount = 0
const currentGBs = useCurrentGBCount()
const currentBPs = useCurrentBlueprintCount()
const currentCrowns = useCurrentCrownCount()
const currentKeys = useCurrentKeyCount()
const currentMedals = useCurrentBananaMedalCount()
const currentFairies = useCurrentFairyCount()
const currentRainbowCoins = useCurrentRainbowCoinCount()
const currentPearls = useCurrentPearlCount()
const currentCBs = useCurrentCBCount()
const hasGrab = useGrab()

switch (doorItem) {
  case 1: {
    currentItemCount = currentBPs
    break
  }
  case 2: {
    currentItemCount = currentCrowns
    break
  }
  case 3: {
    currentItemCount = currentKeys
    break
  }
  case 4: {
    currentItemCount = currentMedals
    break
  }
  case 5: {
    currentItemCount = currentFairies
    break
  }
  case 6: {
    currentItemCount = currentRainbowCoins
    break
  }
  case 7: {
    currentItemCount = currentPearls
    break
  }
  case 8: {
    currentItemCount = currentCBs
    break
  }
  default: {
    currentItemCount = currentGBs
  }
}

if (!locked && !kongLocked && !grabLocked) {
  return (
    <WrinklyPool>
        <IslesCheck
          id={55}
          name="Wrinkly Door: Forest DK"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
        <IslesCheck
          id={49}
          name="Wrinkly Door: Forest Diddy"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
        <IslesCheck
          id={56}
          name="Wrinkly Door: Forest Lanky"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
        <IslesCheck
          id={57}
          name="Wrinkly Door: Forest Tiny"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
        <IslesCheck
          id={46}
          name="Wrinkly Door: Forest Chunky"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in}
          canGetBreak={canDo.out}
        />
    </WrinklyPool>
  )} else if (locked && !kongLocked && !grabLocked) {
  return (
    <WrinklyPool>
        <IslesCheck
          id={55}
          name="Wrinkly Door: Forest DK"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in && (currentItemCount >= doorItemCount)}
          canGetBreak={canDo.out && (currentItemCount >= doorItemCount)}
        />
        <IslesCheck
          id={49}
          name="Wrinkly Door: Forest Diddy"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in && (currentItemCount >= doorItemCount)}
          canGetBreak={canDo.out && (currentItemCount >= doorItemCount)}
        />
        <IslesCheck
          id={56}
          name="Wrinkly Door: Forest Lanky"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in && (currentItemCount >= doorItemCount)}
          canGetBreak={canDo.out && (currentItemCount >= doorItemCount)}
        />
        <IslesCheck
          id={57}
          name="Wrinkly Door: Forest Tiny"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in && (currentItemCount >= doorItemCount)}
          canGetBreak={canDo.out && (currentItemCount >= doorItemCount)}
        />
        <IslesCheck
          id={46}
          name="Wrinkly Door: Forest Chunky"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in && (currentItemCount >= doorItemCount)}
          canGetBreak={canDo.out && (currentItemCount >= doorItemCount)}
        />
    </WrinklyPool>
  )} else if (!locked && kongLocked && !grabLocked) {
  return (
    <WrinklyPool>
        <IslesCheck
          id={55}
          name="Wrinkly Door: Forest DK"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in && hasDK}
          canGetBreak={canDo.out && hasDK}
        />
        <IslesCheck
          id={49}
          name="Wrinkly Door: Forest Diddy"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in && hasDiddy}
          canGetBreak={canDo.out && hasDiddy}
        />
        <IslesCheck
          id={56}
          name="Wrinkly Door: Forest Lanky"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in && hasLanky}
          canGetBreak={canDo.out && hasLanky}
        />
        <IslesCheck
          id={57}
          name="Wrinkly Door: Forest Tiny"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in && hasTiny}
          canGetBreak={canDo.out && hasTiny}
        />
        <IslesCheck
          id={46}
          name="Wrinkly Door: Forest Chunky"
          region="Japes-Forest Lobbies"
          canGetLogic={canDo.in && hasChunky}
          canGetBreak={canDo.out && hasChunky}
        />
    </WrinklyPool>
  )}
}

export default ForestLobby
