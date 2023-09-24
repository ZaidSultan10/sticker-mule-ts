import React from 'react'
import { MenuProps, MegaMenuProps } from './headerInterface'
import './_headerSubMenu.scss'

const HeaderSubMenu : React.FC<MenuProps> = ({subMenuProps}) => {
  return (
    <div className='headerSubMenu'>
      {
        subMenuProps && subMenuProps.length > 0 && subMenuProps.map((item: MegaMenuProps) => (
          <div className='headerSubMenu__item'>
            <img src={item.image} />
            <p>{item.item}</p>  
          </div>
        ))
      }
    </div>
  )
}

export default HeaderSubMenu