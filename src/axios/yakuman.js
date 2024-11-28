import http from "./http";

export const getYakuman = async () => {
    const data = await http.get("/yakuman");
    return data;
};
