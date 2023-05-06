import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const image = (require('./assets/dfg.png'))

export default function App() {
  return (

    <ImageBackground
      source={require('./assets/dfg.png')}
      resizeMode='cover'
      style={{ width: '100%', height: '110%', position: 'relative' }}>

      <View>
        <Image source={require('./assets/asdd.png')} style={{ height: 100, width: 100, marginTop: 140, alignSelf: 'center' }} />
        <Text style={{ marginTop: 10, alignSelf: 'center', color: 'white', fontWeight: 'bold', fontSize: 30, }}> VISION GO </Text>
      </View>

      <SafeAreaView style={{ padding: 30, backgroundColor: 'white', height: 471, marginTop: 40, borderTopLeftRadius: 40, borderTopRightRadius: 40,}}>

        <View>
          <Text style={{ color: '#5B2C6F', fontSize: 20, marginTop: 10 }}>Hosgeldiniz</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: 'black' }}>Hesabiniz yak mu?</Text>
          <Text style={{ left: 3, fontStyle: 'italic', color: '#C0392B' }}>Hemen kaydol</Text>
        </View>

        <Text style={{ marginTop: 20 }}> E-posta Adresiniz</Text>
        <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#5B2C6F', paddingVertical: 5, alignItems: 'center'}}>
          <TextInput placeholder='Email' style={{ flex: 1, paddingLeft: 10, color: 'black'}} />
          <AntDesign name="check" size={19} color="black" />
        </View>

        <Text style={{ marginTop: 20 }}> Parola </Text>
        <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#5B2C6F', paddingVertical: 5, alignItems: 'center'}}>
          <TextInput placeholder='Password' style={{ flex: 1, marginTop: 6, paddingLeft: 10 }} />
          <AntDesign name="eye" size={19} color="black" />
        </View>

        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Text style={{ left: 4, color: 'black' }}><AntDesign name="checkcircleo" size={18} color="black" />  Beni Hatirla</Text>
          <Text style={{ left: 130 }}>Sifremi Unuttum</Text>
        </View>

        <View>
          <TouchableOpacity style={{ marginTop: 30, alignSelf: 'center', backgroundColor: '#5B2C6F', height: 40, width: 250, borderRadius: 50, justifyContent: 'center' }}>
            <Text style={{ color: 'white', alignSelf: 'center', fontSize: 18, fontWeight: 'bold' }}> GIRIS YAP</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignSelf: 'center' }}>
          <Text style={{ marginTop: 20, color: 'black' }}> or Login with</Text>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 10, alignSelf: 'center' }}>
          <TouchableOpacity style={{ right: 20, marginTop: 20, alignSelf: 'center', backgroundColor: '#032FAC', height: 30, width: 50, borderRadius: 50, justifyContent: 'center' }}>
            <Feather name="facebook" size={24} color="white" alignSelf='center' />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 20, alignSelf: 'center', backgroundColor: '#2471A3', height: 30, width: 50, borderRadius: 50, justifyContent: 'center' }}>
            <Feather name="twitter" size={24} color="white" alignSelf='center' />
          </TouchableOpacity>
          <TouchableOpacity style={{ left: 20, marginTop: 20, alignSelf: 'center', backgroundColor: '#C0392B', height: 30, width: 50, borderRadius: 50, justifyContent: 'center' }}>
            <FontAwesome5 name="google" size={20} color="white" alignSelf='center' />
          </TouchableOpacity>
        </View>


      </SafeAreaView>


    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
