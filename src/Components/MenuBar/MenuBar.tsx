import './MenuBar.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { MenuBarData } from './MenuBarData'
import * as FaIcons from 'react-icons/fa'

interface MenuBarProps {}

interface MenuBarState {
  isOpen: boolean
}

/**
 * MenuBar component
 */
export default class MenuBar extends React.Component<
  MenuBarProps,
  MenuBarState
> {
  constructor(props: MenuBarProps) {
    super(props)
    this.state = {
      isOpen: false,
    }
    this.showMenuBar = this.showMenuBar.bind(this)
  }

  showMenuBar(isOpen: boolean) {
    if (isOpen === false) {
      this.setState({ isOpen: true })
    } else {
      this.setState({ isOpen: false })
    }
  }

  render() {
    return (
      <nav className={this.state.isOpen ? 'nav-menu active' : 'nav-menu'}>
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={() => this.showMenuBar(this.state.isOpen)} />
        </Link>
        <ul
          className={
            this.state.isOpen ? 'nav-menu-items active' : 'nav-menu-items'
          }
        >
          {MenuBarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}