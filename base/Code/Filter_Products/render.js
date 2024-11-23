// # Bắt đầu quá trình gọi API và render dữ liệu
export const render = async (apiKey) => {
  const response = await fetch(apiKey);
  const result = await response.json();
  return result;
};
