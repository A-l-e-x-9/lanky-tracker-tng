import ShopGenerator from '@renderer/components/pools/ShopGenerator'
import ShopPool from '@renderer/components/pools/Shops'
import { useForestBean, useForestDay, usePlayForest } from '@renderer/hooks/forest'
import { useShuffledShops } from '@renderer/hooks/settings'
import { useCranky, whatAFunky, useSnide } from '@renderer/hooks/kongs'

const Vanilla: React.FC = () => {
  const inStage = usePlayForest()
  const beanstalk = useForestBean()
  const hasCranky = useCranky()
  const hasFunky = whatAFunky()

  return (
    <>
      <ShopGenerator
        baseId={5110}
        baseName="Forest Cranky"
        level="Fungi Forest"
        region="Forest Shops"
        inLogic={hasCranky && inStage}
      />
      <ShopGenerator
        baseId={5120}
        baseName="Forest Funky"
        level="Fungi Forest"
        region="Forest Shops"
        inLogic={hasFunky && beanstalk}
      />
    </>
  )
}

const Shuffled: React.FC = () => {
  const inStage = usePlayForest()
  const beanstalk = useForestBean()
  const day = useForestDay()
  const hasCranky = useCranky()
  const hasFunky = whatAFunky()
  const hasSnide = useSnide()

  return (
    <>
      <ShopGenerator
        baseId={5140}
        baseName="Forest Cranky Location"
        level="Fungi Forest"
        region="Forest Shops"
        inLogic={hasCranky && inStage}
      />
      <ShopGenerator
        baseId={5150}
        baseName="Forest Funky Location"
        level="Fungi Forest"
        region="Forest Shops"
        inLogic={hasFunky && beanstalk}
      />
      <ShopGenerator
        baseId={5170}
        baseName="Forest Snide Location"
        level="Fungi Forest"
        region="Forest Shops"
        inLogic={hasSnide && day.in}
        outLogic={hasSnide && day.out}
      />
    </>
  )
}

const ShopLocations: React.FC = () => {
  const locations = useShuffledShops() ? <Shuffled /> : <Vanilla />
  return <ShopPool>{locations}</ShopPool>
}

export default ShopLocations
