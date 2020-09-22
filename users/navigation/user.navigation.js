import React from 'react'
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import {JobsScreen} from '../screens/job/Jobs.Screen'
import {CreateJobScreen} from '../screens/job/CreateJob.Screen'
import {DashboardScreen} from '../screens/dashboard/Dashboard.Screen'
import {ReviewsScreen} from '../screens/review/Reviews.Screen'
import {UserProfileScreen} from '../screens/UserProfile.Screen'
import { GridIcon, BriefCaseIcon, PlusCircleIcon, MessageSquareIcon, CreditCardIcon } from '../../assets/Icons';
import { TransactionScreen } from '../screens/transaction/Transaction.Screen';

const {Navigator, Screen} = createBottomTabNavigator()
 
//bottom render
const BottomNavUI = ({navigation , state}) => (
    <BottomNavigation selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])} >
        <BottomNavigationTab icon={GridIcon} title="DashBoard" />
        <BottomNavigationTab icon={BriefCaseIcon} title="Jobs" />
        <BottomNavigationTab icon={PlusCircleIcon} title="CreateJob" />
        <BottomNavigationTab icon={MessageSquareIcon} title="Reviews" />
        <BottomNavigationTab icon={CreditCardIcon} title="Transactions" />
        {/* <BottomNavigationTab title="" /> */}
    </BottomNavigation>
)
export const UserNavigation = () => {
    return (
    <Navigator tabBar={props => <BottomNavUI {...props} />}>
            <Screen name="DashboardScreen" component={DashboardScreen}/>
            <Screen name="JobsScreen" component={JobsScreen}/>
            <Screen name="CreateJobScreen" component={CreateJobScreen}/>
            <Screen name="ReviewsScreen" component={ReviewsScreen}/>
            <Screen name="TransactionScreen" component={TransactionScreen}/>
            {/* <Screen name="UserProfileScreen" component={UserProfileScreen}/> */}
        </Navigator>
    )
}




