export default interface SEOQueryType {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      keywords: string;
      image: string;
      siteUrl: string;
    };
  };
}
