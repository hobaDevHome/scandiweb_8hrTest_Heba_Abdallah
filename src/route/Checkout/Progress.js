import React, { Component } from 'react'
import './Progress.css'

//SHIPPING_STEP
//BILLING_STEP
//DETAILS_STEP


class Progress extends Component {
  render() {
    
    const { checkoutStep } = this.props.p;
    
    const arr = Object.keys(this.props.map)
    
    let x = arr.indexOf(checkoutStep)
    console.log(x)


    return (
      <>
  <div className='main-pro'>
    {
      arr.map((el, index)=>{
        if(index < arr.length){
        return(
          <div className='main-pro2'>
            <div className='barsec1'>
            <span className='span1'><span class={x >=  index ? 'progress' : ''}></span></span>
            </div>
    <div className={x >=  index ? 'circ active' : 'circ'}>{index + 1}</div>
          </div>
        )

      }})
    }
    
    
  </div>
  
      </>
    )
  }
}

export default Progress;
