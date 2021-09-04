import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'
import { FiChevronDown } from 'react-icons/fi'
import styles from './Details.module.css'

export default function Details({ paintings }){
  let { category } = useParams();
  console.log('Paintings: ' + paintings)
  return(
    <h1 style={{ margin: 'auto' }}>Hello</h1>
  )
}

Details.propTypes = {
  paintings: PropTypes.array.isRequired
}
