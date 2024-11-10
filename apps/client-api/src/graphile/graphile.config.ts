import "postgraphile";
import { PostGraphileAmberPreset } from "postgraphile/presets/amber";
import { makePgService } from "postgraphile/adaptors/pg";

const preset: GraphileConfig.Preset = {
  extends: [PostGraphileAmberPreset],
  pgServices: [makePgService({ connectionString: process.env.DATABASE_URL })],
  grafserv: {
    graphqlPath: "/graphql",
  },
  disablePlugins: ["NodePlugin"],
};

export default preset;
