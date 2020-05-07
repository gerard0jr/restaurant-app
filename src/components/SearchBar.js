import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { Feather }  from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.background}>
            <Feather style={styles.iconStyle} name='search'/>
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputStyle} 
                placeholder='Search'
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}
 
export default SearchBar

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        margin: 15,
        flexDirection:'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }
})
