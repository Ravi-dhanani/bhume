"use client";
import HttpService from "./HttpService";
import { UIStore } from "./pullstate/store";
const URL = process.env.BASE_URL;
class ApiServices {
  static async getLstLanguage() {
    let res = await HttpService.get(
      `${URL}/api/get_language`,
      localStorage.token,
    );

    return res.data;
  }

  static async getLstServices() {
    let res = await HttpService.get(
      `${URL}/api/get_services`,
      localStorage.token,
    );

    return res.data;
  }

  static async getLstHero() {
    let res = await HttpService.get(`${URL}/api/get_title`, localStorage.token);
    return res.data;
  }
  static async add_Enquiry(data?: {
    name: string;
    companyName: string;
    email: string;
    mobileNo: number;
    message: string;
  }) {
    let res = await HttpService.post(
      `${URL}/api/add_enquiry`,
      data,
      localStorage.token,
    );
    return res;
  }

  static async getLstCareer() {
    let res = await HttpService.get(
      `${URL}/api/get_career`,
      localStorage.token,
    );
    return res.data;
  }

  static async getLanguage(_id: string) {
    let res = await HttpService.get(
      `${URL}/api/get_title/${_id}`,
      localStorage.token,
    );
    return res.data;
  }

  static async get_about_data() {
    let res = await HttpService.get(`${URL}/api/get_about`, localStorage.token);
    return res.data;
  }

  static async getSingleCareer(_id: string) {
    let res = await HttpService.get(
      `${URL}/api/get_single_career/${_id}`,
      localStorage.token,
    );
    return res.data;
  }

  static async getTermsCondition(_id: string) {
    let res = await HttpService.get(
      `${process.env.API_URL}/api/get_termsCondition/${_id}`,
      localStorage.token,
    );
    return res.data;
  }

  static async getPrivacyPolicy(_id: string) {
    let res = await HttpService.get(
      `${process.env.API_URL}/api/get_privacyPolicy/${_id}`,
      localStorage.token,
    );
    return res.data;
  }
}

export default ApiServices;
