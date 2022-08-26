const BASE_URL = 'https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com';

export const request = async (url, option = {}) => {
  try {
    const fullUrl = `${BASE_URL}${url}`;
    const response = await fetch(fullUrl, option);
    if (response.ok) {
      const json = await response.json();
      return json
    }
    throw new Error('통신실패');
  } catch (error) {
    alert(error.message);
  }; 
};