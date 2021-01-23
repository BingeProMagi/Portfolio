import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

const Index = ({data}) => {
    return (
        <div>
            <h1>Zup?</h1>
            <img 
                style={{ maxWidth: '100%' }}
                src={data.file.publicURL} 
                alt="pattern"
            />
            <Img 
                fluid={data.file.childImageSharp.fluid} 
                alt="pattern"
            />
            <Img 
                fluid={data.file.childImageSharp.fluidWebp} 
                alt="tjo"
            />
            <p>
                <span>Photo by 
                    <a href="https://unsplash.com/@pawel_czerwinski?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Paweł Czerwiński</a> 
                    on 
                    <a href="https://unsplash.com/t/textures-patterns?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>
                </span>
            </p>
        </div>
    )
} 

export const HomepageQuery = graphql`
    query homepagequery {
        file(relativePath: {eq: "pattern.jpg"}) {
            publicURL
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                }
                fluidWebp: fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`
  
export default Index