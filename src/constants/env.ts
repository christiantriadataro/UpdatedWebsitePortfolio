// homepage magic strings
import { IENV } from "../types/IEnv.ts";
import data from "../../data/data.json";

const env = import.meta.env as IENV;
export const LINKEDIN_LINK = env.VITE_LINKEDIN_LINK;
export const GITHUB_LINK = env.VITE_GITHUB_LINK;

export const HOME_INTRO = env.VITE_HOME_INTRO;
export const HOME_NAME = env.VITE_HOME_NAME;
export const HOME_COMMENT = env.VITE_HOME_COMMENT;
export const HOME_GITHUB_LINK = env.VITE_HOME_GITHUB_LINK;
export const HOME_ROLES: string[] = data["home-page"].roles;
