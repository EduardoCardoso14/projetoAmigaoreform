import React, { useState, useEffect } from 'react';
import { Text, FlatList, TouchableOpacity, View, Button, TextInput, Alert, Image } from 'react-native';
import css from './estilo/estilo';
import axios, { toFormData } from 'axios';


function TelaEditar2({ navigation, route }) {
  const [users, setUsers] = useState([]);
  const [users2, setUsers2] = useState([]);
  let token = 'Q!W@ee344%%R2';

  const [nome2, setNome] = useState('');
  const [valor2, setValor] = useState('');
  const [imagem2, setImagem] = useState('');
  const [quantidade2, setQuantidade] = useState('');

  if (route.params && Object.keys(route.params).length > 0) {
    var { id, nome } = route.params;
  } else {
    var id = 21;
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  // carrega os dados 
  const fetchProduct = () => {
    //axios.get(`https://api.semlimite.app.br/select_um/?token=${token}&id=${id}`)
      axios.get(`http://172.16.42.89/amigaoAPI/select_um/?token=${token}&id=${id}`)    
      .then(response => {
        setUsers2(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  cadastrar = () => {
    let token = 'Q!W@ee344%%R';
    if (nome2.trim() !== '' && valor2.trim() !== '' && quantidade2.trim() !== '') {
      //axios.post('https://api.semlimite.app.br/update/', { token, a: id, nome2, valor2, imagem2, quantidade2 })
         axios.post('http://172.16.42.89/amigaoAPI/update/', {token,a:id,nome2,valor2,quantidade2,imagem2})    
        .then(response => {
          const data = response.data;
          console.log(data);
        })
        .catch(error => {
          console.log('Erro ao enviar dados:', error);
        });
      navigation.navigate('TelaRetorno');
    } else {
      alert('Preencher Campos!!!');
    }

  }


  limpar = () => {
    setImagem('');
    setNome('');
    setValor('');
    setQuantidade('');
  }

  useEffect(() => {
    // Função para extrair e formatar os dados quando o componente for montado
    const extrairDados = () => {
      if (users2 && users2.length > 0) {
        const primeiroItem = users2[0]; // Vamos extrair dados apenas do primeiro item por enquanto
        const { nome, imagem, quantidade, valor } = primeiroItem;

        // Agora você pode fazer o que quiser com esses dados formatados
        // Por exemplo, você pode armazená-los no estado para usar na renderização
        //setDadosFormatados({nome });
        setNome(nome);
        setImagem(imagem);
        setQuantidade(quantidade);
        setValor(valor);
      }
    };
    extrairDados();

    // Retornar uma função de limpeza se necessário
    return () => {
      // Alguma limpeza se necessário
    };
  }, [users2]);


  console.log('1_ ' + nome2);
  console.log('2_ ' + valor2);
  console.log('3_ ' + imagem2);
  console.log('4_ ' + quantidade2);


  return (
    <View style={css.container}>
      <Text> </Text>
      <Text> </Text>
      <TouchableOpacity onPress={() => navigation.navigate('TelaInicial')}>
        <Image source={require('./assets/logo2.png')} style={css.logox}></Image>
      </TouchableOpacity>

      <Text></Text>
      <Text>Atualizar Cadastro</Text>
      <View>
        <Text>Produto</Text>
        <TextInput placeholder="Produto" style={css.campo} onChangeText={(text) => setNome(text)} value={nome2}></TextInput>
        <Text>Valor</Text>
        <TextInput placeholder="0.00" style={css.campo} onChangeText={(text) => setValor(text)} value={valor2}></TextInput>
        <Text>URL Imagem</Text>
        <TextInput placeholder="URL da imagem" style={css.campo} onChangeText={(text) => setImagem(text)} value={imagem2}></TextInput>
        <Text>Quantidade</Text>
        <TextInput placeholder="" style={css.campo} onChangeText={(text) => setQuantidade(text)} value={quantidade2}></TextInput>
        <View style={css.principal}>
          <View style={css.viewnumero3}>
            <View>
              {
                imagem2 == "" ? (
                  <Image source={require('./assets/sem.png')} style={css.icone} />
                ) : (
                  <Image source={{ uri: `${imagem2}` }} style={css.icone} />
                )
              }
            </View>
          </View>
          <View style={css.viewletra2}>
            <View><Button title="Limpar" color='#154360' onPress={limpar} /></View>
            <Text></Text>
            <View><Button title="Atualizar Produto" color='#154360' onPress={cadastrar} /></View>
                      </View>

        </View>

      </View>
      <Text> </Text>
    </View>
  );
}
export default TelaEditar2;