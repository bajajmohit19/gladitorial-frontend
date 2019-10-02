import React from 'react';
import BasicLayout from './layout/BasicLatout'
import { Route } from 'react-router-dom';
import menuData from './routes'

export default class App extends React.Component {

  render() {


    return (
      <div>

        {menuData.map((item, key) => {
          if (!item.children) {
            return (<Route exact path={item.path}
              key={item.path}
              render={(route) => {
                return <BasicLayout component={item.component} path={item.path} title= {item.name}
                  menuData={menuData} />
              }} />)
          }
          else {
            return null
          }
        })}


        {menuData.map((item, key) => {
          if (item.children) {
            return item.children.map((child, k) => {
              return (<Route exact path={child.path} key={child.path} render={(route) => {
                return <BasicLayout component={child.component} path={child.path}
                  menuData={menuData} />
              }} />)
            })
          } else {
            return null
          }
        })}

      </div>)
  }
}