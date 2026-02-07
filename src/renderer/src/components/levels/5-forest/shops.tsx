import { useShallow } from 'zustand/react/shallow'
import useDonkStore from '@renderer/store'
import ShopGenerator from '@renderer/components/pools/ShopGenerator'
import ShopPool from '@renderer/components/pools/Shops'
import { useForestBean, useForestDay, usePlayForest } from '@renderer/hooks/forest'
import { useCranky, whatAFunky, useSnide } from '@renderer/hooks/kongs'

const Vanilla: React.FC = () => {
  const inStage = usePlayForest()
  const beanstalk = useForestBean()
  const day = useForestDay()
  const hasCranky = useCranky()
  const hasFunky = whatAFunky()
  const hasSnide = useSnide()
  const [crankyFunky, crankySnide] = useDonkStore(useShallow((state) => [state.shuffledForestCranky.forestCrankyFunky, state.shuffledForestCranky.forestCrankySnide]))
  const [funkyCranky, funkySnide] = useDonkStore(useShallow((state) => [state.shuffledForestFunky.forestFunkyCranky, state.shuffledForestFunky.forestFunkySnide]))
  const [snideCranky, snideFunky] = useDonkStore(useShallow((state) => [state.shuffledForestSnide.forestSnideCranky, state.shuffledForestSnide.forestSnideFunky]))
  return (
    <>
      <ShopGenerator
        baseId={5110}
        baseName="Forest Cranky"
        level="Fungi Forest"
        region="Shops"
        inLogic={hasCranky && (crankyFunky ? beanstalk.in : crankySnide ? day.in : inStage.in)}
        outLogic={hasCranky && (crankyFunky ? beanstalk.out : crankySnide ? day.out : inStage.out)}
      />
      <ShopGenerator
        baseId={5120}
        baseName="Forest Funky"
        level="Fungi Forest"
        region="Shops"
        inLogic={hasFunky && (funkyCranky ? inStage.in : funkySnide ? day.in : beanstalk.in)}
        outLogic={hasFunky && (funkyCranky ? inStage.out : funkySnide ? day.out : beanstalk.out)}
      />
      <ShopGenerator
        baseId={5140}
        baseName="Turn in Forest Blueprint for"
        level="Fungi Forest"
        region="Shops"
        inLogic={hasSnide && (snideCranky ? inStage.in : snideFunky ? beanstalk.in : day.in)}
        outLogic={hasSnide && (snideCranky ? inStage.out : snideFunky ? beanstalk.out : day.out)}
      />
    </>
  )
}

const ShopLocations: React.FC = () => {
  return <ShopPool><Vanilla /></ShopPool>
}

export default ShopLocations
