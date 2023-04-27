import React from 'react'

const Loading = () => {
  return (
    <div id="loadingPage" v-show="show" transition="fade">
      <div id="container">
        <div className="a1">
          <div className="mo-boy" />
          <div className="mo-girl" />
          <div className="mo-mo" />
          <div className="mo-wheel2" />
          <div className="mo-wheel1" />
        </div>
        <div className="motor_shadow" />
        <i className="smoke smoke_1" />
        <i className="smoke smoke_2" />
        <div className="percentage">
          loading&nbsp;&nbsp;<span>0%</span>
        </div>
      </div>
    </div>
  )
}

export default Loading
