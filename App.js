import React, { useState, Component } from "react";
import {View,Text,Button} from 'react-native';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';


const app=()=>{
   
    const [lat,setLat] = useState(14.683118);
    const [lon,setLon] = useState(77.592117);
    
       
        return(
        <View style={{flex:1}}>
        
              <View style={{flex:1}}>
                     <MapView style={{flex:1}}
                        provider={PROVIDER_GOOGLE}
                        showsUserLocation initialRegion={{
                        latitude:lat,
                        longitude:lon,
                        latitudeDelta: 0.0019,
                        longitudeDelta:0.0012
                         }}
               />
                 
                   
                </View>
                
         </View>
        );
       
  
}

export default app;