
export const createAction = (type: string, payloadFn: (...args: any[]) => object) => {
    return (...args2: any[]) => ({
        type,
        payload: {
            ...(payloadFn(...args2))
        },
    });
}
