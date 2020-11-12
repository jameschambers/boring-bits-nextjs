import Router from 'next/router';

export const redirect = (url, ctx) => {
  if (typeof ctx === 'undefined') {
    Router.push(url);
  } else {
    const res = ctx.res;
    if (res) {
      res.writeHead(302, { Location: url });
      res.end();
    } else {
      Router.push(url);
    }
  }
}
