import React from 'react'
import { View} from 'react-native'
import { Card, Divider, Text } from "@ui-kitten/components";

export const ReviewItem=(props)=> {
    return (
        <Card style={{ marginBottom: 10 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text category="h5">Deposit</Text>
          <Text category="h5"> $2000 </Text>
        </View>
        <Divider />
        <View style={{ flex: 1, flexDirection: "row", justifyContent:"space-between" }}>
          <View style={{ flex: 5 }}>
            <Text>
              description here it is talks a lot hjk jsdsb sjdjbdsjbsd dsjhsjhjs
              hsdbbbuibiuds udsbsdbosid dsubdsub sdobdb check it okay oh
              painedherev alright
            </Text>
          </View>
          
          <View style={{ flex: 1, justifyContent:"center", alignItems:"center", }}>
           
              <View
                style={{
                  padding: 10,
                  backgroundColor: "green",
                  borderRadius: 20,
                  borderWidth: 1,
                }}
              />
              <Text>Status</Text>
            </View>
          
        </View>
      </Card>
    )
}
