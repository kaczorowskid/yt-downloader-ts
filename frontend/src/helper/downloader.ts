export const downloader = (response: any, title?: string, ) => {
    const url = window.URL.createObjectURL(new Blob([response.data], {type: response.data.type}));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute(
        "download",
        `${title}`
    );
    document.body.appendChild(link);
    link.click();
}