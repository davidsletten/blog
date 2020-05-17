import React, { Component } from "react"

const defaultContextValue = {
  data: {
    title: "",
    page: "",
    previous: undefined,
    next: undefined,
    about: false
  },
  set: () => {}
}

const Context = React.createContext(defaultContextValue)

class ContextProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ...defaultContextValue,
      set: this.setData
    }
  }

  setData = newData => {
    this.setState(state => ({
      data: {
        ...state.data,
        ...newData
      }
    }))
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export { Context as default, ContextProvider }
