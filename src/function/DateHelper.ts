import moment from "moment-timezone";

export default class DateHelper {
  static getNowDate(date: any, format: any) {
    return moment(date).tz("Asia/Phnom_Penh").format(format);
  }

  static getNowDateTime(date: any, format: any) {
    return moment(date).tz("Asia/Phnom_Penh").format(format);
  }
  static convertDateTimetoDate(date: string) {
    return moment(date).tz("Asia/Phnom_Penh").format("YYYY-MM-DD");
  }
}
