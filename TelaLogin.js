import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput, Alert, TouchableOpacity, Image } from 'react-native';
import css from './estilo/estilo';
import axios from 'axios';

function TelaLogin({ navigation, route }) {
  const [loginx, setLoginx] = useState('');
  const [senhax, setSenhax] = useState('');
  const [users, setUsers] = useState([]);

  /*const {login,senha} = route.params; 
   console.log(login);*/


  const [id, setId] = useState('');
  const [nome, setNome] = useState('');



  useEffect(() => {
    setLoginx('');
    setSenhax('');
  }, []);


  let token = 'Q!W@ee344%%R';

  const autenticar = () => {
    //axios.get(`https://api.semlimite.app.br/select_login/?token=${token}&login=${loginx}&senha=${senhax}`)
    axios.get(`http://172.16.42.89/amigaoAPI/select_login/?token=${token}&login=${loginx}&senha=${senhax}`)
      .then(response => {
        setUsers(response.data);
        //console.log(users);
        if (users && users.length > 0) {
          const primeiroItem = users[0]; // Vamos extrair dados apenas do primeiro item por enquanto
          const id = primeiroItem;
          setNome(nome);
          setId(id);
          //console.log('ok' + id + '|' + nome);
          navigation.navigate('TelaInicial', { id });
        } else {
          alert('Nenhum usuário encontrado');
        }
        //if(users==1){
        //alert('Tudo Errado Fio =)');
        //}
      })
      .catch(error => {
        console.error(error);
      });
  }

  logar = () => {
    if (loginx.trim() !== '' && senhax.trim() !== '') {
      autenticar();
    } else {
      alert('Preencher Campos!!!');
    }

  }

  limpar = () => {
    setLoginx('');
    setSenhax('');
  }


  //console.log(login);
  // console.log(senha);
  return (
    <View style={css.container}>
      <Text> </Text>
      <Text> </Text>

      <Image source={require('./assets/logo2.png')} style={css.logox}></Image>


      <Text>Autenticação</Text>
      <View>
        <Text>Login</Text>
        <TextInput placeholder="" style={css.campo} onChangeText={(text) => setLoginx(text)} value={loginx}></TextInput>
        <Text>Senha</Text>
        <TextInput placeholder="" style={css.campo} onChangeText={(text) => setSenhax(text)} value={senhax}></TextInput>
        <View style={css.viewbotoes}>
          <View><Button title="Limpar" color='#154360' onPress={limpar} /></View>
          <View><Button title="Login" color='#154360' onPress={logar} /></View>
          <View>
            <Button title='Cadastro' color='#154360' onPress={() => navigation.navigate('TelaCadastro')}></Button>
          </View>
        </View>
      </View>
      <Text> </Text>
    </View>
  );
}
export default TelaLogin;