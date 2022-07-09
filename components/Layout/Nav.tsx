import React from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
export const YourApp = () => {
  return <ConnectButton />
}

type Props = {}

const Nav = (props: Props) => {
  return (
    <div className="flex justify-end items-center w-full p-4">
      <ConnectButton />
    </div>
  )
}

export default Nav
