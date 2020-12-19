import myaxios from '../myaxios/myaxios'

export const login = (params) => {
    return myaxios.post('admin/login', params).catch((err) => console.log(err))
}