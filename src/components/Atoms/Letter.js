import React from 'react'
import { Text } from 'react-native'

/**
 * Letter component
 */
export const Letter = (props) => {
  const { children, spacing, textStyle } = props

  const letterStyles = [
    textStyle,
    { paddingRight: spacing }
  ]

  /**
   * Render Letter
   * @return {jsxresult} result in jsx format
   */
   
  return <Text style={letterStyles}>{children}</Text>
}
