import dayjs from "dayjs";




export function ConvertEpochToDateTime(EpochTime:EpochTimeStamp){

    const date_converted = new Date(EpochTime * 1000);

    return dayjs(date_converted)

}