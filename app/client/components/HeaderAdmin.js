import React, { Component } from 'react'
import { Title } from 'bloomer'
import 'bulma/css/bulma.css'

class HeaderAdmin extends Component {
  constructor () {
    super()
    this.state = {
      expanded: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState(state => ({ expanded: !this.state.expanded }))
  }

  render () {
    return (
      <div>
        {this.state.expanded ? (
          <nav className='navbar' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
              <Title isSize={3} onClick={() => window.location.href = '/admin'}>Harm Reduction Tracker</Title>
              <a role='button' className='navbar-burger burger is-active is-large' aria-label='menu is-active' aria-expanded='false' onClick={this.handleClick}>
                <span aria-hidden='true' />
                <span aria-hidden='true' />
                <span aria-hidden='true' />
              </a>
            </div>
            <div id='navbar-main' className='navbar-menu is-active'>
              <div className='navbar-start'>
                <a className='navbar-item' onClick={() => window.location.href = '/admin'}>
    Home
                </a>
              </div>
            </div>

            <div id='navbar-main' className='navbar-menu is-active'>
              <div>
                <a className='navbar-item' onClick={() => window.location.href = '/home'}>
    Naloxone Distribution                </a>
              </div>
            </div>

            <div id='navbar-main' className='navbar-menu is-active'>
              <div>
                <a className='navbar-item' onClick={() => window.location.href = '/reversals'}>
    Total Reversals                </a>
              </div>
            </div>

            <div id='navbar-main' className='navbar-menu is-active'>
              <div>
                <a className='navbar-item' onClick={() => window.location.href = '/inventories'}>
    Inventory
                </a>
              </div>
            </div>

            <div id='navbar-main' className='navbar-menu is-active'>
              <div className='navbar-end'>
                <a className='navbar-item' onClick={() => window.location.href = '/users'}>
    Volunteers
                </a>
              </div>
            </div>

            <div id='navbar-main' className='navbar-menu is-active'>
              <div className='navbar-end'>
                <a className='navbar-item' onClick={() => window.location.href = '/logout'}>
    Logout
                </a>
              </div>
            </div>
          </nav>
        )
          : (<nav className='navbar' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
              <Title isSize={3} onClick={() => window.location.href = '/admin'}>Harm Reduction Tracker</Title>
              <a role='button' className='navbar-burger burger is-large' aria-label='menu' aria-expanded='false' data-target='navbar-main' onClick={this.handleClick}>
                <span aria-hidden='true' />
                <span aria-hidden='true' />
                <span aria-hidden='true' />
              </a>
            </div>
          </nav>
          )}
      </div>
    )
  }
}

export default HeaderAdmin