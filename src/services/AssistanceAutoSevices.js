import http from "../http-common";

class AssistanceAutoServices {
  postInformation(data) {
    console.log(data);
    return http.post("/assistanceAuto/insertInformation", data);
  }
}
export default new AssistanceAutoServices();
