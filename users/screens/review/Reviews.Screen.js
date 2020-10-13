import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Input, Layout,  Text, List, Divider} from '@ui-kitten/components'
import { ScrollHeader } from '../../../components/App.Header'
import { ReviewItem } from './Review.Item'
import { AlertIcon, FilterIcon, SearchIcon } from '../../../assets/Icons'

const data = new Array(8).fill({
    title: "Item",
  });  

export const ReviewList =()=>(
    <List style={styles.containerList} data={data} renderItem={ReviewItem} keyExtractor={(item ,i)=> i} />
)
export const ReviewsScreen = () => {
    return (
       <Layout style={{flex:1, paddingHorizontal:16, paddingVertical:10}}>
         <>
           <ScrollHeader MainContent={ReviewList}>
           <View style={styles.container}>
            <View style={styles.pageHeader}>
              <Text category="h2" style={styles.pageTitle}>
                Reviews
              </Text>

              <View style={styles.pageBtn}>
                <Button
                  size="small"
                  appearance="ghost"
                  status="ghost"
                  accessoryLeft={AlertIcon}
                />
                <Button size="small" accessoryLeft={FilterIcon} />
              </View>
            </View>

            <Input placeholder="Search" accessoryRight={SearchIcon} />
            <Divider />
          </View>
           </ScrollHeader>
           </>
       </Layout>

    )
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      width: "100%",
      flex: 1,
    },
    pageTitle: {
      position: "absolute",
      justifyContent: "center",
      alignSelf: "center",
    },
    pageHeader: {
      flexDirection: "row",
      marginBottom: 5,
      justifyContent: "center",
      backgroundColor: "white",
    },
    pageBtn: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-end",
    },
    containerList: {
      // flex: 10,
      // maxHeight: 300,
      // height: 200,
    },
  });
  

