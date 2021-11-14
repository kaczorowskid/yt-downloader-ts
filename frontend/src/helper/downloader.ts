import FileSaver from 'file-saver';

export const downloader = (response: any, title?: string, ) => {
    const blob = new File([response.data], `${title}.mp3`, {type: `${response.data.type};charset=utf-8`});
    FileSaver.saveAs(blob)
}