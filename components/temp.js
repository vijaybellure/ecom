export default function Temp(data, email) {
  return data.find((item) => {
    item.email = email;
  });
}
export const L = [];
