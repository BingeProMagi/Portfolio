import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const Markdown = ({ data }) => {
    const { markdownRemark } = data
    const { featuredImage } = markdownRemark.frontmatter


    return (
        <div>
            <h1>{ markdownRemark.frontmatter.title }</h1>
            {featuredImage && (

                <Img 
                fluid={ markdownRemark.frontmatter.featuredImage.childImageSharp.fluid } 
                alt=""
                loading="eager"
                fadeIn={false}
                />
            )}
            
            <p>{ markdownRemark.frontmatter.description }</p>

            <div dangerouslySetInnerHTML= {{ __html:  markdownRemark.html }} />
        </div>
    )
} 

export const pageQuery = graphql`
    query($slug: String!)  {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                description
                slug
                title
                featuredImage {
                    childImageSharp {
                        fluid(maxWidth: 800) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`
export default Markdown