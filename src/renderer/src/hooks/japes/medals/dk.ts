import { useBlast, useClimbing, useCoconut, useDk, useVine } from '@renderer/hooks/kongs'
import { useShuffleColoredBananas, useBananaportAll } from '@renderer/hooks/settings'
import { useJapesKongGates, useJapesRambi, usePlayJapes } from '..'

export const useDkMedalInLogic = (): number => {
  const inStage = usePlayJapes()
  const haveRambiCage = useJapesRambi()
  const kongGates = useJapesKongGates()
  const kong = useDk()
  const vine = useVine()
  const pad = useBlast()
  const gun = useCoconut()
  const climbing = useClimbing()
  const bananaports = useBananaportAll()
  const shuffleBananas = useShuffleColoredBananas()

  if (!inStage.in) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  let bananas = 5
  if (climbing) {
    bananas += 15 //Bunches on the trees in front of Funky's, behind the Barrel Cannon, Diddy's cage
  }
  if (climbing || bananaports) {
    bananas += 16 //six singles surrounding the mount-ehn and a balloon in front of Snide's
  }
  if (vine && climbing) {
    // Starting area between the vines.
    bananas += 5
  }
  if (gun) {
    // Two balloons after first tunnel.
    bananas += 20
  }
  if (vine && climbing && pad) {
    // Blast course
    bananas += 10
  }

  if (kongGates.in) {
    bananas += 9 // Between the 4 warps
    if (gun) {
      bananas += 10 // balloon by Cranky
    }
    if (haveRambiCage.in) {
      bananas += 10 // rambi gate + hut
    }
  }

  return bananas
}

export const useDkMedalOutLogic = (): number => {
  const inStage = usePlayJapes()
  const kong = useDk()
  const vine = useVine()
  const climbing = useClimbing()
  const bananas = useDkMedalInLogic()
  const shuffleBananas = useShuffleColoredBananas()

  const inStage = usePlayJapes()
  const haveRambiCage = useJapesRambi()
  const kongGates = useJapesKongGates()
  const kong = useDk()
  const vine = useVine()
  const pad = useBlast()
  const gun = useCoconut()
  const climbing = useClimbing()
  const bananaports = useBananaportAll()
  const shuffleBananas = useShuffleColoredBananas()

  if (!inStage.out) {
    return 0
  }
  if (!kong) {
    return 0
  }
  if (shuffleBananas) {
    return 100
  }

  let bananas = 5 //the bunch in front of the Troff 'n' Scoff near Lanky's painting room?
  if (climbing) {
    bananas += 15 //Bunches on the trees in front of Funky's, behind the Barrel Cannon, Diddy's cage
  }
  if (climbing || bananaports) {
    bananas += 16 //six singles surrounding the mount-ehn and a balloon in front of Snide's
  }
  if (vine && climbing) {
    // Starting area between the vines.
    bananas += 5
  }
  if (gun) {
    // Two balloons after first tunnel.
    bananas += 20
  }
  if (vine && climbing && pad) {
    // Blast course
    bananas += 10
  }

  if (kongGates.out) {
    bananas += 9 // Between the 4 warps
    if (gun) {
      bananas += 10 // balloon by Cranky
    }
    if (haveRambiCage.out) {
      bananas += 10 // rambi gate + hut
    }
  }

  return bananas
}
