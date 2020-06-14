import React from 'react'

import DefaultLayout from '../components/layout'
import SEO from '../components/seo'

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props

    return (
      <DefaultLayout>
        <SEO title="404: Not Found" />
        <h1>Desculpe. Página não encontrada</h1>
        <br />
      </DefaultLayout>
    )
  }
}

export default NotFoundPage
