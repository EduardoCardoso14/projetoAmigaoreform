import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput, Alert, TouchableOpacity, Image } from 'react-native';
import css from './estilo/estilo';
import axios from 'axios';

function TelaInsert({ navigation }) {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [senha2, setSenha2] = useState('');
  const [users2, setUsers2] = useState([]);


  cadastrar = () => {
    let token = 'Q!W@ee344%%R';
    if (senha2.trim() == senha.trim()) {
      if (nome.trim() !== '' && senha.trim() !== '') {
        axios.get(`http://172.16.42.89/amigaoAPI/cadastro/conferir.php/?token=${token}&nome=${nome}&senha=${senha}`)
          .then(response => {
            setUsers2(response.data);
            console.log(users2)
            if (users2 == [] || users2 == 1) {
              alert(nome + '\n cadastrado com sucesso!');
              axios.post('http://172.16.42.89/amigaoAPI/cadastro/', { token, nome, senha })
                //axios.post('https://api.semlimite.app.br/insert/', { token, nome, valor, imagem, quantidade })
                .then(response => {
                  const data = response.data;
                  aviso = 0;
                })
                .catch(error => {
                  console.log('Erro ao enviar dados:', error);
                });
              navigation.navigate('TelaRetorno');
            } else {
              alert('Usuário com esses dados já cadastrado! Altere o nome e senha.');

            }
          })
          .catch(error => {
            console.error(error);
          });
        /*alert(nome + '\n cadastrado com sucesso!');
        axios.post('http://172.16.42.89/amigaoAPI/cadastro/', { token, nome, senha })
          //axios.post('https://api.semlimite.app.br/insert/', { token, nome, valor, imagem, quantidade })
          .then(response => {
            const data = response.data;
            aviso = 0;
          })
          .catch(error => {
            console.log('Erro ao enviar dados:', error);
          });
        navigation.navigate('TelaRetorno');*/
      } else {
        alert('Preencher Campos!!!');
      }
    } else {
      alert('Senha diferentes');
    }
  }

  limpar = () => {
    setNome('');
    setSenha('');
    setSenha2('');
  }
  return (
    <View style={css.container}>
      <Text> </Text>
      <Text> </Text>
      <TouchableOpacity onPress={() => navigation.navigate('TelaInicial')}>
        <Image source={require('./assets/logo2.png')} style={css.logox}></Image>
      </TouchableOpacity>

      <Text>Novo Cadastro</Text>
      <View>
        <Text>Login</Text>
        <TextInput placeholder="" style={css.campo} onChangeText={(text) => setNome(text)} value={nome}></TextInput>
        <Text>Senha</Text>
        <TextInput placeholder="" style={css.campo} onChangeText={(text) => setSenha(text)} value={senha}></TextInput>
        <Text>Confirmar Senha</Text>
        <TextInput placeholder="" style={css.campo} onChangeText={(text) => setSenha2(text)} value={senha2}></TextInput>
        <View style={css.viewbotoes}>
          <View><Button title="Limpar" color='#154360' onPress={limpar} /></View>
          <View><Button title="Adicionar Produto" color='#154360' onPress={cadastrar} /></View>
        </View>
      </View>
      <Text> </Text>
    </View>
  );
}
export default TelaInsert;

