import http from "../http-common";

class AssistanceAutoServices {
  postInformation(data) {
    return http.post("/assistanceAuto/insertInformation", data);
  }
}
export default new AssistanceAutoServices();
