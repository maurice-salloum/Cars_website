/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.imagin.studio"],
        // remotePatterns : [
        //     {
        //         protocol : "https",
        //         hostname : "cdn.imagin.studio",
        //         port : "",
        //         pathname : "/getimage",
        //     },
        // ],
        typescript : {
            ignoreBuildErrors : true
        },
    },

}

export default nextConfig;
