import React, { Component, Fragment } from "react"
import { Link, graphql } from "gatsby"
import Context from "../utils/context"
import SEO from "../components/seo"

class Blog extends Component {
  static contextType = Context

  componentDidMount() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    this.context.set({ title: siteTitle, category: "all" })
  }

  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <Fragment>
        <SEO
          title="All Posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt
                }}
              />
            </div>
          )
        })}
      </Fragment>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
