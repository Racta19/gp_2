import React from 'react'

import { images, data } from '../../constants'
import { SubHeading, MenuItems } from '../../components'

import './Menu.css'

const Menu = () => {
  return (
    <div className='app__Menu flex__center section__padding' id='menu'>

      <div className='app__Menu-title'>
        <SubHeading title='Menu that fits you palatte' />
        <h1 className='headtext__cormorant'>Today’s Special</h1>
      </div>

      <div className='app__Menu-menu'>
        
        <div className=' app__Menu-menu_wine flex__center'>
          <p className='app__Menu-menu_heading'>Wine & Beer</p>
          <div className='app__Menu-menu_items'>
            {data.wines.map((wine,index) => (
              <MenuItems key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
            ))}
          </div>
        </div>

        <div className='app__Menu-menu_img'>
          <img src={images.menu} alt="menu" />
        </div>

        <div className=' app__Menu-menu_cocktails flex__center'>
          <p className='app__Menu-menu_heading'>Cocktails</p>
          <div className='app__Menu-menu_items'>
            {data.cocktails.map((cocktails, index) => (
              <MenuItems key={cocktails.title + index} title={cocktails.title} price={cocktails.price} tags={cocktails.tags} />
            ))}
          </div>
        </div>
      </div>
      
      <div style={{marginTop: '15px'}}>
        <button type='button' className='custom__button'>View More</button>
      </div>
    </div>
  )
}

export default Menu