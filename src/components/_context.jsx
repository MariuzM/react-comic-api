import React, { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

export const ApiContext = createContext(null)

export const ApiProvider = ({ children }) => {
  const [loader, setLoader] = useState({ data: '', loading: true })
  const link = `https://xkcd.com/${loader.data.num}/`
  const [tooltipOpen, setTooltipOpen] = useState(false)
  const toggle = () => setTooltipOpen(!tooltipOpen)
  const [inputState, setInputState] = useState('')

  const mainStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '2%',
    width: '100vw',
  }

  useEffect(() => {
    axios
      .get('https://xkcd.com/info.0.json')
      .then(res => {
        setLoader({ data: res.data })
      })
      .then(() => {
        setLoader(prev => ({ ...prev, loading: false }))
      })
    // setLoader(prev => ({ ...prev, loading: false }))
  }, [])

  const handleChange = e => setInputState(e.target.value)

  const handleSubmit = e => {
    setLoader(prev => ({ ...prev, loading: true }))
    const tempLink = `http://xkcd.com/${inputState}/info.0.json`
    axios.get(tempLink).then(res => setLoader({ data: res.data, loading: false }))
    e.preventDefault()
  }

  // function test() {
  //   setTimeout(function() {
  //     console.log(loader)
  //   }, 500)
  // }
  // test()

  return (
    <ApiContext.Provider
      value={{
        loader,
        mainStyle,
        link,
        tooltipOpen,
        toggle,
        handleChange,
        handleSubmit,
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
}