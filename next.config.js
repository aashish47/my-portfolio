/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(graphql|gql)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "graphql-tag/loader",
                },
            ],
        });

        return config;
    },
};

module.exports = withContentlayer(nextConfig);
