import truncate from "lodash/truncate";

export function excerpt(string) {
  // const truncate = truncate;
  return truncate(string, {
    length: 400, // maximum 400 characters
    separator: /,?\.* +/, // separate by spaces, including preceding commas and periods
  });
}