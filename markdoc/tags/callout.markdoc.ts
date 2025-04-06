import { Callout } from "../../components";

export const callout = {
  render: Callout,
  children: ["paragraph", "tag", "list"],
  attributes: {
    title: {
      type: String,
    },
    type: {
      type: String,
      matches: ["success", "error", "warning", "info"],
      default: "info",
    },
  },
};
