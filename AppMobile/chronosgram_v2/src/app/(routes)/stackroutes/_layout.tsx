import { Stack } from 'expo-router'
import { Text } from 'react-native'

export default function Layout(){
    return (
        <Stack>
            <Stack.Screen name="../pages/login"/>
        </Stack>
    )
}