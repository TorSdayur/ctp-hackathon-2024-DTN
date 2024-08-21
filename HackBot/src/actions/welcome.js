import React from 'react'
import { Text, Reply } from '@botonic/react'

export default class extends React.Component {
  render() {
    return (
      <>
        <Text>Welcome to the NY Resource Locater service!</Text>
        <Text>
          What do you need help with today?
          <Reply payload='food-resources'>I need food resources</Reply>
          <Reply payload='health-resources'>I need health resources</Reply>
          <Reply payload='housing-resources'>I need housing resources</Reply>
        </Text>
      </>
    )
  }
}
