import { useState } from 'react'
import Modal from 'react-modal'
import { useShallow } from 'zustand/react/shallow'

import useDonkStore from '@renderer/store'
import BananaportSelector from './BananaportSelector'
import CheckIcon from './CheckIcon'
import CountSelector from './CountSelector'
import HelmSelector from './HelmSelector'
import { HelmDoorSelector1, HelmDoorSelector2 } from './HelmDoorSelector'
import SimpleIcon from './SimpleIcon'
import SimpleRadioIcon from './SimpleRadioIcon'
import { KRoolSlamSelector } from '../moves/SlamSelector'

import gbIcon from '../../assets/images/GB.png'
import dkIcon from '../../assets/images/dk.png'
import beanIcon from '../../assets/images/bean.png'
import chunkyIcon from '../../assets/images/chunky.png'
import crownIcon from '../../assets/images/crown.png'
import peanutIcon from '../../assets/images/diddy_gun.png'
import guitarIcon from '../../assets/images/diddy_inst.png'
import rocketIcon from '../../assets/images/diddybarrel.png'
import coconutIcon from '../../assets/images/dk_gun.png'
import grabIcon from '../../assets/images/dk_move.png'
import dkPadIcon from '../../assets/images/dkpad.png'
import lankyIcon from '../../assets/images/lanky.png'
import fairyIcon from '../../assets/images/fairy.png'
import keyIcon from '../../assets/images/key.png'
import blueprintIcon from '../../assets/images/lanky_bp.png'
import grapeIcon from '../../assets/images/lanky_gun.png'
import companyCoinIcon from '../../assets/images/n64rw_coin.png'
import pearlIcon from '../../assets/images/pearl.png'
import rainbowCoinIcon from '../../assets/images/rainbowcoin.png'
import bananaMedalIcon from '../../assets/images/settings/bananamedal.gif'
import dropIcon from '../../assets/images/settings/beaver.png'
import bonusIcon from '../../assets/images/settings/bonus.png'
import bananaIcon from '../../assets/images/settings/bunch.png'
import shopIcon from '../../assets/images/settings/funky.png'
import hardShootIcon from '../../assets/images/settings/hard_shoot.png'
import melonIcon from '../../assets/images/settings/melon.png'
import toughBananaIcon from '../../assets/images/settings/rabbit.png'
import slamSwitchIcon from '../../assets/images/settings/slam_switch.png'
import switchsanityIcon from '../../assets/images/settings/switch.png'
import slamIcon from '../../assets/images/slam1.png'
import featherIcon from '../../assets/images/tiny_gun.png'
import wrinkly from '../../assets/images/wrinkly.png'
import diveIcon from '../../assets/images/diving.png'
import koshaHead from '../../assets/images/kosha.png'
import fairyCamIcon from '../../assets/images/filmwave1.png'
import crankyIcon from '../../assets/images/cranky.png'
import unknownIcon from '../../assets/images/unknown-small.png'
import kasplatIcon from '../../assets/images/settings/kasplat.png'
import funkyIcon from '../../assets/images/settings/funky.png'
import snideIcon from '../../assets/images/snide.png'
import candyIcon from '../../assets/images/candy.png'

const customStyles: Modal.Styles = {
  content: {
    backgroundColor: '#002040',
    color: '#ffffff'
  }
}

const GeneratorSettings: React.FC = () => {
  const [isOpen, setOpen] = useState(false)
  const [setSetting, setBarrier, setFastCheck, setUi, setWinCondition, setShop] = useDonkStore(
    useShallow((state) => [state.setSetting, state.setBarrier, state.setFastCheck, state.setUi, state.setWinCondition, state.setShop])
  )

  const openModal = (): void => setOpen(true)
  const closeModal = (): void => setOpen(false)
  const [isKeySeed, isKey8Seed, isKey38Seed, isKremKaptureSeed, isRapSeed, isChallengeSeed, isWabbitSeed, isGBSeed, isBPSeed, isCoCoinSeed, isMedalSeed, isCrownSeed, isFairySeed, isRainbowSeed, isBeanSeed, isPearlSeed, isBossSeed, isBonusSeed] = useDonkStore(useShallow((state) => [state.winCondition.bossKeys, state.winCondition.key8, state.winCondition.key3And8, state.winCondition.kremlingKapture, state.winCondition.takeItToTheFridge, state.winCondition.kRoolChallenge, state.winCondition.killTheWabbit, state.winCondition.goldBananas, state.winCondition.blueprints, state.winCondition.companyCoins, state.winCondition.bananaMedals, state.winCondition.crowns, state.winCondition.fairies, state.winCondition.rainbowCoins, state.winCondition.theBean, state.winCondition.pearls, state.winCondition.bosses, state.winCondition.bonuses]))

  return (
    <span>
      <span onClick={openModal} title="Generator Settings">
        ⚙️
      </span>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Generator Settings"
        style={customStyles}
      >
        <section className="modal-settings">
        <h2>Tracker Settings</h2>
          <section className="pool">
            <h3>Items in Pool</h3>
            <>
              <p>Golden Bananas?</p>
              <SimpleIcon
                imgUrl={gbIcon}
                title="Puts Golden Bananas in the pool, other than those in the &quot;minecart&quot; and &quot;miniboss&quot; categories."
                storeKey="poolGoldBananas"
                prefix="settings"
                updateItem={setSetting}
              />            
              <p>Minecarts and Races?</p>
              <SimpleIcon
                imgUrl={toughBananaIcon}
                title="Puts minecart and race-themed bananas in the pool."
                storeKey="poolToughBananas"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Gauntlets and Minibosses?</p>
              <SimpleIcon
                imgUrl={hardShootIcon}
                title="Puts enemy gauntlet and miniboss bananas in the pool."
                storeKey="poolMiniboss"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Kongs?</p>
              <SimpleIcon
                imgUrl={dkIcon}
                title="Puts the Kong cages in the pool."
                storeKey="poolKongs"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Shops?</p>
              <SimpleIcon
                imgUrl={shopIcon}
                title="Puts Cranky, Funky, and Candy Kong's shops in the pool."
                storeKey="poolShops"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Blueprints?</p>
              <SimpleIcon
                imgUrl={blueprintIcon}
                title="Puts Kasplat checks in the pool."
                storeKey="poolBlueprints"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Banana Medals?</p>
              <SimpleIcon
                imgUrl={bananaMedalIcon}
                title="Puts the vanilla Banana Medal checks in the pool."
                storeKey="poolBananaMedals"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Isles Banana Medals?</p>
              <SimpleIcon
                imgUrl={bananaMedalIcon}
                title="Does your seed have colored bananas in DK Isles?"
                storeKey="poolIslesMedals"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Banana Fairies?</p>
              <SimpleIcon
                imgUrl={fairyIcon}
                title="Puts Banana Fairies in the pool."
                storeKey="poolFairies"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Rainbow Coins?</p>
              <SimpleIcon
                imgUrl={rainbowCoinIcon}
                title="Puts the dirt patches in the pool."
                storeKey="poolRainbowCoins"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Battle Crowns?</p>
              <SimpleIcon
                imgUrl={crownIcon}
                title="Puts Battle Arenas in the pool."
                storeKey="poolCrowns"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Wrinkly Doors?</p>
              <SimpleIcon
                imgUrl={wrinkly}
                title="Puts Wrinkly Kong's doors in the pool."
                storeKey="poolWrinkly"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Boss Keys?</p>
              <SimpleIcon
                imgUrl={keyIcon}
                title="Puts &quot;Boss Defeated&quot; checks in the pool."
                storeKey="poolKeys"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Melon Crates?</p>
              <SimpleIcon
                imgUrl={melonIcon}
                title="Puts melon crates in the pool."
                storeKey="poolCrates"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Pearls & Bean?</p>
              <SimpleIcon
                imgUrl={beanIcon}
                title="Puts the Galleon clam checks in the pool, as well as your second reward for clearing Tiny's tree stump check in Forest."
                storeKey="poolMisc"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Company Coins?</p>
              <SimpleIcon
                imgUrl={companyCoinIcon}
                title="Puts the Jetpac and DK Arcade checks in the pool."
                storeKey="poolCompanyCoins"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Boulders?</p>
              <SimpleIcon
                imgUrl={chunkyIcon}
                title="Puts the various objects Chunky can lift with relative ease into the pool."
                storeKey="poolBoulders"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Dropsanity?</p>
              <SimpleIcon
                imgUrl={dropIcon}
                title="If Dropsanity is enabled for your seed, puts the enemies in the pool."
                storeKey="poolDrops"
                prefix="settings"
                updateItem={setSetting}
              />
            </>
            <h3>Consumable Settings</h3>
            <>
              <p>Medals needed for Jetpac?</p>
              <CountSelector
                imgUrl={bananaMedalIcon}
                title="Number of Banana Medals you need for Jetpac."
                storeKey="jetpacCount"
                prefix="settings"
                setCount={setSetting}
                maxValue={40}
              />
              <p>Colored bananas needed for medal?</p>
              <CountSelector
                imgUrl={bananaIcon}
                title="Number of regular bananas you need for a Medal."
                storeKey="cbCount"
                prefix="settings"
                setCount={setSetting}
                maxValue={100}
              />
              <p>Fairies needed for the Fairy's reward?</p>
              <CountSelector
                imgUrl={fairyIcon}
                title="Number of Fairies you need for the Rareware Banana."
                storeKey="fairyCount"
                prefix="settings"
                setCount={setSetting}
                maxValue={20}
              />
              <p>What locks Helm Door #1?</p>
              <HelmDoorSelector1 />
              <p>What locks Helm Door #2?</p>
              <HelmDoorSelector2 />
            </>
            <h3>Win Condition</h3>
            <p className="full-grid">If "K. Rool's Challenge" is selected, the "K. Rool" portion of this tracker will be forced on regardless of whether or not you turned it off. On the other hand, if "Kill the Wabbit" is selected, K. Rool is forced OFF.</p>
            <>
              <p>Keys</p>
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
              <p>Get Keys 3 and 8</p>
              <SimpleRadioIcon
                imgUrl={keyIcon}
                title="Highlights Key 3's and 8's icons in a red background. (This was the vanilla requirement to unlock K. Rool.)"
                storeKey="key3And8"
                prefix="winCondition"
                updateItem={setWinCondition}
              />
              <p>Kremling Kapture</p>
              <SimpleRadioIcon
                imgUrl={fairyCamIcon}
                title="Highlights all enemy checks with red text and the Camera's icon in a red background."
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
              <p>K. Rool's Challenge</p>
              <SimpleRadioIcon
                imgUrl={hardShootIcon}
                title="Highlights all Keys, as well as all 'turn in Blueprint to Snide' checks, Snide himself, boss checks, and Bonus Barrel checks."
                storeKey="kRoolChallenge"
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
                maxValue={isKeySeed ? 8 : isGBSeed ? 201 : (isBPSeed || isMedalSeed) ? 40 : isCoCoinSeed ? 2 : isCrownSeed ? 10 : isFairySeed ? 20 : isRainbowSeed ? 16 : isBeanSeed ? 1 : isPearlSeed ? 5 : isBossSeed ? 7 : isBonusSeed ? 43 : 0} //I know no good way of implementing Hideout Helm bonuses at this time, so the "Bonuses" win con caps out at 43 even though it can go to 53.
              />
            <p></p>
            <p></p>
            <p>Do you also have to fight K. Rool this seed?</p>
            <CheckIcon storeKey="hideKRool" prefix="ui" updateItem={setUi} />
            </>
            <h3>World Settings</h3>
            <>
              <p>Bananaports Active?</p>
              <BananaportSelector />
              <p>Switchsanity On?</p>
              <SimpleIcon
                imgUrl={switchsanityIcon}
                title="Is Switchsanity on in your seed?"
                storeKey="isSwitchsanity"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Progressive Slams?</p>
              <SimpleIcon
                imgUrl={slamSwitchIcon}
                title="If on, the Simian Slam level required for Kong head switches is tied to a level's position (i.e., if Creepy Castle is Level 1, it requires regular Slam instead of Super Duper). If off, the level's vanilla slam level is used."
                storeKey="progressiveSlams"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Helm Starting Area</p>
              <HelmSelector />
              <p>Auto-Finish Bonus Barrels?</p>
              <SimpleIcon
                imgUrl={bonusIcon}
                title="If this is on, you don't have to do the bonus levels for Bonus Barrel checks. Doesn't apply to Helm."
                storeKey="autoBonus"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Hard Shooting?</p>
              <SimpleIcon
                imgUrl={hardShootIcon}
                title="If on, certain checks that logically require Homing Ammo or Sniper Scope will instead expect you to do those checks without."
                storeKey="hardShooting"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Open Lobbies?</p>
              <SimpleIcon
                imgUrl={keyIcon}
                title="If on, all levels except Helm are open even if you don't have the appropriate Keys."
                storeKey="openLobbies"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Does DK phase of K. Rool require Blast?</p>
              <SimpleIcon
                imgUrl={slamIcon}
                title="In the vanilla game, you didn't actually need Blast to complete his phase. If this is on, however, you do."
                storeKey="balancedRoolPhases"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Slam level required for Chunky phase of K. Rool:</p>
              <KRoolSlamSelector />
              <p>Using Beta Lanky Phase?</p>
              <SimpleIcon
                imgUrl={grapeIcon}
                title="If this is enabled, Lanky's K. Rool phase will now require Grapes (to shoot a balloon) instead of Trombone."
                storeKey="betaLankyPhase"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Water is Lava?</p>
              <SimpleIcon
                imgUrl={diveIcon}
                title="If you made a seed with the &quot;Water is Lava&quot; difficulty setting on, enable this, and all checks involving Diving will turn yellow instead of the usual green."
                storeKey="waterIsLava"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Angry Caves?</p>
              <SimpleIcon
                imgUrl={koshaHead}
                title="Causes checks involving the main Crystal Caves area to turn yellow to indicate that you are under threat from rockfall. Checks that are still green are in the safe zones. You should also use this if you're playing the vanilla game or a seed for which you didn't turn the Calm Caves option on under the Quality of Life section, but turn it off once you've killed the giant Kosha."
                storeKey="angyKosha"
                prefix="settings"
                updateItem={setSetting}
              />
            </>
            <h3>Location Shuffle Settings</h3>
            <>
              <p>Battle Arenas?</p>
              <SimpleIcon
                imgUrl={crownIcon}
                title="Turn this on if Battle Arenas are shuffled."
                storeKey="shuffleArenas"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Melon Crates?</p>
              <SimpleIcon
                imgUrl={melonIcon}
                title="Turn this on if Melon Crates are shuffled."
                storeKey="shuffleCrates"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Dirt Patches?</p>
              <SimpleIcon
                imgUrl={rainbowCoinIcon}
                title="If Dirt Patches are shuffled, click here."
                storeKey="shuffleDirt"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Fairies?</p>
              <SimpleIcon
                imgUrl={fairyIcon}
                title="If your Banana Fairies are shuffled, click here."
                storeKey="shuffleFairies"
                prefix="settings"
                updateItem={setSetting}
              />
              <p>Kasplats?</p>
              <SimpleIcon
                imgUrl={kasplatIcon}
                title="If Kasplats are set to &quot;Location Shuffle&quot; click here. Do NOT click here if you chose &quot;Vanilla Locations&quot; instead, as that merely only changes the colors of Kasplats, not their locations."
                storeKey="shuffleKasplats"
                prefix="settings"
                updateItem={setSetting}
              />
            <h4>Shop Shuffler</h4>
            <p></p>
            <p></p>
            <p>Are Cranky and Snide switched in Isles?</p>
            <CheckIcon storeKey="islesSwitchUp" prefix="shuffledShops" updateItem={setShop} />
            <p></p>
            <p></p>
            <p className="full-grid">Jungle Japes:</p>
            <p>Cranky swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="himself (no switch)"
                storeKey="japesCrankyNoSwitch"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="japesCrankyFunky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="japesCrankySnide"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <p></p>
            <p></p>
            <p>Funky swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="japesFunkyCranky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="himself (no switch)"
                storeKey="japesFunkyNoSwitch"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="japesFunkySnide"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <p></p>
            <p></p>
            <p>Snide swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="japesSnideCranky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="japesSnideFunky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="himself (no switch)"
                storeKey="japesSnideNoSwitch"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <p></p>
            <p></p>
            <p className="full-grid">Angry Aztec:</p>
            <p>Cranky swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="himself (no switch)"
                storeKey="aztecCrankyNoSwitch"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="aztecCrankyFunky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="Candy"
                storeKey="aztecCrankyCandy"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="aztecCrankySnide"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <p></p>
            <p>Funky swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="aztecFunkyCranky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="himself (no switch)"
                storeKey="aztecFunkyNoSwitch"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="Candy"
                storeKey="aztecFunkyCandy"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="aztecFunkySnide"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <p></p>
            <p>Candy swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="aztecCandyCranky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="aztecCandyFunky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="herself (no switch)"
                storeKey="aztecCandyNoSwitch"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="aztecCandySnide"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <p></p>
            <p>Snide swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="aztecSnideCranky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="aztecSnideFunky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="Candy"
                storeKey="aztecSnideCandy"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="himself (no switch)"
                storeKey="aztecSnideNoSwitch"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <p></p>
            <p className="full-grid">Frantic Factory:</p>
            <p>Cranky swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="himself (no switch)"
                storeKey="factoryCrankyNoSwitch"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="factoryCrankyFunky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="Candy"
                storeKey="factoryCrankyCandy"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="factoryCrankySnide"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <p></p>
            <p>Funky swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="factoryFunkyCranky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="himself (no switch)"
                storeKey="factoryFunkyNoSwitch"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="Candy"
                storeKey="factoryFunkyCandy"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="factoryFunkySnide"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <p></p>
            <p>Candy swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="factoryCandyCranky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="factoryCandyFunky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="herself (no switch)"
                storeKey="factoryCandyNoSwitch"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="factoryCandySnide"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <p></p>
            <p>Snide swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="factorySnideCranky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="factorySnideFunky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="Candy"
                storeKey="factorySnideCandy"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="himself (no switch)"
                storeKey="factorySnideNoSwitch"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <p></p>
            <p className="full-grid">Gloomy Galleon:</p>
            <p>Cranky swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="himself (no switch)"
                storeKey="galleonCrankyNoSwitch"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="galleonCrankyFunky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="Candy"
                storeKey="galleonCrankyCandy"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="galleonCrankySnide"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <p></p>
            <p>Funky swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="galleonFunkyCranky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="himself (no switch)"
                storeKey="galleonFunkyNoSwitch"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="Candy"
                storeKey="galleonFunkyCandy"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="galleonFunkySnide"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <p></p>
            <p>Candy swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="galleonCandyCranky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="galleonCandyFunky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="herself (no switch)"
                storeKey="galleonCandyNoSwitch"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="galleonCandySnide"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <p></p>
            <p>Snide swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="galleonSnideCranky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="galleonSnideFunky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="Candy"
                storeKey="galleonSnideCandy"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="himself (no switch)"
                storeKey="galleonSnideNoSwitch"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <p></p>
            <p className="full-grid">Fungi Forest:</p>
            <p>Cranky swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="himself (no switch)"
                storeKey="forestCrankyNoSwitch"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="forestCrankyFunky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="forestCrankySnide"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <p></p>
            <p></p>
            <p>Funky swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="forestFunkyCranky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="himself (no switch)"
                storeKey="forestFunkyNoSwitch"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="forestFunkySnide"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <p></p>
            <p></p>
            <p>Snide swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="forestSnideCranky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="forestSnideFunky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="himself (no switch)"
                storeKey="forestSnideNoSwitch"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <p></p>
            <p></p>
            <p className="full-grid">Crystal Caves:</p>
            <p>Cranky swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="himself (no switch)"
                storeKey="cavesCrankyNoSwitch"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="cavesCrankyFunky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="Candy"
                storeKey="cavesCrankyCandy"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="cavesCrankySnide"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <p></p>
            <p>Funky swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="cavesFunkyCranky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="himself (no switch)"
                storeKey="cavesFunkyNoSwitch"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="Candy"
                storeKey="cavesFunkyCandy"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="cavesFunkySnide"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <p></p>
            <p>Candy swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="cavesCandyCranky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="cavesCandyFunky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="herself (no switch)"
                storeKey="cavesCandyNoSwitch"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="cavesCandySnide"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <p></p>
            <p>Snide swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="cavesSnideCranky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="cavesSnideFunky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="Candy"
                storeKey="cavesSnideCandy"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="himself (no switch)"
                storeKey="cavesSnideNoSwitch"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <p></p>
            <p className="full-grid">Creepy Castle:</p>
            <p>Cranky swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="himself (no switch)"
                storeKey="castleCrankyNoSwitch"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="castleCrankyFunky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="Candy"
                storeKey="castleCrankyCandy"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="castleCrankySnide"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <p></p>
            <p>Funky swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="castleFunkyCranky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="himself (no switch)"
                storeKey="castleFunkyNoSwitch"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="Candy"
                storeKey="castleFunkyCandy"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="castleFunkySnide"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <p></p>
            <p>Candy swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="castleCandyCranky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="castleCandyFunky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="herself (no switch)"
                storeKey="castleCandyNoSwitch"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="Snide"
                storeKey="castleCandySnide"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <p></p>
            <p>Snide swaps with:</p>
            <SimpleRadioIcon
                imgUrl={crankyIcon}
                title="Cranky"
                storeKey="castleSnideCranky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={funkyIcon}
                title="Funky"
                storeKey="castleSnideFunky"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={candyIcon}
                title="Candy"
                storeKey="castleSnideCandy"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <SimpleRadioIcon
                imgUrl={snideIcon}
                title="himself (no switch)"
                storeKey="castleSnideNoSwitch"
                prefix="shuffledShops"
                updateItem={setShop}
            />
            <p></p>
            </>
            <h3>Fast Barrier Settings</h3>
            <>
              <p>Japes Tunnel Gates?</p>
              <SimpleIcon
                imgUrl={coconutIcon}
                title="Turn this on if the three gates that open after rescuing Diddy are pre-opened. Else, you'll need to do the &quot;freeing Diddy Kong&quot; GB to access Cranky/one shop and the Hive area, with all the nonsense that entails."
                storeKey="japesCoconutGates"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Japes Hive Gate?</p>
              <SimpleIcon
                imgUrl={featherIcon}
                title="Turn this on if the Hive Area is open. Else, you'll need Tiny and Feathers (by default, subject to Switchsanity) or pre-activated Bananaports to go there."
                storeKey="japesHiveGate"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Tiny Temple Ice?</p>
              <SimpleIcon
                imgUrl={guitarIcon}
                title="Turn this on if the ice on the pool in Aztec's Tiny Temple is already melted to start the seed; else, you will additionally need Diddy and Guitar to do certain checks there."
                storeKey="aztecIce"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Aztec Back Access?</p>
              <SimpleIcon
                imgUrl={guitarIcon}
                title="Turn this on if the big door to the second half of Aztec is pre-opened. Else, you'll need Diddy and Guitar (by default) as well as Vines and Climbing, or pre-activated Bananaports."
                storeKey="aztecBack"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Aztec 5 Door Temple?</p>
              <SimpleIcon
                imgUrl={rocketIcon}
                title="Turn this on if the 5-Door/Get Out Temple's switches are pre-spawned; else, you will need Diddy, Peanuts, Jetbarrel, and the appropriate Slam to do all checks in there."
                storeKey="aztec5DoorTemple"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Aztec Llama Temple?</p>
              <SimpleIcon
                imgUrl={coconutIcon}
                title="Turn this on if the three switches to get into the Llama Temple are pre-spawned; else, you will need DK and Blast to do all checks inside."
                storeKey="aztecLlamaTemple"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Factory Production Power?</p>
              <SimpleIcon
                imgUrl={grabIcon}
                title="Turn on if Prod Room is pre-activated. Else, you will need DK, Coconuts, and Grab to do the Prod Room checks."
                storeKey="factoryProduction"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Factory Testing Area?</p>
              <SimpleIcon
                imgUrl={slamIcon}
                title="Turn on if the upper half of Factory is pre-opened. Else, you will need a Simian Slam to explore that side."
                storeKey="factoryTesting"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Galleon Lighthouse Area?</p>
              <SimpleIcon
                imgUrl={coconutIcon}
                title="Turn this on if the lighthouse area is already open to start. Else, you will need a gun, Coconuts by default."
                storeKey="galleonLighthouse"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Galleon Lighthouse Power?</p>
              <SimpleIcon
                imgUrl={grabIcon}
                title="Turn this on if Gloomy Galleon's lighthouse is already on and the ship is already sailing when you start the level. Else, you will need DK, Climbing, and Grab to do any checks on the ship."
                storeKey="galleonSeasick"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Galleon Outskirts Area?</p>
              <SimpleIcon
                imgUrl={peanutIcon}
                title="Turn this on if you can access the shipwreck area. Else, you will need a gun to do so, Peanuts by default."
                storeKey="galleonOutskirts"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Treasure Room?</p>
              <SimpleIcon
                imgUrl={lankyIcon}
                title="Turn this on if the Treasure Room is already open to start your seed. Else, you will need Lanky to turn into Enguarde in the shipwreck area and jump through a DK star to open it."
                storeKey="galleonTreasureRoom"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Forest Beanstalk Area?</p>
              <SimpleIcon
                imgUrl={beanIcon}
                title="Turn this on if you can reach Area 2 of the Forest at the start of your seed. Else, you'll need two guns to get through the green tunnel (Feathers and Pineapples by default)."
                storeKey="forestBeanstalk"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Forest Owl Tree?</p>
              <SimpleIcon
                imgUrl={grapeIcon}
                title="Turn this on if you can reach Area 4 of the Forest by default. Else, you'll need a gun to get through a yellow tunnel from Area 3 (Grapes by default)."
                storeKey="forestOwlTree"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Caves Igloo Insides?</p>
              <SimpleIcon
                imgUrl={rocketIcon}
                title="Turn this on if the music pads are pre-spawned in front of the 5-Door Igloo in Caves. Else, you'll need Diddy and Jetbarrel to do 5DI checks."
                storeKey="cavesIgloo"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Ice walls in Caves pre-punched?</p>
              <SimpleIcon
                imgUrl={chunkyIcon}
                title="Turn this on if the ice walls in Caves have already been punched down. Else, you'll need Chunky and Primate Punch to do a few checks."
                storeKey="cavesWalls"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Castle Crypt rooms pre-opened?</p>
              <SimpleIcon
                imgUrl={hardShootIcon}
                title="Turn this on if the gun-activated gates in Creepy Castle's crypt area have been removed in your seed. Else, you'll need all five guns to do crypt/mausoleum checks."
                storeKey="castleCrypt"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Roman numeral gates opened in Helm?</p>
              <SimpleIcon
                imgUrl={rocketIcon}
                title="Turn this on if your Helm start is set to Vanilla and the Roman numeral gates are already open. Else, you'll need Gorilla Grab and Jetbarrel to get through Helm. (Not necessary on any other Helm start type.)"
                storeKey="helmDKStarGates"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Primate Punch gates opened in Helm?</p>
              <SimpleIcon
                imgUrl={chunkyIcon}
                title="Turn this on if your Helm start is set to Vanilla and the Primate Punch gates are already down. Else, you'll need Primate Punch to get through Helm. (Not necessary on any other Helm start type.)"
                storeKey="helmPunchGates"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
            </>
            <h3>Fast Check Settings</h3>
            <>
              <p>Fast Factory Arcade?</p>
              <SimpleIcon
                imgUrl={dkPadIcon}
                title="If this is on, then you only have to play DK Arcade once. What would normally be the first reward instead replaces the star at the end of DK's Barrel Blast course in Factory."
                storeKey="factoryArcade"
                prefix="fastChecks"
                updateItem={setFastCheck}
              />
              <p>Number of pearls the Mermaid requires:</p>
              <CountSelector
                storeKey="galleonMermaid"
                title="How many Pearls must you give the Mermaid to get her reward?"
                imgUrl={pearlIcon}
                prefix="fastChecks"
                setCount={setFastCheck}
                maxValue={5}
              />
            </>
            <h3>Glitch Logic Settings</h3>
            <>
            <p className="full-grid"><strong>NOW UNDER CONSTRUCTION. AGAIN.</strong></p>
            </>
            <h3>UI Settings</h3>
            <>
              <p>Group by Regions?</p>
              <CheckIcon storeKey="groupByRegion" prefix="ui" updateItem={setUi} />
              <p>Hide unavailable checks?</p>
              <CheckIcon storeKey="hideRed" prefix="ui" updateItem={setUi} />
              <p>Hide logic-breaking checks?</p>
              <CheckIcon storeKey="hideYellow" prefix="ui" updateItem={setUi} />
            </>
          </section>
        </section>
      </Modal>
    </span>
  )
}

export default GeneratorSettings
