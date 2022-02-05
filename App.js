import React, {useState} from 'react';
import { Text, View, 
TouchableOpacity,
StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



/*













 */

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const[toggletab, setToggle]= useState(0)


  const tabtoogle = (index)=>{
    setToggle(index)
  }
  return (
    <View >
<View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginHorizontal:20}}>
<TouchableOpacity>
<Feather name="grid" size={24} color="black" />

</TouchableOpacity>



<TouchableOpacity>

<FontAwesome name="bookmark" size={24} color="black" />


</TouchableOpacity>



<TouchableOpacity>
<Ionicons name="person-circle-outline" size={24} color="black" />

</TouchableOpacity>


<TouchableOpacity>
<MaterialIcons name="view-carousel" size={24} color="black" />

</TouchableOpacity>


</View>




</View>
  );
}


