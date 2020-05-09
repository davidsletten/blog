import React, { Component, Fragment } from "react"
import { Link, graphql } from "gatsby"
import Context from "../utils/context"
import SEO from "../components/seo"

class PostTemplate extends Component {
  static contextType = Context

  componentDidMount() {
    const { data } = this.props
    const postTitle = data.markdownRemark.frontmatter.title
    this.context.set({
      title: postTitle,
      page: data.markdownRemark.fields.slug.split("/")[1]
    })
  }

  render() {
    const { data } = this.props
    const post = data.markdownRemark
    const { previous, next } = this.props.pageContext

    return (
      <Fragment>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            display: `block`
          }}
        >
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Fragment>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      fields {
        slug
      }
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
