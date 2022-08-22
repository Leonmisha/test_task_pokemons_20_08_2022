type fn = (...args: any[]) => any

export const createAction = (
    type : string,
    payloadFn: fn = (args) => args) => {
    return (...args2: any[]) => ({
        type,
        payload: {
            ...(payloadFn(...args2))
        },
    });
}
