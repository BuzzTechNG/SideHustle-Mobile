import React from 'react'
import { View, Text } from 'react-native'
import { Card, Divider, Layout } from '@ui-kitten/components'
import { AppHeader } from '../../../components/App.Header'
import { ScrollView } from 'react-native-gesture-handler'
import { CurrentJob } from './Current.Job'
import { JobOffers } from './JobOffers'
import { JobStats } from './JobStats'
import {UserHistory} from './User.history'

export const DashboardScreen = () => {
    return (
        <>
        <AppHeader/>
        <Divider/>
        <Layout style={{flex:1, paddingHorizontal: 16, paddingVertical: 10  }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <CurrentJob/>
                <JobOffers/>
                <JobStats/>
                <UserHistory/>
            </ScrollView>
        </Layout>
        </>
    )
}
