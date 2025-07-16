export const nodeApis = {
    baseURL :"http://13.51.87.99:3000/api/",
    groups:{
       
        get:{
            groupBySavingsFixed:"/group/get-group-by-savings-type/fixed_gold",
            groupBySavingsSmart:"/group/get-group-by-savings-type/smart_saving",

        }


    },
    user:{
        post:{
            login:"/user/login-user"
        }
    }
}
