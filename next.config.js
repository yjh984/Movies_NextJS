const API_KEY = process.env.API_KEY;
const debug = process.env.NODE_ENV !== 'production';
const name = 'Movies_NextJS';


module.exports = {
  assetPrefix: !debug ? `/${name}/` : '',
  reactStrictMode: true,
  async redirects(){
    return[{
      source:'/old-blog/:path*',
      destination: '/new-blog/:path*',
      permanent:false,
    },{
      source: '/old-name/:path*',
      destination: '/new-name/:path*',
      permanent:false,
    }
  ];
  },
  async rewrites(){
    return[{
      source: '/api/movies',
      destination:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    },
    {
      source: '/api/movies/:id',
      destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
    },
    {
      source: '/api/spider',
      destination: `https://api.themoviedb.org/3/movie/634649?api_key=${API_KEY}`,
    }];
  },
};
