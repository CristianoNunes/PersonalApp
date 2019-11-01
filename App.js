import React, {useState} from 'react';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  background-color: #7358c1;
`;

const Header = styled.View`
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  
`;

const HeaderTitle = styled.Text`
  font-size: 40px;
  font-style: italic;
  color: #FFF;
  text-align: center;
`;

const AreaInput = styled.View`
  flex-direction: row;
  padding-top: 10px;
  justify-content: center;
  align-items: center;
`;

const TitleInput = styled.Text`
  font-size: 20px;
  color: #FFF;
  text-align: center;
  padding: 10px;
`;

const TypeInput = styled.Text`
  font-size: 15px;
  color: #FFF;
  text-align: center;
  padding: 10px;
`;

const Inputs = styled.TextInput`
  width: 50%;
  height: 40px;
  border-color: gray;
  border-width: 1px;
  border-radius: 10px;
  padding: 10px;
  background-color: white;
`;

const AreaButton = styled.View`
  padding-top: 20px;
  justify-content: center;
  align-items: center;
`;

const ButtonCalc = styled.Button`
  width: 150px;
  height: 50px;
  background-color: #0000FF;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const ResultArea = styled.View`
  padding-top: 50px;
  width: 200px;
  height: 50px;
  background-color: #FFFFFF;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export default () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  const calc = () => {
    let nAltura = parseFloat(altura);
    let nPeso = parseFloat(peso);
    let result = 0;
    
    if(nAltura && nPeso) {
      result = peso / (nAltura*nAltura);
      imc = result.toFixed(1);
      if (imc <= 18.5){
        alert('IMC: '+ imc + ' Nível: Baixo Peso');
      }  
      if (imc > 18.5 && imc <= 24.9){
        alert('IMC: '+ imc + ' Nível: Normal');
      } 
      if (imc > 24.9 && imc <= 29.9){
        alert('IMC: '+ imc + ' Nível: Sobrepeso');
      }
      if (imc > 29.9 && imc <= 34.9){
        alert('IMC: '+ imc + ' Nível: Obesidade Nível I');
      }
      if (imc > 34.9 && imc <= 39.9){
        alert('IMC: '+ imc + ' Nível: Obesidade Nível II');
      }
      if (imc > 39.9){
        alert('IMC: '+ imc + ' Nível: Obesidade Nível III');
      }
      
    } else {
      alert("Digite o valor dos campos");
    }
  }     


  return (
    <Page>
      <Header>
        <HeaderTitle>Calcular IMC</HeaderTitle>
      </Header>
      <AreaInput>
        <TitleInput> Altura </TitleInput>
        <Inputs keyboardType="numeric" value={altura} onChangeText={n1=>setAltura(n1)} />
        <TypeInput>cm</TypeInput>
      </AreaInput>
      <AreaInput>
        <TitleInput> Peso </TitleInput>
        <Inputs keyboardType="numeric" value={peso} onChangeText={n2=>setPeso(n2)} />
        <TypeInput>Kg</TypeInput>
        </AreaInput>
      <AreaButton>
        <ButtonCalc title="Calcular" onPress={calc} />
      </AreaButton>
      <ResultArea></ResultArea>
    </Page>
  );
};
