import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'

import SimpleKey from '@renderer/components/settings/SimpleKey'
import LevelSelector from './LevelSelector'
import CountSelector from './CountSelector'

import l1 from '../../assets/images/1.png'
import l2 from '../../assets/images/2.png'
import l3 from '../../assets/images/3.png'
import l4 from '../../assets/images/4.png'
import l5 from '../../assets/images/5.png'
import l6 from '../../assets/images/6.png'
import l7 from '../../assets/images/7.png'
import l8 from '../../assets/images/8.png'
import bLocker from '../../assets/images/GB.png'
import coloredNanners from '../../assets/images/rainbow_bananas.png'

const Kontracts = (): JSX.Element => {
  const [setBLocker, setTroffAndScoff] = useDonkStore(useShallow((state) => [state.setBLocker, state.setTroffAndScoff]))
  const key3And8Seed = useDonkStore(useShallow((state) => state.winCondition.key3And8)) ? 'all-bosses' : ''
  const key8Seed = useDonkStore(useShallow((state) => state.winCondition.key8)) ? 'all-bosses' : ''
  return (
    <section className="level-section">
    <h3>Levels, Keys, B. Lockers, and Troff 'n' Scoffs</h3>
      <section className="level-list">
        <section className="level1">
          <img src={l1} height={24} />
          <LevelSelector storeKey="level1" />
          <SimpleKey keyNum={1} />
          <CountSelector
            storeKey="bLocker1"
            title="Bananas required for Level 1"
            imgUrl={bLocker}
            prefix="bLocker"
            setCount={setBLocker}
            maxValue={201}
          />
          <CountSelector
            storeKey="troffAndScoff1"
            title="CB's required to access Boss 1"
            imgUrl={coloredNanners}
            prefix="troffAndScoff"
            setCount={setTroffAndScoff}
            maxValue={500}
          />
        </section>
        <section className="level2">
          <img src={l2} height={24} />
          <LevelSelector storeKey="level2" />
          <SimpleKey keyNum={2} />
          <CountSelector
            storeKey="bLocker2"
            title="Bananas required for Level 2"
            imgUrl={bLocker}
            prefix="bLocker"
            setCount={setBLocker}
            maxValue={201}
          />
          <CountSelector
            storeKey="troffAndScoff2"
            title="CB's required to access Boss 2"
            imgUrl={coloredNanners}
            prefix="troffAndScoff"
            setCount={setTroffAndScoff}
            maxValue={500}
          />
        </section>
        <section className={`level3 ${key3And8Seed}`}>
          <img src={l3} height={24} />
          <LevelSelector storeKey="level3" />
          <SimpleKey keyNum={3} />
          <CountSelector
            storeKey="bLocker3"
            title="Bananas required for Level 3"
            imgUrl={bLocker}
            prefix="bLocker"
            setCount={setBLocker}
            maxValue={201}
          />
          <CountSelector
            storeKey="troffAndScoff3"
            title="CB's required to access Boss 3"
            imgUrl={coloredNanners}
            prefix="troffAndScoff"
            setCount={setTroffAndScoff}
            maxValue={500}
          />
        </section>
        <section className="level4">
          <img src={l4} height={24} />
          <LevelSelector storeKey="level4" />
          <SimpleKey keyNum={4} />
          <CountSelector
            storeKey="bLocker4"
            title="Bananas required for Level 4"
            imgUrl={bLocker}
            prefix="bLocker"
            setCount={setBLocker}
            maxValue={201}
          />
          <CountSelector
            storeKey="troffAndScoff4"
            title="CB's required to access Boss 4"
            imgUrl={coloredNanners}
            prefix="troffAndScoff"
            setCount={setTroffAndScoff}
            maxValue={500}
          />
        </section>
        <section className="level5">
          <img src={l5} height={24} />
          <LevelSelector storeKey="level5" />
          <SimpleKey keyNum={5} />
          <CountSelector
            storeKey="bLocker5"
            title="Bananas required for Level 5"
            imgUrl={bLocker}
            prefix="bLocker"
            setCount={setBLocker}
            maxValue={201}
          />
          <CountSelector
            storeKey="troffAndScoff5"
            title="CB's required to access Boss 5"
            imgUrl={coloredNanners}
            prefix="troffAndScoff"
            setCount={setTroffAndScoff}
            maxValue={500}
          />
        </section>
        <section className="level6">
          <img src={l6} height={24} />
          <LevelSelector storeKey="level6" />
          <SimpleKey keyNum={6} />
          <CountSelector
            storeKey="bLocker6"
            title="Bananas required for Level 6"
            imgUrl={bLocker}
            prefix="bLocker"
            setCount={setBLocker}
            maxValue={201}
          />
          <CountSelector
            storeKey="troffAndScoff6"
            title="CB's required to access Boss 6"
            imgUrl={coloredNanners}
            prefix="troffAndScoff"
            setCount={setTroffAndScoff}
            maxValue={500}
          />
        </section>
        <section className="level7">
          <img src={l7} height={24} />
          <LevelSelector storeKey="level7" />
          <SimpleKey keyNum={7} />
          <CountSelector
            storeKey="bLocker7"
            title="Bananas required for Level 7"
            imgUrl={bLocker}
            prefix="bLocker"
            setCount={setBLocker}
            maxValue={201}
          />
          <CountSelector
            storeKey="troffAndScoff7"
            title="CB's required to access Boss 7"
            imgUrl={coloredNanners}
            prefix="troffAndScoff"
            setCount={setTroffAndScoff}
            maxValue={500}
          />
        </section>
        <section className={`level8 ${key3And8Seed || key8Seed}`}>
          <img src={l8} height={24} />
          <LevelSelector storeKey="level8" />
          <SimpleKey keyNum={8} />
          <CountSelector
            storeKey="bLocker8"
            title="Bananas required for Level 8"
            imgUrl={bLocker}
            prefix="bLocker"
            setCount={setBLocker}
            maxValue={201}
          />
          <CountSelector
            storeKey="troffAndScoff8"
            title="CB's required to access Boss 8"
            imgUrl={coloredNanners}
            prefix="troffAndScoff"
            setCount={setTroffAndScoff}
            maxValue={500}
          />
        </section>
      </section>
    </section>
  )
}

export default Kontracts

/*              <p>Keys</p>
              <SimpleRadioIcon
                imgUrl={keyIcon}
                title="Highlights the keys next to the level icons in a red background."
                storeKey="bossKeys"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>Get Key 8 only</p>
              <SimpleRadioIcon
                imgUrl={keyIcon}
                title="Highlights Key 8's icon in a red background."
                storeKey="key8"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>Kremling Kapture</p>
              <SimpleRadioIcon
                imgUrl={fairyCamIcon}
                title="Highlights the Camera's icon in a red background and adds a &quot;Kremling Kapture&quot; tab to the navigation bar at the top."
                storeKey="kremlingKapture"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>Complete the DK Rap</p>
              <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Highlights everything referenced in the DK Rap in a red background."
                storeKey="takeItToTheFridge"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>Kill the Wabbit</p>
              <SimpleRadioIcon
                imgUrl={toughBananaIcon}
                title="Highlights Chunky's 5-Door Igloo Banana check in Crystal Caves in red text."
                storeKey="killTheWabbit"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>Bananas</p>
              <SimpleRadioIcon
                imgUrl={gbIcon}
                title="Highlights Bananas in a red background."
                storeKey="goldBananas"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>Blueprints</p>
              <SimpleRadioIcon
                imgUrl={blueprintIcon}
                title="Highlights the Blueprints and Snide in a red background and 'turn in Blueprint to Snide' checks in red text."
                storeKey="blueprints"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>Company Coins</p>
              <SimpleRadioIcon
                imgUrl={companyCoinIcon}
                title="Highlights the Company Coins in a red background."
                storeKey="companyCoins"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>Banana Medals</p>
              <SimpleRadioIcon
                imgUrl={bananaMedalIcon}
                title="Highlights Banana Medals in a red background."
                storeKey="bananaMedals"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>Crowns</p>
              <SimpleRadioIcon
                imgUrl={crownIcon}
                title="Highlights Crowns in a red background."
                storeKey="crowns"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>Fairies</p>
              <SimpleRadioIcon
                imgUrl={fairyIcon}
                title="Highlights Banana Fairies in a red background."
                storeKey="fairies"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>Rainbow Coins</p>
              <SimpleRadioIcon
                imgUrl={rainbowCoinIcon}
                title="Highlights Rainbow Coins in a red background."
                storeKey="rainbowCoins"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>The Bean™</p>
              <SimpleRadioIcon
                imgUrl={beanIcon}
                title="Highlights The Bean™ in a red background."
                storeKey="theBean"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>Pearls</p>
              <SimpleRadioIcon
                imgUrl={pearlIcon}
                title="Highlights Pearls in a red background."
                storeKey="pearls"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>Bosses</p>
              <SimpleRadioIcon
                imgUrl={keyIcon}
                title="Highlights the boss checks in red text."
                storeKey="bosses"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>Bonus Barrels</p>
              <SimpleRadioIcon
                imgUrl={bonusIcon}
                title="Highlights all Bonus Barrel checks in red text."
                storeKey="bonuses"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
            <p className="full-grid">&nbsp;</p>
            <p>Number of the indicated item needed:</p>
              <CountSelector
                imgUrl={(isKeySeed || isKey8Seed || isKey38Seed || isBossSeed) ? keyIcon : isKremKaptureSeed ? fairyCamIcon : isRapSeed ? crankyIcon : isChallengeSeed ? hardShootIcon : isWabbitSeed ? toughBananaIcon : isGBSeed ? gbIcon : isBPSeed ? blueprintIcon : isCoCoinSeed ? companyCoinIcon : isMedalSeed ? bananaMedalIcon : isCrownSeed ? crownIcon : isFairySeed ? fairyIcon : isRainbowSeed ? rainbowCoinIcon : isBeanSeed ? beanIcon : isPearlSeed ? pearlIcon : isBonusSeed ? bonusIcon : unknownIcon}
                title="Number of the indicated item needed."
                storeKey="winConItemCount"
                prefix="winCondition"
                setCount={setWinCondition}
                maxValue={isKeySeed ? 8 : isGBSeed ? (capRemoved ? 255 : 201) : isBPSeed ? 40 : isCoCoinSeed ? 2 : isMedalSeed ? (capRemoved ? 255 : 40): isCrownSeed ? (capRemoved ? 255 : 10) : isFairySeed ? (capRemoved ? 255 : 20) : isRainbowSeed ? (capRemoved ? 255 : 16) : isBeanSeed ? 1 : isPearlSeed ? (capRemoved ? 255 : 5) : isBossSeed ? 7 : isBonusSeed ? 43 : 0} //I know no good way of implementing Hideout Helm bonuses at this time, so the "Bonuses" win con caps out at 43 even though it can go to 53.
              />
            <p></p>
            <p></p>
*/
