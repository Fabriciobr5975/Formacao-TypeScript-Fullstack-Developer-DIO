import type { Request } from "express";
import type { Params } from "express-serve-static-core";

export const makeMockRequest = ({ params, query }: { params?: Params, query?: Params }): Request => {
    const request = {
        params: params || {},
        query: query || {}
    } as Request;

    return request;
}