const API_BASE_URL = "http://localhost:8080/api";

export async function getCampaigns() {
  const response = await fetch(`${API_BASE_URL}/campaigns`);

  if (!response.ok) {
    throw new Error("체험단 목록을 불러오지 못했습니다.");
  }

  return response.json();
}

export { API_BASE_URL };
