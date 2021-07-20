import React, {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';

const diceImage = [DiceOne, DiceTwo, DiceThree, DiceFour, DiceFive, DiceSix];

const App = () => {
  const [uri, setUri] = useState({first: DiceFive, second: DiceTwo});

  const playButtonTapped = () => {
    let randomNumber1 = Math.floor(Math.random() * 6);
    let randomNumber2 = Math.floor(Math.random() * 6);

    setUri({
      ...uri,
      first: diceImage[randomNumber1],
      second: diceImage[randomNumber2],
    });
  };

  const rollDice1 = () => {
    let randomNumber = Math.floor(Math.random() * 6);

    setUri({...uri, first: diceImage[randomNumber]});
  };
  const rollDice2 = () => {
    let randomNumber = Math.floor(Math.random() * 6);
    setUri({...uri, second: diceImage[randomNumber]});
  };

  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={rollDice1}>
          <Image style={styles.image} source={uri.first} />
        </Pressable>
        <Pressable onPress={rollDice2}>
          <Image style={styles.image} source={uri.second} />
        </Pressable>
        <TouchableOpacity onPress={playButtonTapped}>
          <Text style={styles.gamePlayButton}>Play Game</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  gamePlayButton: {
    fontSize: 20,
    marginTop: 30,
    color: '#f2a365',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: '#30475E',
    borderRadius: 5,
    borderWidth: 3,
    fontWeight: 'bold',
  },
});
