const fetch = require("node-fetch") //chichqoq node da fetch native emas ekan
const FormData = require("form-data"); //chichqoq node da fromdata native emas ekan
const { EMAIL, PASSWORD, SMS_TOKEN_URL, SMS_SEND_URL } = require("../../config");

async function login() {
    try {
        let formdata = new FormData()
        formdata.append("email", EMAIL)
        formdata.append("password", PASSWORD) //shunday qilib ma'lumot qo'shilarkan

        let response = await fetch(SMS_TOKEN_URL, {
            method: "POST",
            body: formdata
        })
        if(response.status<300){
            let opened = await response.json()
            return opened.data.token
        }else{
            throw new Error("sms serverda token berishda xatolik bo'ldi")
        }

    } catch (e) {
        console.log(e);
        return false
    }
}
module.exports = async function sms(num, message) {
    try {
        let token = await login()
        let sms_formdata = new FormData()
        sms_formdata.append("mobile_phone", num)
        sms_formdata.append("message", message)
        sms_formdata.append("from", 4546)

        let response = await fetch(SMS_SEND_URL, {
            method: "POST",
            headers: {
                "Authorization": "Bearer "+token
            },
            body: sms_formdata
        })
        if(response.status<300){
            let shit = await response.json()
            console.log(shit);
            return true
        }else{
            throw new Error("sms jo'nata omay o'tiribman :)")
        }
    } catch (error) {
        console.log(error);
        return false
    }
}