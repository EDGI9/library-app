const baseURL = "http://localhost:5000"
const apiPaths = {
    GET_ALL_RECORDS: baseURL + "/api/records/",
    GET_RECORD: baseURL + "/api/records/{id}",
    CREATE_RECORD: baseURL + "/api/records/",
    UPDATE_RECORD: baseURL + "/api/records/{id}",
    DELETE_RECORD: baseURL + "/api/records/{id}",
}

export default apiPaths;