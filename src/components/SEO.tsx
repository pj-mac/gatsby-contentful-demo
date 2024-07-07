import { useLocation } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { SEOProps, SEOQueryTypes } from 'src/models/seo';

function SEO({ title = '', description = '', keywords = '', image = '' }: SEOProps) {
  const query = useStaticQuery<SEOQueryTypes>(graphql`
    {
      site {
        siteMetadata {
          title
          description
          image
          keywords
          siteUrl
        }
      }
    }
  `);

  const { siteUrl } = query.site.siteMetadata;

  const fullTitle = title ? `${title} - ${query.site.siteMetadata.title}` : query.site.siteMetadata.title;

  const seo = {
    title: fullTitle,
    description: description || query.site.siteMetadata?.description,
    keywords: keywords || query.site.siteMetadata?.keywords,
    image: image || `${siteUrl}/images/${query.site.siteMetadata?.image}`,
    siteUrl: query.site.siteMetadata.siteUrl,
    lang: 'en',
  };

  const { pathname } = useLocation();

  return (
    <>
      <html lang={seo.lang} />
      <title>{seo.title}</title>
      <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={`${seo.siteUrl}${pathname}`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={seo.image} />
      <meta name="robots" content="noindex, nofollow" />
    </>
  );
}

export default SEO;
