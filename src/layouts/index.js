import React from "react"
import Context, { ContextProvider } from "../utils/context"
import Signature from "../../content/assets/signature.svg"

export default ({ children }) => (
  <ContextProvider>
    <Context.Consumer>
      {({ data }) => <header>{data.title}</header>}
    </Context.Consumer>
    <main>{children}</main>
    <footer>
      <Signature />
    </footer>
  </ContextProvider>
)
