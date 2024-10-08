// interface response<D> {
//     errorCode: string
//     errorMessage: string
//     data: D
// }

export type Lists = {
    name: string,
    data: {
        user: string,
        userIcon: string,
        state: boolean,
        size: string,
        messagesNumber: string,
        url: string,
        colors: string[],
        tags: string[],
    },
};

