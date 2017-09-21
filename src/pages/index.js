import React from 'react'

class IndexPage extends React.Component {

    render() {
        console.log(this.props.data.site.siteMetadata.title)
        return (
            <div>
                <p>{this.props.data.site.siteMetadata.title}</p>
            </div>
        )
    }
}

export default IndexPage

export const query = graphql`
query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`