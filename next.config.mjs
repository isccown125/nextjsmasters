/** @type {import('next').NextConfig} */
const nextConfig = {
     async redirects(){
         return[
             {
                 source:'/products',
                 destination:'/products/1',
                 permanent: true,
             }
         ]
     }
};

export default nextConfig;
