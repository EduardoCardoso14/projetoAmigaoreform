import React, { useState, useEffect } from 'react';
import { Text, FlatList, TouchableOpacity, View, Button, TextInput, Alert, Image } from 'react-native';
import css from './estilo/estilo';
import axios from 'axios';


function TelaDelete({ navigation }) {
  const [users, setUsers] = useState([]);
  let token = 'Q!W@ee344%%R';
  useEffect(() => {
    fetch('http://172.16.42.89/amigaoAPI/select/')
    //fetch('https://api.semlimite.app.br/select/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => alert('Sem Registro'));
  }, []);


  const aviso = (a) => {
    if (a !== '') {

     // axios.post('https://api.semlimite.app.br/delete/', { token, a })
         axios.post('http://172.16.42.89/amigaoAPI/delete/',{token,a})
        .then(response => {
          const data = response.data;
        })
        .catch(error => {
          console.log('Erro ao enviar dados:', error);
        });
      navigation.navigate('TelaRetorno2');
    } else {
      alert('Nok');
    }
  }


  const apagar = (a, b) => {
    Alert.alert(
      'Cuidado!!!',
      'confirma apagar o produto? \n Id:' + a + '\n' + b + '',
      [
        {
          text: 'Sim',
          onPress: () => aviso(a)
        },
        {
          text: 'Não',
          onPress: () => console.log('Cancelado'),
          style: 'cancel'
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={css.container}>
      <Text> </Text>
      <Text> </Text>
      <TouchableOpacity onPress={() => navigation.navigate('TelaInicial')}>
        <Image source={require('./assets/logo2.png')} style={css.logox}></Image>
      </TouchableOpacity>
      <Text></Text>
      <Text>Apagar Cadastro</Text>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => apagar(item.id, item.nome)}>
            <View >
              <View style={css.viewnumero2}>
                <View style={css.principal2}>
                <Text style={css.letra2}>{item.id} - {item.nome.substring(0, 32)}</Text>
                </View>
              </View>

              <View style={css.principal}>
                <View style={css.viewnumero3}>
                  <View>
                    {
                      item.imagem == "" ? (
                        <Image source={require('./assets/sem.png')} style={css.icone} />
                      ) : (
                        <Image source={{ uri: `${item.imagem}` }} style={css.icone} />
                      )
                    }
                  </View>
                </View>
                <View style={css.viewletra}>
                  <Text style={css.letra3}>Produto: {item.nome}</Text>
                  <Text style={css.letra3}>Quantidade: {item.quantidade}</Text>
                  <Text style={css.letra3}>Valor: R$ {item.valor}</Text>
                  <Text style={css.letra3}>{item.tempo}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )} />
      <Text> </Text>
    </View>
  );
}
export default TelaDelete;
