import React, { Component, Fragment } from "react"
import { graphql, navigate } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import Context from "../utils/context"
import SEO from "../components/seo"

const StyledButton = styled.button`
  cursor: pointer;
  outline: none;
  margin-bottom: 20px;
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(to right, cyan, magenta, yellow) 1;
  padding: 0;
  background: transparent;
`

const Post = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-position: top center;
  background-size: cover;
  width: 100%;
  h2 {
    margin: 0;
    color: white;
    text-align: left;
    text-shadow: 2px 2px 2px #000000;
  }
  em {
    display: inline-block;
    text-align: left;
    margin-bottom: 40px;
    text-shadow: 2px 2px 2px #000000;
  }
  p {
    margin-bottom: 0;
    color: white;
    text-align: right;
    text-shadow: 2px 2px 2px #000000;
  }
`

export default class Blog extends Component {
  static contextType = Context

  componentDidMount() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    this.context.set({
      title: siteTitle,
      page: "home",
      previous: undefined,
      next: undefined
    })
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
            <StyledButton
              key={node.fields.slug}
              onClick={() => navigate(node.fields.slug)}
            >
              <Post
                Tag="div"
                fluid={
                  data.allImageSharp.edges.find(
                    image =>
                      image.node.fluid.src
                        .split("/")
                        .pop()
                        .split(".")[0] === node.fields.slug.split("/")[1]
                  ).node.fluid
                }
              >
                <h2>{title}</h2>
                <em>{node.frontmatter.date}</em>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.excerpt
                  }}
                />
              </Post>
            </StyledButton>
          )
        })}
      </Fragment>
    )
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allImageSharp {
      edges {
        node {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
