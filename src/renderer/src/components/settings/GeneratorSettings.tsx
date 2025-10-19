import { useState } from 'react'
import Modal from 'react-modal'
import { useShallow } from 'zustand/react/shallow'

import useDonkStore from '@renderer/store'
import BananaportSelector from './BananaportSelector'
import CheckIcon from './CheckIcon'
import CountSelector from './CountSelector'
import HelmSelector from './HelmSelector'
import SimpleIcon from './SimpleIcon'
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
//import dkPadIcon from '../../assets/images/dkpad.png'
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

const customStyles: Modal.Styles = {
  content: {
    backgroundColor: '#002040',
    color: '#ffffff'
  }
}

const GeneratorSettings: React.FC = () => {
  const [isOpen, setOpen] = useState(false)
  const [setSetting, setBarrier, setFastCheck, setUi] = useDonkStore(
    useShallow((state) => [state.setSetting, state.setBarrier, state.setFastCheck, state.setUi])
  )

  const openModal = (): void => setOpen(true)
  const closeModal = (): void => setOpen(false)

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
              <p>
                Fairies needed for the Fairy's reward?
              </p>
              <CountSelector
                imgUrl={fairyIcon}
                title="Number of Fairies you need for the Rareware Banana."
                storeKey="fairyCount"
                prefix="settings"
                setCount={setSetting}
                maxValue={20}
              />
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
            </>
            <h3>Fast Barrier Settings</h3>
            <>
              <p>Japes Tunnel Gates?</p>
              <SimpleIcon
                imgUrl={coconutIcon}
                title="Pre-opens the gates that open after rescuing Diddy Kong in the original game."
                storeKey="japesCoconutGates"
                prefix="removeBarriers"
                updateItem={setBarrier}
              />
              <p>Japes Hive Gate?</p>
              <SimpleIcon
                imgUrl={featherIcon}
                title="Pre-opens the gate to the hive area."
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
                title="Turn this on if the big door to the second half of Aztec is pre-opened."
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
            </>
            <h3>Fast Check Settings</h3>
            <>
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
            <h3>UI Settings</h3>
            <>
              <p>Group by Regions?</p>
              <CheckIcon storeKey="groupByRegion" prefix="ui" updateItem={setUi} />
            </>
          </section>
        </section>
      </Modal>
    </span>
  )
}

export default GeneratorSettings

/*              <p>Fast Factory Arcade?</p>
              <SimpleIcon
                imgUrl={dkPadIcon}
                title="If this is on, then you only have to play DK Arcade once. What would normally be the first reward instead replaces the star at the end of DK's Barrel Blast course in Factory."
                storeKey="factoryArcade"
                prefix="fastChecks"
                updateItem={setFastCheck}
              />*/
