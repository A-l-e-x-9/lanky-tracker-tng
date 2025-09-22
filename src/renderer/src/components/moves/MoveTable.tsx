import useDonkStore from '@renderer/store'
import { useShallow } from 'zustand/react/shallow'

import CountSelector from '../settings/CountSelector'
import SimpleIcon from '../settings/SimpleIcon'
import DoubleIcon from './DoubleIcon'
import { SlamSelector } from './SlamSelector'

import goldBananaIcon from '../../assets/images/GB.png'
import bananaMedalIcon from '../../assets/images/bananamedal.png'
import barrelIcon from '../../assets/images/barrel2.png'
import beanIcon from '../../assets/images/bean.png'
import chunkyIcon from '../../assets/images/chunky.png'
import chunkyGunIcon from '../../assets/images/chunky_gun.png'
import chunkyInstIcon from '../../assets/images/chunky_inst.png'
import chunkyMoveIcon from '../../assets/images/chunky_move.png'
import chunkyBarrelIcon from '../../assets/images/chunkybarrel.png'
import chunkyPadIcon from '../../assets/images/chunkypad.png'
import climbingIcon from '../../assets/images/climbing.png'
import crownIcon from '../../assets/images/crown.png'
import diddyIcon from '../../assets/images/diddy.png'
import diddyGunIcon from '../../assets/images/diddy_gun.png'
import diddyInstIcon from '../../assets/images/diddy_inst.png'
import diddyMoveIcon from '../../assets/images/diddy_move.png'
import diddyBarrelIcon from '../../assets/images/diddybarrel.png'
import diddyPadIcon from '../../assets/images/diddypad.png'
import diveIcon from '../../assets/images/diving.png'
import dkIcon from '../../assets/images/dk.png'
import dkGunIcon from '../../assets/images/dk_gun.png'
import dkInstIcon from '../../assets/images/dk_inst.png'
import dkMoveIcon from '../../assets/images/dk_move.png'
import dkBarrelIcon from '../../assets/images/dkbarrel.png'
import dkPadIcon from '../../assets/images/dkpad.png'
import fairyIcon from '../../assets/images/fairy.png'
import filmWaveBoth from '../../assets/images/filmwave.png'
import filmWaveLeft from '../../assets/images/filmwave1.png'
import filmWaveRight from '../../assets/images/filmwave2.png'
import homeScopeBoth from '../../assets/images/homingscope.png'
import homeScopeLeft from '../../assets/images/homingscope1.png'
import homeScopeRight from '../../assets/images/homingscope2.png'
import lankyIcon from '../../assets/images/lanky.png'
import lankyGunIcon from '../../assets/images/lanky_gun.png'
import lankyInstIcon from '../../assets/images/lanky_inst.png'
import lankyMoveIcon from '../../assets/images/lanky_move.png'
import lankyBarrelIcon from '../../assets/images/lankybarrel.png'
import lankyPadIcon from '../../assets/images/lankypad.png'
import companyCoinBoth from '../../assets/images/n64rw_coin.png'
import companyCoinRight from '../../assets/images/n64rw_coin_n64bw.png'
import companyCoinLeft from '../../assets/images/n64rw_coin_rwbw.png'
import orangeIcon from '../../assets/images/orange.png'
import pearlIcon from '../../assets/images/pearl.png'
import rainbowCoinICon from '../../assets/images/rainbowcoin.png'
import tinyIcon from '../../assets/images/tiny.png'
import tinyGunIcon from '../../assets/images/tiny_gun.png'
import tinyInstIcon from '../../assets/images/tiny_inst.png'
import tinyMoveIcon from '../../assets/images/tiny_move.png'
import tinyBarrelIcon from '../../assets/images/tinybarrel.png'
import tinyPadIcon from '../../assets/images/tinypad.png'
import vineIcon from '../../assets/images/vine.png'
import vineClimbBoth from '../../assets/images/vine-climb-both.png'
import dkBpIcon from '../../assets/images/dk_bp.png'
import diddyBpIcon from '../../assets/images/diddy_bp.png'
import lankyBpIcon from '../../assets/images/lanky_bp.png'
import tinyBpIcon from '../../assets/images/tiny_bp.png'
import chunkyBpIcon from '../../assets/images/chunky_bp.png'
import crankyIcon from '../../assets/images/cranky.png'
import funkyIcon from '../../assets/images/settings/funky.png'
import candyIcon from '../../assets/images/candy.png'
import snideIcon from '../../assets/images/snide.png'

const MoveTable = (): JSX.Element => {
  const [setMove, setConsumable] = useDonkStore(
    useShallow((state) => [state.setMove, state.setConsumable])
  )
  return (
  <section className="move-section">
    <h3>Moves, Kongs, and Major Collectibles</h3>
    <section className="move-table">
      <SimpleIcon storeKey="dk" title="DK" imgUrl={dkIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="coconut" title="Coconut Gun" imgUrl={dkGunIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="bongos" title="Bongoes" imgUrl={dkInstIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="grab" title="Gorilla Grab" imgUrl={dkMoveIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="strong" title="Strong Kong" imgUrl={dkBarrelIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="blast" title="Barrel Blast" imgUrl={dkPadIcon} prefix="moves" updateItem={setMove} />
      <CountSelector
        storeKey="dkBp"
        imgUrl={dkBpIcon}
        title="DK Blueprints"
        prefix="consumables"
        setCount={setConsumable}
        maxValue={8}
      />
      <SlamSelector />
      <DoubleIcon
        storeLeft="camera"
        storeRight="shockwave"
        title="Fairy Cam and Shockwave"
        imgBoth={filmWaveBoth}
        imgLeft={filmWaveLeft}
        imgRight={filmWaveRight}
        prefix="moves"
        setItem={setMove}
      />
      <CountSelector
        storeKey="crowns"
        title="Battle Arena Crowns"
        imgUrl={crownIcon}
        prefix="consumables"
        setCount={setConsumable}
        maxValue={10}
      />
      <SimpleIcon storeKey="diddy" title="Diddy Kong" imgUrl={diddyIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="peanut" title="Peanuts" imgUrl={diddyGunIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="guitar" title="Guitar" imgUrl={diddyInstIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="charge" title="Chimpy Charge" imgUrl={diddyMoveIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="rocket" title="Jetbarrel" imgUrl={diddyBarrelIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="spring" title="Simian Spring" imgUrl={diddyPadIcon} prefix="moves" updateItem={setMove} />
      <CountSelector
        storeKey="diddyBp"
        title="Diddy Blueprints"
        imgUrl={diddyBpIcon}
        prefix="consumables"
        setCount={setConsumable}
        maxValue={8}
      />
      <SimpleIcon storeKey="dive" title="Diving" imgUrl={diveIcon} prefix="moves" updateItem={setMove} />
      <DoubleIcon
        storeLeft="homing"
        storeRight="sniper"
        title="Homing Ammo and Sniper Scope"
        imgBoth={homeScopeBoth}
        imgLeft={homeScopeLeft}
        imgRight={homeScopeRight}
        prefix="moves"
        setItem={setMove}
      />
      <CountSelector
        storeKey="bananaMedals"
        title="Banana Medals"
        imgUrl={bananaMedalIcon}
        prefix="consumables"
        setCount={setConsumable}
        maxValue={45}
      />
      <SimpleIcon storeKey="lanky" title="Lanky Kong" imgUrl={lankyIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="grape" title="Grapes" imgUrl={lankyGunIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="trombone" title="Trombone" imgUrl={lankyInstIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="stand" title="Orangstand" imgUrl={lankyMoveIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="sprint" title="Orangstand Sprint" imgUrl={lankyBarrelIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="balloon" title="Baboon Balloon" imgUrl={lankyPadIcon} prefix="moves" updateItem={setMove} />
      <CountSelector
        storeKey="lankyBp"
        title="Lanky Blueprints"
        imgUrl={lankyBpIcon}
        prefix="consumables"
        setCount={setConsumable}
        maxValue={8}
      />
      <SimpleIcon storeKey="orange" title="Oranges" imgUrl={orangeIcon} prefix="moves" updateItem={setMove} />
      <DoubleIcon
        title="Nintendo and Rareware Coins"
        storeLeft="nintendoCoin"
        storeRight="rareCoin"
        imgBoth={companyCoinBoth}
        imgLeft={companyCoinLeft}
        imgRight={companyCoinRight}
        prefix="consumables"
        setItem={setConsumable}
      />
      <CountSelector
        title="Rainbow Coins"
        storeKey="rainbowCoins"
        imgUrl={rainbowCoinICon}
        prefix="consumables"
        setCount={setConsumable}
        maxValue={16}
      />
      <SimpleIcon storeKey="tiny" title="Tiny Kong" imgUrl={tinyIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="feather" title="Feathers" imgUrl={tinyGunIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="sax" title="Saxophone" imgUrl={tinyInstIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="twirl" title="Ponytail Twirl" imgUrl={tinyMoveIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="mini" title="Mini Monkey" imgUrl={tinyBarrelIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="port" title="Monkeyport" imgUrl={tinyPadIcon} prefix="moves" updateItem={setMove} />
      <CountSelector
        storeKey="tinyBp"
        title="Tiny Blueprint"
        imgUrl={tinyBpIcon}
        prefix="consumables"
        setCount={setConsumable}
        maxValue={8}
      />
      <DoubleIcon
        storeLeft="vine"
        storeRight="climbing"
        title="Vines and Climbing"
        imgBoth={vineClimbBoth}
        imgLeft={vineIcon}
        imgRight={climbingIcon}
        prefix="moves"
        setItem={setMove}
      />
      <SimpleIcon
        storeKey="bean"
        title="THE BEAN!!!"
        imgUrl={beanIcon}
        prefix="consumables"
        updateItem={setConsumable}
      />
      <CountSelector
        storeKey="fairies"
        title="Banana Fairies"
        imgUrl={fairyIcon}
        prefix="consumables"
        setCount={setConsumable}
        maxValue={20}
      />
      <SimpleIcon storeKey="chunky" title="Chunky Kong" imgUrl={chunkyIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="pineapple" title="Pineapples" imgUrl={chunkyGunIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="triangle" title="Triangle" imgUrl={chunkyInstIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="punch" title="Primate Punch" imgUrl={chunkyMoveIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="hunky" title="Hunky Chunky" imgUrl={chunkyBarrelIcon} prefix="moves" updateItem={setMove} />
      <SimpleIcon storeKey="gone" title="Gorilla Gone" imgUrl={chunkyPadIcon} prefix="moves" updateItem={setMove} />
      <CountSelector
        storeKey="chunkyBp"
        title="Chunky Blueprints"
        imgUrl={chunkyBpIcon}
        prefix="consumables"
        setCount={setConsumable}
        maxValue={8}
      />
      <SimpleIcon storeKey="barrel" title="Barrel Throwing" imgUrl={barrelIcon} prefix="moves" updateItem={setMove} />
      <CountSelector
        storeKey="pearls"
        title="Pearls"
        imgUrl={pearlIcon}
        prefix="consumables"
        setCount={setConsumable}
        maxValue={5}
      />
      <CountSelector
        storeKey="goldBananas"
        title="Golden Bananas"
        imgUrl={goldBananaIcon}
        prefix="consumables"
        setCount={setConsumable}
        maxValue={201}
      />
      &nbsp;
      <SimpleIcon storeKey="cranky" title="Cranky Kong" imgUrl={crankyIcon} prefix="moves" updateItem={setMove} />
      &nbsp;
      <SimpleIcon storeKey="funky" title="New Funky Mode!" imgUrl={funkyIcon} prefix="moves" updateItem={setMove} />
      &nbsp;
      <SimpleIcon storeKey="candy" title="Candy Kong" imgUrl={candyIcon} prefix="moves" updateItem={setMove} />
       &nbsp;
      <SimpleIcon storeKey="snide" title="Snide" imgUrl={snideIcon} prefix="moves" updateItem={setMove} />
    </section>
  </section>
  )
}

export default MoveTable
