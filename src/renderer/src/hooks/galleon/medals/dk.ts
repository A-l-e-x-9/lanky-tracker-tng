import { useBlast, useBongos, useCoconut, useDive, useDk, useLanky } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas } from '@renderer/hooks/settings'
import {
  useGalleonLighthouseArea,
  useGalleonLighthousePlatform,
  useGalleonOutskirts,
  usePlayGalleon,
  useSlamGalleon
} from '..'

const useDkMedalCommonLogic = (): number => {
  const gun = useCoconut()

  let bananas = 0
  if (gun) {
    bananas += 10 //balloon at Chunky's chests
  }

  return bananas
}

export const useDkMedalInLogic = (): number => {
  const inStage = usePlayGalleon()
  const canSlam = useSlamGalleon()
  const lighthousePlatform = useGalleonLighthousePlatform()
  const kong = useDk()
  const gun = useCoconut()
  const pad = useBlast()
  const shuffleBananas = useShuffleColoredBananas()
  const outskirts = useGalleonOutskirts()
  const dive = useDive()
  let bananas = useDkMedalCommonLogic()

  if (!inStage.in) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  if (lighthousePlatform.in) {
    if (gun) {
      bananas += 10 //balloon around the Lighthouse
    }
    if (pad) {
      bananas += 15 //Barrel Blast level
    }
    if (canSlam) {
      bananas += 20 //CB's inside the Whomp's Fortress ripoff area
      if (gun) {
        bananas += 10 //Balloon in the Lighthouse at the bottom
      }
    }
    if (dive.in && lanky) {
      bananas += 10 //behind the Enguarde board
    }
  }
  
  if (outskirts.in && dive.in) {
    bananas += 15 //little shipwreck at sea bottom near 5DS
    if (music) {
      bananas += 10 //CB's in the 5DS itself
    }
  }

  return bananas
}

export const useDkMedalOutLogic = (): number => {
  const inStage = usePlayGalleon()
  const canSlam = useSlamGalleon()
  const lighthousePlatform = useGalleonLighthousePlatform()
  const kong = useDk()
  const gun = useCoconut()
  const pad = useBlast()
  const shuffleBananas = useShuffleColoredBananas()
  const outskirts = useGalleonOutskirts()
  const dive = useDive()
  let bananas = useDkMedalCommonLogic()

  if (!inStage.out) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  if (lighthousePlatform.out) {
    if (gun) {
      bananas += 10 //balloon around the Lighthouse
    }
    if (pad) {
      bananas += 15 //Barrel Blast level
    }
    if (canSlam) {
      bananas += 20 //CB's inside the Whomp's Fortress ripoff area
      if (gun) {
        bananas += 10 //Balloon in the Lighthouse at the bottom
      }
    }
    if (dive.out && lanky) {
      bananas += 10 //behind the Enguarde board
    }
  }
  
  if (outskirts.out && dive.out) {
    bananas += 15 //little shipwreck at sea bottom near 5DS
    if (music) {
      bananas += 10 //CB's in the 5DS itself
    }
  }

  return bananas
}
