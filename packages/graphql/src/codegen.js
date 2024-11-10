const config = {
    schema: "./graphql/generated/schema.graphql",
    documents: "./**/*.graphql",
    generates: {
        "./generated/types.ts": {
            plugins: [
                "typescript",
                "typescript-operations",
                "typescript-react-apollo",
            ],
            config: {
                withHooks: true,
                withHOC: false,
                withComponent: false,
            },
        },
    },
};
export default config;
