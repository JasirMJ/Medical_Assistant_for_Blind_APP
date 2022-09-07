import React from 'react'
import { View, Text, Switch } from 'react-native'
import { ThemeProvider , useTheme} from '@theme//ThemeContext';

const DarkSwitch = () => {

    const { setScheme, isDark } = useTheme();

    const toggleScheme = () => {
        isDark ? setScheme('light') : setScheme('dark');
    }

    return (
        <View>
            <Switch
                trackColor={{ false: "#767577", true: "white" }}
                thumbColor={isDark ? "#f1f1f1" : "black"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleScheme}
                value={isDark}
            />
        </View>
    )
}

export default DarkSwitch