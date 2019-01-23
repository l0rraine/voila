import { getBaseUrl,getApiUrl } from "./util";

export let BASE_URL = getBaseUrl();
export let API_PATH = getApiUrl();
export let UPLOAD_URL = `${API_PATH}/upload`;