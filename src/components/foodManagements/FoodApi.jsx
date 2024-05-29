import axios from "axios";

const FoodApi = async (searchValue) => {
  const apiKey =
    "H7IsQE5s8lEb+aRi9v+ILYXW5YmFWoPf0bz+KqT0PggI4fRGE9L4s8NFTK0zlfY41L0BRvElXajwti3CtHgfbg==";
  try {
    const response = await axios.get(
      "http://apis.data.go.kr/1471000/FoodNtrCpntDbInfo/getFoodNtrCpntDbInq",
      {
        params: {
          serviceKey: apiKey,
          type: "json",
          FOOD_NM_KR: searchValue,
          numOfRows: 100, // 한 번에 가져올 결과 개수
        },
      }
    );
       // 공공데이터포탈 https://www.data.go.kr/ --> 식품의약품안전처
       //FOOD_NM_KR
        // End Point http://apis.data.go.kr/1471000/FoodNtrCpntDbInfo
        // 일반 인증키(Encoding)
        // H7IsQE5s8lEb%2BaRi9v%2BILYXW5YmFWoPf0bz%2BKqT0PggI4fRGE9L4s8NFTK0zlfY41L0BRvElXajwti3CtHgfbg%3D%3D
        // 일반 인증키(Decoding)
        // H7IsQE5s8lEb+aRi9v+ILYXW5YmFWoPf0bz+KqT0PggI4fRGE9L4s8NFTK0zlfY41L0BRvElXajwti3CtHgfbg==


    return response.data.body.items || [];
  } catch (error) {
    console.error("Error fetching food data:", error);
    return [];
  }
};

export default FoodApi;
