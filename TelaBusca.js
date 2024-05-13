import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput, Alert, TouchableOpacity, Image,FlatList } from 'react-native';
import css from './estilo/estilo';
import axios from 'axios';

function TelaBusca({ navigation }) {
  const [loginx, setLoginx] = useState('');
 
  const [users, setUsers] = useState([]);


  const [id, setId] = useState('');
  const [nome, setNome] = useState('');



  useEffect(() => {
    setLoginx('');
   
  }, []);


  let token = 'Q!W@ee344%%R';

  const autenticar = () => {
    //axios.get(`https://api.semlimite.app.br/select_login/?token=${token}&login=${loginx}&senha=${senhax}`)
    axios.get(`http://172.16.42.89/amigaoAPI/select_busca/?token=${token}&login=${loginx}`)
      .then(response => {
        setUsers(response.data);
        console.log(users);
        if (users && users.length > 0) {
          const primeiroItem = users[0]; // Vamos extrair dados apenas do primeiro item por enquanto
          const { id, nome } = primeiroItem;
          setNome(nome);
          setId(id);
          console.log('ok' + id + '|' + nome);
          // navigation.navigate('TelaInicial', { id, nome });
        }
        // if (users == 1) {
        //   alert('Tudo Errado Fio =)');
        // }
      })
      .catch(error => {
        console.error(error);
      });
  }

  logar = () => {
    if (loginx.trim() !== '') {
      autenticar();
    } else {
      alert('Preencher Campos!!!');
    }

  }

  limpar = () => {
    setLoginx('');
   
  }



  // carrega dados da api 
  useEffect(() => {
    fetch('http://172.16.42.89/amigaoAPI/select/')
   // fetch('https://api.semlimite.app.br/select/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => alert('Sem Registro'));
  }, []);


  const aviso = (a, b, c, d, e) => {
    navigation.navigate('TelaUpdate', { id: a, nome: b });
  }

  //console.log(login);
  // console.log(senha);
  return (
    <View style={css.container}>
      <Text> </Text>
      <Text> </Text>
      <TouchableOpacity onPress={() => navigation.navigate('TelaInicial')}>
      <Image source={require('./assets/logo2.png')} style={css.logox}></Image>
      </TouchableOpacity>
      <Text>Busca</Text>
      <View>
              <TextInput placeholder="" style={css.campo} onChangeText={(text) => setLoginx(text)} value={loginx}></TextInput>
        <View style={css.viewbotoes}>
          <View><Button title="Limpar" color='#154360' onPress={limpar} /></View>
          <View><Button title="Buscar" color='#154360' onPress={logar} /></View>
        </View>
      </View>
      <Text> </Text>



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
export default TelaBusca;

