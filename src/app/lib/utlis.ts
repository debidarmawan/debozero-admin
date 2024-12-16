export function getDebozeroCoreApiURL() {
    return process.env.DEBOZERO_API_HOST ?? "http://localhost:3598";
}