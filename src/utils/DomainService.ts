export function GetRootURL() {
    if (process.env.NODE_ENV === 'production') {
        return "";
    }
    return "https://jagra.azurewebsites.net/";
}