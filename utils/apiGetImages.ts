/**
 * API（获取检索条件符合的数据）
 */

export const apiGetImages = async (url: string, keys: any) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(keys),
    });
    const data = await response.json();
    return data;
};