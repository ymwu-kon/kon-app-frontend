import http from "./http";

export const getYakuman = () => {
    return http.get("/yakuman");
};
