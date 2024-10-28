import { View, Text } from 'react-native'
import React, {createContext, useState } from 'react'
import OnClick from './screens/OnClick'

export const CounterContext = createContext()
const App = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  return (
    <CounterContext.Provider
      value={{ count, increment }}
    >
      <View>
        <Text>App</Text>
        <OnClick />
      </View>
    </CounterContext.Provider>
  )
}

export default App
