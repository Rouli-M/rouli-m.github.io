export default class ProjectData {
    id: string;
    name: string;
    htmlLinks: string;
    htmlShortDescription: string;
    htmlFullDescription: string;
    iconUrl: string; // used as thumnail
    gifUrl: string; // used as preview on hover
    isWide: boolean; // thumbnail will take 2 cols in the grid view
    isHigh: boolean; // thumbnail will take 2 rows in the grid view
    hasDetails: boolean;
    pictures: string[];

    constructor(id: string, name: string, iconUrl: string, gifUrl: string, htmlLinks: string, htmlShort: string, htmlFull: string, isHigh = false, isWide = false, hasDetails=false, pictures: string[] = []){
        this.id = id;
        this.name = name;
        this.htmlLinks = htmlLinks;
        this.htmlShortDescription = htmlShort;
        this.htmlFullDescription = htmlFull;
        this.iconUrl = iconUrl;
        this.gifUrl=gifUrl;
        this.isHigh = isHigh;
        this.isWide = isWide;
        this.hasDetails = hasDetails;
        this.pictures=pictures;
    }
}
