import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'

export const SearchScreen = () => {
    
    const [term, setTerm] = useState('')
    
    return (
        <View style={styles.background}>
            <SearchBar 
                term={term} 
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => {}}
            />
            <Text>{term}</Text>
        </View>
    )
}

let styles = StyleSheet.create({
    background: {
        backgroundColor: '#fff',
        flex: 1
    }
})

export default SearchScreen