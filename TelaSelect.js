import React, { useState, useEffect } from 'react';
import { Text, FlatList, TouchableOpacity, View, Button, TextInput, Alert, Image } from 'react-native';
import css from './estilo/estilo';


function TelaSelect({ navigation }) {
  const [users, setUsers] = useState([]);

  // carrega dados da api 
  useEffect(() => {
    fetch('http://172.16.42.89/amigaoAPI/select/')
    //fetch('https://api.semlimite.app.br/select/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => alert('Sem Registro'));
  }, []);


  /// vai direcionar para a tela de edição 
  const aviso = (a, b, c, d, e) => {
    navigation.navigate('TelaUpdate', { id: a, nome: b });
  }
  return (
    <View style={css.container}>
      <Text> </Text>
      <Text> </Text>
      <TouchableOpacity onPress={() => navigation.navigate('TelaInicial')}>
      <Image source={require('./assets/logo2.png')} style={css.logox}></Image>
      </TouchableOpacity>
      
      <Text></Text>
      <Text>Quantidade de Registros: {users.length}</Text>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => aviso(item.id, item.nome, item.valor, item.quantidade, item.tempo)}>
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
                  <Text style={css.letra3}>{item.nome}</Text>
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
export default TelaSelect;
