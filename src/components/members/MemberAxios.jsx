import api from "../../api";

// 회원 생성
export const createMember = async (member) => {
  try {
    const response = await api.post("/members", member);
    return response.data;
  } catch (error) {
    console.error("Error creating member:", error);
    throw error;
  }
};

// 회원 수정
export const updateMember = async (memberId, member) => {
  try {
    const response = await api.put(`/members/${memberId}`, member);
    return response.data;
  } catch (error) {
    console.error("Error updating member:", error);
    throw error;
  }
};
