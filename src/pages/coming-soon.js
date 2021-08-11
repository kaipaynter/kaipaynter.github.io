import React from 'react'
import Layout from '../components/layout'
//import Header from '../components/Header'
import biopicfull2021 from '../assets/images/Kai_Paynter_3D_JPEG.jpg'

class ComingSoon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  render() {
    return (
      <Layout>
        <span className="image fit">
          <img src={biopicfull2021} alt="" />
        </span>
      </Layout>
    )
  }
}

export default ComingSoon
