import React from 'react'
import {data} from '../restApi.json'

const Menu = () => {
    return (
        <section className='menu' id='menu'>
            <div className='container'>
                <div className='heading_section'>

                    <h1 className='headng'>Popular Dishes</h1>
                    <p className='sub_heading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at est id enim</p>
                </div>
                <div className='dishes_container'>
                    {
                        data[0].dishes.map((element) => {
                            return (
                                <div className='card' key={element.id}>
                                    <img src={element.image} alt={element.title} />
                                    <h3>{element.title}</h3>
                                    <button>{element.category}</button> 
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Menu