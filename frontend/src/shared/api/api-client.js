// 백엔드 API가 준비되면 이 파일의 함수 내부에서 fetch를 호출합니다.
const API_BASE_URL = "http://localhost:8080/api";

// 1단계에서는 실제 API를 호출하지 않고, 연결 지점만 미리 만들어둡니다.
export async function getCampaigns() {
  return Promise.resolve([]);
}

export { API_BASE_URL };
