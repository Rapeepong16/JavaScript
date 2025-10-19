import { CookieUtil } from "./myLib/cookieUtil"
CookieUtil.set("cartId", "abc123", new Date(2025, 9, 20))
console.log(document.cookie)
console.log(CookieUtil.get("cartId"))
CookieUtil.unset("cartId")
// console.log(document.cookie)
// document.cookie = "theme=dark"
// document.cookie = `theme=light;expires=${new Date(2025, 9, 16)}`
// document.cookie = "username=umaporn;max-age=60"