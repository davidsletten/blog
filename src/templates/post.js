import React, { Component, Fragment } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Context from "../utils/context"
import SEO from "../components/seo"

const DateStamp = styled.h6`
  margin: 0 0 20px;
`

export default class PostTemplate extends Component {
  static contextType = Context

  componentDidMount() {
    const { data } = this.props
    const { previous, next } = this.props.pageContext
    const postTitle = data.markdownRemark.frontmatter.title
    this.context.set({
      title: postTitle,
      page: data.markdownRemark.fields.slug.split("/")[1],
      previous,
      next
    })
  }

  render() {
    const { data } = this.props
    const post = data.markdownRemark

    return (
      <Fragment>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <DateStamp>{post.frontmatter.date}</DateStamp>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Fragment>
    )
  }
}

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
        date(formatString: "MM.DD.YY")
        description
      }
    }
  }
`
