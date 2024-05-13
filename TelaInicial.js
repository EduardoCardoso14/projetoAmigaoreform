import { React, useState, useEffect } from 'react';
import { Text, View, Button, Image } from 'react-native';
import css from './estilo/estilo';
import { useNavigation } from '@react-navigation/native';

function TelaInicial({ navigation, route }) {
  const [id2, setId2] = useState('');
  const [nome2, setNome2] = useState('');
  useEffect(() => {
    if (route.params && Object.keys(route.params).length > 0) {
      var { id } = route.params;
      alert('bem vindo, ' + id['nome']);
      setNome2(id['nome']);
      setId2(id['id']);
      console.log(id);
    } else {
      ///var id = 21;
      // alert('nok');
      var id = '';
      setNome2('');
    }
  }, []);











  return (
    <View style={css.container}>
      <Text> </Text>
      <Image source={require('./assets/logo1.jpg')} style={css.logo}></Image>
      <Text> </Text>
      <Text>Bem Vindo =)</Text>
      <Text>{nome2}</Text>
      <Text> </Text>
      <Text> </Text>
      <View style={css.principal}>
        <View>
          <Button title='Select' color='#154360' onPress={() => navigation.navigate('TelaSelect')}></Button>
        </View>
        <View>
          <Button title='Insert' color='#154360' onPress={() => navigation.navigate('TelaInsert', {id2, nome2})}></Button>
        </View>
        <View>
          <Button title='Delete' color='#154360' onPress={() => navigation.navigate('TelaDelete')}></Button>
        </View>
        <View>
          <Button title='Sair' color='#154360' onPress={() => navigation.navigate('TelaLogin')}></Button>
        </View>
        <View>
          <Button title='Busca' color='#154360' onPress={() => navigation.navigate('TelaBusca')}></Button>
        </View>
      </View>







    </View>
  );
}
export default TelaInicial;
