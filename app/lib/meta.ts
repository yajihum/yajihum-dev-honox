export const favicocnUrl = '/static/favicon.ico';

export const fontUrl = 'https://images.site.yajihum.dev/sawarabi.woff2';

export const getOgImageUrl = (title: string) => {
  const url = `https://res.cloudinary.com/dpgixnkg1/image/upload/l_text:noto-snans.ttf_60_bold:${title},co_rgb:fff,w_1000,c_fit,y_-70/v1708768266/blog-ogp.png`;
  return url;
};
