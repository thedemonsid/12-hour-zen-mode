/**
 * An Array of all the public routes that are not protected by the auth middleware
 * @type {string[]} An array of strings
 * @example ["/landing", "/about","/"]
 */
export const publicRoutes = ["/"];

/**
 * An Array of all routes that are necessary for the authentication process
 * @type {string[]} An array of strings
 * @example ["/auth/login", "/auth/register"]
 */
export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * The prefix for all API routes that are necessary for the authentication process
 * @type {string} A string
 * @example "/api/auth/"
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect route after a successful login
 * @type {string} A string
 * @example "/settings"
 */
export const defaultLoginRedirect = "/settings";
